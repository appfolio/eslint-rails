require 'active_support/core_ext/string/strip'
require 'colorize'

module ESLintRails
  class TextFormatter

    def initialize(warnings)
      @warnings = warnings
    end

    def format
      max_line_column_length = @warnings.map { |warning| warning.location.size }.max
      max_rule_id_length = @warnings.map { |warning| warning.rule_id.size }.max
      max_message_length = @warnings.map { |warning| warning.message.size }.max
      @warnings.each do |warning|
        message = [
          warning.location.ljust(max_line_column_length + 1),
          warning.severity.to_s.ljust(6),
          warning.rule_id.ljust(max_rule_id_length),
          warning.message.ljust(max_message_length)
        ].join(" ")
        colorized_message =
          case warning.severity
            when :low
              message.green
            when :high
              message.yellow
            else
              raise 'BULLSHIT'
          end
        puts colorized_message
      end

      puts "#{@warnings.size} warning(s) found."
    end
  end
end
