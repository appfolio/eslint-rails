require 'colorize'

module ESLintRails
  class Runner
    include ActionView::Helpers::JavaScriptHelper

    def initialize(filename)
      @filename = filename || 'all'
    end

    def run
      warnings = assets.map do |asset|
        generate_warnings(asset).tap { |warnings| output_progress(warnings) }
      end
      
      puts
      
      warnings.flatten
    end
    
    private
    
    def assets
      all_assets = Rails.application.assets

      assets = case @filename
               when 'all'
                 all_assets.each_file.to_a.select { |pn| pn.extname == '.js' }
               else
                 [all_assets[@filename]]
               end
      assets.reject!{|a| a.to_s =~ /eslint.js|vendor|gems|min.js|editorial/ }
    end
    
    def eslint_js
      @eslint_js ||= Rails.application.assets['eslint'].to_s
    end
    
    def warning_hashes(file_content)
      ExecJS.eval <<-JS
        function () {
          window = this;
          #{eslint_js};
          return eslint.verify('#{escape_javascript(file_content)}', #{Config.read});
        }()
      JS
    end
    
    def generate_warnings(asset)
      relative_path = asset.relative_path_from(Pathname.new(Dir.pwd))
      file_content = asset.read
      
      warning_hashes(file_content).map do |hash|
        ESLintRails::Warning.new(relative_path, hash)
      end
    end
    
    def output_progress(warnings)
      print case file_severity(warnings)
            when :high
              'H'.red
            when :low
              'L'.yellow
            else
              '.'.green
            end
    end
    
    def file_severity(warnings)
      warnings.map(&:severity).uniq.sort.first
    end
  end
end
