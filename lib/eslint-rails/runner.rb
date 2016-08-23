module ESLintRails
  class Runner
    include ActionView::Helpers::JavaScriptHelper

    def initialize(filename)
      @filename = filename || 'application'
    end

    def run
      asset = Rails.application.assets[@filename]
      relative_path = asset.pathname.relative_path_from(Pathname.new(Dir.pwd))
      file_content = asset.to_s

      eslint_js = Rails.application.assets['eslint'].to_s

      warning_hashes = ExecJS.eval <<-JS
        function () {
          window = this;
          #{eslint_js};
          return eslint.verify('#{escape_javascript file_content}', #{Config.read});
        }()
      JS
      warning_hashes.map{|hash| ESLintRails::Warning.new(relative_path, hash)}
    end
  end
end
