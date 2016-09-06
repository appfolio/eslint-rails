ENV['EXECJS_RUNTIME'] = 'RubyRacer'

require 'eslint-rails'

namespace :eslint do
  def run_and_print_results(file)
    warnings = ESLintRails::Runner.new(file).run

    if warnings.empty?
      puts 'All good! :)'.green
      exit 0
    else
      formatter = ESLintRails::TextFormatter.new(warnings)
      formatter.format
      exit 1
    end
  end

  desc %{Run ESLint against the specified JavaScript file and report warnings (default is 'application')}
  task :run, [:filename] => :environment do |_, args|
    run_and_print_results(args[:filename] || 'application')
  end

  desc 'Run ESLint against all project javascript files and report warnings'
  task run_all: :environment do |_, args|
    run_and_print_results(nil) # Run all
  end

  desc 'Print the current configuration file (Uses local config/eslint.json if it exists; uses default config/eslint.json if it does not; optionally force default by passing a parameter)'
  task :print_config, [:force_default] => :environment do |_, args|
    puts ESLintRails::Config.read(force_default: args[:force_default])
  end
end
