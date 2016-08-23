require 'colorize'

module ESLintRails
  class Runner
    include ActionView::Helpers::JavaScriptHelper

    def initialize(filename)
      @filename = filename || 'all'
    end

    def run
      all_assets = Rails.application.assets

      assets = case @filename
               when 'all'
                 all_assets.each_file.to_a.select { |pn| pn.extname == '.js' }
               else
                 [all_assets[@filename]]
               end

      assets.reject!{|a| a.to_s =~ /eslint.js|vendor|gems|min.js|editorial/ }

      eslint_js = Rails.application.assets['eslint'].to_s

      assets.map do |asset|
        relative_path = asset.relative_path_from(Pathname.new(Dir.pwd))
        file_content = asset.read

        warning_hashes = ExecJS.eval <<-JS
          function () {
            window = this;
            #{eslint_js};
            return eslint.verify('#{escape_javascript file_content}', #{Config.read});
          }()
        JS
        warnings = warning_hashes.map{|hash| ESLintRails::Warning.new(relative_path, hash)}

        file_severity = warnings.map(&:severity).uniq.sort.first

        print case file_severity
              when :high
                'H'.red
              when :low
                'L'.yellow
              else
                '.'.green
              end

        warnings
      end.flatten
    end
  end
end
