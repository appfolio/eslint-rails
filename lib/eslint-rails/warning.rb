module ESLintRails
  class Warning
    attr_reader :filename, :line, :column, :node_type

    SEVERITY = [ :low, :high ].freeze
    private_constant :SEVERITY

    def initialize(filename, warning_hash)
      @filename = filename
      @rule_id = warning_hash['ruleId'] || "unexpected error"
      @severity = warning_hash['severity']
      @message = warning_hash['message']
      @line = warning_hash['line']
      @column = warning_hash['column']
      @node_type = warning_hash['nodeType']
    end

    def severity
      SEVERITY[@severity-1]
    end

    def location
      "#{filename}:#{line}:#{column}"
    end

    def rule_id
      @rule_id || 'N/A'
    end

    def message
      @message || 'N/A'
    end
  end
end
