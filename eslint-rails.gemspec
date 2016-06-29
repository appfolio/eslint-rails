# coding: utf-8
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'eslint-rails/version'

Gem::Specification.new do |spec|
  spec.name          = 'eslint-rails'
  spec.version       = ESLintRails::VERSION
  spec.authors       = ['Justin Force', 'Jon Kessler']
  spec.email         = ['justin.force@appfolio.com', 'jon.kessler@appfolio.com']
  spec.summary       = %q{A Rails wrapper for ESLint.}
  spec.description   = spec.summary
  spec.homepage      = 'https://github.com/appfolio/eslint-rails'
  spec.license       = 'MIT'

  spec.files         = `git ls-files -z`.split("\x0")
  spec.executables   = spec.files.grep(%r{^bin/}) { |f| File.basename(f) }
  spec.test_files    = spec.files.grep(%r{^(test|spec|features)/})
  spec.require_paths = ['lib']

  spec.add_dependency 'railties', '>= 3.2'
  spec.add_dependency 'execjs'
  spec.add_dependency 'colorize'

  spec.add_development_dependency 'bundler', '~> 1.7'
  spec.add_development_dependency 'rake', '~> 10.0'
  spec.add_development_dependency 'therubyracer'
end
