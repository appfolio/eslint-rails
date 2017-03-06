module ESLintRails
  class Config

    def self.read(force_default: false)
      self.new(force_default: force_default).send(:read)
    end

    private

    CONFIG_PATH = 'config/eslint.json'
    private_constant :CONFIG_PATH

    def initialize(force_default: nil)
      raise(ArgumentError, 'force_default is required') if force_default.nil?

      @force_default = force_default
      @custom_file   = Rails.root.join(CONFIG_PATH)
      @default_file  = ESLintRails::Engine.root.join(CONFIG_PATH)
    end

    def read
      config_file.read
    end

    def config_file
      (@custom_file.exist? && !@force_default) ?  @custom_file : @default_file
    end
  end
end
