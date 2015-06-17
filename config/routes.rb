Rails.application.routes.draw do
  unless Rails.env.production?
    get '/eslint'             => 'eslint#show'
    get '/eslint/source'      => 'eslint#source',      as: :eslint_source
    get '/eslint/eslint.json' => 'eslint#config_file', as: :config_file
  end
end
