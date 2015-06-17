# eslint-rails

Run [ESLint][] against your Rails repo.

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'eslint-rails'
```

## Usage

### CLI

![rake-eslint-rails-run][]

```sh
rake eslint:run
```

This will analyze `application.js`. Optionally, you can supply a filename to the
task. To analyze `components/woop.js` and `utilities.js.coffee.erb` you would
run (respectively):

```sh
rake eslint:run[components/woop]
rake eslint:run[utilities]
```

### Web interface

On non-production environments, visit these URLs on your application:

Path                                  | Description
------------------------------------- | -------------------------------------------------
`/eslint`                             | Optionally supply a filename parameter to analyze a file other than `application.js`, e.g.  `/eslint?filename=foo` to analyze foo.js.
`/eslint/source?filename=application` | Optionally replace `application` with the name of another JavaScript file, e.g.  `eslint/source?filename=button_stuff` can show you `button_stuff.js`, and `eslint/source?filename=components/buttons/icon_button` can show you `components/buttons/icon_button.js.coffee.erb`.

![eslint-rails-web](https://cloud.githubusercontent.com/assets/324632/6671966/33d8cc86-cbc6-11e4-904d-3379907c429d.png)

![eslint-rails-web-source](https://cloud.githubusercontent.com/assets/324632/6671965/33d6819c-cbc6-11e4-9a64-30be84f20b96.png)

# Authors

- Jon Kessler &lt;[jon.kessler@appfolio.com][]&gt;
- Justin Force &lt;[justin.force@appfolio.com][]&gt;

# License

[MIT License][].

[ESLint]: http://eslint.org/
[justin.force@appfolio.com]: mailto:justin.force@appfolio.com
[jon.kessler@appfolio.com]: mailto:jon.kessler@appfolio.com
[MIT License]: http://www.opensource.org/licenses/MIT)

[rake-eslint-rails-run]: https://cloud.githubusercontent.com/assets/324632/6672146/9d1f278e-cbc7-11e4-9f56-5a4511d35921.png
[eslint-rails-web-source]: https://cloud.githubusercontent.com/assets/324632/6671965/33d6819c-cbc6-11e4-9a64-30be84f20b96.png
[eslint-rails-web]: https://cloud.githubusercontent.com/assets/324632/6671966/33d8cc86-cbc6-11e4-904d-3379907c429d.png
