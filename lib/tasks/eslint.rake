ENV['EXECJS_RUNTIME'] = 'RubyRacer'

require 'eslint-rails'

namespace :eslint do

  desc %{Run ESLint against the specified JavaScript file and report warnings (default is 'application')}
  task :run, [:filename] => :environment do |_, args|
    warnings = ESLintRails::Runner.new(args[:filename]).run

    if warnings.empty?
      puts 'All good! :)'.green
      exit 0
    else
      formatter = ESLintRails::TextFormatter.new(warnings)
      formatter.format
      exit 1
    end
  end

  desc 'Run ESlint against each JavaScript file for a specified directory and report warnings'
  task :run_dir, [:directory] => :environment do |_, args|
    directory_path = Dir["app"][0] # if a directory is not set as an argument, grab all the JavaScript files in the 'app' directory (so we're not linting external assets)
    
    if args[:directory] # if a directory is provided, get its path
      directory_path = Dir["**/#{args[:directory]}"][0]
    end

    full_paths = Dir["#{directory_path}/**/*.js*"]
    file_paths = full_paths.map do |path|
      
      short_path = (path.split('/') - ["app", "assets", "javascripts"]).join('/') # strip 'app/assets/javascripts/' from the path
      short_path.split('.')[0] # strip the path and the file type(.js, .jsx, etc.) from the file name
    end
    file_paths.each_with_index do |filename, i|
      puts full_paths[i].blue # list the filename for clarity

      warnings = ESLintRails::Runner.new(filename).run # run ESLint on every file for the directory
      if warnings.empty?
        puts 'All good! :)'.green
      else
        formatter = ESLintRails::TextFormatter.new(warnings)
        formatter.format
      end
    end
  end

  desc 'Print the current configuration file (Uses local config/eslint.json if it exists; uses default config/eslint.json if it does not; optionally force default by passing a parameter)'
  task :print_config, [:force_default] => :environment do |_, args|
    puts ESLintRails::Config.read(force_default: args[:force_default])
  end
end
