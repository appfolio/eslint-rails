module ESLintRails
  class Warning
    attr_reader :rule_id, :message, :line, :column, :node_type

    SEVERITY = [ :low, :high ].freeze
    private_constant :SEVERITY

    def initialize(warning_hash)
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
  end
end
