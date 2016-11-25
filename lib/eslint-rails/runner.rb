require 'colorize'

module ESLintRails
  class Runner
    include ActionView::Helpers::JavaScriptHelper

    JAVASCRIPT_EXTENSIONS = %w(.js .jsx)
    SUMMARY_FILTERS = %w(filename warning)

    def initialize(file)
      @file = normalize_infile(file)
    end

    def run
      warnings = assets.map do |asset|
        generate_warnings(asset).tap { |warnings| output_progress(warnings) }
      end

      puts

      warnings.flatten
    end

    def summary(group_by: 'filename')
      raise "Unknown filter. Accepted values: #{SUMMARY_FILTERS.join(', ')}" unless SUMMARY_FILTERS.include?(group_by)
      results = []
      assets.map do |asset|
        file_content = asset.read
        if group_by == 'filename'
          results << { item: asset.relative_path_from(Pathname.new(Dir.pwd)), count: warning_hashes(file_content).count }
        else
          file_warnings_by_rule = warning_hashes(file_content).group_by { |w| w['ruleId'] }.values
          file_warnings_by_rule.map do |a|
            # When rule ID is nil set type to +UnknownError+
            warning_type = a.first['ruleId'] ? "#{a.first['nodeType']}/#{a.first['ruleId']}" : 'UnexpectedError'
            warning = results.find { |r| r[:item] == warning_type }
            if warning
              warning[:count] += a.size
            else
              results << { item: warning_type, count: a.size }
            end
          end
        end
      end
      results.sort_by { |r| -r[:count] }
    end
    
    private

    def normalize_infile(file)
      file = file.to_s.gsub(/^app\/assets\/javascripts\//, '') # Remove beginning of asset path
      file = Pathname.new("#{Dir.pwd}/app/assets/javascripts/#{file}") # Ensure path is absolute
      file = Pathname.new("#{file}.js") if !file.directory? && file.extname.empty? # Make sure it has an extension
      file
    end

    def assets
      all_js_assets = Rails.application.assets.each_file.to_a.map { |path| Pathname.new(path) }.select do |asset|
        JAVASCRIPT_EXTENSIONS.include?(asset.extname)
      end

      assets = all_js_assets.select{|a| is_descendant?(@file, a)}

      assets.reject{|a| a.to_s =~ /eslint.js|vendor|gems|min.js|editorial/ }
    end

    def eslint_js
      @eslint_js ||= Rails.application.assets['eslint'].to_s
    end

    def eslint_plugin_js
      @eslint_plugin_js ||= begin
        plugins.map do |plugin_name|
          Rails.application.assets["plugins/eslint-plugin-#{plugin_name}"].to_s
        end.join('\n')
      end
    end

    def plugins
      JSON.parse(Config.read)['plugins'] || []
    end

    def warning_hashes(file_content)
      ExecJS.eval <<-JS
        function () {
          window = this;
          #{eslint_js};
          #{eslint_plugin_js};
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

    def is_descendant?(a, b)
      a_list = a.to_s.split('/')
      b_list = b.to_s.split('/')

      b_list[0..a_list.size-1] == a_list
    end
  end
end
