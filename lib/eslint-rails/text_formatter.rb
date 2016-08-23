require 'active_support/core_ext/string/strip'
require 'colorize'

module ESLintRails
  class TextFormatter

    def initialize(warnings)
      @warnings = warnings
    end

    def format
      max_line_column_length = max_length_of_attribute(:location)
      max_rule_id_length = max_length_of_attribute(:rule_id)
      max_message_length = max_length_of_attribute(:message)
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
              message.yellow
            when :high
              message.red
            else
              raise 'BULLSHIT'
          end
        puts colorized_message
      end

      puts "#{@warnings.size} warning(s) found."
    end
    
    private
  
    def max_length_of_attribute(attr_key)
      @warnings.map { |warning| warning.send(attr_key).size }.max
    end
  end
end
