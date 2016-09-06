module ESLintRails
  class Warning
    attr_reader :filename, :rule_id, :message, :line, :column, :node_type

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
  end
end
