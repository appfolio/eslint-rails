#!/usr/bin/env bash

ESLINT_RAILS_DIR=$(pwd)
PLUGINS=(yannickcr/eslint-plugin-react) # Add new plugins here.
GIT_URL_PREFIX="git@github.com:"
GIT_URL_SUFFIX=".git"

mkdir -p /tmp/eslint-rails-plugins
cd /tmp/eslint-rails-plugins

for plugin in ${PLUGINS[@]}; do
  git_url=$GIT_URL_PREFIX$plugin$GIT_URL_SUFFIX
  git clone $git_url
  plugin_name=$(basename $git_url .git)
  cd $plugin_name
  npm install
  browserify index.js -o $plugin_name.js
  cp $plugin_name.js $ESLINT_RAILS_DIR/vendor/assets/javascripts/plugins/
done

rm -rf /tmp/eslint-rails-plugins