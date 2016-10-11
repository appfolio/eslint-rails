(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var deprecatedRules = {
  'no-comment-textnodes': require('./lib/rules/no-comment-textnodes'),
  'require-extension': require('./lib/rules/require-extension'),
  'wrap-multilines': require('./lib/rules/wrap-multilines')
};

var rules = {
  'jsx-uses-react': require('./lib/rules/jsx-uses-react'),
  'no-multi-comp': require('./lib/rules/no-multi-comp'),
  'prop-types': require('./lib/rules/prop-types'),
  'display-name': require('./lib/rules/display-name'),
  'jsx-wrap-multilines': require('./lib/rules/jsx-wrap-multilines'),
  'self-closing-comp': require('./lib/rules/self-closing-comp'),
  'jsx-no-comment-textnodes': require('./lib/rules/jsx-no-comment-textnodes'),
  'no-danger': require('./lib/rules/no-danger'),
  'no-set-state': require('./lib/rules/no-set-state'),
  'no-is-mounted': require('./lib/rules/no-is-mounted'),
  'no-deprecated': require('./lib/rules/no-deprecated'),
  'no-did-mount-set-state': require('./lib/rules/no-did-mount-set-state'),
  'no-did-update-set-state': require('./lib/rules/no-did-update-set-state'),
  'no-render-return-value': require('./lib/rules/no-render-return-value'),
  'react-in-jsx-scope': require('./lib/rules/react-in-jsx-scope'),
  'jsx-uses-vars': require('./lib/rules/jsx-uses-vars'),
  'jsx-handler-names': require('./lib/rules/jsx-handler-names'),
  'jsx-pascal-case': require('./lib/rules/jsx-pascal-case'),
  'jsx-no-bind': require('./lib/rules/jsx-no-bind'),
  'jsx-no-undef': require('./lib/rules/jsx-no-undef'),
  'no-unknown-property': require('./lib/rules/no-unknown-property'),
  'jsx-curly-spacing': require('./lib/rules/jsx-curly-spacing'),
  'jsx-equals-spacing': require('./lib/rules/jsx-equals-spacing'),
  'jsx-sort-props': require('./lib/rules/jsx-sort-props'),
  'sort-prop-types': require('./lib/rules/sort-prop-types'),
  'jsx-boolean-value': require('./lib/rules/jsx-boolean-value'),
  'sort-comp': require('./lib/rules/sort-comp'),
  'jsx-no-duplicate-props': require('./lib/rules/jsx-no-duplicate-props'),
  'jsx-max-props-per-line': require('./lib/rules/jsx-max-props-per-line'),
  'jsx-no-literals': require('./lib/rules/jsx-no-literals'),
  'jsx-indent-props': require('./lib/rules/jsx-indent-props'),
  'jsx-indent': require('./lib/rules/jsx-indent'),
  'jsx-closing-bracket-location': require('./lib/rules/jsx-closing-bracket-location'),
  'jsx-space-before-closing': require('./lib/rules/jsx-space-before-closing'),
  'no-direct-mutation-state': require('./lib/rules/no-direct-mutation-state'),
  'forbid-component-props': require('./lib/rules/forbid-component-props'),
  'forbid-prop-types': require('./lib/rules/forbid-prop-types'),
  'prefer-es6-class': require('./lib/rules/prefer-es6-class'),
  'jsx-key': require('./lib/rules/jsx-key'),
  'no-string-refs': require('./lib/rules/no-string-refs'),
  'prefer-stateless-function': require('./lib/rules/prefer-stateless-function'),
  'require-render-return': require('./lib/rules/require-render-return'),
  'jsx-first-prop-new-line': require('./lib/rules/jsx-first-prop-new-line'),
  'jsx-no-target-blank': require('./lib/rules/jsx-no-target-blank'),
  'jsx-filename-extension': require('./lib/rules/jsx-filename-extension'),
  'require-optimization': require('./lib/rules/require-optimization'),
  'no-find-dom-node': require('./lib/rules/no-find-dom-node'),
  'no-danger-with-children': require('./lib/rules/no-danger-with-children'),
  'style-prop-object': require('./lib/rules/style-prop-object')
};

var ruleNames = Object.keys(rules);
var allRules = {};
for (var i = 0; i < ruleNames.length; i++) {
  allRules['react/' + ruleNames[i]] = 2;
}

var exportedRules = {};
for (var key in rules) {
  if (!rules.hasOwnProperty(key)) {
    continue;
  }
  exportedRules[key] = rules[key];
}
for (var deprecatedKey in deprecatedRules) {
  if (!deprecatedRules.hasOwnProperty(deprecatedKey)) {
    continue;
  }
  exportedRules[deprecatedKey] = deprecatedRules[deprecatedKey];
}

module.exports = {
  deprecatedRules: deprecatedRules,
  rules: exportedRules,
  configs: {
    recommended: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      rules: {
        'react/display-name': 2,
        'react/jsx-no-duplicate-props': 2,
        'react/jsx-no-undef': 2,
        'react/jsx-uses-react': 2,
        'react/jsx-uses-vars': 2,
        'react/no-deprecated': 2,
        'react/no-direct-mutation-state': 2,
        'react/no-find-dom-node': 2,
        'react/no-is-mounted': 2,
        'react/no-unknown-property': 2,
        'react/no-render-return-value': 2,
        'react/prop-types': 2,
        'react/react-in-jsx-scope': 2,
        'react/require-render-return': 2
      }
    },
    all: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      rules: allRules
    }
  }
};

},{"./lib/rules/display-name":2,"./lib/rules/forbid-component-props":3,"./lib/rules/forbid-prop-types":4,"./lib/rules/jsx-boolean-value":5,"./lib/rules/jsx-closing-bracket-location":6,"./lib/rules/jsx-curly-spacing":7,"./lib/rules/jsx-equals-spacing":8,"./lib/rules/jsx-filename-extension":9,"./lib/rules/jsx-first-prop-new-line":10,"./lib/rules/jsx-handler-names":11,"./lib/rules/jsx-indent":13,"./lib/rules/jsx-indent-props":12,"./lib/rules/jsx-key":14,"./lib/rules/jsx-max-props-per-line":15,"./lib/rules/jsx-no-bind":16,"./lib/rules/jsx-no-comment-textnodes":17,"./lib/rules/jsx-no-duplicate-props":18,"./lib/rules/jsx-no-literals":19,"./lib/rules/jsx-no-target-blank":20,"./lib/rules/jsx-no-undef":21,"./lib/rules/jsx-pascal-case":22,"./lib/rules/jsx-sort-props":23,"./lib/rules/jsx-space-before-closing":24,"./lib/rules/jsx-uses-react":25,"./lib/rules/jsx-uses-vars":26,"./lib/rules/jsx-wrap-multilines":27,"./lib/rules/no-comment-textnodes":28,"./lib/rules/no-danger":30,"./lib/rules/no-danger-with-children":29,"./lib/rules/no-deprecated":31,"./lib/rules/no-did-mount-set-state":32,"./lib/rules/no-did-update-set-state":33,"./lib/rules/no-direct-mutation-state":34,"./lib/rules/no-find-dom-node":35,"./lib/rules/no-is-mounted":36,"./lib/rules/no-multi-comp":37,"./lib/rules/no-render-return-value":38,"./lib/rules/no-set-state":39,"./lib/rules/no-string-refs":40,"./lib/rules/no-unknown-property":41,"./lib/rules/prefer-es6-class":42,"./lib/rules/prefer-stateless-function":43,"./lib/rules/prop-types":44,"./lib/rules/react-in-jsx-scope":45,"./lib/rules/require-extension":46,"./lib/rules/require-optimization":47,"./lib/rules/require-render-return":48,"./lib/rules/self-closing-comp":49,"./lib/rules/sort-comp":50,"./lib/rules/sort-prop-types":51,"./lib/rules/style-prop-object":52,"./lib/rules/wrap-multilines":53}],2:[function(require,module,exports){
/**
 * @fileoverview Prevent missing displayName in a React component definition
 * @author Yannick Croissant
 */
'use strict';

var Components = require('../util/Components');

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'Prevent missing displayName in a React component definition',
      category: 'Best Practices',
      recommended: true
    },

    schema: [{
      type: 'object',
      properties: {
        ignoreTranspilerName: {
          type: 'boolean'
        }
      },
      additionalProperties: false
    }]
  },

  create: Components.detect(function(context, components, utils) {

    var sourceCode = context.getSourceCode();
    var config = context.options[0] || {};
    var ignoreTranspilerName = config.ignoreTranspilerName || false;

    var MISSING_MESSAGE = 'Component definition is missing display name';

    /**
     * Checks if we are declaring a display name
     * @param {ASTNode} node The AST node being checked.
     * @returns {Boolean} True if we are declaring a display name, false if not.
     */
    function isDisplayNameDeclaration(node) {
      switch (node.type) {
        // Special case for class properties
        // (babel-eslint does not expose property name so we have to rely on tokens)
        case 'ClassProperty':
          var tokens = sourceCode.getFirstTokens(node, 2);
          if (
            tokens[0].value === 'displayName' ||
            (tokens[1] && tokens[1].value === 'displayName')
          ) {
            return true;
          }
          return false;
        case 'Identifier':
          return node.name === 'displayName';
        case 'Literal':
          return node.value === 'displayName';
        default:
          return false;
      }
    }

    /**
     * Mark a prop type as declared
     * @param {ASTNode} node The AST node being checked.
     */
    function markDisplayNameAsDeclared(node) {
      components.set(node, {
        hasDisplayName: true
      });
    }

    /**
     * Reports missing display name for a given component
     * @param {Object} component The component to process
     */
    function reportMissingDisplayName(component) {
      context.report({
        node: component.node,
        message: MISSING_MESSAGE,
        data: {
          component: component.name
        }
      });
    }

    /**
     * Checks if the component have a name set by the transpiler
     * @param {ASTNode} node The AST node being checked.
     * @returns {Boolean} True ifcomponent have a name, false if not.
     */
    function hasTranspilerName(node) {
      var namedObjectAssignment = (
        node.type === 'ObjectExpression' &&
        node.parent &&
        node.parent.parent &&
        node.parent.parent.type === 'AssignmentExpression' && (
          !node.parent.parent.left.object ||
          node.parent.parent.left.object.name !== 'module' ||
          node.parent.parent.left.property.name !== 'exports'
        )
      );
      var namedObjectDeclaration = (
          node.type === 'ObjectExpression' &&
          node.parent &&
          node.parent.parent &&
          node.parent.parent.type === 'VariableDeclarator'
      );
      var namedClass = (
        (node.type === 'ClassDeclaration' || node.type === 'ClassExpression') &&
        node.id &&
        node.id.name
      );

      var namedFunctionDeclaration = (
        (node.type === 'FunctionDeclaration' || node.type === 'FunctionExpression') &&
        node.id &&
        node.id.name
      );

      var namedFunctionExpression = (
        (node.type === 'FunctionExpression' || node.type === 'ArrowFunctionExpression') &&
        node.parent &&
        (node.parent.type === 'VariableDeclarator' || node.parent.method === true)
      );

      if (
        namedObjectAssignment || namedObjectDeclaration ||
        namedClass ||
        namedFunctionDeclaration || namedFunctionExpression
      ) {
        return true;
      }
      return false;
    }

    // --------------------------------------------------------------------------
    // Public
    // --------------------------------------------------------------------------

    return {

      ClassProperty: function(node) {
        if (!isDisplayNameDeclaration(node)) {
          return;
        }
        markDisplayNameAsDeclared(node);
      },

      MemberExpression: function(node) {
        if (!isDisplayNameDeclaration(node.property)) {
          return;
        }
        var component = utils.getRelatedComponent(node);
        if (!component) {
          return;
        }
        markDisplayNameAsDeclared(component.node);
      },

      FunctionExpression: function(node) {
        if (ignoreTranspilerName || !hasTranspilerName(node)) {
          return;
        }
        markDisplayNameAsDeclared(node);
      },

      FunctionDeclaration: function(node) {
        if (ignoreTranspilerName || !hasTranspilerName(node)) {
          return;
        }
        markDisplayNameAsDeclared(node);
      },

      ArrowFunctionExpression: function(node) {
        if (ignoreTranspilerName || !hasTranspilerName(node)) {
          return;
        }
        markDisplayNameAsDeclared(node);
      },

      MethodDefinition: function(node) {
        if (!isDisplayNameDeclaration(node.key)) {
          return;
        }
        markDisplayNameAsDeclared(node);
      },

      ClassExpression: function(node) {
        if (ignoreTranspilerName || !hasTranspilerName(node)) {
          return;
        }
        markDisplayNameAsDeclared(node);
      },

      ClassDeclaration: function(node) {
        if (ignoreTranspilerName || !hasTranspilerName(node)) {
          return;
        }
        markDisplayNameAsDeclared(node);
      },

      ObjectExpression: function(node) {
        if (ignoreTranspilerName || !hasTranspilerName(node)) {
          // Search for the displayName declaration
          node.properties.forEach(function(property) {
            if (!property.key || !isDisplayNameDeclaration(property.key)) {
              return;
            }
            markDisplayNameAsDeclared(node);
          });
          return;
        }
        markDisplayNameAsDeclared(node);
      },

      'Program:exit': function() {
        var list = components.list();
        // Report missing display name for all components
        for (var component in list) {
          if (!list.hasOwnProperty(component) || list[component].hasDisplayName) {
            continue;
          }
          reportMissingDisplayName(list[component]);
        }
      }
    };
  })
};

},{"../util/Components":54}],3:[function(require,module,exports){
/**
 * @fileoverview Forbid certain props on components
 * @author Joe Lencioni
 */
'use strict';

// ------------------------------------------------------------------------------
// Constants
// ------------------------------------------------------------------------------

var DEFAULTS = ['className', 'style'];

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'Forbid certain props on components',
      category: 'Best Practices',
      recommended: false
    },

    schema: [{
      type: 'object',
      properties: {
        forbid: {
          type: 'array',
          items: {
            type: 'string'
          }
        }
      },
      additionalProperties: true
    }]
  },

  create: function(context) {

    function isForbidden(prop) {
      var configuration = context.options[0] || {};

      var forbid = configuration.forbid || DEFAULTS;
      return forbid.indexOf(prop) >= 0;
    }

    return {
      JSXAttribute: function(node) {
        var tag = node.parent.name.name;
        if (tag[0] !== tag[0].toUpperCase()) {
          // This is a DOM node, not a Component, so exit.
          return;
        }

        var prop = node.name.name;

        if (!isForbidden(prop)) {
          return;
        }

        context.report({
          node: node,
          message: 'Prop `' + prop + '` is forbidden on Components'
        });
      }
    };
  }
};

},{}],4:[function(require,module,exports){
/**
 * @fileoverview Forbid certain propTypes
 */
'use strict';

// ------------------------------------------------------------------------------
// Constants
// ------------------------------------------------------------------------------

var DEFAULTS = ['any', 'array', 'object'];

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'Forbid certain propTypes',
      category: 'Best Practices',
      recommended: false
    },

    schema: [{
      type: 'object',
      properties: {
        forbid: {
          type: 'array',
          items: {
            type: 'string'
          }
        }
      },
      additionalProperties: true
    }]
  },

  create: function(context) {

    function isForbidden(type) {
      var configuration = context.options[0] || {};

      var forbid = configuration.forbid || DEFAULTS;
      return forbid.indexOf(type) >= 0;
    }

    /**
     * Checks if node is `propTypes` declaration
     * @param {ASTNode} node The AST node being checked.
     * @returns {Boolean} True if node is `propTypes` declaration, false if not.
     */
    function isPropTypesDeclaration(node) {

      // Special case for class properties
      // (babel-eslint does not expose property name so we have to rely on tokens)
      if (node.type === 'ClassProperty') {
        var tokens = context.getFirstTokens(node, 2);
        if (tokens[0].value === 'propTypes' || (tokens[1] && tokens[1].value === 'propTypes')) {
          return true;
        }
        return false;
      }

      return Boolean(
        node &&
        node.name === 'propTypes'
      );
    }


    /**
     * Checks if propTypes declarations are forbidden
     * @param {Array} declarations The array of AST nodes being checked.
     * @returns {void}
     */
    function checkForbidden(declarations) {
      declarations.forEach(function(declaration) {
        if (declaration.type !== 'Property') {
          return;
        }
        var target;
        var value = declaration.value;
        if (
          value.type === 'MemberExpression' &&
          value.property &&
          value.property.name &&
          value.property.name === 'isRequired'
        ) {
          value = value.object;
        }
        if (
          value.type === 'CallExpression' &&
          value.callee.type === 'MemberExpression'
        ) {
          value = value.callee;
        }
        if (value.property) {
          target = value.property.name;
        } else if (value.type === 'Identifier') {
          target = value.name;
        }
        if (isForbidden(target)) {
          context.report({
            node: declaration,
            message: 'Prop type `' + target + '` is forbidden'
          });
        }
      });
    }

    return {
      ClassProperty: function(node) {
        if (isPropTypesDeclaration(node) && node.value && node.value.type === 'ObjectExpression') {
          checkForbidden(node.value.properties);
        }
      },

      MemberExpression: function(node) {
        if (isPropTypesDeclaration(node.property)) {
          var right = node.parent.right;
          if (right && right.type === 'ObjectExpression') {
            checkForbidden(right.properties);
          }
        }
      },

      ObjectExpression: function(node) {
        node.properties.forEach(function(property) {
          if (!property.key) {
            return;
          }

          if (!isPropTypesDeclaration(property.key)) {
            return;
          }
          if (property.value.type === 'ObjectExpression') {
            checkForbidden(property.value.properties);
          }
        });
      }

    };
  }
};

},{}],5:[function(require,module,exports){
/**
 * @fileoverview Enforce boolean attributes notation in JSX
 * @author Yannick Croissant
 */
'use strict';

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'Enforce boolean attributes notation in JSX',
      category: 'Stylistic Issues',
      recommended: false
    },
    fixable: 'code',

    schema: [{
      enum: ['always', 'never']
    }]
  },

  create: function(context) {

    var configuration = context.options[0] || 'never';

    var NEVER_MESSAGE = 'Value must be omitted for boolean attributes';
    var ALWAYS_MESSAGE = 'Value must be set for boolean attributes';

    return {
      JSXAttribute: function(node) {
        switch (configuration) {
          case 'always':
            if (node.value === null) {
              context.report({
                node: node,
                message: ALWAYS_MESSAGE,
                fix: function(fixer) {
                  return fixer.insertTextAfter(node, '={true}');
                }
              });
            }
            break;
          case 'never':
            if (node.value && node.value.type === 'JSXExpressionContainer' && node.value.expression.value === true) {
              context.report({
                node: node,
                message: NEVER_MESSAGE,
                fix: function(fixer) {
                  return fixer.removeRange([node.name.range[1], node.value.range[1]]);
                }
              });
            }
            break;
          default:
            break;
        }
      }
    };
  }
};

},{}],6:[function(require,module,exports){
/**
 * @fileoverview Validate closing bracket location in JSX
 * @author Yannick Croissant
 */
'use strict';

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------
module.exports = {
  meta: {
    docs: {
      description: 'Validate closing bracket location in JSX',
      category: 'Stylistic Issues',
      recommended: false
    },
    fixable: 'code',

    schema: [{
      oneOf: [
        {
          enum: ['after-props', 'props-aligned', 'tag-aligned', 'line-aligned']
        },
        {
          type: 'object',
          properties: {
            location: {
              enum: ['after-props', 'props-aligned', 'tag-aligned', 'line-aligned']
            }
          },
          additionalProperties: false
        }, {
          type: 'object',
          properties: {
            nonEmpty: {
              enum: ['after-props', 'props-aligned', 'tag-aligned', 'line-aligned', false]
            },
            selfClosing: {
              enum: ['after-props', 'props-aligned', 'tag-aligned', 'line-aligned', false]
            }
          },
          additionalProperties: false
        }
      ]
    }]
  },

  create: function(context) {

    var MESSAGE = 'The closing bracket must be {{location}}{{details}}';
    var MESSAGE_LOCATION = {
      'after-props': 'placed after the last prop',
      'after-tag': 'placed after the opening tag',
      'props-aligned': 'aligned with the last prop',
      'tag-aligned': 'aligned with the opening tag',
      'line-aligned': 'aligned with the line containing the opening tag'
    };
    var DEFAULT_LOCATION = 'tag-aligned';

    var sourceCode = context.getSourceCode();
    var config = context.options[0];
    var options = {
      nonEmpty: DEFAULT_LOCATION,
      selfClosing: DEFAULT_LOCATION
    };

    if (typeof config === 'string') {
      // simple shorthand [1, 'something']
      options.nonEmpty = config;
      options.selfClosing = config;
    } else if (typeof config === 'object') {
      // [1, {location: 'something'}] (back-compat)
      if (config.hasOwnProperty('location')) {
        options.nonEmpty = config.location;
        options.selfClosing = config.location;
      }
      // [1, {nonEmpty: 'something'}]
      if (config.hasOwnProperty('nonEmpty')) {
        options.nonEmpty = config.nonEmpty;
      }
      // [1, {selfClosing: 'something'}]
      if (config.hasOwnProperty('selfClosing')) {
        options.selfClosing = config.selfClosing;
      }
    }

    /**
     * Get expected location for the closing bracket
     * @param {Object} tokens Locations of the opening bracket, closing bracket and last prop
     * @return {String} Expected location for the closing bracket
     */
    function getExpectedLocation(tokens) {
      var location;
      // Is always after the opening tag if there is no props
      if (typeof tokens.lastProp === 'undefined') {
        location = 'after-tag';
      // Is always after the last prop if this one is on the same line as the opening bracket
      } else if (tokens.opening.line === tokens.lastProp.firstLine) {
        location = 'after-props';
      // Else use configuration dependent on selfClosing property
      } else {
        location = tokens.selfClosing ? options.selfClosing : options.nonEmpty;
      }
      return location;
    }

    /**
     * Get the correct 0-indexed column for the closing bracket, given the
     * expected location.
     * @param {Object} tokens Locations of the opening bracket, closing bracket and last prop
     * @param {String} expectedLocation Expected location for the closing bracket
     * @return {?Number} The correct column for the closing bracket, or null
     */
    function getCorrectColumn(tokens, expectedLocation) {
      switch (expectedLocation) {
        case 'props-aligned':
          return tokens.lastProp.column;
        case 'tag-aligned':
          return tokens.opening.column;
        case 'line-aligned':
          return tokens.openingStartOfLine.column;
        default:
          return null;
      }
    }

    /**
     * Check if the closing bracket is correctly located
     * @param {Object} tokens Locations of the opening bracket, closing bracket and last prop
     * @param {String} expectedLocation Expected location for the closing bracket
     * @return {Boolean} True if the closing bracket is correctly located, false if not
     */
    function hasCorrectLocation(tokens, expectedLocation) {
      switch (expectedLocation) {
        case 'after-tag':
          return tokens.tag.line === tokens.closing.line;
        case 'after-props':
          return tokens.lastProp.lastLine === tokens.closing.line;
        case 'props-aligned':
        case 'tag-aligned':
        case 'line-aligned':
          var correctColumn = getCorrectColumn(tokens, expectedLocation);
          return correctColumn === tokens.closing.column;
        default:
          return true;
      }
    }

    /**
     * Get the locations of the opening bracket, closing bracket, last prop, and
     * start of opening line.
     * @param {ASTNode} node The node to check
     * @return {Object} Locations of the opening bracket, closing bracket, last
     * prop and start of opening line.
     */
    function getTokensLocations(node) {
      var opening = sourceCode.getFirstToken(node).loc.start;
      var closing = sourceCode.getLastTokens(node, node.selfClosing ? 2 : 1)[0].loc.start;
      var tag = sourceCode.getFirstToken(node.name).loc.start;
      var lastProp;
      if (node.attributes.length) {
        lastProp = node.attributes[node.attributes.length - 1];
        lastProp = {
          column: sourceCode.getFirstToken(lastProp).loc.start.column,
          firstLine: sourceCode.getFirstToken(lastProp).loc.start.line,
          lastLine: sourceCode.getLastToken(lastProp).loc.end.line
        };
      }
      var openingLine = sourceCode.lines[opening.line - 1];
      var openingStartOfLine = {
        column: /^\s*/.exec(openingLine)[0].length,
        line: opening.line
      };
      return {
        tag: tag,
        opening: opening,
        closing: closing,
        lastProp: lastProp,
        selfClosing: node.selfClosing,
        openingStartOfLine: openingStartOfLine
      };
    }

    /**
     * Get an unique ID for a given JSXOpeningElement
     *
     * @param {ASTNode} node The AST node being checked.
     * @returns {String} Unique ID (based on its range)
     */
    function getOpeningElementId(node) {
      return node.range.join(':');
    }

    var lastAttributeNode = {};

    return {
      JSXAttribute: function(node) {
        lastAttributeNode[getOpeningElementId(node.parent)] = node;
      },

      JSXSpreadAttribute: function(node) {
        lastAttributeNode[getOpeningElementId(node.parent)] = node;
      },

      'JSXOpeningElement:exit': function(node) {
        var attributeNode = lastAttributeNode[getOpeningElementId(node)];
        var cachedLastAttributeEndPos = attributeNode ? attributeNode.end : null;
        var expectedNextLine;
        var tokens = getTokensLocations(node);
        var expectedLocation = getExpectedLocation(tokens);

        if (hasCorrectLocation(tokens, expectedLocation)) {
          return;
        }

        var data = {location: MESSAGE_LOCATION[expectedLocation], details: ''};
        var correctColumn = getCorrectColumn(tokens, expectedLocation);

        if (correctColumn !== null) {
          expectedNextLine = tokens.lastProp &&
            (tokens.lastProp.lastLine === tokens.closing.line);
          data.details = ' (expected column ' + (correctColumn + 1) +
            (expectedNextLine ? ' on the next line)' : ')');
        }

        context.report({
          node: node,
          loc: tokens.closing,
          message: MESSAGE,
          data: data,
          fix: function(fixer) {
            var closingTag = tokens.selfClosing ? '/>' : '>';
            switch (expectedLocation) {
              case 'after-tag':
                if (cachedLastAttributeEndPos) {
                  return fixer.replaceTextRange([cachedLastAttributeEndPos, node.end],
                    (expectedNextLine ? '\n' : '') + closingTag);
                }
                return fixer.replaceTextRange([node.name.range[1], node.end],
                  (expectedNextLine ? '\n' : ' ') + closingTag);
              case 'after-props':
                return fixer.replaceTextRange([cachedLastAttributeEndPos, node.end],
                  (expectedNextLine ? '\n' : '') + closingTag);
              case 'props-aligned':
              case 'tag-aligned':
              case 'line-aligned':
                var spaces = new Array(+correctColumn + 1);
                return fixer.replaceTextRange([cachedLastAttributeEndPos, node.end],
                  '\n' + spaces.join(' ') + closingTag);
              default:
                return true;
            }
          }
        });
      }
    };

  }
};

},{}],7:[function(require,module,exports){
/**
 * @fileoverview Enforce or disallow spaces inside of curly braces in JSX attributes.
 * @author Jamund Ferguson
 * @author Brandyn Bennett
 * @author Michael Ficarra
 * @author Vignesh Anand
 * @author Jamund Ferguson
 * @author Yannick Croissant
 * @author Erik Wendel
 */
'use strict';

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

var SPACING = {
  always: 'always',
  never: 'never'
};
var SPACING_VALUES = [SPACING.always, SPACING.never];

module.exports = {
  meta: {
    docs: {
      description: 'Enforce or disallow spaces inside of curly braces in JSX attributes',
      category: 'Stylistic Issues',
      recommended: false
    },
    fixable: 'code',

    schema: [{
      enum: SPACING_VALUES
    }, {
      type: 'object',
      properties: {
        allowMultiline: {
          type: 'boolean'
        },
        spacing: {
          type: 'object',
          properties: {
            objectLiterals: {
              enum: SPACING_VALUES
            }
          }
        }
      },
      additionalProperties: false
    }]
  },

  create: function(context) {

    var sourceCode = context.getSourceCode();
    var spaced = context.options[0] === SPACING.always;
    var multiline = context.options[1] ? context.options[1].allowMultiline : true;
    var spacing = context.options[1] ? context.options[1].spacing || {} : {};
    var defaultSpacing = spaced ? SPACING.always : SPACING.never;
    var objectLiteralSpacing = spacing.objectLiterals || (spaced ? SPACING.always : SPACING.never);

    // --------------------------------------------------------------------------
    // Helpers
    // --------------------------------------------------------------------------

    /**
     * Determines whether two adjacent tokens have a newline between them.
     * @param {Object} left - The left token object.
     * @param {Object} right - The right token object.
     * @returns {boolean} Whether or not there is a newline between the tokens.
     */
    function isMultiline(left, right) {
      return left.loc.start.line !== right.loc.start.line;
    }

    /**
    * Reports that there shouldn't be a newline after the first token
    * @param {ASTNode} node - The node to report in the event of an error.
    * @param {Token} token - The token to use for the report.
    * @returns {void}
    */
    function reportNoBeginningNewline(node, token) {
      context.report({
        node: node,
        loc: token.loc.start,
        message: 'There should be no newline after \'' + token.value + '\'',
        fix: function(fixer) {
          var nextToken = context.getSourceCode().getTokenAfter(token);
          return fixer.replaceTextRange([token.range[1], nextToken.range[0]], spaced ? ' ' : '');
        }
      });
    }

    /**
    * Reports that there shouldn't be a newline before the last token
    * @param {ASTNode} node - The node to report in the event of an error.
    * @param {Token} token - The token to use for the report.
    * @returns {void}
    */
    function reportNoEndingNewline(node, token) {
      context.report({
        node: node,
        loc: token.loc.start,
        message: 'There should be no newline before \'' + token.value + '\'',
        fix: function(fixer) {
          var previousToken = context.getSourceCode().getTokenBefore(token);
          return fixer.replaceTextRange([previousToken.range[1], token.range[0]], spaced ? ' ' : '');
        }
      });
    }

    /**
    * Reports that there shouldn't be a space after the first token
    * @param {ASTNode} node - The node to report in the event of an error.
    * @param {Token} token - The token to use for the report.
    * @returns {void}
    */
    function reportNoBeginningSpace(node, token) {
      context.report({
        node: node,
        loc: token.loc.start,
        message: 'There should be no space after \'' + token.value + '\'',
        fix: function(fixer) {
          var nextToken = context.getSourceCode().getTokenAfter(token);
          return fixer.removeRange([token.range[1], nextToken.range[0]]);
        }
      });
    }

    /**
    * Reports that there shouldn't be a space before the last token
    * @param {ASTNode} node - The node to report in the event of an error.
    * @param {Token} token - The token to use for the report.
    * @returns {void}
    */
    function reportNoEndingSpace(node, token) {
      context.report({
        node: node,
        loc: token.loc.start,
        message: 'There should be no space before \'' + token.value + '\'',
        fix: function(fixer) {
          var previousToken = context.getSourceCode().getTokenBefore(token);
          return fixer.removeRange([previousToken.range[1], token.range[0]]);
        }
      });
    }

    /**
    * Reports that there should be a space after the first token
    * @param {ASTNode} node - The node to report in the event of an error.
    * @param {Token} token - The token to use for the report.
    * @returns {void}
    */
    function reportRequiredBeginningSpace(node, token) {
      context.report({
        node: node,
        loc: token.loc.start,
        message: 'A space is required after \'' + token.value + '\'',
        fix: function(fixer) {
          return fixer.insertTextAfter(token, ' ');
        }
      });
    }

    /**
    * Reports that there should be a space before the last token
    * @param {ASTNode} node - The node to report in the event of an error.
    * @param {Token} token - The token to use for the report.
    * @returns {void}
    */
    function reportRequiredEndingSpace(node, token) {
      context.report({
        node: node,
        loc: token.loc.start,
        message: 'A space is required before \'' + token.value + '\'',
        fix: function(fixer) {
          return fixer.insertTextBefore(token, ' ');
        }
      });
    }

    /**
     * Determines if spacing in curly braces is valid.
     * @param {ASTNode} node The AST node to check.
     * @returns {void}
     */
    function validateBraceSpacing(node) {
      // Only validate attributes
      if (node.parent.type === 'JSXElement') {
        return;
      }
      var first = context.getFirstToken(node);
      var last = sourceCode.getLastToken(node);
      var second = context.getTokenAfter(first);
      var penultimate = sourceCode.getTokenBefore(last);

      var isObjectLiteral = first.value === second.value;
      if (isObjectLiteral) {
        if (objectLiteralSpacing === SPACING.never) {
          if (sourceCode.isSpaceBetweenTokens(first, second)) {
            reportNoBeginningSpace(node, first);
          } else if (!multiline && isMultiline(first, second)) {
            reportNoBeginningNewline(node, first);
          }
          if (sourceCode.isSpaceBetweenTokens(penultimate, last)) {
            reportNoEndingSpace(node, last);
          } else if (!multiline && isMultiline(penultimate, last)) {
            reportNoEndingNewline(node, last);
          }
        } else if (objectLiteralSpacing === SPACING.always) {
          if (!sourceCode.isSpaceBetweenTokens(first, second)) {
            reportRequiredBeginningSpace(node, first);
          } else if (!multiline && isMultiline(first, second)) {
            reportNoBeginningNewline(node, first);
          }
          if (!sourceCode.isSpaceBetweenTokens(penultimate, last)) {
            reportRequiredEndingSpace(node, last);
          } else if (!multiline && isMultiline(penultimate, last)) {
            reportNoEndingNewline(node, last);
          }
        }
      } else if (defaultSpacing === SPACING.always) {
        if (!sourceCode.isSpaceBetweenTokens(first, second)) {
          reportRequiredBeginningSpace(node, first);
        } else if (!multiline && isMultiline(first, second)) {
          reportNoBeginningNewline(node, first);
        }

        if (!sourceCode.isSpaceBetweenTokens(penultimate, last)) {
          reportRequiredEndingSpace(node, last);
        } else if (!multiline && isMultiline(penultimate, last)) {
          reportNoEndingNewline(node, last);
        }
      } else if (defaultSpacing === SPACING.never) {
        if (isMultiline(first, second)) {
          if (!multiline) {
            reportNoBeginningNewline(node, first);
          }
        } else if (sourceCode.isSpaceBetweenTokens(first, second)) {
          reportNoBeginningSpace(node, first);
        }
        if (isMultiline(penultimate, last)) {
          if (!multiline) {
            reportNoEndingNewline(node, last);
          }
        } else if (sourceCode.isSpaceBetweenTokens(penultimate, last)) {
          reportNoEndingSpace(node, last);
        }
      }
    }

    // --------------------------------------------------------------------------
    // Public
    // --------------------------------------------------------------------------

    return {
      JSXExpressionContainer: validateBraceSpacing,
      JSXSpreadAttribute: validateBraceSpacing
    };
  }
};

},{}],8:[function(require,module,exports){
/**
 * @fileoverview Disallow or enforce spaces around equal signs in JSX attributes.
 * @author ryym
 */
'use strict';

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'Disallow or enforce spaces around equal signs in JSX attributes',
      category: 'Stylistic Issues',
      recommended: false
    },
    fixable: 'code',

    schema: [{
      enum: ['always', 'never']
    }]
  },

  create: function(context) {
    var config = context.options[0];
    var sourceCode = context.getSourceCode();

    /**
     * Determines a given attribute node has an equal sign.
     * @param {ASTNode} attrNode - The attribute node.
     * @returns {boolean} Whether or not the attriute node has an equal sign.
     */
    function hasEqual(attrNode) {
      return attrNode.type !== 'JSXSpreadAttribute' && attrNode.value !== null;
    }

    // --------------------------------------------------------------------------
    // Public
    // --------------------------------------------------------------------------

    return {
      JSXOpeningElement: function(node) {
        node.attributes.forEach(function(attrNode) {
          if (!hasEqual(attrNode)) {
            return;
          }

          var equalToken = sourceCode.getTokenAfter(attrNode.name);
          var spacedBefore = sourceCode.isSpaceBetweenTokens(attrNode.name, equalToken);
          var spacedAfter = sourceCode.isSpaceBetweenTokens(equalToken, attrNode.value);

          switch (config) {
            default:
            case 'never':
              if (spacedBefore) {
                context.report({
                  node: attrNode,
                  loc: equalToken.loc.start,
                  message: 'There should be no space before \'=\'',
                  fix: function(fixer) {
                    return fixer.removeRange([attrNode.name.range[1], equalToken.start]);
                  }
                });
              }
              if (spacedAfter) {
                context.report({
                  node: attrNode,
                  loc: equalToken.loc.start,
                  message: 'There should be no space after \'=\'',
                  fix: function(fixer) {
                    return fixer.removeRange([equalToken.end, attrNode.value.range[0]]);
                  }
                });
              }
              break;
            case 'always':
              if (!spacedBefore) {
                context.report({
                  node: attrNode,
                  loc: equalToken.loc.start,
                  message: 'A space is required before \'=\'',
                  fix: function(fixer) {
                    return fixer.insertTextBefore(equalToken, ' ');
                  }
                });
              }
              if (!spacedAfter) {
                context.report({
                  node: attrNode,
                  loc: equalToken.loc.start,
                  message: 'A space is required after \'=\'',
                  fix: function(fixer) {
                    return fixer.insertTextAfter(equalToken, ' ');
                  }
                });
              }
              break;
          }
        });
      }
    };
  }
};

},{}],9:[function(require,module,exports){
/**
 * @fileoverview Restrict file extensions that may contain JSX
 * @author Joe Lencioni
 */
'use strict';

var path = require('path');

// ------------------------------------------------------------------------------
// Constants
// ------------------------------------------------------------------------------

var DEFAULTS = {
  extensions: ['.jsx']
};

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'Restrict file extensions that may contain JSX',
      category: 'Stylistic Issues',
      recommended: false
    },

    schema: [{
      type: 'object',
      properties: {
        extensions: {
          type: 'array',
          items: {
            type: 'string'
          }
        }
      },
      additionalProperties: false
    }]
  },

  create: function(context) {


    function getExtensionsConfig() {
      return context.options[0] && context.options[0].extensions || DEFAULTS.extensions;
    }

    var invalidExtension;
    var invalidNode;

    // --------------------------------------------------------------------------
    // Public
    // --------------------------------------------------------------------------

    return {
      JSXElement: function(node) {
        var filename = context.getFilename();
        if (filename === '<text>') {
          return;
        }

        if (invalidNode) {
          return;
        }

        var allowedExtensions = getExtensionsConfig();
        var isAllowedExtension = allowedExtensions.some(function (extension) {
          return filename.slice(-extension.length) === extension;
        });

        if (isAllowedExtension) {
          return;
        }

        invalidNode = node;
        invalidExtension = path.extname(filename);
      },

      'Program:exit': function() {
        if (!invalidNode) {
          return;
        }

        context.report({
          node: invalidNode,
          message: 'JSX not allowed in files with extension \'' + invalidExtension + '\''
        });
      }
    };

  }
};

},{"path":96}],10:[function(require,module,exports){
/**
 * @fileoverview Ensure proper position of the first property in JSX
 * @author Joachim Seminck
 */
'use strict';

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'Ensure proper position of the first property in JSX',
      category: 'Stylistic Issues',
      recommended: false
    },

    schema: [{
      enum: ['always', 'never', 'multiline']
    }]
  },

  create: function (context) {
    var configuration = context.options[0];

    function isMultilineJSX(jsxNode) {
      return jsxNode.loc.start.line < jsxNode.loc.end.line;
    }

    return {
      JSXOpeningElement: function (node) {
        if ((configuration === 'multiline' && isMultilineJSX(node)) || (configuration === 'always')) {
          node.attributes.forEach(function(decl) {
            if (decl.loc.start.line === node.loc.start.line) {
              context.report({
                node: decl,
                message: 'Property should be placed on a new line'
              });
            }
          });
        } else if (configuration === 'never' && node.attributes.length > 0) {
          var firstNode = node.attributes[0];
          if (node.loc.start.line < firstNode.loc.start.line) {
            context.report({
              node: firstNode,
              message: 'Property should be placed on the same line as the component declaration'
            });
            return;
          }
        }
        return;
      }
    };
  }
};

},{}],11:[function(require,module,exports){
/**
 * @fileoverview Enforce event handler naming conventions in JSX
 * @author Jake Marsh
 */
'use strict';

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'Enforce event handler naming conventions in JSX',
      category: 'Stylistic Issues',
      recommended: false
    },

    schema: [{
      type: 'object',
      properties: {
        eventHandlerPrefix: {
          type: 'string'
        },
        eventHandlerPropPrefix: {
          type: 'string'
        }
      },
      additionalProperties: false
    }]
  },

  create: function(context) {

    var sourceCode = context.getSourceCode();
    var configuration = context.options[0] || {};
    var eventHandlerPrefix = configuration.eventHandlerPrefix || 'handle';
    var eventHandlerPropPrefix = configuration.eventHandlerPropPrefix || 'on';

    var EVENT_HANDLER_REGEX = new RegExp('^((props\\.' + eventHandlerPropPrefix + ')'
                                        + '|((.*\\.)?' + eventHandlerPrefix + '))[A-Z].*$');
    var PROP_EVENT_HANDLER_REGEX = new RegExp('^(' + eventHandlerPropPrefix + '[A-Z].*|ref)$');

    return {
      JSXAttribute: function(node) {
        if (!node.value || !node.value.expression || !node.value.expression.object) {
          return;
        }

        var propKey = typeof node.name === 'object' ? node.name.name : node.name;
        var propValue = sourceCode.getText(node.value.expression).replace(/^this\.|.*::/, '');

        if (propKey === 'ref') {
          return;
        }

        var propIsEventHandler = PROP_EVENT_HANDLER_REGEX.test(propKey);
        var propFnIsNamedCorrectly = EVENT_HANDLER_REGEX.test(propValue);

        if (propIsEventHandler && !propFnIsNamedCorrectly) {
          context.report({
            node: node,
            message: 'Handler function for ' + propKey + ' prop key must begin with \'' + eventHandlerPrefix + '\''
          });
        } else if (propFnIsNamedCorrectly && !propIsEventHandler) {
          context.report({
            node: node,
            message: 'Prop key for ' + propValue + ' must begin with \'' + eventHandlerPropPrefix + '\''
          });
        }
      }
    };

  }
};

},{}],12:[function(require,module,exports){
/**
 * @fileoverview Validate props indentation in JSX
 * @author Yannick Croissant

 * This rule has been ported and modified from eslint and nodeca.
 * @author Vitaly Puzrin
 * @author Gyandeep Singh
 * @copyright 2015 Vitaly Puzrin. All rights reserved.
 * @copyright 2015 Gyandeep Singh. All rights reserved.
 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the 'Software'), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 */
'use strict';

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------
module.exports = {
  meta: {
    docs: {
      description: 'Validate props indentation in JSX',
      category: 'Stylistic Issues',
      recommended: false
    },
    fixable: 'code',

    schema: [{
      oneOf: [{
        enum: ['tab']
      }, {
        type: 'integer'
      }]
    }]
  },

  create: function(context) {

    var MESSAGE = 'Expected indentation of {{needed}} {{type}} {{characters}} but found {{gotten}}.';

    var extraColumnStart = 0;
    var indentType = 'space';
    var indentSize = 4;

    var sourceCode = context.getSourceCode();

    if (context.options.length) {
      if (context.options[0] === 'tab') {
        indentSize = 1;
        indentType = 'tab';
      } else if (typeof context.options[0] === 'number') {
        indentSize = context.options[0];
        indentType = 'space';
      }
    }

    /**
     * Reports a given indent violation and properly pluralizes the message
     * @param {ASTNode} node Node violating the indent rule
     * @param {Number} needed Expected indentation character count
     * @param {Number} gotten Indentation character count in the actual node/code
     * @param {Object=} loc Error line and column location
     */
    function report(node, needed, gotten, loc) {
      var msgContext = {
        needed: needed,
        type: indentType,
        characters: needed === 1 ? 'character' : 'characters',
        gotten: gotten
      };

      if (loc) {
        context.report({
          node: node,
          loc: loc,
          message: MESSAGE,
          data: msgContext
        });
      } else {
        context.report({
          node: node,
          message: MESSAGE,
          data: msgContext,
          fix: function(fixer) {
            return fixer.replaceTextRange([node.start - node.loc.start.column, node.start],
              Array(needed + 1).join(indentType === 'space' ? ' ' : '\t'));
          }
        });
      }
    }

    /**
     * Get node indent
     * @param {ASTNode} node Node to examine
     * @param {Boolean} byLastLine get indent of node's last line
     * @param {Boolean} excludeCommas skip comma on start of line
     * @return {Number} Indent
     */
    function getNodeIndent(node, byLastLine, excludeCommas) {
      byLastLine = byLastLine || false;
      excludeCommas = excludeCommas || false;

      var src = sourceCode.getText(node, node.loc.start.column + extraColumnStart);
      var lines = src.split('\n');
      if (byLastLine) {
        src = lines[lines.length - 1];
      } else {
        src = lines[0];
      }

      var skip = excludeCommas ? ',' : '';

      var regExp;
      if (indentType === 'space') {
        regExp = new RegExp('^[ ' + skip + ']+');
      } else {
        regExp = new RegExp('^[\t' + skip + ']+');
      }

      var indent = regExp.exec(src);
      return indent ? indent[0].length : 0;
    }

    /**
     * Checks node is the first in its own start line. By default it looks by start line.
     * @param {ASTNode} node The node to check
     * @param {Boolean} [byEndLocation] Lookup based on start position or end
     * @return {Boolean} true if its the first in the its start line
     */
    function isNodeFirstInLine(node, byEndLocation) {
      var firstToken = byEndLocation === true ? sourceCode.getLastToken(node, 1) : sourceCode.getTokenBefore(node);
      var startLine = byEndLocation === true ? node.loc.end.line : node.loc.start.line;
      var endLine = firstToken ? firstToken.loc.end.line : -1;

      return startLine !== endLine;
    }

    /**
     * Check indent for nodes list
     * @param {ASTNode[]} nodes list of node objects
     * @param {Number} indent needed indent
     * @param {Boolean} excludeCommas skip comma on start of line
     */
    function checkNodesIndent(nodes, indent, excludeCommas) {
      nodes.forEach(function(node) {
        var nodeIndent = getNodeIndent(node, false, excludeCommas);
        if (
          node.type !== 'ArrayExpression' && node.type !== 'ObjectExpression' &&
          nodeIndent !== indent && isNodeFirstInLine(node)
        ) {
          report(node, indent, nodeIndent);
        }
      });
    }

    return {
      JSXOpeningElement: function(node) {
        var elementIndent = getNodeIndent(node);
        checkNodesIndent(node.attributes, elementIndent + indentSize);
      }
    };

  }
};

},{}],13:[function(require,module,exports){
/**
 * @fileoverview Validate JSX indentation
 * @author Yannick Croissant

 * This rule has been ported and modified from eslint and nodeca.
 * @author Vitaly Puzrin
 * @author Gyandeep Singh
 * @copyright 2015 Vitaly Puzrin. All rights reserved.
 * @copyright 2015 Gyandeep Singh. All rights reserved.
 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the 'Software'), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 */
'use strict';

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------
module.exports = {
  meta: {
    docs: {
      description: 'Validate JSX indentation',
      category: 'Stylistic Issues',
      recommended: false
    },

    schema: [{
      oneOf: [{
        enum: ['tab']
      }, {
        type: 'integer'
      }]
    }]
  },

  create: function(context) {

    var MESSAGE = 'Expected indentation of {{needed}} {{type}} {{characters}} but found {{gotten}}.';

    var extraColumnStart = 0;
    var indentType = 'space';
    var indentSize = 4;

    var sourceCode = context.getSourceCode();

    if (context.options.length) {
      if (context.options[0] === 'tab') {
        indentSize = 1;
        indentType = 'tab';
      } else if (typeof context.options[0] === 'number') {
        indentSize = context.options[0];
        indentType = 'space';
      }
    }

    /**
     * Reports a given indent violation and properly pluralizes the message
     * @param {ASTNode} node Node violating the indent rule
     * @param {Number} needed Expected indentation character count
     * @param {Number} gotten Indentation character count in the actual node/code
     * @param {Object=} loc Error line and column location
     */
    function report(node, needed, gotten, loc) {
      var msgContext = {
        needed: needed,
        type: indentType,
        characters: needed === 1 ? 'character' : 'characters',
        gotten: gotten
      };

      if (loc) {
        context.report({
          node: node,
          loc: loc,
          message: MESSAGE,
          data: msgContext
        });
      } else {
        context.report({
          node: node,
          message: MESSAGE,
          data: msgContext
        });
      }
    }

    /**
     * Get node indent
     * @param {ASTNode} node Node to examine
     * @param {Boolean} byLastLine get indent of node's last line
     * @param {Boolean} excludeCommas skip comma on start of line
     * @return {Number} Indent
     */
    function getNodeIndent(node, byLastLine, excludeCommas) {
      byLastLine = byLastLine || false;
      excludeCommas = excludeCommas || false;

      var src = sourceCode.getText(node, node.loc.start.column + extraColumnStart);
      var lines = src.split('\n');
      if (byLastLine) {
        src = lines[lines.length - 1];
      } else {
        src = lines[0];
      }

      var skip = excludeCommas ? ',' : '';

      var regExp;
      if (indentType === 'space') {
        regExp = new RegExp('^[ ' + skip + ']+');
      } else {
        regExp = new RegExp('^[\t' + skip + ']+');
      }

      var indent = regExp.exec(src);
      return indent ? indent[0].length : 0;
    }

    /**
     * Checks node is the first in its own start line. By default it looks by start line.
     * @param {ASTNode} node The node to check
     * @return {Boolean} true if its the first in the its start line
     */
    function isNodeFirstInLine(node) {
      var token = node;
      do {
        token = sourceCode.getTokenBefore(token);
      } while (token.type === 'JSXText');
      var startLine = node.loc.start.line;
      var endLine = token ? token.loc.end.line : -1;

      return startLine !== endLine;
    }

    /**
     * Check indent for nodes list
     * @param {ASTNode[]} nodes list of node objects
     * @param {Number} indent needed indent
     * @param {Boolean} excludeCommas skip comma on start of line
     */
    function checkNodesIndent(node, indent, excludeCommas) {
      var nodeIndent = getNodeIndent(node, false, excludeCommas);
      if (nodeIndent !== indent && isNodeFirstInLine(node)) {
        report(node, indent, nodeIndent);
      }
    }

    return {
      JSXOpeningElement: function(node) {
        if (!node.parent || !node.parent.parent) {
          return;
        }
        var parentElementIndent = getNodeIndent(node.parent.parent);
        var indent = node.parent.parent.loc.start.line === node.loc.start.line ? 0 : indentSize;
        checkNodesIndent(node, parentElementIndent + indent);
      },
      JSXClosingElement: function(node) {
        if (!node.parent) {
          return;
        }
        var peerElementIndent = getNodeIndent(node.parent.openingElement);
        checkNodesIndent(node, peerElementIndent);
      }
    };

  }
};

},{}],14:[function(require,module,exports){
/**
 * @fileoverview Report missing `key` props in iterators/collection literals.
 * @author Ben Mosher
 */
'use strict';

// var Components = require('../util/Components');
var hasProp = require('jsx-ast-utils/hasProp');


// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'Report missing `key` props in iterators/collection literals',
      category: 'Possible Errors',
      recommended: false
    },
    schema: []
  },

  create: function(context) {

    function checkIteratorElement(node) {
      if (node.type === 'JSXElement' && !hasProp(node.openingElement.attributes, 'key')) {
        context.report({
          node: node,
          message: 'Missing "key" prop for element in iterator'
        });
      }
    }

    function getReturnStatement(body) {
      return body.filter(function(item) {
        return item.type === 'ReturnStatement';
      })[0];
    }

    return {
      JSXElement: function(node) {
        if (hasProp(node.openingElement.attributes, 'key')) {
          return;
        }

        if (node.parent.type === 'ArrayExpression') {
          context.report({
            node: node,
            message: 'Missing "key" prop for element in array'
          });
        }
      },

      // Array.prototype.map
      CallExpression: function (node) {
        if (node.callee && node.callee.type !== 'MemberExpression') {
          return;
        }

        if (node.callee && node.callee.property && node.callee.property.name !== 'map') {
          return;
        }

        var fn = node.arguments[0];
        var isFn = fn && fn.type === 'FunctionExpression';
        var isArrFn = fn && fn.type === 'ArrowFunctionExpression';

        if (isArrFn && fn.body.type === 'JSXElement') {
          checkIteratorElement(fn.body);
        }

        if (isFn || isArrFn) {
          if (fn.body.type === 'BlockStatement') {
            var returnStatement = getReturnStatement(fn.body.body);
            if (returnStatement && returnStatement.argument) {
              checkIteratorElement(returnStatement.argument);
            }
          }
        }
      }
    };
  }
};

},{"jsx-ast-utils/hasProp":68}],15:[function(require,module,exports){
/**
 * @fileoverview Limit maximum of props on a single line in JSX
 * @author Yannick Croissant
 */

'use strict';

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'Limit maximum of props on a single line in JSX',
      category: 'Stylistic Issues',
      recommended: false
    },

    schema: [{
      type: 'object',
      properties: {
        maximum: {
          type: 'integer',
          minimum: 1
        }
      }
    }]
  },

  create: function (context) {

    var sourceCode = context.getSourceCode();
    var configuration = context.options[0] || {};
    var maximum = configuration.maximum || 1;

    function getPropName(propNode) {
      if (propNode.type === 'JSXSpreadAttribute') {
        return sourceCode.getText(propNode.argument);
      }
      return propNode.name.name;
    }

    return {
      JSXOpeningElement: function (node) {
        var props = {};

        node.attributes.forEach(function(decl) {
          var line = decl.loc.start.line;
          if (props[line]) {
            props[line].push(decl);
          } else {
            props[line] = [decl];
          }
        });

        for (var line in props) {
          if (!props.hasOwnProperty(line)) {
            continue;
          }
          if (props[line].length > maximum) {
            var name = getPropName(props[line][maximum]);
            context.report({
              node: props[line][maximum],
              message: 'Prop `' + name + '` must be placed on a new line'
            });
            break;
          }
        }
      }
    };
  }
};

},{}],16:[function(require,module,exports){
/**
 * @fileoverview Prevents usage of Function.prototype.bind and arrow functions
 *               in React component definition.
 * @author Daniel Lo Nigro <dan.cx>
 */
'use strict';

var Components = require('../util/Components');
var propName = require('jsx-ast-utils/propName');

// -----------------------------------------------------------------------------
// Rule Definition
// -----------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'Prevents usage of Function.prototype.bind and arrow functions in React component definition',
      category: 'Best Practices',
      recommended: false
    },

    schema: [{
      type: 'object',
      properties: {
        allowArrowFunctions: {
          default: false,
          type: 'boolean'
        },
        allowBind: {
          default: false,
          type: 'boolean'
        },
        ignoreRefs: {
          default: false,
          type: 'boolean'
        }
      },
      additionalProperties: false
    }]
  },

  create: Components.detect(function(context, components, utils) {
    var configuration = context.options[0] || {};

    return {
      CallExpression: function(node) {
        var callee = node.callee;
        if (
          !configuration.allowBind &&
          (callee.type !== 'MemberExpression' || callee.property.name !== 'bind')
        ) {
          return;
        }
        var ancestors = context.getAncestors(callee).reverse();
        for (var i = 0, j = ancestors.length; i < j; i++) {
          if (
            !configuration.allowBind &&
            (ancestors[i].type === 'MethodDefinition' && ancestors[i].key.name === 'render') ||
            (ancestors[i].type === 'Property' && ancestors[i].key.name === 'render')
          ) {
            if (utils.isReturningJSX(ancestors[i])) {
              context.report({
                node: callee,
                message: 'JSX props should not use .bind()'
              });
            }
            break;
          }
        }
      },

      JSXAttribute: function(node) {
        var isRef = configuration.ignoreRefs && propName(node) === 'ref';
        if (isRef || !node.value || !node.value.expression) {
          return;
        }
        var valueNode = node.value.expression;
        if (
          !configuration.allowBind &&
          valueNode.type === 'CallExpression' &&
          valueNode.callee.type === 'MemberExpression' &&
          valueNode.callee.property.name === 'bind'
        ) {
          context.report({
            node: node,
            message: 'JSX props should not use .bind()'
          });
        } else if (
          !configuration.allowArrowFunctions &&
          valueNode.type === 'ArrowFunctionExpression'
        ) {
          context.report({
            node: node,
            message: 'JSX props should not use arrow functions'
          });
        } else if (
          !configuration.allowBind &&
          valueNode.type === 'BindExpression'
        ) {
          context.report({
            node: node,
            message: 'JSX props should not use ::'
          });
        }
      }
    };
  })
};

},{"../util/Components":54,"jsx-ast-utils/propName":93}],17:[function(require,module,exports){
/**
 * @fileoverview Comments inside children section of tag should be placed inside braces.
 * @author Ben Vinegar
 */
'use strict';

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'Comments inside children section of tag should be placed inside braces',
      category: 'Possible Errors',
      recommended: false
    },

    schema: [{
      type: 'object',
      properties: {},
      additionalProperties: false
    }]
  },

  create: function(context) {
    function reportLiteralNode(node) {
      context.report(node, 'Comments inside children section of tag should be placed inside braces');
    }

    // --------------------------------------------------------------------------
    // Public
    // --------------------------------------------------------------------------

    return {
      Literal: function(node) {
        if (/^\s*\/(\/|\*)/m.test(node.value)) {
          // inside component, e.g. <div>literal</div>
          if (node.parent.type !== 'JSXAttribute' &&
              node.parent.type !== 'JSXExpressionContainer' &&
              node.parent.type.indexOf('JSX') !== -1) {
            reportLiteralNode(node);
          }
        }
      }
    };
  }
};

},{}],18:[function(require,module,exports){
/**
 * @fileoverview Enforce no duplicate props
 * @author Markus Ånöstam
 */

'use strict';

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'Enforce no duplicate props',
      category: 'Possible Errors',
      recommended: true
    },

    schema: [{
      type: 'object',
      properties: {
        ignoreCase: {
          type: 'boolean'
        }
      },
      additionalProperties: false
    }]
  },

  create: function (context) {

    var configuration = context.options[0] || {};
    var ignoreCase = configuration.ignoreCase || false;

    return {
      JSXOpeningElement: function (node) {
        var props = {};

        node.attributes.forEach(function(decl) {
          if (decl.type === 'JSXSpreadAttribute') {
            return;
          }

          var name = decl.name.name;

          if (ignoreCase) {
            name = name.toLowerCase();
          }

          if (props.hasOwnProperty(name)) {
            context.report({
              node: decl,
              message: 'No duplicate props allowed'
            });
          } else {
            props[name] = 1;
          }
        });
      }
    };
  }
};

},{}],19:[function(require,module,exports){
/**
 * @fileoverview Prevent using string literals in React component definition
 * @author Caleb Morris
 */
'use strict';

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'Prevent using string literals in React component definition',
      category: 'Stylistic Issues',
      recommended: false
    },

    schema: [{
      type: 'object',
      properties: {},
      additionalProperties: false
    }]
  },

  create: function(context) {

    function reportLiteralNode(node) {
      context.report({
        node: node,
        message: 'Missing JSX expression container around literal string'
      });
    }

    // --------------------------------------------------------------------------
    // Public
    // --------------------------------------------------------------------------

    return {

      Literal: function(node) {
        if (
         !/^[\s]+$/.test(node.value) &&
          node.parent &&
          node.parent.type !== 'JSXExpressionContainer' &&
          node.parent.type !== 'JSXAttribute' &&
          node.parent.type.indexOf('JSX') !== -1
        ) {
          reportLiteralNode(node);
        }
      }

    };

  }
};

},{}],20:[function(require,module,exports){
/**
 * @fileoverview Forbid target='_blank' attribute
 * @author Kevin Miller
 */
'use strict';

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'Forbid target="_blank" attribute without rel="noopener noreferrer"',
      category: 'Best Practices',
      recommended: false
    },
    schema: []
  },

  create: function(context) {
    return {
      JSXAttribute: function(node) {
        if (node.name.name === 'target' && node.value.value === '_blank') {
          var relFound = false;
          var attrs = node.parent.attributes;
          for (var idx in attrs) {
            if (attrs[idx].name && attrs[idx].name.name === 'rel') {
              var tags = attrs[idx].value.value.split(' ');
              if (tags.indexOf('noopener') >= 0 && tags.indexOf('noreferrer') >= 0) {
                relFound = true;
                break;
              }
            }
          }
          if (!relFound) {
            context.report(node, 'Using target="_blank" without rel="noopener noreferrer" ' +
            'is a security risk: see https://mathiasbynens.github.io/rel-noopener');
          }
        }
      }
    };
  }
};

},{}],21:[function(require,module,exports){
/**
 * @fileoverview Disallow undeclared variables in JSX
 * @author Yannick Croissant
 */

'use strict';

/**
 * Checks if a node name match the JSX tag convention.
 * @param {String} name - Name of the node to check.
 * @returns {boolean} Whether or not the node name match the JSX tag convention.
 */
var tagConvention = /^[a-z]|\-/;
function isTagName(name) {
  return tagConvention.test(name);
}

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'Disallow undeclared variables in JSX',
      category: 'Possible Errors',
      recommended: true
    },
    schema: []
  },

  create: function(context) {

    /**
     * Compare an identifier with the variables declared in the scope
     * @param {ASTNode} node - Identifier or JSXIdentifier node
     * @returns {void}
     */
    function checkIdentifierInJSX(node) {
      var scope = context.getScope();
      var variables = scope.variables;
      var i;
      var len;

      // Ignore 'this' keyword (also maked as JSXIdentifier when used in JSX)
      if (node.name === 'this') {
        return;
      }

      while (scope.type !== 'global') {
        scope = scope.upper;
        variables = scope.variables.concat(variables);
      }
      if (scope.childScopes.length) {
        variables = scope.childScopes[0].variables.concat(variables);
        // Temporary fix for babel-eslint
        if (scope.childScopes[0].childScopes.length) {
          variables = scope.childScopes[0].childScopes[0].variables.concat(variables);
        }
      }

      for (i = 0, len = variables.length; i < len; i++) {
        if (variables[i].name === node.name) {
          return;
        }
      }

      context.report({
        node: node,
        message: '\'' + node.name + '\' is not defined.'
      });
    }

    return {
      JSXOpeningElement: function(node) {
        switch (node.name.type) {
          case 'JSXIdentifier':
            node = node.name;
            if (isTagName(node.name)) {
              return;
            }
            break;
          case 'JSXMemberExpression':
            node = node.name;
            do {
              node = node.object;
            } while (node && node.type !== 'JSXIdentifier');
            break;
          case 'JSXNamespacedName':
            node = node.name.namespace;
            break;
          default:
            break;
        }
        checkIdentifierInJSX(node);
      }
    };

  }
};

},{}],22:[function(require,module,exports){
/**
 * @fileoverview Enforce PascalCase for user-defined JSX components
 * @author Jake Marsh
 */

'use strict';

var elementType = require('jsx-ast-utils/elementType');

// ------------------------------------------------------------------------------
// Constants
// ------------------------------------------------------------------------------

var PASCAL_CASE_REGEX = /^([A-Z0-9]|[A-Z0-9]+[a-z0-9]+(?:[A-Z0-9]+[a-z0-9]*)*)$/;
var COMPAT_TAG_REGEX = /^[a-z]|\-/;
var ALL_CAPS_TAG_REGEX = /^[A-Z0-9]+$/;

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'Enforce PascalCase for user-defined JSX components',
      category: 'Stylistic Issues',
      recommended: false
    },

    schema: [{
      type: 'object',
      properties: {
        allowAllCaps: {
          type: 'boolean'
        },
        ignore: {
          type: 'array'
        }
      },
      additionalProperties: false
    }]
  },

  create: function(context) {

    var configuration = context.options[0] || {};
    var allowAllCaps = configuration.allowAllCaps || false;
    var ignore = configuration.ignore || [];

    return {
      JSXOpeningElement: function(node) {
        var name = elementType(node);

        // Get namespace if the type is JSXNamespacedName or JSXMemberExpression
        if (name.indexOf(':') > -1) {
          name = name.substring(0, name.indexOf(':'));
        } else if (name.indexOf('.') > -1) {
          name = name.substring(0, name.indexOf('.'));
        }

        var isPascalCase = PASCAL_CASE_REGEX.test(name);
        var isCompatTag = COMPAT_TAG_REGEX.test(name);
        var isAllowedAllCaps = allowAllCaps && ALL_CAPS_TAG_REGEX.test(name);
        var isIgnored = ignore.indexOf(name) !== -1;

        if (!isPascalCase && !isCompatTag && !isAllowedAllCaps && !isIgnored) {
          context.report({
            node: node,
            message: 'Imported JSX component ' + name + ' must be in PascalCase'
          });
        }
      }
    };

  }
};

},{"jsx-ast-utils/elementType":67}],23:[function(require,module,exports){
/**
 * @fileoverview Enforce props alphabetical sorting
 * @author Ilya Volodin, Yannick Croissant
 */
'use strict';

var propName = require('jsx-ast-utils/propName');

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

function isCallbackPropName(name) {
  return /^on[A-Z]/.test(name);
}

module.exports = {
  meta: {
    docs: {
      description: 'Enforce props alphabetical sorting',
      category: 'Stylistic Issues',
      recommended: false
    },

    schema: [{
      type: 'object',
      properties: {
        // Whether callbacks (prefixed with "on") should be listed at the very end,
        // after all other props. Supersedes shorthandLast.
        callbacksLast: {
          type: 'boolean'
        },
        // Whether shorthand properties (without a value) should be listed first
        shorthandFirst: {
          type: 'boolean'
        },
        // Whether shorthand properties (without a value) should be listed last
        shorthandLast: {
          type: 'boolean'
        },
        ignoreCase: {
          type: 'boolean'
        }
      },
      additionalProperties: false
    }]
  },

  create: function(context) {

    var configuration = context.options[0] || {};
    var ignoreCase = configuration.ignoreCase || false;
    var callbacksLast = configuration.callbacksLast || false;
    var shorthandFirst = configuration.shorthandFirst || false;
    var shorthandLast = configuration.shorthandLast || false;

    return {
      JSXOpeningElement: function(node) {
        node.attributes.reduce(function(memo, decl, idx, attrs) {
          if (decl.type === 'JSXSpreadAttribute') {
            return attrs[idx + 1];
          }

          var previousPropName = propName(memo);
          var currentPropName = propName(decl);
          var previousValue = memo.value;
          var currentValue = decl.value;
          var previousIsCallback = isCallbackPropName(previousPropName);
          var currentIsCallback = isCallbackPropName(currentPropName);

          if (ignoreCase) {
            previousPropName = previousPropName.toLowerCase();
            currentPropName = currentPropName.toLowerCase();
          }

          if (callbacksLast) {
            if (!previousIsCallback && currentIsCallback) {
              // Entering the callback prop section
              return decl;
            }
            if (previousIsCallback && !currentIsCallback) {
              // Encountered a non-callback prop after a callback prop
              context.report({
                node: memo,
                message: 'Callbacks must be listed after all other props'
              });
              return memo;
            }
          }

          if (shorthandFirst) {
            if (currentValue && !previousValue) {
              return decl;
            }
            if (!currentValue && previousValue) {
              context.report({
                node: memo,
                message: 'Shorthand props must be listed before all other props'
              });
              return memo;
            }
          }

          if (shorthandLast) {
            if (!currentValue && previousValue) {
              return decl;
            }
            if (currentValue && !previousValue) {
              context.report({
                node: memo,
                message: 'Shorthand props must be listed after all other props'
              });
              return memo;
            }
          }

          if (currentPropName < previousPropName) {
            context.report({
              node: decl,
              message: 'Props should be sorted alphabetically'
            });
            return memo;
          }

          return decl;
        }, node.attributes[0]);
      }
    };
  }
};

},{"jsx-ast-utils/propName":93}],24:[function(require,module,exports){
/**
 * @fileoverview Validate spacing before closing bracket in JSX.
 * @author ryym
 */
'use strict';

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'Validate spacing before closing bracket in JSX',
      category: 'Stylistic Issues',
      recommended: false
    },
    fixable: 'code',

    schema: [{
      enum: ['always', 'never']
    }]
  },

  create: function(context) {

    var configuration = context.options[0] || 'always';
    var sourceCode = context.getSourceCode();

    var NEVER_MESSAGE = 'A space is forbidden before closing bracket';
    var ALWAYS_MESSAGE = 'A space is required before closing bracket';

    /**
     * Find the token before the closing bracket.
     * @param {ASTNode} node - The JSX element node.
     * @returns {Token} The token before the closing bracket.
     */
    function getTokenBeforeClosingBracket(node) {
      var attributes = node.attributes;
      if (attributes.length === 0) {
        return node.name;
      }
      return attributes[ attributes.length - 1 ];
    }

    // --------------------------------------------------------------------------
    // Public
    // --------------------------------------------------------------------------

    return {
      JSXOpeningElement: function(node) {
        if (!node.selfClosing) {
          return;
        }

        var leftToken = getTokenBeforeClosingBracket(node);
        var closingSlash = sourceCode.getTokenAfter(leftToken);

        if (leftToken.loc.end.line !== closingSlash.loc.start.line) {
          return;
        }

        if (configuration === 'always' && !sourceCode.isSpaceBetweenTokens(leftToken, closingSlash)) {
          context.report({
            loc: closingSlash.loc.start,
            message: ALWAYS_MESSAGE,
            fix: function(fixer) {
              return fixer.insertTextBefore(closingSlash, ' ');
            }
          });
        } else if (configuration === 'never' && sourceCode.isSpaceBetweenTokens(leftToken, closingSlash)) {
          context.report({
            loc: closingSlash.loc.start,
            message: NEVER_MESSAGE,
            fix: function(fixer) {
              var previousToken = sourceCode.getTokenBefore(closingSlash);
              return fixer.removeRange([previousToken.range[1], closingSlash.range[0]]);
            }
          });
        }
      }
    };

  }
};

},{}],25:[function(require,module,exports){
/**
 * @fileoverview Prevent React to be marked as unused
 * @author Glen Mailer
 */
'use strict';

var variableUtil = require('../util/variable');
var pragmaUtil = require('../util/pragma');

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'Prevent React to be marked as unused',
      category: 'Best Practices',
      recommended: true
    },
    schema: []
  },

  create: function(context) {

    var pragma = pragmaUtil.getFromContext(context);

    // --------------------------------------------------------------------------
    // Public
    // --------------------------------------------------------------------------

    return {

      JSXOpeningElement: function() {
        variableUtil.markVariableAsUsed(context, pragma);
      },

      BlockComment: function(node) {
        pragma = pragmaUtil.getFromNode(node) || pragma;
      }

    };

  }
};

},{"../util/pragma":55,"../util/variable":56}],26:[function(require,module,exports){
/**
 * @fileoverview Prevent variables used in JSX to be marked as unused
 * @author Yannick Croissant
 */
'use strict';

var variableUtil = require('../util/variable');

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'Prevent variables used in JSX to be marked as unused',
      category: 'Best Practices',
      recommended: true
    },
    schema: []
  },

  create: function(context) {

    return {
      JSXOpeningElement: function(node) {
        var name;
        if (node.name.namespace && node.name.namespace.name) {
          // <Foo:Bar>
          name = node.name.namespace.name;
        } else if (node.name.name) {
          // <Foo>
          name = node.name.name;
        } else if (node.name.object) {
          // <Foo...Bar>
          var parent = node.name.object;
          while (parent.object) {
            parent = parent.object;
          }
          name = parent.name;
        } else {
          return;
        }

        variableUtil.markVariableAsUsed(context, name);
      }

    };

  }
};

},{"../util/variable":56}],27:[function(require,module,exports){
/**
 * @fileoverview Prevent missing parentheses around multilines JSX
 * @author Yannick Croissant
 */
'use strict';

// ------------------------------------------------------------------------------
// Constants
// ------------------------------------------------------------------------------

var DEFAULTS = {
  declaration: true,
  assignment: true,
  return: true
};

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'Prevent missing parentheses around multilines JSX',
      category: 'Stylistic Issues',
      recommended: false
    },
    fixable: 'code',

    schema: [{
      type: 'object',
      properties: {
        declaration: {
          type: 'boolean'
        },
        assignment: {
          type: 'boolean'
        },
        return: {
          type: 'boolean'
        }
      },
      additionalProperties: false
    }]
  },

  create: function(context) {

    var sourceCode = context.getSourceCode();

    function isParenthesised(node) {
      var previousToken = sourceCode.getTokenBefore(node);
      var nextToken = sourceCode.getTokenAfter(node);

      return previousToken && nextToken &&
        previousToken.value === '(' && previousToken.range[1] <= node.range[0] &&
        nextToken.value === ')' && nextToken.range[0] >= node.range[1];
    }

    function isMultilines(node) {
      return node.loc.start.line !== node.loc.end.line;
    }

    function check(node) {
      if (!node || node.type !== 'JSXElement') {
        return;
      }

      if (!isParenthesised(node) && isMultilines(node)) {
        context.report({
          node: node,
          message: 'Missing parentheses around multilines JSX',
          fix: function(fixer) {
            return fixer.replaceText(node, '(' + sourceCode.getText(node) + ')');
          }
        });
      }
    }

    function isEnabled(type) {
      var userOptions = context.options[0] || {};
      if (({}).hasOwnProperty.call(userOptions, type)) {
        return userOptions[type];
      }
      return DEFAULTS[type];
    }

    // --------------------------------------------------------------------------
    // Public
    // --------------------------------------------------------------------------

    return {

      VariableDeclarator: function(node) {
        if (isEnabled('declaration')) {
          check(node.init);
        }
      },

      AssignmentExpression: function(node) {
        if (isEnabled('assignment')) {
          check(node.right);
        }
      },

      ReturnStatement: function(node) {
        if (isEnabled('return')) {
          check(node.argument);
        }
      }
    };

  }
};

},{}],28:[function(require,module,exports){
(function (process){
/**
 * @fileoverview Comments inside children section of tag should be placed inside braces.
 * @author Ben Vinegar
 * @deprecated
 */
'use strict';

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

var util = require('util');
var jsxNoCommentTextnodes = require('./jsx-no-comment-textnodes');
var isWarnedForDeprecation = false;

module.exports = {
  meta: {
    docs: {
      description: 'Comments inside children section of tag should be placed inside braces',
      category: 'Possible Errors',
      recommended: false
    },

    schema: [{
      type: 'object',
      properties: {},
      additionalProperties: false
    }]
  },

  create: function(context) {
    return util._extend(jsxNoCommentTextnodes.create(context), {
      Program: function() {
        if (isWarnedForDeprecation || /\=-(f|-format)=/.test(process.argv.join('='))) {
          return;
        }

        /* eslint-disable no-console */
        console.log('The react/no-comment-textnodes rule is deprecated. Please ' +
                    'use the react/jsx-no-comment-textnodes rule instead.');
        /* eslint-enable no-console */
        isWarnedForDeprecation = true;
      }
    });
  }
};

}).call(this,require('_process'))
},{"./jsx-no-comment-textnodes":17,"_process":97,"util":99}],29:[function(require,module,exports){
/**
 * @fileoverview Report when a DOM element is using both children and dangerouslySetInnerHTML
 * @author David Petersen
 */
'use strict';

var variableUtil = require('../util/variable');

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------
module.exports = {
  meta: {
    docs: {
      description: 'Report when a DOM element is using both children and dangerouslySetInnerHTML',
      category: '',
      recommended: false
    },
    schema: [] // no options
  },
  create: function(context) {
    function findSpreadVariable(name) {
      return variableUtil.variablesInScope(context).find(function (item) {
        return item.name === name;
      });
    }
    /**
     * Takes a ObjectExpression and returns the value of the prop if it has it
     * @param {object} node - ObjectExpression node
     * @param {string} propName - name of the prop to look for
     */
    function findObjectProp(node, propName) {
      if (!node.properties) {
        return false;
      }
      return node.properties.find(function(prop) {
        if (prop.type === 'Property') {
          return prop.key.name === propName;
        } else if (prop.type === 'ExperimentalSpreadProperty') {
          var variable = findSpreadVariable(prop.argument.name);
          if (variable && variable.defs[0].node.init) {
            return findObjectProp(variable.defs[0].node.init, propName);
          }
        }
        return false;
      });
    }

    /**
     * Takes a JSXElement and returns the value of the prop if it has it
     * @param {object} node - JSXElement node
     * @param {string} propName - name of the prop to look for
     */
    function findJsxProp(node, propName) {
      var attributes = node.openingElement.attributes;
      return attributes.find(function (attribute) {
        if (attribute.type === 'JSXSpreadAttribute') {
          var variable = findSpreadVariable(attribute.argument.name);
          if (variable && variable.defs[0].node.init) {
            return findObjectProp(variable.defs[0].node.init, propName);
          }
        }
        return attribute.name && attribute.name.name === propName;
      });
    }

    return {
      JSXElement: function (node) {
        var hasChildren = false;

        if (node.children.length) {
          hasChildren = true;
        } else if (findJsxProp(node, 'children')) {
          hasChildren = true;
        }

        if (
          node.openingElement.attributes
          && hasChildren
          && findJsxProp(node, 'dangerouslySetInnerHTML')
        ) {
          context.report(node, 'Only set one of `children` or `props.dangerouslySetInnerHTML`');
        }
      },
      CallExpression: function (node) {
        if (
          node.callee
          && node.callee.type === 'MemberExpression'
          && node.callee.property.name === 'createElement'
          && node.arguments.length > 1
        ) {
          var hasChildren = false;

          var props = node.arguments[1];

          if (props.type === 'Identifier') {
            var variable = variableUtil.variablesInScope(context).find(function (item) {
              return item.name === props.name;
            });
            if (variable && variable.defs[0].node.init) {
              props = variable.defs[0].node.init;
            }
          }

          var dangerously = findObjectProp(props, 'dangerouslySetInnerHTML');

          if (node.arguments.length === 2) {
            if (findObjectProp(props, 'children')) {
              hasChildren = true;
            }
          } else {
            hasChildren = true;
          }

          if (dangerously && hasChildren) {
            context.report(node, 'Only set one of `children` or `props.dangerouslySetInnerHTML`');
          }
        }
      }
    };
  }
};

},{"../util/variable":56}],30:[function(require,module,exports){
/**
 * @fileoverview Prevent usage of dangerous JSX props
 * @author Scott Andrews
 */
'use strict';

// ------------------------------------------------------------------------------
// Constants
// ------------------------------------------------------------------------------

var DANGEROUS_MESSAGE = 'Dangerous property \'{{name}}\' found';

var DANGEROUS_PROPERTY_NAMES = [
  'dangerouslySetInnerHTML'
];

var DANGEROUS_PROPERTIES = DANGEROUS_PROPERTY_NAMES.reduce(function (props, prop) {
  props[prop] = prop;
  return props;
}, Object.create(null));

// ------------------------------------------------------------------------------
// Helpers
// ------------------------------------------------------------------------------

/**
 * Checks if a node name match the JSX tag convention.
 * @param {String} name - Name of the node to check.
 * @returns {boolean} Whether or not the node name match the JSX tag convention.
 */
var tagConvention = /^[a-z]|\-/;
function isTagName(name) {
  return tagConvention.test(name);
}

/**
 * Checks if a JSX attribute is dangerous.
 * @param {String} name - Name of the attribute to check.
 * @returns {boolean} Whether or not the attribute is dnagerous.
 */
function isDangerous(name) {
  return name in DANGEROUS_PROPERTIES;
}

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'Prevent usage of dangerous JSX props',
      category: 'Best Practices',
      recommended: false
    },
    schema: []
  },

  create: function(context) {

    return {

      JSXAttribute: function(node) {
        if (isTagName(node.parent.name.name) && isDangerous(node.name.name)) {
          context.report({
            node: node,
            message: DANGEROUS_MESSAGE,
            data: {
              name: node.name.name
            }
          });
        }
      }

    };

  }
};

},{}],31:[function(require,module,exports){
/**
 * @fileoverview Prevent usage of deprecated methods
 * @author Yannick Croissant
 * @author Scott Feeney
 */
'use strict';

var pragmaUtil = require('../util/pragma');
var versionUtil = require('../util/version');

// ------------------------------------------------------------------------------
// Constants
// ------------------------------------------------------------------------------

var DEPRECATED_MESSAGE = '{{oldMethod}} is deprecated since React {{version}}{{newMethod}}';

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'Prevent usage of deprecated methods',
      category: 'Best Practices',
      recommended: true
    },
    schema: []
  },

  create: function(context) {

    var sourceCode = context.getSourceCode();
    var pragma = pragmaUtil.getFromContext(context);

    function getDeprecated() {
      var deprecated = {
        MemberExpression: {}
      };
      // 0.12.0
      deprecated.MemberExpression[pragma + '.renderComponent'] = ['0.12.0', pragma + '.render'];
      deprecated.MemberExpression[pragma + '.renderComponentToString'] = ['0.12.0', pragma + '.renderToString'];
      deprecated.MemberExpression[pragma + '.renderComponentToStaticMarkup'] = [
        '0.12.0',
        pragma + '.renderToStaticMarkup'
      ];
      deprecated.MemberExpression[pragma + '.isValidComponent'] = ['0.12.0', pragma + '.isValidElement'];
      deprecated.MemberExpression[pragma + '.PropTypes.component'] = ['0.12.0', pragma + '.PropTypes.element'];
      deprecated.MemberExpression[pragma + '.PropTypes.renderable'] = ['0.12.0', pragma + '.PropTypes.node'];
      deprecated.MemberExpression[pragma + '.isValidClass'] = ['0.12.0'];
      deprecated.MemberExpression['this.transferPropsTo'] = ['0.12.0', 'spread operator ({...})'];
      // 0.13.0
      deprecated.MemberExpression[pragma + '.addons.classSet'] = ['0.13.0', 'the npm module classnames'];
      deprecated.MemberExpression[pragma + '.addons.cloneWithProps'] = ['0.13.0', pragma + '.cloneElement'];
      // 0.14.0
      deprecated.MemberExpression[pragma + '.render'] = ['0.14.0', 'ReactDOM.render'];
      deprecated.MemberExpression[pragma + '.unmountComponentAtNode'] = ['0.14.0', 'ReactDOM.unmountComponentAtNode'];
      deprecated.MemberExpression[pragma + '.findDOMNode'] = ['0.14.0', 'ReactDOM.findDOMNode'];
      deprecated.MemberExpression[pragma + '.renderToString'] = ['0.14.0', 'ReactDOMServer.renderToString'];
      deprecated.MemberExpression[pragma + '.renderToStaticMarkup'] = ['0.14.0', 'ReactDOMServer.renderToStaticMarkup'];
      // 15.0.0
      deprecated.MemberExpression[pragma + '.addons.LinkedStateMixin'] = ['15.0.0'];
      deprecated.MemberExpression['ReactPerf.printDOM'] = ['15.0.0', 'ReactPerf.printOperations'];
      deprecated.MemberExpression['Perf.printDOM'] = ['15.0.0', 'Perf.printOperations'];
      deprecated.MemberExpression['ReactPerf.getMeasurementsSummaryMap'] = ['15.0.0', 'ReactPerf.getWasted'];
      deprecated.MemberExpression['Perf.getMeasurementsSummaryMap'] = ['15.0.0', 'Perf.getWasted'];

      return deprecated;
    }

    function isDeprecated(type, method) {
      var deprecated = getDeprecated();

      return (
        deprecated[type] &&
        deprecated[type][method] &&
        versionUtil.test(context, deprecated[type][method][0])
      );
    }

    // --------------------------------------------------------------------------
    // Public
    // --------------------------------------------------------------------------

    return {

      MemberExpression: function(node) {
        var method = sourceCode.getText(node);
        if (!isDeprecated(node.type, method)) {
          return;
        }
        var deprecated = getDeprecated();
        context.report({
          node: node,
          message: DEPRECATED_MESSAGE,
          data: {
            oldMethod: method,
            version: deprecated[node.type][method][0],
            newMethod: deprecated[node.type][method][1] ? ', use ' + deprecated[node.type][method][1] + ' instead' : ''
          }
        });
      },

      BlockComment: function(node) {
        pragma = pragmaUtil.getFromNode(node) || pragma;
      }

    };

  }
};

},{"../util/pragma":55,"../util/version":57}],32:[function(require,module,exports){
/**
 * @fileoverview Prevent usage of setState in componentDidMount
 * @author Yannick Croissant
 */
'use strict';

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'Prevent usage of setState in componentDidMount',
      category: 'Best Practices',
      recommended: false
    },

    schema: [{
      enum: ['disallow-in-func']
    }]
  },

  create: function(context) {

    var mode = context.options[0] || 'allow-in-func';

    // --------------------------------------------------------------------------
    // Public
    // --------------------------------------------------------------------------

    return {

      CallExpression: function(node) {
        var callee = node.callee;
        if (
          callee.type !== 'MemberExpression' ||
          callee.object.type !== 'ThisExpression' ||
          callee.property.name !== 'setState'
        ) {
          return;
        }
        var ancestors = context.getAncestors(callee).reverse();
        var depth = 0;
        for (var i = 0, j = ancestors.length; i < j; i++) {
          if (/Function(Expression|Declaration)$/.test(ancestors[i].type)) {
            depth++;
          }
          if (
            (ancestors[i].type !== 'Property' && ancestors[i].type !== 'MethodDefinition') ||
            ancestors[i].key.name !== 'componentDidMount' ||
            (mode !== 'disallow-in-func' && depth > 1)
          ) {
            continue;
          }
          context.report({
            node: callee,
            message: 'Do not use setState in componentDidMount'
          });
          break;
        }
      }
    };

  }
};

},{}],33:[function(require,module,exports){
/**
 * @fileoverview Prevent usage of setState in componentDidUpdate
 * @author Yannick Croissant
 */
'use strict';

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'Prevent usage of setState in componentDidUpdate',
      category: 'Best Practices',
      recommended: false
    },

    schema: [{
      enum: ['disallow-in-func']
    }]
  },

  create: function(context) {

    var mode = context.options[0] || 'allow-in-func';

    // --------------------------------------------------------------------------
    // Public
    // --------------------------------------------------------------------------

    return {

      CallExpression: function(node) {
        var callee = node.callee;
        if (
          callee.type !== 'MemberExpression' ||
          callee.object.type !== 'ThisExpression' ||
          callee.property.name !== 'setState'
        ) {
          return;
        }
        var ancestors = context.getAncestors(callee).reverse();
        var depth = 0;
        for (var i = 0, j = ancestors.length; i < j; i++) {
          if (/Function(Expression|Declaration)$/.test(ancestors[i].type)) {
            depth++;
          }
          if (
            (ancestors[i].type !== 'Property' && ancestors[i].type !== 'MethodDefinition') ||
            ancestors[i].key.name !== 'componentDidUpdate' ||
            (mode !== 'disallow-in-func' && depth > 1)
          ) {
            continue;
          }
          context.report({
            node: callee,
            message: 'Do not use setState in componentDidUpdate'
          });
          break;
        }
      }
    };

  }
};

},{}],34:[function(require,module,exports){
/**
 * @fileoverview Prevent direct mutation of this.state
 * @author David Petersen
 */
'use strict';

var Components = require('../util/Components');

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'Prevent direct mutation of this.state',
      category: 'Possible Errors',
      recommended: true
    }
  },

  create: Components.detect(function(context, components, utils) {

    /**
     * Checks if the component is valid
     * @param {Object} component The component to process
     * @returns {Boolean} True if the component is valid, false if not.
     */
    function isValid(component) {
      return Boolean(component && !component.mutateSetState);
    }

    /**
     * Reports undeclared proptypes for a given component
     * @param {Object} component The component to process
     */
    function reportMutations(component) {
      var mutation;
      for (var i = 0, j = component.mutations.length; i < j; i++) {
        mutation = component.mutations[i];
        context.report({
          node: mutation,
          message: 'Do not mutate state directly. Use setState().'
        });
      }
    }

    // --------------------------------------------------------------------------
    // Public
    // --------------------------------------------------------------------------

    return {
      AssignmentExpression: function(node) {
        var item;
        if (!node.left || !node.left.object || !node.left.object.object) {
          return;
        }
        item = node.left.object;
        while (item.object.property) {
          item = item.object;
        }
        if (
          item.object.type === 'ThisExpression' &&
          item.property.name === 'state'
        ) {
          var component = components.get(utils.getParentComponent());
          var mutations = component && component.mutations || [];
          mutations.push(node.left.object);
          components.set(node, {
            mutateSetState: true,
            mutations: mutations
          });
        }
      },

      'Program:exit': function() {
        var list = components.list();
        for (var component in list) {
          if (!list.hasOwnProperty(component) || isValid(list[component])) {
            continue;
          }
          reportMutations(list[component]);
        }
      }
    };

  })
};

},{"../util/Components":54}],35:[function(require,module,exports){
/**
 * @fileoverview Prevent usage of findDOMNode
 * @author Yannick Croissant
 */
'use strict';

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'Prevent usage of findDOMNode',
      category: 'Best Practices',
      recommended: true
    },
    schema: []
  },

  create: function(context) {

    // --------------------------------------------------------------------------
    // Public
    // --------------------------------------------------------------------------

    return {

      CallExpression: function(node) {
        var callee = node.callee;

        var isfindDOMNode =
          (callee.object && callee.object.callee && callee.object.callee.name === 'findDOMNode') ||
          (callee.property && callee.property.name === 'findDOMNode')
        ;

        if (!isfindDOMNode) {
          return;
        }

        context.report({
          node: callee,
          message: 'Do not use findDOMNode'
        });
      }
    };

  }
};

},{}],36:[function(require,module,exports){
/**
 * @fileoverview Prevent usage of isMounted
 * @author Joe Lencioni
 */
'use strict';

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'Prevent usage of isMounted',
      category: 'Best Practices',
      recommended: true
    },
    schema: []
  },

  create: function(context) {

    // --------------------------------------------------------------------------
    // Public
    // --------------------------------------------------------------------------

    return {

      CallExpression: function(node) {
        var callee = node.callee;
        if (callee.type !== 'MemberExpression') {
          return;
        }
        if (callee.object.type !== 'ThisExpression' || callee.property.name !== 'isMounted') {
          return;
        }
        var ancestors = context.getAncestors(callee);
        for (var i = 0, j = ancestors.length; i < j; i++) {
          if (ancestors[i].type === 'Property' || ancestors[i].type === 'MethodDefinition') {
            context.report({
              node: callee,
              message: 'Do not use isMounted'
            });
            break;
          }
        }
      }
    };

  }
};

},{}],37:[function(require,module,exports){
/**
 * @fileoverview Prevent multiple component definition per file
 * @author Yannick Croissant
 */
'use strict';

var Components = require('../util/Components');

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'Prevent multiple component definition per file',
      category: 'Stylistic Issues',
      recommended: false
    },

    schema: [{
      type: 'object',
      properties: {
        ignoreStateless: {
          default: false,
          type: 'boolean'
        }
      },
      additionalProperties: false
    }]
  },

  create: Components.detect(function(context, components) {

    var configuration = context.options[0] || {};
    var ignoreStateless = configuration.ignoreStateless || false;

    var MULTI_COMP_MESSAGE = 'Declare only one React component per file';

    /**
     * Checks if the component is ignored
     * @param {Object} component The component being checked.
     * @returns {Boolean} True if the component is ignored, false if not.
     */
    function isIgnored(component) {
      return ignoreStateless && /Function/.test(component.node.type);
    }

    // --------------------------------------------------------------------------
    // Public
    // --------------------------------------------------------------------------

    return {
      'Program:exit': function() {
        if (components.length() <= 1) {
          return;
        }

        var list = components.list();
        var i = 0;

        for (var component in list) {
          if (!list.hasOwnProperty(component) || isIgnored(list[component]) || ++i === 1) {
            continue;
          }
          context.report({
            node: list[component].node,
            message: MULTI_COMP_MESSAGE
          });
        }
      }
    };
  })
};

},{"../util/Components":54}],38:[function(require,module,exports){
/**
 * @fileoverview Prevent usage of the return value of React.render
 * @author Dustan Kasten
 */
'use strict';

var versionUtil = require('../util/version');

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'Prevent usage of the return value of React.render',
      category: 'Best Practices',
      recommended: true
    },
    schema: []
  },

  create: function(context) {

    // --------------------------------------------------------------------------
    // Public
    // --------------------------------------------------------------------------

    return {

      CallExpression: function(node) {
        var callee = node.callee;
        var parent = node.parent;
        if (callee.type !== 'MemberExpression') {
          return;
        }

        var calleeObjectName = /^ReactDOM$/;
        if (versionUtil.test(context, '15.0.0')) {
          calleeObjectName = /^ReactDOM$/;
        } else if (versionUtil.test(context, '0.14.0')) {
          calleeObjectName = /^React(DOM)?$/;
        } else if (versionUtil.test(context, '0.13.0')) {
          calleeObjectName = /^React$/;
        }

        if (
          callee.object.type !== 'Identifier' ||
          !calleeObjectName.test(callee.object.name) ||
          callee.property.name !== 'render'
        ) {
          return;
        }

        if (
          parent.type === 'VariableDeclarator' ||
          parent.type === 'Property' ||
          parent.type === 'ReturnStatement' ||
          parent.type === 'ArrowFunctionExpression'
        ) {
          context.report({
            node: callee,
            message: 'Do not depend on the return value from ' + callee.object.name + '.render'
          });
        }
      }
    };

  }
};

},{"../util/version":57}],39:[function(require,module,exports){
/**
 * @fileoverview Prevent usage of setState
 * @author Mark Dalgleish
 */
'use strict';

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'Prevent usage of setState',
      category: 'Stylistic Issues',
      recommended: false
    },
    schema: []
  },

  create: function(context) {

    // --------------------------------------------------------------------------
    // Public
    // --------------------------------------------------------------------------

    return {

      CallExpression: function(node) {
        var callee = node.callee;
        if (callee.type !== 'MemberExpression') {
          return;
        }
        if (callee.object.type !== 'ThisExpression' || callee.property.name !== 'setState') {
          return;
        }
        var ancestors = context.getAncestors(callee);
        for (var i = 0, j = ancestors.length; i < j; i++) {
          if (ancestors[i].type === 'Property' || ancestors[i].type === 'MethodDefinition') {
            context.report({
              node: callee,
              message: 'Do not use setState'
            });
            break;
          }
        }
      }
    };

  }
};

},{}],40:[function(require,module,exports){
/**
 * @fileoverview Prevent string definitions for references and prevent referencing this.refs
 * @author Tom Hastjarjanto
 */
'use strict';

var Components = require('../util/Components');

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'Prevent string definitions for references and prevent referencing this.refs',
      category: 'Best Practices',
      recommended: false
    },
    schema: []
  },

  create: Components.detect(function(context, components, utils) {
    /**
     * Checks if we are using refs
     * @param {ASTNode} node The AST node being checked.
     * @returns {Boolean} True if we are using refs, false if not.
     */
    function isRefsUsage(node) {
      return Boolean(
        (
          utils.getParentES6Component() ||
          utils.getParentES5Component()
        ) &&
        node.object.type === 'ThisExpression' &&
        node.property.name === 'refs'
      );
    }

    /**
     * Checks if we are using a ref attribute
     * @param {ASTNode} node The AST node being checked.
     * @returns {Boolean} True if we are using a ref attribute, false if not.
     */
    function isRefAttribute(node) {
      return Boolean(
        node.type === 'JSXAttribute' &&
        node.name &&
        node.name.name === 'ref'
      );
    }

    /**
     * Checks if a node contains a string value
     * @param {ASTNode} node The AST node being checked.
     * @returns {Boolean} True if the node contains a string value, false if not.
     */
    function containsStringLiteral(node) {
      return Boolean(
        node.value &&
        node.value.type === 'Literal' &&
        typeof node.value.value === 'string'
      );
    }

    /**
     * Checks if a node contains a string value within a jsx expression
     * @param {ASTNode} node The AST node being checked.
     * @returns {Boolean} True if the node contains a string value within a jsx expression, false if not.
     */
    function containsStringExpressionContainer(node) {
      return Boolean(
        node.value &&
        node.value.type === 'JSXExpressionContainer' &&
        node.value.expression &&
        node.value.expression.type === 'Literal' &&
        typeof node.value.expression.value === 'string'
      );
    }

    return {
      MemberExpression: function(node) {
        if (isRefsUsage(node)) {
          context.report({
            node: node,
            message: 'Using this.refs is deprecated.'
          });
        }
      },
      JSXAttribute: function(node) {
        if (
          isRefAttribute(node) &&
          (containsStringLiteral(node) || containsStringExpressionContainer(node))
        ) {
          context.report({
            node: node,
            message: 'Using string literals in ref attributes is deprecated.'
          });
        }
      }
    };
  })
};

},{"../util/Components":54}],41:[function(require,module,exports){
/**
 * @fileoverview Prevent usage of unknown DOM property
 * @author Yannick Croissant
 */
'use strict';

// ------------------------------------------------------------------------------
// Constants
// ------------------------------------------------------------------------------

var DEFAULTS = {
  ignore: []
};

var UNKNOWN_MESSAGE = 'Unknown property \'{{name}}\' found, use \'{{standardName}}\' instead';

var DOM_ATTRIBUTE_NAMES = {
  'accept-charset': 'acceptCharset',
  class: 'className',
  for: 'htmlFor',
  'http-equiv': 'httpEquiv'
};

var SVGDOM_ATTRIBUTE_NAMES = {
  'accent-height': 'accentHeight',
  'alignment-baseline': 'alignmentBaseline',
  'arabic-form': 'arabicForm',
  'baseline-shift': 'baselineShift',
  'cap-height': 'capHeight',
  'clip-path': 'clipPath',
  'clip-rule': 'clipRule',
  'color-interpolation': 'colorInterpolation',
  'color-interpolation-filters': 'colorInterpolationFilters',
  'color-profile': 'colorProfile',
  'color-rendering': 'colorRendering',
  'dominant-baseline': 'dominantBaseline',
  'enable-background': 'enableBackground',
  'fill-opacity': 'fillOpacity',
  'fill-rule': 'fillRule',
  'flood-color': 'floodColor',
  'flood-opacity': 'floodOpacity',
  'font-family': 'fontFamily',
  'font-size': 'fontSize',
  'font-size-adjust': 'fontSizeAdjust',
  'font-stretch': 'fontStretch',
  'font-style': 'fontStyle',
  'font-variant': 'fontVariant',
  'font-weight': 'fontWeight',
  'glyph-name': 'glyphName',
  'glyph-orientation-horizontal': 'glyphOrientationHorizontal',
  'glyph-orientation-vertical': 'glyphOrientationVertical',
  'horiz-adv-x': 'horizAdvX',
  'horiz-origin-x': 'horizOriginX',
  'image-rendering': 'imageRendering',
  'letter-spacing': 'letterSpacing',
  'lighting-color': 'lightingColor',
  'marker-end': 'markerEnd',
  'marker-mid': 'markerMid',
  'marker-start': 'markerStart',
  'overline-position': 'overlinePosition',
  'overline-thickness': 'overlineThickness',
  'paint-order': 'paintOrder',
  'panose-1': 'panose1',
  'pointer-events': 'pointerEvents',
  'rendering-intent': 'renderingIntent',
  'shape-rendering': 'shapeRendering',
  'stop-color': 'stopColor',
  'stop-opacity': 'stopOpacity',
  'strikethrough-position': 'strikethroughPosition',
  'strikethrough-thickness': 'strikethroughThickness',
  'stroke-dasharray': 'strokeDasharray',
  'stroke-dashoffset': 'strokeDashoffset',
  'stroke-linecap': 'strokeLinecap',
  'stroke-linejoin': 'strokeLinejoin',
  'stroke-miterlimit': 'strokeMiterlimit',
  'stroke-opacity': 'strokeOpacity',
  'stroke-width': 'strokeWidth',
  'text-anchor': 'textAnchor',
  'text-decoration': 'textDecoration',
  'text-rendering': 'textRendering',
  'underline-position': 'underlinePosition',
  'underline-thickness': 'underlineThickness',
  'unicode-bidi': 'unicodeBidi',
  'unicode-range': 'unicodeRange',
  'units-per-em': 'unitsPerEm',
  'v-alphabetic': 'vAlphabetic',
  'v-hanging': 'vHanging',
  'v-ideographic': 'vIdeographic',
  'v-mathematical': 'vMathematical',
  'vector-effect': 'vectorEffect',
  'vert-adv-y': 'vertAdvY',
  'vert-origin-x': 'vertOriginX',
  'vert-origin-y': 'vertOriginY',
  'word-spacing': 'wordSpacing',
  'writing-mode': 'writingMode',
  'x-height': 'xHeight',
  'xlink:actuate': 'xlinkActuate',
  'xlink:arcrole': 'xlinkArcrole',
  'xlink:href': 'xlinkHref',
  'xlink:role': 'xlinkRole',
  'xlink:show': 'xlinkShow',
  'xlink:title': 'xlinkTitle',
  'xlink:type': 'xlinkType',
  'xml:base': 'xmlBase',
  'xml:lang': 'xmlLang',
  'xml:space': 'xmlSpace'
};

var DOM_PROPERTY_NAMES = [
  // Standard
  'acceptCharset', 'accessKey', 'allowFullScreen', 'allowTransparency', 'autoComplete', 'autoFocus', 'autoPlay',
  'cellPadding', 'cellSpacing', 'charSet', 'classID', 'className', 'colSpan', 'contentEditable', 'contextMenu',
  'crossOrigin', 'dateTime', 'encType', 'formAction', 'formEncType', 'formMethod', 'formNoValidate', 'formTarget',
  'frameBorder', 'hrefLang', 'htmlFor', 'httpEquiv', 'inputMode', 'keyParams', 'keyType', 'marginHeight', 'marginWidth',
  'maxLength', 'mediaGroup', 'minLength', 'noValidate', 'onAnimationEnd', 'onAnimationIteration', 'onAnimationStart',
  'onBlur', 'onChange', 'onClick', 'onContextMenu', 'onCopy', 'onCompositionEnd', 'onCompositionStart',
  'onCompositionUpdate', 'onCut', 'onDoubleClick', 'onDrag', 'onDragEnd', 'onDragEnter', 'onDragExit', 'onDragLeave',
  'onError', 'onFocus', 'onInput', 'onKeyDown', 'onKeyPress', 'onKeyUp', 'onLoad', 'onWheel', 'onDragOver',
  'onDragStart', 'onDrop', 'onMouseDown', 'onMouseEnter', 'onMouseLeave', 'onMouseMove', 'onMouseOut', 'onMouseOver',
  'onMouseUp', 'onPaste', 'onScroll', 'onSelect', 'onSubmit', 'onTransitionEnd', 'radioGroup', 'readOnly', 'rowSpan',
  'spellCheck', 'srcDoc', 'srcLang', 'srcSet', 'tabIndex', 'useMap',
  // Non standard
  'autoCapitalize', 'autoCorrect',
  'autoSave',
  'itemProp', 'itemScope', 'itemType', 'itemRef', 'itemID'
];

// ------------------------------------------------------------------------------
// Helpers
// ------------------------------------------------------------------------------

/**
 * Checks if a node matches the JSX tag convention.
 * @param {Object} node - JSX element being tested.
 * @returns {boolean} Whether or not the node name match the JSX tag convention.
 */
var tagConvention = /^[a-z][^-]*$/;
function isTagName(node) {
  if (tagConvention.test(node.parent.name.name)) {
    // http://www.w3.org/TR/custom-elements/#type-extension-semantics
    return !node.parent.attributes.some(function(attrNode) {
      return (
        attrNode.type === 'JSXAttribute' &&
        attrNode.name.type === 'JSXIdentifier' &&
        attrNode.name.name === 'is'
      );
    });
  }
  return false;
}

/**
 * Get the standard name of the attribute.
 * @param {String} name - Name of the attribute.
 * @returns {String} The standard name of the attribute.
 */
function getStandardName(name) {
  if (DOM_ATTRIBUTE_NAMES[name]) {
    return DOM_ATTRIBUTE_NAMES[name];
  }
  if (SVGDOM_ATTRIBUTE_NAMES[name]) {
    return SVGDOM_ATTRIBUTE_NAMES[name];
  }
  var i;
  var found = DOM_PROPERTY_NAMES.some(function(element, index) {
    i = index;
    return element.toLowerCase() === name;
  });
  return found ? DOM_PROPERTY_NAMES[i] : null;
}

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'Prevent usage of unknown DOM property',
      category: 'Possible Errors',
      recommended: true
    },
    fixable: 'code',

    schema: [{
      type: 'object',
      properties: {
        ignore: {
          type: 'array',
          items: {
            type: 'string'
          }
        }
      },
      additionalProperties: false
    }]
  },

  create: function(context) {

    function getIgnoreConfig() {
      return context.options[0] && context.options[0].ignore || DEFAULTS.ignore;
    }

    var sourceCode = context.getSourceCode();

    return {

      JSXAttribute: function(node) {
        var ignoreNames = getIgnoreConfig();
        var name = sourceCode.getText(node.name);
        var standardName = getStandardName(name);
        if (!isTagName(node) || !standardName || ignoreNames.indexOf(name) >= 0) {
          return;
        }
        context.report({
          node: node,
          message: UNKNOWN_MESSAGE,
          data: {
            name: name,
            standardName: standardName
          },
          fix: function(fixer) {
            return fixer.replaceText(node.name, standardName);
          }
        });
      }
    };

  }
};

},{}],42:[function(require,module,exports){
/**
 * @fileoverview Enforce ES5 or ES6 class for React Components
 * @author Dan Hamilton
 */
'use strict';

var Components = require('../util/Components');

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'Enforce ES5 or ES6 class for React Components',
      category: 'Stylistic Issues',
      recommended: false
    },

    schema: [{
      enum: ['always', 'never']
    }]
  },

  create: Components.detect(function(context, components, utils) {
    var configuration = context.options[0] || 'always';

    return {
      ObjectExpression: function(node) {
        if (utils.isES5Component(node) && configuration === 'always') {
          context.report({
            node: node,
            message: 'Component should use es6 class instead of createClass'
          });
        }
      },
      ClassDeclaration: function(node) {
        if (utils.isES6Component(node) && configuration === 'never') {
          context.report({
            node: node,
            message: 'Component should use createClass instead of es6 class'
          });
        }
      }
    };
  })
};

},{"../util/Components":54}],43:[function(require,module,exports){
/**
 * @fileoverview Enforce stateless components to be written as a pure function
 * @author Yannick Croissant
 * @author Alberto Rodríguez
 * @copyright 2015 Alberto Rodríguez. All rights reserved.
 */
'use strict';

var Components = require('../util/Components');
var versionUtil = require('../util/version');

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'Enforce stateless components to be written as a pure function',
      category: 'Stylistic Issues',
      recommended: false
    },
    schema: [{
      type: 'object',
      properties: {
        ignorePureComponents: {
          default: false,
          type: 'boolean'
        }
      },
      additionalProperties: false
    }]
  },

  create: Components.detect(function(context, components, utils) {

    var configuration = context.options[0] || {};
    var ignorePureComponents = configuration.ignorePureComponents || false;

    var sourceCode = context.getSourceCode();

    // --------------------------------------------------------------------------
    // Public
    // --------------------------------------------------------------------------

    /**
     * Get properties name
     * @param {Object} node - Property.
     * @returns {String} Property name.
     */
    function getPropertyName(node) {
      // Special case for class properties
      // (babel-eslint does not expose property name so we have to rely on tokens)
      if (node.type === 'ClassProperty') {
        var tokens = context.getFirstTokens(node, 2);
        return tokens[1] && tokens[1].type === 'Identifier' ? tokens[1].value : tokens[0].value;
      }

      return node.key.name;
    }

    /**
     * Get properties for a given AST node
     * @param {ASTNode} node The AST node being checked.
     * @returns {Array} Properties array.
     */
    function getComponentProperties(node) {
      switch (node.type) {
        case 'ClassExpression':
        case 'ClassDeclaration':
          return node.body.body;
        case 'ObjectExpression':
          return node.properties;
        default:
          return [];
      }
    }

    /**
     * Checks whether a given array of statements is a single call of `super`.
     * @see ESLint no-useless-constructor rule
     * @param {ASTNode[]} body - An array of statements to check.
     * @returns {boolean} `true` if the body is a single call of `super`.
     */
    function isSingleSuperCall(body) {
      return (
        body.length === 1 &&
        body[0].type === 'ExpressionStatement' &&
        body[0].expression.type === 'CallExpression' &&
        body[0].expression.callee.type === 'Super'
      );
    }

    /**
     * Checks whether a given node is a pattern which doesn't have any side effects.
     * Default parameters and Destructuring parameters can have side effects.
     * @see ESLint no-useless-constructor rule
     * @param {ASTNode} node - A pattern node.
     * @returns {boolean} `true` if the node doesn't have any side effects.
     */
    function isSimple(node) {
      return node.type === 'Identifier' || node.type === 'RestElement';
    }

    /**
     * Checks whether a given array of expressions is `...arguments` or not.
     * `super(...arguments)` passes all arguments through.
     * @see ESLint no-useless-constructor rule
     * @param {ASTNode[]} superArgs - An array of expressions to check.
     * @returns {boolean} `true` if the superArgs is `...arguments`.
     */
    function isSpreadArguments(superArgs) {
      return (
        superArgs.length === 1 &&
        superArgs[0].type === 'SpreadElement' &&
        superArgs[0].argument.type === 'Identifier' &&
        superArgs[0].argument.name === 'arguments'
      );
    }

    /**
     * Checks whether given 2 nodes are identifiers which have the same name or not.
     * @see ESLint no-useless-constructor rule
     * @param {ASTNode} ctorParam - A node to check.
     * @param {ASTNode} superArg - A node to check.
     * @returns {boolean} `true` if the nodes are identifiers which have the same
     *      name.
     */
    function isValidIdentifierPair(ctorParam, superArg) {
      return (
        ctorParam.type === 'Identifier' &&
        superArg.type === 'Identifier' &&
        ctorParam.name === superArg.name
      );
    }

    /**
     * Checks whether given 2 nodes are a rest/spread pair which has the same values.
     * @see ESLint no-useless-constructor rule
     * @param {ASTNode} ctorParam - A node to check.
     * @param {ASTNode} superArg - A node to check.
     * @returns {boolean} `true` if the nodes are a rest/spread pair which has the
     *      same values.
     */
    function isValidRestSpreadPair(ctorParam, superArg) {
      return (
        ctorParam.type === 'RestElement' &&
        superArg.type === 'SpreadElement' &&
        isValidIdentifierPair(ctorParam.argument, superArg.argument)
      );
    }

    /**
     * Checks whether given 2 nodes have the same value or not.
     * @see ESLint no-useless-constructor rule
     * @param {ASTNode} ctorParam - A node to check.
     * @param {ASTNode} superArg - A node to check.
     * @returns {boolean} `true` if the nodes have the same value or not.
     */
    function isValidPair(ctorParam, superArg) {
      return (
        isValidIdentifierPair(ctorParam, superArg) ||
        isValidRestSpreadPair(ctorParam, superArg)
      );
    }

    /**
     * Checks whether the parameters of a constructor and the arguments of `super()`
     * have the same values or not.
     * @see ESLint no-useless-constructor rule
     * @param {ASTNode} ctorParams - The parameters of a constructor to check.
     * @param {ASTNode} superArgs - The arguments of `super()` to check.
     * @returns {boolean} `true` if those have the same values.
     */
    function isPassingThrough(ctorParams, superArgs) {
      if (ctorParams.length !== superArgs.length) {
        return false;
      }

      for (var i = 0; i < ctorParams.length; ++i) {
        if (!isValidPair(ctorParams[i], superArgs[i])) {
          return false;
        }
      }

      return true;
    }

    /**
     * Checks whether the constructor body is a redundant super call.
     * @see ESLint no-useless-constructor rule
     * @param {Array} body - constructor body content.
     * @param {Array} ctorParams - The params to check against super call.
     * @returns {boolean} true if the construtor body is redundant
     */
    function isRedundantSuperCall(body, ctorParams) {
      return (
        isSingleSuperCall(body) &&
        ctorParams.every(isSimple) &&
        (
          isSpreadArguments(body[0].expression.arguments) ||
          isPassingThrough(ctorParams, body[0].expression.arguments)
        )
      );
    }

    /**
     * Check if a given AST node have any other properties the ones available in stateless components
     * @param {ASTNode} node The AST node being checked.
     * @returns {Boolean} True if the node has at least one other property, false if not.
     */
    function hasOtherProperties(node) {
      var properties = getComponentProperties(node);
      return properties.some(function(property) {
        var name = getPropertyName(property);
        var isDisplayName = name === 'displayName';
        var isPropTypes = name === 'propTypes' || name === 'props' && property.typeAnnotation;
        var contextTypes = name === 'contextTypes';
        var isUselessConstructor =
          property.kind === 'constructor' &&
          isRedundantSuperCall(property.value.body.body, property.value.params)
        ;
        var isRender = name === 'render';
        return !isDisplayName && !isPropTypes && !contextTypes && !isUselessConstructor && !isRender;
      });
    }

    /**
     * Mark component as pure as declared
     * @param {ASTNode} node The AST node being checked.
     */
    var markSCUAsDeclared = function (node) {
      components.set(node, {
        hasSCU: true
      });
    };

    /**
     * Mark a setState as used
     * @param {ASTNode} node The AST node being checked.
     */
    function markThisAsUsed(node) {
      components.set(node, {
        useThis: true
      });
    }

    /**
     * Mark a props or context as used
     * @param {ASTNode} node The AST node being checked.
     */
    function markPropsOrContextAsUsed(node) {
      components.set(node, {
        usePropsOrContext: true
      });
    }

    /**
     * Mark a ref as used
     * @param {ASTNode} node The AST node being checked.
     */
    function markRefAsUsed(node) {
      components.set(node, {
        useRef: true
      });
    }

    /**
     * Mark return as invalid
     * @param {ASTNode} node The AST node being checked.
     */
    function markReturnAsInvalid(node) {
      components.set(node, {
        invalidReturn: true
      });
    }

    return {
      ClassDeclaration: function (node) {
        if (ignorePureComponents && utils.isPureComponent(node)) {
          markSCUAsDeclared(node);
        }
      },

      // Mark `this` destructuring as a usage of `this`
      VariableDeclarator: function(node) {
        // Ignore destructuring on other than `this`
        if (!node.id || node.id.type !== 'ObjectPattern' || !node.init || node.init.type !== 'ThisExpression') {
          return;
        }
        // Ignore `props` and `context`
        var useThis = node.id.properties.some(function(property) {
          var name = getPropertyName(property);
          return name !== 'props' && name !== 'context';
        });
        if (!useThis) {
          markPropsOrContextAsUsed(node);
          return;
        }
        markThisAsUsed(node);
      },

      // Mark `this` usage
      MemberExpression: function(node) {
        // Ignore calls to `this.props` and `this.context`
        if (node.object.type !== 'ThisExpression') {
          return;
        } else if (
          (node.property.name || node.property.value) === 'props' ||
          (node.property.name || node.property.value) === 'context'
        ) {
          markPropsOrContextAsUsed(node);
          return;
        }
        markThisAsUsed(node);
      },

      // Mark `ref` usage
      JSXAttribute: function(node) {
        var name = sourceCode.getText(node.name);
        if (name !== 'ref') {
          return;
        }
        markRefAsUsed(node);
      },

      // Mark `render` that do not return some JSX
      ReturnStatement: function(node) {
        var blockNode;
        var scope = context.getScope();
        while (scope) {
          blockNode = scope.block && scope.block.parent;
          if (blockNode && (blockNode.type === 'MethodDefinition' || blockNode.type === 'Property')) {
            break;
          }
          scope = scope.upper;
        }
        var isRender = blockNode && blockNode.key && blockNode.key.name === 'render';
        var allowNull = versionUtil.test(context, '15.0.0'); // Stateless components can return null since React 15
        var isReturningJSX = utils.isReturningJSX(node, !allowNull);
        var isReturningNull = node.argument && (node.argument.value === null || node.argument.value === false);
        if (
          !isRender ||
          (allowNull && (isReturningJSX || isReturningNull)) ||
          (!allowNull && isReturningJSX)
        ) {
          return;
        }
        markReturnAsInvalid(node);
      },

      'Program:exit': function() {
        var list = components.list();
        for (var component in list) {
          if (
            !list.hasOwnProperty(component) ||
            hasOtherProperties(list[component].node) ||
            list[component].useThis ||
            list[component].useRef ||
            list[component].invalidReturn ||
            (!utils.isES5Component(list[component].node) && !utils.isES6Component(list[component].node))
          ) {
            continue;
          }

          if (list[component].hasSCU && list[component].usePropsOrContext) {
            continue;
          }

          context.report({
            node: list[component].node,
            message: 'Component should be written as a pure function'
          });
        }
      }
    };

  })
};

},{"../util/Components":54,"../util/version":57}],44:[function(require,module,exports){
/**
 * @fileoverview Prevent missing props validation in a React component definition
 * @author Yannick Croissant
 */
'use strict';

// As for exceptions for props.children or props.className (and alike) look at
// https://github.com/yannickcr/eslint-plugin-react/issues/7

var Components = require('../util/Components');
var variable = require('../util/variable');

// ------------------------------------------------------------------------------
// Constants
// ------------------------------------------------------------------------------

var DIRECT_PROPS_REGEX = /^props\s*(\.|\[)/;

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'Prevent missing props validation in a React component definition',
      category: 'Best Practices',
      recommended: true
    },

    schema: [{
      type: 'object',
      properties: {
        ignore: {
          type: 'array',
          items: {
            type: 'string'
          }
        },
        customValidators: {
          type: 'array',
          items: {
            type: 'string'
          }
        }
      },
      additionalProperties: false
    }]
  },

  create: Components.detect(function(context, components, utils) {

    var sourceCode = context.getSourceCode();
    var configuration = context.options[0] || {};
    var ignored = configuration.ignore || [];
    var customValidators = configuration.customValidators || [];
    // Used to track the type annotations in scope.
    // Necessary because babel's scopes do not track type annotations.
    var stack = null;

    var MISSING_MESSAGE = '\'{{name}}\' is missing in props validation';

    /**
     * Helper for accessing the current scope in the stack.
     * @param {string} key The name of the identifier to access. If omitted, returns the full scope.
     * @param {ASTNode} value If provided sets the new value for the identifier.
     * @returns {Object|ASTNode} Either the whole scope or the ASTNode associated with the given identifier.
     */
    function typeScope(key, value) {
      if (arguments.length === 0) {
        return stack[stack.length - 1];
      } else if (arguments.length === 1) {
        return stack[stack.length - 1][key];
      }
      stack[stack.length - 1][key] = value;
      return value;
    }

    /**
     * Checks if we are using a prop
     * @param {ASTNode} node The AST node being checked.
     * @returns {Boolean} True if we are using a prop, false if not.
     */
    function isPropTypesUsage(node) {
      var isClassUsage = (
        (utils.getParentES6Component() || utils.getParentES5Component()) &&
        node.object.type === 'ThisExpression' && node.property.name === 'props'
      );
      var isStatelessFunctionUsage = node.object.name === 'props';
      return isClassUsage || isStatelessFunctionUsage;
    }

    /**
     * Checks if we are declaring a `props` class property with a flow type annotation.
     * @param {ASTNode} node The AST node being checked.
     * @returns {Boolean} True if the node is a type annotated props declaration, false if not.
     */
    function isAnnotatedClassPropsDeclaration(node) {
      if (node && node.type === 'ClassProperty') {
        var tokens = context.getFirstTokens(node, 2);
        if (
          node.typeAnnotation && (
            tokens[0].value === 'props' ||
            (tokens[1] && tokens[1].value === 'props')
          )
        ) {
          return true;
        }
      }
      return false;
    }

     /**
      * Checks if we are declaring a `props` argument with a flow type annotation.
      * @param {ASTNode} node The AST node being checked.
      * @returns {Boolean} True if the node is a type annotated props declaration, false if not.
      */
    function isAnnotatedFunctionPropsDeclaration(node) {
      if (node && node.params && node.params.length) {
        var tokens = context.getFirstTokens(node.params[0], 2);
        var isAnnotated = node.params[0].typeAnnotation;
        var isDestructuredProps = node.params[0].type === 'ObjectPattern';
        var isProps = tokens[0].value === 'props' || (tokens[1] && tokens[1].value === 'props');
        if (isAnnotated && (isDestructuredProps || isProps)) {
          return true;
        }
      }
      return false;
    }

    /**
     * Checks if we are declaring a prop
     * @param {ASTNode} node The AST node being checked.
     * @returns {Boolean} True if we are declaring a prop, false if not.
     */
    function isPropTypesDeclaration(node) {

      // Special case for class properties
      // (babel-eslint does not expose property name so we have to rely on tokens)
      if (node && node.type === 'ClassProperty') {
        var tokens = context.getFirstTokens(node, 2);
        if (
          tokens[0].value === 'propTypes' ||
          (tokens[1] && tokens[1].value === 'propTypes')
        ) {
          return true;
        }
        return false;
      }

      return Boolean(
        node &&
        node.name === 'propTypes'
      );

    }

    /**
     * Checks if the prop is ignored
     * @param {String} name Name of the prop to check.
     * @returns {Boolean} True if the prop is ignored, false if not.
     */
    function isIgnored(name) {
      return ignored.indexOf(name) !== -1;
    }

    /**
     * Checks if prop should be validated by plugin-react-proptypes
     * @param {String} validator Name of validator to check.
     * @returns {Boolean} True if validator should be checked by custom validator.
     */
    function hasCustomValidator(validator) {
      return customValidators.indexOf(validator) !== -1;
    }

    /**
     * Checks if the component must be validated
     * @param {Object} component The component to process
     * @returns {Boolean} True if the component must be validated, false if not.
     */
    function mustBeValidated(component) {
      return Boolean(
        component &&
        component.usedPropTypes &&
        !component.ignorePropsValidation
      );
    }

    /**
     * Internal: Checks if the prop is declared
     * @param {Object} declaredPropTypes Description of propTypes declared in the current component
     * @param {String[]} keyList Dot separated name of the prop to check.
     * @returns {Boolean} True if the prop is declared, false if not.
     */
    function _isDeclaredInComponent(declaredPropTypes, keyList) {
      for (var i = 0, j = keyList.length; i < j; i++) {
        var key = keyList[i];
        var propType = (
          declaredPropTypes && (
            // Check if this key is declared
            (declaredPropTypes[key] || // If not, check if this type accepts any key
            declaredPropTypes.__ANY_KEY__)
          )
        );

        if (!propType) {
          // If it's a computed property, we can't make any further analysis, but is valid
          return key === '__COMPUTED_PROP__';
        }
        if (propType === true) {
          return true;
        }
        // Consider every children as declared
        if (propType.children === true) {
          return true;
        }
        if (propType.acceptedProperties) {
          return key in propType.acceptedProperties;
        }
        if (propType.type === 'union') {
          // If we fall in this case, we know there is at least one complex type in the union
          if (i + 1 >= j) {
            // this is the last key, accept everything
            return true;
          }
          // non trivial, check all of them
          var unionTypes = propType.children;
          var unionPropType = {};
          for (var k = 0, z = unionTypes.length; k < z; k++) {
            unionPropType[key] = unionTypes[k];
            var isValid = _isDeclaredInComponent(
              unionPropType,
              keyList.slice(i)
            );
            if (isValid) {
              return true;
            }
          }

          // every possible union were invalid
          return false;
        }
        declaredPropTypes = propType.children;
      }
      return true;
    }

    /**
     * Checks if the prop is declared
     * @param {ASTNode} node The AST node being checked.
     * @param {String[]} names List of names of the prop to check.
     * @returns {Boolean} True if the prop is declared, false if not.
     */
    function isDeclaredInComponent(node, names) {
      while (node) {
        var component = components.get(node);
        var isDeclared =
          component && component.confidence === 2 &&
          _isDeclaredInComponent(component.declaredPropTypes || {}, names)
        ;
        if (isDeclared) {
          return true;
        }
        node = node.parent;
      }
      return false;
    }

    /**
     * Checks if the prop has spread operator.
     * @param {ASTNode} node The AST node being marked.
     * @returns {Boolean} True if the prop has spread operator, false if not.
     */
    function hasSpreadOperator(node) {
      var tokens = sourceCode.getTokens(node);
      return tokens.length && tokens[0].value === '...';
    }

    /**
     * Retrieve the name of a key node
     * @param {ASTNode} node The AST node with the key.
     * @return {string} the name of the key
     */
    function getKeyValue(node) {
      if (node.type === 'ObjectTypeProperty') {
        var tokens = context.getFirstTokens(node, 1);
        return tokens[0].value;
      }
      var key = node.key || node.argument;
      return key.type === 'Identifier' ? key.name : key.value;
    }

    /**
     * Iterates through a properties node, like a customized forEach.
     * @param {Object[]} properties Array of properties to iterate.
     * @param {Function} fn Function to call on each property, receives property key
        and property value. (key, value) => void
     */
    function iterateProperties(properties, fn) {
      if (properties.length && typeof fn === 'function') {
        for (var i = 0, j = properties.length; i < j; i++) {
          var node = properties[i];
          var key = getKeyValue(node);

          var value = node.value;
          fn(key, value);
        }
      }
    }

    /**
     * Creates the representation of the React propTypes for the component.
     * The representation is used to verify nested used properties.
     * @param {ASTNode} value Node of the React.PropTypes for the desired property
     * @return {Object|Boolean} The representation of the declaration, true means
     *    the property is declared without the need for further analysis.
     */
    function buildReactDeclarationTypes(value) {
      if (
        value &&
        value.callee &&
        value.callee.object &&
        hasCustomValidator(value.callee.object.name)
      ) {
        return true;
      }

      if (
        value &&
        value.type === 'MemberExpression' &&
        value.property &&
        value.property.name &&
        value.property.name === 'isRequired'
      ) {
        value = value.object;
      }

      // Verify React.PropTypes that are functions
      if (
        value &&
        value.type === 'CallExpression' &&
        value.callee &&
        value.callee.property &&
        value.callee.property.name &&
        value.arguments &&
        value.arguments.length > 0
      ) {
        var callName = value.callee.property.name;
        var argument = value.arguments[0];
        switch (callName) {
          case 'shape':
            if (argument.type !== 'ObjectExpression') {
              // Invalid proptype or cannot analyse statically
              return true;
            }
            var shapeTypeDefinition = {
              type: 'shape',
              children: {}
            };
            iterateProperties(argument.properties, function(childKey, childValue) {
              shapeTypeDefinition.children[childKey] = buildReactDeclarationTypes(childValue);
            });
            return shapeTypeDefinition;
          case 'arrayOf':
          case 'objectOf':
            return {
              type: 'object',
              children: {
                __ANY_KEY__: buildReactDeclarationTypes(argument)
              }
            };
          case 'oneOfType':
            if (
              !argument.elements ||
              !argument.elements.length
            ) {
              // Invalid proptype or cannot analyse statically
              return true;
            }
            var unionTypeDefinition = {
              type: 'union',
              children: []
            };
            for (var i = 0, j = argument.elements.length; i < j; i++) {
              var type = buildReactDeclarationTypes(argument.elements[i]);
              // keep only complex type
              if (type !== true) {
                if (type.children === true) {
                  // every child is accepted for one type, abort type analysis
                  unionTypeDefinition.children = true;
                  return unionTypeDefinition;
                }
              }

              unionTypeDefinition.children.push(type);
            }
            if (unionTypeDefinition.length === 0) {
              // no complex type found, simply accept everything
              return true;
            }
            return unionTypeDefinition;
          case 'instanceOf':
            return {
              type: 'instance',
              // Accept all children because we can't know what type they are
              children: true
            };
          case 'oneOf':
          default:
            return true;
        }
      }
      // Unknown property or accepts everything (any, object, ...)
      return true;
    }

    /**
     * Creates the representation of the React props type annotation for the component.
     * The representation is used to verify nested used properties.
     * @param {ASTNode} annotation Type annotation for the props class property.
     * @return {Object|Boolean} The representation of the declaration, true means
     *    the property is declared without the need for further analysis.
     */
    function buildTypeAnnotationDeclarationTypes(annotation) {
      switch (annotation.type) {
        case 'GenericTypeAnnotation':
          if (typeScope(annotation.id.name)) {
            return buildTypeAnnotationDeclarationTypes(typeScope(annotation.id.name));
          }
          return true;
        case 'ObjectTypeAnnotation':
          var shapeTypeDefinition = {
            type: 'shape',
            children: {}
          };
          iterateProperties(annotation.properties, function(childKey, childValue) {
            shapeTypeDefinition.children[childKey] = buildTypeAnnotationDeclarationTypes(childValue);
          });
          return shapeTypeDefinition;
        case 'UnionTypeAnnotation':
          var unionTypeDefinition = {
            type: 'union',
            children: []
          };
          for (var i = 0, j = annotation.types.length; i < j; i++) {
            var type = buildTypeAnnotationDeclarationTypes(annotation.types[i]);
            // keep only complex type
            if (type !== true) {
              if (type.children === true) {
                // every child is accepted for one type, abort type analysis
                unionTypeDefinition.children = true;
                return unionTypeDefinition;
              }
            }

            unionTypeDefinition.children.push(type);
          }
          if (unionTypeDefinition.children.length === 0) {
            // no complex type found, simply accept everything
            return true;
          }
          return unionTypeDefinition;
        case 'ArrayTypeAnnotation':
          return {
            type: 'object',
            children: {
              __ANY_KEY__: buildTypeAnnotationDeclarationTypes(annotation.elementType)
            }
          };
        default:
          // Unknown or accepts everything.
          return true;
      }
    }

    /**
     * Check if we are in a class constructor
     * @return {boolean} true if we are in a class constructor, false if not
     */
    function inConstructor() {
      var scope = context.getScope();
      while (scope) {
        if (scope.block && scope.block.parent && scope.block.parent.kind === 'constructor') {
          return true;
        }
        scope = scope.upper;
      }
      return false;
    }

    /**
     * Retrieve the name of a property node
     * @param {ASTNode} node The AST node with the property.
     * @return {string} the name of the property or undefined if not found
     */
    function getPropertyName(node) {
      var isDirectProp = DIRECT_PROPS_REGEX.test(sourceCode.getText(node));
      var isInClassComponent = utils.getParentES6Component() || utils.getParentES5Component();
      var isNotInConstructor = !inConstructor(node);
      if (isDirectProp && isInClassComponent && isNotInConstructor) {
        return void 0;
      }
      if (!isDirectProp) {
        node = node.parent;
      }
      var property = node.property;
      if (property) {
        switch (property.type) {
          case 'Identifier':
            if (node.computed) {
              return '__COMPUTED_PROP__';
            }
            return property.name;
          case 'MemberExpression':
            return void 0;
          case 'Literal':
            // Accept computed properties that are literal strings
            if (typeof property.value === 'string') {
              return property.value;
            }
            // falls through
          default:
            if (node.computed) {
              return '__COMPUTED_PROP__';
            }
            break;
        }
      }
      return void 0;
    }

    /**
     * Mark a prop type as used
     * @param {ASTNode} node The AST node being marked.
     */
    function markPropTypesAsUsed(node, parentNames) {
      parentNames = parentNames || [];
      var type;
      var name;
      var allNames;
      var properties;
      switch (node.type) {
        case 'MemberExpression':
          name = getPropertyName(node);
          if (name) {
            allNames = parentNames.concat(name);
            if (node.parent.type === 'MemberExpression') {
              markPropTypesAsUsed(node.parent, allNames);
            }
            // Do not mark computed props as used.
            type = name !== '__COMPUTED_PROP__' ? 'direct' : null;
          } else if (
            node.parent.id &&
            node.parent.id.properties &&
            node.parent.id.properties.length &&
            getKeyValue(node.parent.id.properties[0])
          ) {
            type = 'destructuring';
            properties = node.parent.id.properties;
          }
          break;
        case 'ArrowFunctionExpression':
        case 'FunctionDeclaration':
        case 'FunctionExpression':
          type = 'destructuring';
          properties = node.params[0].properties;
          break;
        case 'VariableDeclarator':
          for (var i = 0, j = node.id.properties.length; i < j; i++) {
            // let {props: {firstname}} = this
            var thisDestructuring = (
              !hasSpreadOperator(node.id.properties[i]) &&
              (node.id.properties[i].key.name === 'props' || node.id.properties[i].key.value === 'props') &&
              node.id.properties[i].value.type === 'ObjectPattern'
            );
            // let {firstname} = props
            var directDestructuring =
              node.init.name === 'props' &&
              (utils.getParentStatelessComponent() || inConstructor())
            ;

            if (thisDestructuring) {
              properties = node.id.properties[i].value.properties;
            } else if (directDestructuring) {
              properties = node.id.properties;
            } else {
              continue;
            }
            type = 'destructuring';
            break;
          }
          break;
        default:
          throw new Error(node.type + ' ASTNodes are not handled by markPropTypesAsUsed');
      }

      var component = components.get(utils.getParentComponent());
      var usedPropTypes = component && component.usedPropTypes || [];

      switch (type) {
        case 'direct':
          // Ignore Object methods
          if (Object.prototype[name]) {
            break;
          }

          var isDirectProp = DIRECT_PROPS_REGEX.test(sourceCode.getText(node));

          usedPropTypes.push({
            name: name,
            allNames: allNames,
            node: !isDirectProp && !inConstructor(node) ? node.parent.property : node.property
          });
          break;
        case 'destructuring':
          for (var k = 0, l = properties.length; k < l; k++) {
            if (hasSpreadOperator(properties[k]) || properties[k].computed) {
              continue;
            }
            var propName = getKeyValue(properties[k]);

            var currentNode = node;
            allNames = [];
            while (currentNode.property && currentNode.property.name !== 'props') {
              allNames.unshift(currentNode.property.name);
              currentNode = currentNode.object;
            }
            allNames.push(propName);

            if (propName) {
              usedPropTypes.push({
                name: propName,
                allNames: allNames,
                node: properties[k]
              });
            }
          }
          break;
        default:
          break;
      }

      components.set(node, {
        usedPropTypes: usedPropTypes
      });
    }

    /**
     * Mark a prop type as declared
     * @param {ASTNode} node The AST node being checked.
     * @param {propTypes} node The AST node containing the proptypes
     */
    function markPropTypesAsDeclared(node, propTypes) {
      var componentNode = node;
      while (componentNode && !components.get(componentNode)) {
        componentNode = componentNode.parent;
      }
      var component = components.get(componentNode);
      var declaredPropTypes = component && component.declaredPropTypes || {};
      var ignorePropsValidation = false;

      switch (propTypes && propTypes.type) {
        case 'ObjectTypeAnnotation':
          iterateProperties(propTypes.properties, function(key, value) {
            declaredPropTypes[key] = buildTypeAnnotationDeclarationTypes(value);
          });
          break;
        case 'ObjectExpression':
          iterateProperties(propTypes.properties, function(key, value) {
            if (!value) {
              ignorePropsValidation = true;
              return;
            }
            declaredPropTypes[key] = buildReactDeclarationTypes(value);
          });
          break;
        case 'MemberExpression':
          var curDeclaredPropTypes = declaredPropTypes;
          // Walk the list of properties, until we reach the assignment
          // ie: ClassX.propTypes.a.b.c = ...
          while (
            propTypes &&
            propTypes.parent &&
            propTypes.parent.type !== 'AssignmentExpression' &&
            propTypes.property &&
            curDeclaredPropTypes
          ) {
            var propName = propTypes.property.name;
            if (propName in curDeclaredPropTypes) {
              curDeclaredPropTypes = curDeclaredPropTypes[propName].children;
              propTypes = propTypes.parent;
            } else {
              // This will crash at runtime because we haven't seen this key before
              // stop this and do not declare it
              propTypes = null;
            }
          }
          if (propTypes && propTypes.parent && propTypes.property) {
            curDeclaredPropTypes[propTypes.property.name] =
              buildReactDeclarationTypes(propTypes.parent.right);
          } else {
            ignorePropsValidation = true;
          }
          break;
        case 'Identifier':
          var variablesInScope = variable.variablesInScope(context);
          for (var i = 0, j = variablesInScope.length; i < j; i++) {
            if (variablesInScope[i].name !== propTypes.name) {
              continue;
            }
            var defInScope = variablesInScope[i].defs[variablesInScope[i].defs.length - 1];
            markPropTypesAsDeclared(node, defInScope.node && defInScope.node.init);
            return;
          }
          ignorePropsValidation = true;
          break;
        case null:
          break;
        default:
          ignorePropsValidation = true;
          break;
      }

      components.set(node, {
        declaredPropTypes: declaredPropTypes,
        ignorePropsValidation: ignorePropsValidation
      });
    }

    /**
     * Reports undeclared proptypes for a given component
     * @param {Object} component The component to process
     */
    function reportUndeclaredPropTypes(component) {
      var allNames;
      for (var i = 0, j = component.usedPropTypes.length; i < j; i++) {
        allNames = component.usedPropTypes[i].allNames;
        if (
          isIgnored(allNames[0]) ||
          isDeclaredInComponent(component.node, allNames)
        ) {
          continue;
        }
        context.report(
          component.usedPropTypes[i].node,
          MISSING_MESSAGE, {
            name: allNames.join('.').replace(/\.__COMPUTED_PROP__/g, '[]')
          }
        );
      }
    }

    /**
     * Resolve the type annotation for a given node.
     * Flow annotations are sometimes wrapped in outer `TypeAnnotation`
     * and `NullableTypeAnnotation` nodes which obscure the annotation we're
     * interested in.
     * This method also resolves type aliases where possible.
     *
     * @param {ASTNode} node The annotation or a node containing the type annotation.
     * @returns {ASTNode} The resolved type annotation for the node.
     */
    function resolveTypeAnnotation(node) {
      var annotation = node.typeAnnotation || node;
      while (annotation && (annotation.type === 'TypeAnnotation' || annotation.type === 'NullableTypeAnnotation')) {
        annotation = annotation.typeAnnotation;
      }
      if (annotation.type === 'GenericTypeAnnotation' && typeScope(annotation.id.name)) {
        return typeScope(annotation.id.name);
      }
      return annotation;
    }

    /**
     * @param {ASTNode} node We expect either an ArrowFunctionExpression,
     *   FunctionDeclaration, or FunctionExpression
     */
    function markDestructuredFunctionArgumentsAsUsed(node) {
      var destructuring = node.params && node.params[0] && node.params[0].type === 'ObjectPattern';
      if (destructuring && components.get(node)) {
        markPropTypesAsUsed(node);
      }
    }

    /**
     * @param {ASTNode} node We expect either an ArrowFunctionExpression,
     *   FunctionDeclaration, or FunctionExpression
     */
    function markAnnotatedFunctionArgumentsAsDeclared(node) {
      if (!node.params || !node.params.length || !isAnnotatedFunctionPropsDeclaration(node)) {
        return;
      }
      markPropTypesAsDeclared(node, resolveTypeAnnotation(node.params[0]));
    }

    /**
     * @param {ASTNode} node We expect either an ArrowFunctionExpression,
     *   FunctionDeclaration, or FunctionExpression
     */
    function handleStatelessComponent(node) {
      markDestructuredFunctionArgumentsAsUsed(node);
      markAnnotatedFunctionArgumentsAsDeclared(node);
    }

    // --------------------------------------------------------------------------
    // Public
    // --------------------------------------------------------------------------

    return {
      ClassProperty: function(node) {
        if (isAnnotatedClassPropsDeclaration(node)) {
          markPropTypesAsDeclared(node, resolveTypeAnnotation(node));
        } else if (isPropTypesDeclaration(node)) {
          markPropTypesAsDeclared(node, node.value);
        }
      },

      VariableDeclarator: function(node) {
        var destructuring = node.init && node.id && node.id.type === 'ObjectPattern';
        // let {props: {firstname}} = this
        var thisDestructuring = destructuring && node.init.type === 'ThisExpression';
        // let {firstname} = props
        var directDestructuring =
          destructuring &&
          node.init.name === 'props' &&
          (utils.getParentStatelessComponent() || inConstructor())
        ;

        if (!thisDestructuring && !directDestructuring) {
          return;
        }
        markPropTypesAsUsed(node);
      },

      FunctionDeclaration: handleStatelessComponent,

      ArrowFunctionExpression: handleStatelessComponent,

      FunctionExpression: handleStatelessComponent,

      MemberExpression: function(node) {
        var type;
        if (isPropTypesUsage(node)) {
          type = 'usage';
        } else if (isPropTypesDeclaration(node.property)) {
          type = 'declaration';
        }

        switch (type) {
          case 'usage':
            markPropTypesAsUsed(node);
            break;
          case 'declaration':
            var component = utils.getRelatedComponent(node);
            if (!component) {
              return;
            }
            markPropTypesAsDeclared(component.node, node.parent.right || node.parent);
            break;
          default:
            break;
        }
      },

      MethodDefinition: function(node) {
        if (!isPropTypesDeclaration(node.key)) {
          return;
        }

        var i = node.value.body.body.length - 1;
        for (; i >= 0; i--) {
          if (node.value.body.body[i].type === 'ReturnStatement') {
            break;
          }
        }

        if (i >= 0) {
          markPropTypesAsDeclared(node, node.value.body.body[i].argument);
        }
      },

      ObjectExpression: function(node) {
        // Search for the proptypes declaration
        node.properties.forEach(function(property) {
          if (!isPropTypesDeclaration(property.key)) {
            return;
          }
          markPropTypesAsDeclared(node, property.value);
        });
      },

      TypeAlias: function(node) {
        typeScope(node.id.name, node.right);
      },

      Program: function() {
        stack = [{}];
      },

      BlockStatement: function () {
        stack.push(Object.create(typeScope()));
      },

      'BlockStatement:exit': function () {
        stack.pop();
      },

      'Program:exit': function() {
        stack = null;
        var list = components.list();
        // Report undeclared proptypes for all classes
        for (var component in list) {
          if (!list.hasOwnProperty(component) || !mustBeValidated(list[component])) {
            continue;
          }
          reportUndeclaredPropTypes(list[component]);
        }
      }
    };

  })
};

},{"../util/Components":54,"../util/variable":56}],45:[function(require,module,exports){
/**
 * @fileoverview Prevent missing React when using JSX
 * @author Glen Mailer
 */
'use strict';

var variableUtil = require('../util/variable');
var pragmaUtil = require('../util/pragma');

// -----------------------------------------------------------------------------
// Rule Definition
// -----------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'Prevent missing React when using JSX',
      category: 'Possible Errors',
      recommended: true
    },
    schema: []
  },

  create: function(context) {

    var pragma = pragmaUtil.getFromContext(context);
    var NOT_DEFINED_MESSAGE = '\'{{name}}\' must be in scope when using JSX';

    return {

      JSXOpeningElement: function(node) {
        var variables = variableUtil.variablesInScope(context);
        if (variableUtil.findVariable(variables, pragma)) {
          return;
        }
        context.report({
          node: node,
          message: NOT_DEFINED_MESSAGE,
          data: {
            name: pragma
          }
        });
      },

      BlockComment: function(node) {
        pragma = pragmaUtil.getFromNode(node) || pragma;
      }

    };

  }
};

},{"../util/pragma":55,"../util/variable":56}],46:[function(require,module,exports){
(function (process){
/**
 * @fileoverview Restrict file extensions that may be required
 * @author Scott Andrews
 * @deprecated
 */
'use strict';

var path = require('path');
var isWarnedForDeprecation = false;

// ------------------------------------------------------------------------------
// Constants
// ------------------------------------------------------------------------------

var DEFAULTS = {
  extensions: ['.jsx']
};

var PKG_REGEX = /^[^\.]((?!\/).)*$/;

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'Restrict file extensions that may be required',
      category: 'Stylistic Issues',
      recommended: false
    },

    schema: [{
      type: 'object',
      properties: {
        extensions: {
          type: 'array',
          items: {
            type: 'string'
          }
        }
      },
      additionalProperties: false
    }]
  },

  create: function(context) {

    function isPackage(id) {
      return PKG_REGEX.test(id);
    }

    function isRequire(expression) {
      return expression.callee.name === 'require';
    }

    function getId(expression) {
      return expression.arguments[0] && expression.arguments[0].value;
    }

    function getExtension(id) {
      return path.extname(id || '');
    }

    function getExtensionsConfig() {
      return context.options[0] && context.options[0].extensions || DEFAULTS.extensions;
    }

    var forbiddenExtensions = getExtensionsConfig().reduce(function (extensions, extension) {
      extensions[extension] = true;
      return extensions;
    }, Object.create(null));

    function isForbiddenExtension(ext) {
      return ext in forbiddenExtensions;
    }

    // --------------------------------------------------------------------------
    // Public
    // --------------------------------------------------------------------------

    return {

      CallExpression: function(node) {
        if (isRequire(node)) {
          var id = getId(node);
          var ext = getExtension(id);
          if (!isPackage(id) && isForbiddenExtension(ext)) {
            context.report({
              node: node,
              message: 'Unable to require module with extension \'' + ext + '\''
            });
          }
        }
      },

      Program: function() {
        if (isWarnedForDeprecation || /\=-(f|-format)=/.test(process.argv.join('='))) {
          return;
        }

        /* eslint-disable no-console */
        console.log('The react/require-extension rule is deprecated. Please ' +
                    'use the import/extensions rule from eslint-plugin-import instead.');
        /* eslint-enable no-console */
        isWarnedForDeprecation = true;
      }

    };

  }
};

}).call(this,require('_process'))
},{"_process":97,"path":96}],47:[function(require,module,exports){
/**
 * @fileoverview Enforce React components to have a shouldComponentUpdate method
 * @author Evgueni Naverniouk
 */
'use strict';

var Components = require('../util/Components');

module.exports = {
  meta: {
    docs: {
      description: 'Enforce React components to have a shouldComponentUpdate method',
      category: 'Best Practices',
      recommended: false
    },

    schema: [{
      type: 'object',
      properties: {
        allowDecorators: {
          type: 'array',
          items: {
            type: 'string'
          }
        }
      },
      additionalProperties: false
    }]
  },

  create: Components.detect(function (context, components, utils) {
    var MISSING_MESSAGE = 'Component is not optimized. Please add a shouldComponentUpdate method.';
    var configuration = context.options[0] || {};
    var allowDecorators = configuration.allowDecorators || [];

    /**
     * Checks to see if our component is decorated by PureRenderMixin via reactMixin
     * @param {ASTNode} node The AST node being checked.
     * @returns {Boolean} True if node is decorated with a PureRenderMixin, false if not.
     */
    var hasPureRenderDecorator = function (node) {
      if (node.decorators && node.decorators.length) {
        for (var i = 0, l = node.decorators.length; i < l; i++) {
          if (
            node.decorators[i].expression &&
            node.decorators[i].expression.callee &&
            node.decorators[i].expression.callee.object &&
            node.decorators[i].expression.callee.object.name === 'reactMixin' &&
            node.decorators[i].expression.callee.property &&
            node.decorators[i].expression.callee.property.name === 'decorate' &&
            node.decorators[i].expression.arguments &&
            node.decorators[i].expression.arguments.length &&
            node.decorators[i].expression.arguments[0].name === 'PureRenderMixin'
          ) {
            return true;
          }
        }
      }

      return false;
    };

    /**
     * Checks to see if our component is custom decorated
     * @param {ASTNode} node The AST node being checked.
     * @returns {Boolean} True if node is decorated name with a custom decorated, false if not.
     */
    var hasCustomDecorator = function (node) {
      var allowLength = allowDecorators.length;

      if (allowLength && node.decorators && node.decorators.length) {
        for (var i = 0; i < allowLength; i++) {
          for (var j = 0, l = node.decorators.length; j < l; j++) {
            if (
              node.decorators[j].expression &&
              node.decorators[j].expression.name === allowDecorators[i]
            ) {
              return true;
            }
          }
        }
      }

      return false;
    };

    /**
     * Checks if we are declaring a shouldComponentUpdate method
     * @param {ASTNode} node The AST node being checked.
     * @returns {Boolean} True if we are declaring a shouldComponentUpdate method, false if not.
     */
    var isSCUDeclarеd = function (node) {
      return Boolean(
        node &&
        node.name === 'shouldComponentUpdate'
      );
    };

    /**
     * Checks if we are declaring a PureRenderMixin mixin
     * @param {ASTNode} node The AST node being checked.
     * @returns {Boolean} True if we are declaring a PureRenderMixin method, false if not.
     */
    var isPureRenderDeclared = function (node) {
      var hasPR = false;
      if (node.value && node.value.elements) {
        for (var i = 0, l = node.value.elements.length; i < l; i++) {
          if (node.value.elements[i].name === 'PureRenderMixin') {
            hasPR = true;
            break;
          }
        }
      }

      return Boolean(
          node &&
          node.key.name === 'mixins' &&
          hasPR
        );
    };

    /**
     * Mark shouldComponentUpdate as declared
     * @param {ASTNode} node The AST node being checked.
     */
    var markSCUAsDeclared = function (node) {
      components.set(node, {
        hasSCU: true
      });
    };

    /**
     * Reports missing optimization for a given component
     * @param {Object} component The component to process
     */
    var reportMissingOptimization = function (component) {
      context.report({
        node: component.node,
        message: MISSING_MESSAGE,
        data: {
          component: component.name
        }
      });
    };

    /**
     * Checks if we are declaring function in class
     * @returns {Boolean} True if we are declaring function in class, false if not.
     */
    var isFunctionInClass = function () {
      var blockNode;
      var scope = context.getScope();
      while (scope) {
        blockNode = scope.block;
        if (blockNode && blockNode.type === 'ClassDeclaration') {
          return true;
        }
        scope = scope.upper;
      }

      return false;
    };

    return {
      ArrowFunctionExpression: function (node) {
        // Stateless Functional Components cannot be optimized (yet)
        markSCUAsDeclared(node);
      },

      ClassDeclaration: function (node) {
        if (!(hasPureRenderDecorator(node) || hasCustomDecorator(node) || utils.isPureComponent(node))) {
          return;
        }
        markSCUAsDeclared(node);
      },

      FunctionDeclaration: function (node) {
        // Skip if the function is declared in the class
        if (isFunctionInClass()) {
          return;
        }
        // Stateless Functional Components cannot be optimized (yet)
        markSCUAsDeclared(node);
      },

      FunctionExpression: function (node) {
        // Skip if the function is declared in the class
        if (isFunctionInClass()) {
          return;
        }
        // Stateless Functional Components cannot be optimized (yet)
        markSCUAsDeclared(node);
      },

      MethodDefinition: function (node) {
        if (!isSCUDeclarеd(node.key)) {
          return;
        }
        markSCUAsDeclared(node);
      },

      ObjectExpression: function (node) {
        // Search for the shouldComponentUpdate declaration
        for (var i = 0, l = node.properties.length; i < l; i++) {
          if (
            !node.properties[i].key || (
              !isSCUDeclarеd(node.properties[i].key) &&
              !isPureRenderDeclared(node.properties[i])
            )
          ) {
            continue;
          }
          markSCUAsDeclared(node);
        }
      },

      'Program:exit': function () {
        var list = components.list();

        // Report missing shouldComponentUpdate for all components
        for (var component in list) {
          if (!list.hasOwnProperty(component) || list[component].hasSCU) {
            continue;
          }
          reportMissingOptimization(list[component]);
        }
      }
    };
  })
};

},{"../util/Components":54}],48:[function(require,module,exports){
/**
 * @fileoverview Enforce ES5 or ES6 class for returning value in render function.
 * @author Mark Orel
 */
'use strict';

var Components = require('../util/Components');

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'Enforce ES5 or ES6 class for returning value in render function',
      category: 'Possible Errors',
      recommended: true
    },
    schema: [{}]
  },

  create: Components.detect(function(context, components, utils) {

    /**
     * Mark a return statement as present
     * @param {ASTNode} node The AST node being checked.
     */
    function markReturnStatementPresent(node) {
      components.set(node, {
        hasReturnStatement: true
      });
    }

    /**
     * Get properties for a given AST node
     * @param {ASTNode} node The AST node being checked.
     * @returns {Array} Properties array.
     */
    function getComponentProperties(node) {
      switch (node.type) {
        case 'ClassDeclaration':
          return node.body.body;
        case 'ObjectExpression':
          return node.properties;
        default:
          return [];
      }
    }

    /**
     * Get properties name
     * @param {Object} node - Property.
     * @returns {String} Property name.
     */
    function getPropertyName(node) {
      // Special case for class properties
      // (babel-eslint does not expose property name so we have to rely on tokens)
      if (node.type === 'ClassProperty') {
        var tokens = context.getFirstTokens(node, 2);
        return tokens[1] && tokens[1].type === 'Identifier' ? tokens[1].value : tokens[0].value;
      } else if (['MethodDefinition', 'Property'].indexOf(node.type) !== -1) {
        return node.key.name;
      }
      return '';
    }

    /**
     * Check if a given AST node has a render method
     * @param {ASTNode} node The AST node being checked.
     * @returns {Boolean} True if there is a render method, false if not
     */
    function hasRenderMethod(node) {
      var properties = getComponentProperties(node);
      for (var i = 0, j = properties.length; i < j; i++) {
        if (getPropertyName(properties[i]) !== 'render') {
          continue;
        }
        return /FunctionExpression$/.test(properties[i].value.type);
      }
      return false;
    }

    return {
      ReturnStatement: function(node) {
        var ancestors = context.getAncestors(node).reverse();
        var depth = 0;
        for (var i = 0, j = ancestors.length; i < j; i++) {
          if (/Function(Expression|Declaration)$/.test(ancestors[i].type)) {
            depth++;
          }
          if (
            !/(MethodDefinition|(Class)?Property)$/.test(ancestors[i].type) ||
            getPropertyName(ancestors[i]) !== 'render' ||
            depth > 1
          ) {
            continue;
          }
          markReturnStatementPresent(node);
        }
      },

      ArrowFunctionExpression: function(node) {
        if (node.expression === false || getPropertyName(node.parent) !== 'render') {
          return;
        }
        markReturnStatementPresent(node);
      },

      'Program:exit': function() {
        var list = components.list();
        for (var component in list) {
          if (
            !list.hasOwnProperty(component) ||
            !hasRenderMethod(list[component].node) ||
            list[component].hasReturnStatement ||
            (!utils.isES5Component(list[component].node) && !utils.isES6Component(list[component].node))
          ) {
            continue;
          }
          context.report({
            node: list[component].node,
            message: 'Your render method should have return statement'
          });
        }
      }
    };
  })
};

},{"../util/Components":54}],49:[function(require,module,exports){
/**
 * @fileoverview Prevent extra closing tags for components without children
 * @author Yannick Croissant
 */
'use strict';

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'Prevent extra closing tags for components without children',
      category: 'Stylistic Issues',
      recommended: false
    },
    fixable: 'code',

    schema: [{
      type: 'object',
      properties: {
        component: {
          default: true,
          type: 'boolean'
        },
        html: {
          default: true,
          type: 'boolean'
        }
      },
      additionalProperties: false
    }]
  },

  create: function(context) {

    var tagConvention = /^[a-z]|\-/;
    function isTagName(name) {
      return tagConvention.test(name);
    }

    function isComponent(node) {
      return node.name && node.name.type === 'JSXIdentifier' && !isTagName(node.name.name);
    }

    function hasChildren(node) {
      var childrens = node.parent.children;
      if (
        !childrens.length ||
        (childrens.length === 1 && childrens[0].type === 'Literal' && !childrens[0].value.replace(/(?!\xA0)\s/g, ''))
      ) {
        return false;
      }
      return true;
    }

    function isShouldBeSelfClosed(node) {
      var configuration = context.options[0] || {component: true, html: true};
      return (
        configuration.component && isComponent(node) ||
        configuration.html && isTagName(node.name.name)
      ) && !node.selfClosing && !hasChildren(node);
    }

    // --------------------------------------------------------------------------
    // Public
    // --------------------------------------------------------------------------

    return {

      JSXOpeningElement: function(node) {

        if (!isShouldBeSelfClosed(node)) {
          return;
        }
        context.report({
          node: node,
          message: 'Empty components are self-closing',
          fix: function(fixer) {
            // Represents the last character of the JSXOpeningElement, the '>' character
            var openingElementEnding = node.end - 1;
            // Represents the last character of the JSXClosingElement, the '>' character
            var closingElementEnding = node.parent.closingElement.end;

            // Replace />.*<\/.*>/ with '/>'
            var range = [openingElementEnding, closingElementEnding];
            return fixer.replaceTextRange(range, ' />');
          }
        });
      }
    };

  }
};

},{}],50:[function(require,module,exports){
/**
 * @fileoverview Enforce component methods order
 * @author Yannick Croissant
 */
'use strict';

var util = require('util');

var Components = require('../util/Components');

/**
 * Get the methods order from the default config and the user config
 * @param {Object} defaultConfig The default configuration.
 * @param {Object} userConfig The user configuration.
 * @returns {Array} Methods order
 */
function getMethodsOrder(defaultConfig, userConfig) {
  userConfig = userConfig || {};

  var groups = util._extend(defaultConfig.groups, userConfig.groups);
  var order = userConfig.order || defaultConfig.order;

  var config = [];
  var entry;
  for (var i = 0, j = order.length; i < j; i++) {
    entry = order[i];
    if (groups.hasOwnProperty(entry)) {
      config = config.concat(groups[entry]);
    } else {
      config.push(entry);
    }
  }

  return config;
}

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'Enforce component methods order',
      category: 'Stylistic Issues',
      recommended: false
    },

    schema: [{
      type: 'object',
      properties: {
        order: {
          type: 'array',
          items: {
            type: 'string'
          }
        },
        groups: {
          type: 'object',
          patternProperties: {
            '^.*$': {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          }
        }
      },
      additionalProperties: false
    }]
  },

  create: Components.detect(function(context, components) {

    var errors = {};

    var MISPOSITION_MESSAGE = '{{propA}} should be placed {{position}} {{propB}}';

    var methodsOrder = getMethodsOrder({
      order: [
        'static-methods',
        'lifecycle',
        'everything-else',
        'render'
      ],
      groups: {
        lifecycle: [
          'displayName',
          'propTypes',
          'contextTypes',
          'childContextTypes',
          'mixins',
          'statics',
          'defaultProps',
          'constructor',
          'getDefaultProps',
          'state',
          'getInitialState',
          'getChildContext',
          'componentWillMount',
          'componentDidMount',
          'componentWillReceiveProps',
          'shouldComponentUpdate',
          'componentWillUpdate',
          'componentDidUpdate',
          'componentWillUnmount'
        ]
      }
    }, context.options[0]);

    // --------------------------------------------------------------------------
    // Public
    // --------------------------------------------------------------------------

    var regExpRegExp = /\/(.*)\/([g|y|i|m]*)/;

    /**
     * Get indexes of the matching patterns in methods order configuration
     * @param {Object} method - Method metadata.
     * @returns {Array} The matching patterns indexes. Return [Infinity] if there is no match.
     */
    function getRefPropIndexes(method) {
      var isRegExp;
      var matching;
      var i;
      var j;
      var indexes = [];

      if (method.static) {
        for (i = 0, j = methodsOrder.length; i < j; i++) {
          if (methodsOrder[i] === 'static-methods') {
            indexes.push(i);
            break;
          }
        }
      }

      if (method.typeAnnotation) {
        for (i = 0, j = methodsOrder.length; i < j; i++) {
          if (methodsOrder[i] === 'type-annotations') {
            indexes.push(i);
            break;
          }
        }
      }

      // Either this is not a static method or static methods are not specified
      // in the methodsOrder.
      if (indexes.length === 0) {
        for (i = 0, j = methodsOrder.length; i < j; i++) {
          isRegExp = methodsOrder[i].match(regExpRegExp);
          if (isRegExp) {
            matching = new RegExp(isRegExp[1], isRegExp[2]).test(method.name);
          } else {
            matching = methodsOrder[i] === method.name;
          }
          if (matching) {
            indexes.push(i);
          }
        }
      }

      // No matching pattern, return 'everything-else' index
      if (indexes.length === 0) {
        for (i = 0, j = methodsOrder.length; i < j; i++) {
          if (methodsOrder[i] === 'everything-else') {
            indexes.push(i);
            break;
          }
        }
      }

      // No matching pattern and no 'everything-else' group
      if (indexes.length === 0) {
        indexes.push(Infinity);
      }

      return indexes;
    }

    /**
     * Get properties name
     * @param {Object} node - Property.
     * @returns {String} Property name.
     */
    function getPropertyName(node) {
      // Special case for class properties
      // (babel-eslint does not expose property name so we have to rely on tokens)
      if (node.type === 'ClassProperty') {
        var tokens = context.getFirstTokens(node, 2);
        return tokens[1] && tokens[1].type === 'Identifier' ? tokens[1].value : tokens[0].value;
      }

      return node.key.name;
    }

    /**
     * Store a new error in the error list
     * @param {Object} propA - Mispositioned property.
     * @param {Object} propB - Reference property.
     */
    function storeError(propA, propB) {
      // Initialize the error object if needed
      if (!errors[propA.index]) {
        errors[propA.index] = {
          node: propA.node,
          score: 0,
          closest: {
            distance: Infinity,
            ref: {
              node: null,
              index: 0
            }
          }
        };
      }
      // Increment the prop score
      errors[propA.index].score++;
      // Stop here if we already have a closer reference
      if (Math.abs(propA.index - propB.index) > errors[propA.index].closest.distance) {
        return;
      }
      // Update the closest reference
      errors[propA.index].closest.distance = Math.abs(propA.index - propB.index);
      errors[propA.index].closest.ref.node = propB.node;
      errors[propA.index].closest.ref.index = propB.index;
    }

    /**
     * Dedupe errors, only keep the ones with the highest score and delete the others
     */
    function dedupeErrors() {
      for (var i in errors) {
        if (!errors.hasOwnProperty(i)) {
          continue;
        }
        var index = errors[i].closest.ref.index;
        if (!errors[index]) {
          continue;
        }
        if (errors[i].score > errors[index].score) {
          delete errors[index];
        } else {
          delete errors[i];
        }
      }
    }

    /**
     * Report errors
     */
    function reportErrors() {
      dedupeErrors();

      var nodeA;
      var nodeB;
      var indexA;
      var indexB;
      for (var i in errors) {
        if (!errors.hasOwnProperty(i)) {
          continue;
        }

        nodeA = errors[i].node;
        nodeB = errors[i].closest.ref.node;
        indexA = i;
        indexB = errors[i].closest.ref.index;

        context.report({
          node: nodeA,
          message: MISPOSITION_MESSAGE,
          data: {
            propA: getPropertyName(nodeA),
            propB: getPropertyName(nodeB),
            position: indexA < indexB ? 'before' : 'after'
          }
        });
      }
    }

    /**
     * Get properties for a given AST node
     * @param {ASTNode} node The AST node being checked.
     * @returns {Array} Properties array.
     */
    function getComponentProperties(node) {
      switch (node.type) {
        case 'ClassDeclaration':
          return node.body.body;
        case 'ObjectExpression':
          return node.properties.filter(function(property) {
            return property.type === 'Property';
          });
        default:
          return [];
      }
    }

    /**
     * Compare two properties and find out if they are in the right order
     * @param {Array} propertiesInfos Array containing all the properties metadata.
     * @param {Object} propA First property name and metadata
     * @param {Object} propB Second property name.
     * @returns {Object} Object containing a correct true/false flag and the correct indexes for the two properties.
     */
    function comparePropsOrder(propertiesInfos, propA, propB) {
      var i;
      var j;
      var k;
      var l;
      var refIndexA;
      var refIndexB;

      // Get references indexes (the correct position) for given properties
      var refIndexesA = getRefPropIndexes(propA);
      var refIndexesB = getRefPropIndexes(propB);

      // Get current indexes for given properties
      var classIndexA = propertiesInfos.indexOf(propA);
      var classIndexB = propertiesInfos.indexOf(propB);

      // Loop around the references indexes for the 1st property
      for (i = 0, j = refIndexesA.length; i < j; i++) {
        refIndexA = refIndexesA[i];

        // Loop around the properties for the 2nd property (for comparison)
        for (k = 0, l = refIndexesB.length; k < l; k++) {
          refIndexB = refIndexesB[k];

          if (
            // Comparing the same properties
            refIndexA === refIndexB ||
            // 1st property is placed before the 2nd one in reference and in current component
            refIndexA < refIndexB && classIndexA < classIndexB ||
            // 1st property is placed after the 2nd one in reference and in current component
            refIndexA > refIndexB && classIndexA > classIndexB
          ) {
            return {
              correct: true,
              indexA: classIndexA,
              indexB: classIndexB
            };
          }

        }
      }

      // We did not find any correct match between reference and current component
      return {
        correct: false,
        indexA: refIndexA,
        indexB: refIndexB
      };
    }

    /**
     * Check properties order from a properties list and store the eventual errors
     * @param {Array} properties Array containing all the properties.
     */
    function checkPropsOrder(properties) {
      var propertiesInfos = properties.map(function(node) {
        return {
          name: getPropertyName(node),
          static: node.static,
          typeAnnotation: !!node.typeAnnotation && node.value === null
        };
      });

      var i;
      var j;
      var k;
      var l;
      var propA;
      var propB;
      var order;

      // Loop around the properties
      for (i = 0, j = propertiesInfos.length; i < j; i++) {
        propA = propertiesInfos[i];

        // Loop around the properties a second time (for comparison)
        for (k = 0, l = propertiesInfos.length; k < l; k++) {
          propB = propertiesInfos[k];

          // Compare the properties order
          order = comparePropsOrder(propertiesInfos, propA, propB);

          // Continue to next comparison is order is correct
          if (order.correct === true) {
            continue;
          }

          // Store an error if the order is incorrect
          storeError({
            node: properties[i],
            index: order.indexA
          }, {
            node: properties[k],
            index: order.indexB
          });
        }
      }

    }

    return {
      'Program:exit': function() {
        var list = components.list();
        for (var component in list) {
          if (!list.hasOwnProperty(component)) {
            continue;
          }
          var properties = getComponentProperties(list[component].node);
          checkPropsOrder(properties);
        }

        reportErrors();
      }
    };

  })
};

},{"../util/Components":54,"util":99}],51:[function(require,module,exports){
/**
 * @fileoverview Enforce propTypes declarations alphabetical sorting
 */
'use strict';

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'Enforce propTypes declarations alphabetical sorting',
      category: 'Stylistic Issues',
      recommended: false
    },

    schema: [{
      type: 'object',
      properties: {
        requiredFirst: {
          type: 'boolean'
        },
        callbacksLast: {
          type: 'boolean'
        },
        ignoreCase: {
          type: 'boolean'
        }
      },
      additionalProperties: false
    }]
  },

  create: function(context) {

    var sourceCode = context.getSourceCode();
    var configuration = context.options[0] || {};
    var requiredFirst = configuration.requiredFirst || false;
    var callbacksLast = configuration.callbacksLast || false;
    var ignoreCase = configuration.ignoreCase || false;

    /**
     * Checks if node is `propTypes` declaration
     * @param {ASTNode} node The AST node being checked.
     * @returns {Boolean} True if node is `propTypes` declaration, false if not.
     */
    function isPropTypesDeclaration(node) {

      // Special case for class properties
      // (babel-eslint does not expose property name so we have to rely on tokens)
      if (node.type === 'ClassProperty') {
        var tokens = context.getFirstTokens(node, 2);
        return (tokens[0] && tokens[0].value === 'propTypes') ||
               (tokens[1] && tokens[1].value === 'propTypes');
      }

      return Boolean(
        node &&
        node.name === 'propTypes'
      );
    }

    function getKey(node) {
      return sourceCode.getText(node.key || node.argument);
    }

    function getValueName(node) {
      return node.type === 'Property' && node.value.property && node.value.property.name;
    }

    function isCallbackPropName(propName) {
      return /^on[A-Z]/.test(propName);
    }

    function isRequiredProp(node) {
      return getValueName(node) === 'isRequired';
    }

    /**
     * Checks if propTypes declarations are sorted
     * @param {Array} declarations The array of AST nodes being checked.
     * @returns {void}
     */
    function checkSorted(declarations) {
      declarations.reduce(function(prev, curr, idx, decls) {
        if (/SpreadProperty$/.test(curr.type)) {
          return decls[idx + 1];
        }

        var prevPropName = getKey(prev);
        var currentPropName = getKey(curr);
        var previousIsRequired = isRequiredProp(prev);
        var currentIsRequired = isRequiredProp(curr);
        var previousIsCallback = isCallbackPropName(prevPropName);
        var currentIsCallback = isCallbackPropName(currentPropName);

        if (ignoreCase) {
          prevPropName = prevPropName.toLowerCase();
          currentPropName = currentPropName.toLowerCase();
        }

        if (requiredFirst) {
          if (previousIsRequired && !currentIsRequired) {
            // Transition between required and non-required. Don't compare for alphabetical.
            return curr;
          }
          if (!previousIsRequired && currentIsRequired) {
            // Encountered a non-required prop after a required prop
            context.report({
              node: curr,
              message: 'Required prop types must be listed before all other prop types'
            });
            return curr;
          }
        }

        if (callbacksLast) {
          if (!previousIsCallback && currentIsCallback) {
            // Entering the callback prop section
            return curr;
          }
          if (previousIsCallback && !currentIsCallback) {
            // Encountered a non-callback prop after a callback prop
            context.report({
              node: prev,
              message: 'Callback prop types must be listed after all other prop types'
            });
            return prev;
          }
        }

        if (currentPropName < prevPropName) {
          context.report({
            node: curr,
            message: 'Prop types declarations should be sorted alphabetically'
          });
          return prev;
        }

        return curr;
      }, declarations[0]);
    }

    return {
      ClassProperty: function(node) {
        if (isPropTypesDeclaration(node) && node.value && node.value.type === 'ObjectExpression') {
          checkSorted(node.value.properties);
        }
      },

      MemberExpression: function(node) {
        if (isPropTypesDeclaration(node.property)) {
          var right = node.parent.right;
          if (right && right.type === 'ObjectExpression') {
            checkSorted(right.properties);
          }
        }
      },

      ObjectExpression: function(node) {
        node.properties.forEach(function(property) {
          if (!property.key) {
            return;
          }

          if (!isPropTypesDeclaration(property.key)) {
            return;
          }
          if (property.value.type === 'ObjectExpression') {
            checkSorted(property.value.properties);
          }
        });
      }

    };
  }
};

},{}],52:[function(require,module,exports){
/**
 * @fileoverview Enforce style prop value is an object
 * @author David Petersen
 */
'use strict';

var variableUtil = require('../util/variable');

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'Enforce style prop value is an object',
      category: '',
      recommended: false
    },
    schema: []
  },

  create: function(context) {
    /**
     * @param {object} node A Identifier node
     */
    function checkIdentifiers(node) {
      var variable = variableUtil.variablesInScope(context).find(function (item) {
        return item.name === node.name;
      });

      if (!variable || !variable.defs[0].node.init) {
        return;
      }

      if (variable.defs[0].node.init.type === 'Literal') {
        context.report(node, 'Style prop value must be an object');
      }
    }

    return {
      CallExpression: function(node) {
        if (
          node.callee
          && node.callee.type === 'MemberExpression'
          && node.callee.property.name === 'createElement'
          && node.arguments.length > 1
        ) {
          if (node.arguments[1].type === 'ObjectExpression') {
            var style = node.arguments[1].properties.find(function(property) {
              return property.key.name === 'style';
            });
            if (style) {
              if (style.value.type === 'Identifier') {
                checkIdentifiers(style.value);
              } else if (style.value.type === 'Literal') {
                context.report(style.value, 'Style prop value must be an object');
              }
            }
          }
        }
      },

      JSXAttribute: function(node) {
        if (node.name.name !== 'style') {
          return;
        }

        if (
          node.value.type !== 'JSXExpressionContainer'
          || node.value.expression.type === 'Literal'
        ) {
          context.report(node, 'Style prop value must be an object');
        } else if (node.value.expression.type === 'Identifier') {
          checkIdentifiers(node.value.expression);
        }
      }
    };
  }
};

},{"../util/variable":56}],53:[function(require,module,exports){
(function (process){
/**
 * @fileoverview Prevent missing parentheses around multilines JSX
 * @author Yannick Croissant
 * @deprecated
 */
'use strict';

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

var util = require('util');
var jsxWrapMultilines = require('./jsx-wrap-multilines');
var isWarnedForDeprecation = false;

module.exports = {
  meta: {
    docs: {
      description: 'Prevent missing parentheses around multilines JSX',
      category: 'Stylistic Issues',
      recommended: false
    },
    fixable: 'code',

    schema: [{
      type: 'object',
      properties: {
        declaration: {
          type: 'boolean'
        },
        assignment: {
          type: 'boolean'
        },
        return: {
          type: 'boolean'
        }
      },
      additionalProperties: false
    }]
  },

  create: function(context) {
    return util._extend(jsxWrapMultilines.create(context), {
      Program: function() {
        if (isWarnedForDeprecation || /\=-(f|-format)=/.test(process.argv.join('='))) {
          return;
        }

        /* eslint-disable no-console */
        console.log('The react/wrap-multilines rule is deprecated. Please ' +
                    'use the react/jsx-wrap-multilines rule instead.');
        /* eslint-enable no-console */
        isWarnedForDeprecation = true;
      }
    });
  }
};

}).call(this,require('_process'))
},{"./jsx-wrap-multilines":27,"_process":97,"util":99}],54:[function(require,module,exports){
/**
 * @fileoverview Utility class and functions for React components detection
 * @author Yannick Croissant
 */
'use strict';

var util = require('util');
var doctrine = require('doctrine');
var variableUtil = require('./variable');
var pragmaUtil = require('./pragma');

/**
 * Components
 * @class
 */
function Components() {
  this._list = {};
  this._getId = function(node) {
    return node && node.range.join(':');
  };
}

/**
 * Add a node to the components list, or update it if it's already in the list
 *
 * @param {ASTNode} node The AST node being added.
 * @param {Number} confidence Confidence in the component detection (0=banned, 1=maybe, 2=yes)
 * @returns {Object} Added component object
 */
Components.prototype.add = function(node, confidence) {
  var id = this._getId(node);
  if (this._list[id]) {
    if (confidence === 0 || this._list[id].confidence === 0) {
      this._list[id].confidence = 0;
    } else {
      this._list[id].confidence = Math.max(this._list[id].confidence, confidence);
    }
    return this._list[id];
  }
  this._list[id] = {
    node: node,
    confidence: confidence
  };
  return this._list[id];
};

/**
 * Find a component in the list using its node
 *
 * @param {ASTNode} node The AST node being searched.
 * @returns {Object} Component object, undefined if the component is not found
 */
Components.prototype.get = function(node) {
  var id = this._getId(node);
  return this._list[id];
};

/**
 * Update a component in the list
 *
 * @param {ASTNode} node The AST node being updated.
 * @param {Object} props Additional properties to add to the component.
 */
Components.prototype.set = function(node, props) {
  while (node && !this._list[this._getId(node)]) {
    node = node.parent;
  }
  if (!node) {
    return;
  }
  var id = this._getId(node);
  this._list[id] = util._extend(this._list[id], props);
};

/**
 * Return the components list
 * Components for which we are not confident are not returned
 *
 * @returns {Object} Components list
 */
Components.prototype.list = function() {
  var list = {};
  var usedPropTypes = {};
  // Find props used in components for which we are not confident
  for (var i in this._list) {
    if (!this._list.hasOwnProperty(i) || this._list[i].confidence >= 2) {
      continue;
    }
    var component = null;
    var node = null;
    node = this._list[i].node;
    while (!component && node.parent) {
      node = node.parent;
      // Stop moving up if we reach a decorator
      if (node.type === 'Decorator') {
        break;
      }
      component = this.get(node);
    }
    if (component) {
      usedPropTypes[this._getId(component.node)] = (this._list[i].usedPropTypes || []).filter(function(propType) {
        return propType.node.kind !== 'init';
      });
    }
  }
  // Assign used props in not confident components to the parent component
  for (var j in this._list) {
    if (!this._list.hasOwnProperty(j) || this._list[j].confidence < 2) {
      continue;
    }
    var id = this._getId(this._list[j].node);
    list[j] = this._list[j];
    if (usedPropTypes[id]) {
      list[j].usedPropTypes = (list[j].usedPropTypes || []).concat(usedPropTypes[id]);
    }
  }
  return list;
};

/**
 * Return the length of the components list
 * Components for which we are not confident are not counted
 *
 * @returns {Number} Components list length
 */
Components.prototype.length = function() {
  var length = 0;
  for (var i in this._list) {
    if (!this._list.hasOwnProperty(i) || this._list[i].confidence < 2) {
      continue;
    }
    length++;
  }
  return length;
};

function componentRule(rule, context) {

  var createClass = pragmaUtil.getCreateClassFromContext(context);
  var pragma = pragmaUtil.getFromContext(context);
  var sourceCode = context.getSourceCode();
  var components = new Components();

  // Utilities for component detection
  var utils = {

    /**
     * Check if the node is a React ES5 component
     *
     * @param {ASTNode} node The AST node being checked.
     * @returns {Boolean} True if the node is a React ES5 component, false if not
     */
    isES5Component: function(node) {
      if (!node.parent) {
        return false;
      }
      return new RegExp('^(' + pragma + '\\.)?' + createClass + '$').test(sourceCode.getText(node.parent.callee));
    },

    /**
     * Check if the node is a React ES6 component
     *
     * @param {ASTNode} node The AST node being checked.
     * @returns {Boolean} True if the node is a React ES6 component, false if not
     */
    isES6Component: function(node) {
      if (utils.isExplicitComponent(node)) {
        return true;
      }

      if (!node.superClass) {
        return false;
      }
      return new RegExp('^(' + pragma + '\\.)?(Pure)?Component$').test(sourceCode.getText(node.superClass));
    },

    /**
     * Check if the node is explicitly declared as a descendant of a React Component
     *
     * @param {ASTNode} node The AST node being checked (can be a ReturnStatement or an ArrowFunctionExpression).
     * @returns {Boolean} True if the node is explicitly declared as a descendant of a React Component, false if not
     */
    isExplicitComponent: function(node) {
      var comment = sourceCode.getJSDocComment(node);

      if (comment === null) {
        return false;
      }

      var commentAst = doctrine.parse(comment.value, {
        unwrap: true,
        tags: ['extends', 'augments']
      });

      var relevantTags = commentAst.tags.filter(function(tag) {
        return tag.name === 'React.Component' || tag.name === 'React.PureComponent';
      });

      return relevantTags.length > 0;
    },

    /**
     * Checks to see if our component extends React.PureComponent
     *
     * @param {ASTNode} node The AST node being checked.
     * @returns {Boolean} True if node extends React.PureComponent, false if not
     */
    isPureComponent: function (node) {
      if (node.superClass) {
        return new RegExp('^(' + pragma + '\\.)?PureComponent$').test(sourceCode.getText(node.superClass));
      }
      return false;
    },

    /**
     * Check if the node is returning JSX
     *
     * @param {ASTNode} ASTnode The AST node being checked
     * @param {Boolean} strict If true, in a ternary condition the node must return JSX in both cases
     * @returns {Boolean} True if the node is returning JSX, false if not
     */
    isReturningJSX: function(ASTnode, strict) {
      var property;
      var node = ASTnode;
      switch (node.type) {
        case 'ReturnStatement':
          property = 'argument';
          break;
        case 'ArrowFunctionExpression':
          property = 'body';
          break;
        default:
          node = utils.findReturnStatement(node);
          if (!node) {
            return false;
          }
          property = 'argument';
      }

      var returnsConditionalJSXConsequent =
        node[property] &&
        node[property].type === 'ConditionalExpression' &&
        node[property].consequent.type === 'JSXElement'
      ;
      var returnsConditionalJSXAlternate =
        node[property] &&
        node[property].type === 'ConditionalExpression' &&
        node[property].alternate.type === 'JSXElement'
      ;
      var returnsConditionalJSX =
        strict ? (returnsConditionalJSXConsequent && returnsConditionalJSXAlternate) :
        (returnsConditionalJSXConsequent || returnsConditionalJSXAlternate);

      var returnsJSX =
        node[property] &&
        node[property].type === 'JSXElement'
      ;
      var returnsReactCreateElement =
        node[property] &&
        node[property].callee &&
        node[property].callee.property &&
        node[property].callee.property.name === 'createElement'
      ;

      return Boolean(
        returnsConditionalJSX ||
        returnsJSX ||
        returnsReactCreateElement
      );
    },

    /**
     * Find a return statment in the current node
     *
     * @param {ASTNode} ASTnode The AST node being checked
     */
    findReturnStatement: function(node) {
      if (!node.value || !node.value.body) {
        return false;
      }
      var i = node.value.body.body.length - 1;
      for (; i >= 0; i--) {
        if (node.value.body.body[i].type === 'ReturnStatement') {
          return node.value.body.body[i];
        }
      }
      return false;
    },

    /**
     * Get the parent component node from the current scope
     *
     * @returns {ASTNode} component node, null if we are not in a component
     */
    getParentComponent: function() {
      return (
        utils.getParentES6Component() ||
        utils.getParentES5Component() ||
        utils.getParentStatelessComponent()
      );
    },

    /**
     * Get the parent ES5 component node from the current scope
     *
     * @returns {ASTNode} component node, null if we are not in a component
     */
    getParentES5Component: function() {
      var scope = context.getScope();
      while (scope) {
        var node = scope.block && scope.block.parent && scope.block.parent.parent;
        if (node && utils.isES5Component(node)) {
          return node;
        }
        scope = scope.upper;
      }
      return null;
    },

    /**
     * Get the parent ES6 component node from the current scope
     *
     * @returns {ASTNode} component node, null if we are not in a component
     */
    getParentES6Component: function() {
      var scope = context.getScope();
      while (scope && scope.type !== 'class') {
        scope = scope.upper;
      }
      var node = scope && scope.block;
      if (!node || !utils.isES6Component(node)) {
        return null;
      }
      return node;
    },

    /**
     * Get the parent stateless component node from the current scope
     *
     * @returns {ASTNode} component node, null if we are not in a component
     */
    getParentStatelessComponent: function() {
      var scope = context.getScope();
      while (scope) {
        var node = scope.block;
        var isClass = node.type === 'ClassExpression';
        var isFunction = /Function/.test(node.type); // Functions
        var isMethod = node.parent && node.parent.type === 'MethodDefinition'; // Classes methods
        var isArgument = node.parent && node.parent.type === 'CallExpression'; // Arguments (callback, etc.)
        // Stop moving up if we reach a class or an argument (like a callback)
        if (isClass || isArgument) {
          return null;
        }
        // Return the node if it is a function that is not a class method
        if (isFunction && !isMethod) {
          return node;
        }
        scope = scope.upper;
      }
      return null;
    },

    /**
     * Get the related component from a node
     *
     * @param {ASTNode} node The AST node being checked (must be a MemberExpression).
     * @returns {ASTNode} component node, null if we cannot find the component
     */
    getRelatedComponent: function(node) {
      var i;
      var j;
      var k;
      var l;
      var componentName;
      var componentNode;
      // Get the component path
      var componentPath = [];
      while (node) {
        if (node.property && node.property.type === 'Identifier') {
          componentPath.push(node.property.name);
        }
        if (node.object && node.object.type === 'Identifier') {
          componentPath.push(node.object.name);
        }
        node = node.object;
      }
      componentPath.reverse();
      componentName = componentPath.slice(0, componentPath.length - 1).join('.');

      // Find the variable in the current scope
      var variableName = componentPath.shift();
      if (!variableName) {
        return null;
      }
      var variableInScope;
      var variables = variableUtil.variablesInScope(context);
      for (i = 0, j = variables.length; i < j; i++) {
        if (variables[i].name === variableName) {
          variableInScope = variables[i];
          break;
        }
      }
      if (!variableInScope) {
        return null;
      }

      // Try to find the component using variable references
      var refs = variableInScope.references;
      var refId;
      for (i = 0, j = refs.length; i < j; i++) {
        refId = refs[i].identifier;
        if (refId.parent && refId.parent.type === 'MemberExpression') {
          refId = refId.parent;
        }
        if (sourceCode.getText(refId) !== componentName) {
          continue;
        }
        if (refId.type === 'MemberExpression') {
          componentNode = refId.parent.right;
        } else if (refId.parent && refId.parent.type === 'VariableDeclarator') {
          componentNode = refId.parent.init;
        }
        break;
      }

      if (componentNode) {
        // Return the component
        return components.add(componentNode, 1);
      }

      // Try to find the component using variable declarations
      var defInScope;
      var defs = variableInScope.defs;
      for (i = 0, j = defs.length; i < j; i++) {
        if (defs[i].type === 'ClassName' || defs[i].type === 'FunctionName' || defs[i].type === 'Variable') {
          defInScope = defs[i];
          break;
        }
      }
      if (!defInScope || !defInScope.node) {
        return null;
      }
      componentNode = defInScope.node.init || defInScope.node;

      // Traverse the node properties to the component declaration
      for (i = 0, j = componentPath.length; i < j; i++) {
        if (!componentNode.properties) {
          continue;
        }
        for (k = 0, l = componentNode.properties.length; k < l; k++) {
          if (componentNode.properties[k].key.name === componentPath[i]) {
            componentNode = componentNode.properties[k];
            break;
          }
        }
        if (!componentNode || !componentNode.value) {
          return null;
        }
        componentNode = componentNode.value;
      }

      // Return the component
      return components.add(componentNode, 1);
    }
  };

  // Component detection instructions
  var detectionInstructions = {
    ClassExpression: function(node) {
      if (!utils.isES6Component(node)) {
        return;
      }
      components.add(node, 2);
    },

    ClassDeclaration: function(node) {
      if (!utils.isES6Component(node)) {
        return;
      }
      components.add(node, 2);
    },

    ClassProperty: function(node) {
      node = utils.getParentComponent();
      if (!node) {
        return;
      }
      components.add(node, 2);
    },

    ObjectExpression: function(node) {
      if (!utils.isES5Component(node)) {
        return;
      }
      components.add(node, 2);
    },

    FunctionExpression: function(node) {
      var component = utils.getParentComponent();
      if (
        !component ||
        (component.parent && component.parent.type === 'JSXExpressionContainer')
      ) {
        // Ban the node if we cannot find a parent component
        components.add(node, 0);
        return;
      }
      components.add(component, 1);
    },

    FunctionDeclaration: function(node) {
      node = utils.getParentComponent();
      if (!node) {
        return;
      }
      components.add(node, 1);
    },

    ArrowFunctionExpression: function(node) {
      var component = utils.getParentComponent();
      if (
        !component ||
        (component.parent && component.parent.type === 'JSXExpressionContainer')
      ) {
        // Ban the node if we cannot find a parent component
        components.add(node, 0);
        return;
      }
      if (component.expression && utils.isReturningJSX(component)) {
        components.add(component, 2);
      } else {
        components.add(component, 1);
      }
    },

    ThisExpression: function(node) {
      var component = utils.getParentComponent();
      if (!component || !/Function/.test(component.type) || !node.parent.property) {
        return;
      }
      // Ban functions accessing a property on a ThisExpression
      components.add(node, 0);
    },

    BlockComment: function(node) {
      pragma = pragmaUtil.getFromNode(node) || pragma;
    },

    ReturnStatement: function(node) {
      if (!utils.isReturningJSX(node)) {
        return;
      }
      node = utils.getParentComponent();
      if (!node) {
        var scope = context.getScope();
        components.add(scope.block, 1);
        return;
      }
      components.add(node, 2);
    }
  };

  // Update the provided rule instructions to add the component detection
  var ruleInstructions = rule(context, components, utils);
  var updatedRuleInstructions = util._extend({}, ruleInstructions);
  Object.keys(detectionInstructions).forEach(function(instruction) {
    updatedRuleInstructions[instruction] = function(node) {
      detectionInstructions[instruction](node);
      return ruleInstructions[instruction] ? ruleInstructions[instruction](node) : void 0;
    };
  });
  // Return the updated rule instructions
  return updatedRuleInstructions;
}

Components.detect = function(rule) {
  return componentRule.bind(this, rule);
};

module.exports = Components;

},{"./pragma":55,"./variable":56,"doctrine":58,"util":99}],55:[function(require,module,exports){
/**
 * @fileoverview Utility functions for React pragma configuration
 * @author Yannick Croissant
 */
'use strict';

var JSX_ANNOTATION_REGEX = /^\*\s*@jsx\s+([^\s]+)/;
// Does not check for reserved keywords or unicode characters
var JS_IDENTIFIER_REGEX = /^[_$a-zA-Z][_$a-zA-Z0-9]*$/;


function getCreateClassFromContext(context) {
  var pragma = 'createClass';
  // .eslintrc shared settings (http://eslint.org/docs/user-guide/configuring#adding-shared-settings)
  if (context.settings.react && context.settings.react.createClass) {
    pragma = context.settings.react.createClass;
  }
  if (!JS_IDENTIFIER_REGEX.test(pragma)) {
    throw new Error('createClass pragma ' + pragma + 'is not a valid function name');
  }
  return pragma;
}

function getFromContext(context) {
  var pragma = 'React';
  // .eslintrc shared settings (http://eslint.org/docs/user-guide/configuring#adding-shared-settings)
  if (context.settings.react && context.settings.react.pragma) {
    pragma = context.settings.react.pragma;
  }
  if (!JS_IDENTIFIER_REGEX.test(pragma)) {
    throw new Error('React pragma ' + pragma + 'is not a valid identifier');
  }
  return pragma;
}

function getFromNode(node) {
  var matches = JSX_ANNOTATION_REGEX.exec(node.value);
  if (!matches) {
    return false;
  }
  return matches[1].split('.')[0];
}

module.exports = {
  getCreateClassFromContext: getCreateClassFromContext,
  getFromContext: getFromContext,
  getFromNode: getFromNode
};

},{}],56:[function(require,module,exports){
/**
 * @fileoverview Utility functions for React components detection
 * @author Yannick Croissant
 */
'use strict';

/**
 * Record that a particular variable has been used in code
 *
 * @param {Object} context The current rule context.
 * @param {String} name The name of the variable to mark as used.
 * @returns {Boolean} True if the variable was found and marked as used, false if not.
 */
function markVariableAsUsed(context, name) {
  var scope = context.getScope();
  var variables;
  var i;
  var len;
  var found = false;

  // Special Node.js scope means we need to start one level deeper
  if (scope.type === 'global') {
    while (scope.childScopes.length) {
      scope = scope.childScopes[0];
    }
  }

  do {
    variables = scope.variables;
    for (i = 0, len = variables.length; i < len; i++) {
      if (variables[i].name === name) {
        variables[i].eslintUsed = true;
        found = true;
      }
    }
    scope = scope.upper;
  } while (scope);

  return found;
}

/**
 * Search a particular variable in a list
 * @param {Array} variables The variables list.
 * @param {Array} name The name of the variable to search.
 * @returns {Boolean} True if the variable was found, false if not.
 */
function findVariable(variables, name) {
  var i;
  var len;

  for (i = 0, len = variables.length; i < len; i++) {
    if (variables[i].name === name) {
      return true;
    }
  }

  return false;
}

/**
 * List all variable in a given scope
 *
 * Contain a patch for babel-eslint to avoid https://github.com/babel/babel-eslint/issues/21
 *
 * @param {Object} context The current rule context.
 * @param {Array} name The name of the variable to search.
 * @returns {Boolean} True if the variable was found, false if not.
 */
function variablesInScope(context) {
  var scope = context.getScope();
  var variables = scope.variables;

  while (scope.type !== 'global') {
    scope = scope.upper;
    variables = scope.variables.concat(variables);
  }
  if (scope.childScopes.length) {
    variables = scope.childScopes[0].variables.concat(variables);
    if (scope.childScopes[0].childScopes.length) {
      variables = scope.childScopes[0].childScopes[0].variables.concat(variables);
    }
  }
  variables.reverse();

  return variables;
}

module.exports = {
  findVariable: findVariable,
  variablesInScope: variablesInScope,
  markVariableAsUsed: markVariableAsUsed
};

},{}],57:[function(require,module,exports){
/**
 * @fileoverview Utility functions for React version configuration
 * @author Yannick Croissant
 */
'use strict';

function getFromContext(context) {
  var confVer = '999.999.999';
  // .eslintrc shared settings (http://eslint.org/docs/user-guide/configuring#adding-shared-settings)
  if (context.settings.react && context.settings.react.version) {
    confVer = context.settings.react.version;
  }
  confVer = /^[0-9]+\.[0-9]+$/.test(confVer) ? confVer + '.0' : confVer;
  return confVer.split('.').map(function(part) {
    return Number(part);
  });
}

function test(context, methodVer) {
  var confVer = getFromContext(context);
  methodVer = methodVer.split('.').map(function(part) {
    return Number(part);
  });
  var higherMajor = methodVer[0] < confVer[0];
  var higherMinor = methodVer[0] === confVer[0] && methodVer[1] < confVer[1];
  var higherOrEqualPatch = methodVer[0] === confVer[0] && methodVer[1] === confVer[1] && methodVer[2] <= confVer[2];

  return higherMajor || higherMinor || higherOrEqualPatch;
}

module.exports = {
  test: test
};

},{}],58:[function(require,module,exports){
/*
 * @fileoverview Main Doctrine object
 * @author Yusuke Suzuki <utatane.tea@gmail.com>
 * @author Dan Tao <daniel.tao@gmail.com>
 * @author Andrew Eisenberg <andrew@eisenberg.as>
 */

(function () {
    'use strict';

    var typed,
        utility,
        isArray,
        jsdoc,
        esutils,
        hasOwnProperty;

    esutils = require('esutils');
    isArray = require('isarray');
    typed = require('./typed');
    utility = require('./utility');

    function sliceSource(source, index, last) {
        return source.slice(index, last);
    }

    hasOwnProperty = (function () {
        var func = Object.prototype.hasOwnProperty;
        return function hasOwnProperty(obj, name) {
            return func.call(obj, name);
        };
    }());

    function shallowCopy(obj) {
        var ret = {}, key;
        for (key in obj) {
            if (obj.hasOwnProperty(key)) {
                ret[key] = obj[key];
            }
        }
        return ret;
    }

    function isASCIIAlphanumeric(ch) {
        return (ch >= 0x61  /* 'a' */ && ch <= 0x7A  /* 'z' */) ||
            (ch >= 0x41  /* 'A' */ && ch <= 0x5A  /* 'Z' */) ||
            (ch >= 0x30  /* '0' */ && ch <= 0x39  /* '9' */);
    }

    function isParamTitle(title) {
        return title === 'param' || title === 'argument' || title === 'arg';
    }

    function isReturnTitle(title) {
        return title === 'return' || title === 'returns';
    }

    function isProperty(title) {
        return title === 'property' || title === 'prop';
    }

    function isNameParameterRequired(title) {
        return isParamTitle(title) || isProperty(title) ||
            title === 'alias' || title === 'this' || title === 'mixes' || title === 'requires';
    }

    function isAllowedName(title) {
        return isNameParameterRequired(title) || title === 'const' || title === 'constant';
    }

    function isAllowedNested(title) {
        return isProperty(title) || isParamTitle(title);
    }

    function isTypeParameterRequired(title) {
        return isParamTitle(title) || isReturnTitle(title) ||
            title === 'define' || title === 'enum' ||
            title === 'implements' || title === 'this' ||
            title === 'type' || title === 'typedef' || isProperty(title);
    }

    // Consider deprecation instead using 'isTypeParameterRequired' and 'Rules' declaration to pick when a type is optional/required
    // This would require changes to 'parseType'
    function isAllowedType(title) {
        return isTypeParameterRequired(title) || title === 'throws' || title === 'const' || title === 'constant' ||
            title === 'namespace' || title === 'member' || title === 'var' || title === 'module' ||
            title === 'constructor' || title === 'class' || title === 'extends' || title === 'augments' ||
            title === 'public' || title === 'private' || title === 'protected';
    }

    function trim(str) {
        return str.replace(/^\s+/, '').replace(/\s+$/, '');
    }

    function unwrapComment(doc) {
        // JSDoc comment is following form
        //   /**
        //    * .......
        //    */
        // remove /**, */ and *
        var BEFORE_STAR = 0,
            STAR = 1,
            AFTER_STAR = 2,
            index,
            len,
            mode,
            result,
            ch;

        doc = doc.replace(/^\/\*\*?/, '').replace(/\*\/$/, '');
        index = 0;
        len = doc.length;
        mode = BEFORE_STAR;
        result = '';

        while (index < len) {
            ch = doc.charCodeAt(index);
            switch (mode) {
            case BEFORE_STAR:
                if (esutils.code.isLineTerminator(ch)) {
                    result += String.fromCharCode(ch);
                } else if (ch === 0x2A  /* '*' */) {
                    mode = STAR;
                } else if (!esutils.code.isWhiteSpace(ch)) {
                    result += String.fromCharCode(ch);
                    mode = AFTER_STAR;
                }
                break;

            case STAR:
                if (!esutils.code.isWhiteSpace(ch)) {
                    result += String.fromCharCode(ch);
                }
                mode = esutils.code.isLineTerminator(ch) ? BEFORE_STAR : AFTER_STAR;
                break;

            case AFTER_STAR:
                result += String.fromCharCode(ch);
                if (esutils.code.isLineTerminator(ch)) {
                    mode = BEFORE_STAR;
                }
                break;
            }
            index += 1;
        }

        return result.replace(/\s+$/, '');
    }

    // JSDoc Tag Parser

    (function (exports) {
        var Rules,
            index,
            lineNumber,
            length,
            source,
            recoverable,
            sloppy,
            strict;

        function advance() {
            var ch = source.charCodeAt(index);
            index += 1;
            if (esutils.code.isLineTerminator(ch) && !(ch === 0x0D  /* '\r' */ && source.charCodeAt(index) === 0x0A  /* '\n' */)) {
                lineNumber += 1;
            }
            return String.fromCharCode(ch);
        }

        function scanTitle() {
            var title = '';
            // waste '@'
            advance();

            while (index < length && isASCIIAlphanumeric(source.charCodeAt(index))) {
                title += advance();
            }

            return title;
        }

        function seekContent() {
            var ch, waiting, last = index;

            waiting = false;
            while (last < length) {
                ch = source.charCodeAt(last);
                if (esutils.code.isLineTerminator(ch) && !(ch === 0x0D  /* '\r' */ && source.charCodeAt(last + 1) === 0x0A  /* '\n' */)) {
                    waiting = true;
                } else if (waiting) {
                    if (ch === 0x40  /* '@' */) {
                        break;
                    }
                    if (!esutils.code.isWhiteSpace(ch)) {
                        waiting = false;
                    }
                }
                last += 1;
            }
            return last;
        }

        // type expression may have nest brace, such as,
        // { { ok: string } }
        //
        // therefore, scanning type expression with balancing braces.
        function parseType(title, last) {
            var ch, brace, type, direct = false;


            // search '{'
            while (index < last) {
                ch = source.charCodeAt(index);
                if (esutils.code.isWhiteSpace(ch)) {
                    advance();
                } else if (ch === 0x7B  /* '{' */) {
                    advance();
                    break;
                } else {
                    // this is direct pattern
                    direct = true;
                    break;
                }
            }


            if (direct) {
                return null;
            }

            // type expression { is found
            brace = 1;
            type = '';
            while (index < last) {
                ch = source.charCodeAt(index);
                if (esutils.code.isLineTerminator(ch)) {
                    advance();
                } else {
                    if (ch === 0x7D  /* '}' */) {
                        brace -= 1;
                        if (brace === 0) {
                            advance();
                            break;
                        }
                    } else if (ch === 0x7B  /* '{' */) {
                        brace += 1;
                    }
                    type += advance();
                }
            }

            if (brace !== 0) {
                // braces is not balanced
                return utility.throwError('Braces are not balanced');
            }

            if (isParamTitle(title)) {
                return typed.parseParamType(type);
            }
            return typed.parseType(type);
        }

        function scanIdentifier(last) {
            var identifier;
            if (!esutils.code.isIdentifierStartES5(source.charCodeAt(index))) {
                return null;
            }
            identifier = advance();
            while (index < last && esutils.code.isIdentifierPartES5(source.charCodeAt(index))) {
                identifier += advance();
            }
            return identifier;
        }

        function skipWhiteSpace(last) {
            while (index < last && (esutils.code.isWhiteSpace(source.charCodeAt(index)) || esutils.code.isLineTerminator(source.charCodeAt(index)))) {
                advance();
            }
        }

        function parseName(last, allowBrackets, allowNestedParams) {
            var name = '',
                useBrackets,
                insideString;

            skipWhiteSpace(last);

            if (index >= last) {
                return null;
            }

            if (allowBrackets && source.charCodeAt(index) === 0x5B  /* '[' */) {
                useBrackets = true;
                name = advance();
            }

            if (!esutils.code.isIdentifierStartES5(source.charCodeAt(index))) {
                return null;
            }

            name += scanIdentifier(last);

            if (allowNestedParams) {
                if (source.charCodeAt(index) === 0x3A /* ':' */ && (
                        name === 'module' ||
                        name === 'external' ||
                        name === 'event')) {
                    name += advance();
                    name += scanIdentifier(last);

                }
                if(source.charCodeAt(index) === 0x5B  /* '[' */ && source.charCodeAt(index + 1) === 0x5D  /* ']' */){
                    name += advance();
                    name += advance();
                }
                while (source.charCodeAt(index) === 0x2E  /* '.' */ ||
                        source.charCodeAt(index) === 0x2F  /* '/' */ ||
                        source.charCodeAt(index) === 0x23  /* '#' */ ||
                        source.charCodeAt(index) === 0x2D  /* '-' */ ||
                        source.charCodeAt(index) === 0x7E  /* '~' */) {
                    name += advance();
                    name += scanIdentifier(last);
                }
            }

            if (useBrackets) {
                skipWhiteSpace(last);
                // do we have a default value for this?
                if (source.charCodeAt(index) === 0x3D  /* '=' */) {
                    // consume the '='' symbol
                    name += advance();
                    skipWhiteSpace(last);

                    var ch;
                    var bracketDepth = 1;

                    // scan in the default value
                    while (index < last) {
                        ch = source.charCodeAt(index);

                        if (esutils.code.isWhiteSpace(ch)) {
                            if (!insideString) {
                                skipWhiteSpace(last);
                                ch = source.charCodeAt(index);
                            }
                        }

                        if (ch === 0x27 /* ''' */) {
                            if (!insideString) {
                                insideString = '\'';
                            } else {
                                if (insideString === '\'') {
                                    insideString = '';
                                }
                            }
                        }

                        if (ch === 0x22 /* '"' */) {
                            if (!insideString) {
                                insideString = '"';
                            } else {
                                if (insideString === '"') {
                                    insideString = '';
                                }
                            }
                        }

                        if (ch === 0x5B /* '[' */) {
                            bracketDepth++;
                        } else if (ch === 0x5D  /* ']' */ &&
                            --bracketDepth === 0) {
                            break;
                        }

                        name += advance();
                    }
                }

                skipWhiteSpace(last);

                if (index >= last || source.charCodeAt(index) !== 0x5D  /* ']' */) {
                    // we never found a closing ']'
                    return null;
                }

                // collect the last ']'
                name += advance();
            }

            return name;
        }

        function skipToTag() {
            while (index < length && source.charCodeAt(index) !== 0x40  /* '@' */) {
                advance();
            }
            if (index >= length) {
                return false;
            }
            utility.assert(source.charCodeAt(index) === 0x40  /* '@' */);
            return true;
        }

        function TagParser(options, title) {
            this._options = options;
            this._title = title.toLowerCase();
            this._tag = {
                title: title,
                description: null
            };
            if (this._options.lineNumbers) {
                this._tag.lineNumber = lineNumber;
            }
            this._last = 0;
            // space to save special information for title parsers.
            this._extra = { };
        }

        // addError(err, ...)
        TagParser.prototype.addError = function addError(errorText) {
            var args = Array.prototype.slice.call(arguments, 1),
                msg = errorText.replace(
                    /%(\d)/g,
                    function (whole, index) {
                        utility.assert(index < args.length, 'Message reference must be in range');
                        return args[index];
                    }
                );

            if (!this._tag.errors) {
                this._tag.errors = [];
            }
            if (strict) {
                utility.throwError(msg);
            }
            this._tag.errors.push(msg);
            return recoverable;
        };

        TagParser.prototype.parseType = function () {
            // type required titles
            if (isTypeParameterRequired(this._title)) {
                try {
                    this._tag.type = parseType(this._title, this._last);
                    if (!this._tag.type) {
                        if (!isParamTitle(this._title) && !isReturnTitle(this._title)) {
                            if (!this.addError('Missing or invalid tag type')) {
                                return false;
                            }
                        }
                    }
                } catch (error) {
                    this._tag.type = null;
                    if (!this.addError(error.message)) {
                        return false;
                    }
                }
            } else if (isAllowedType(this._title)) {
                // optional types
                try {
                    this._tag.type = parseType(this._title, this._last);
                } catch (e) {
                    //For optional types, lets drop the thrown error when we hit the end of the file
                }
            }
            return true;
        };

        TagParser.prototype._parseNamePath = function (optional) {
            var name;
            name = parseName(this._last, sloppy && isParamTitle(this._title), true);
            if (!name) {
                if (!optional) {
                    if (!this.addError('Missing or invalid tag name')) {
                        return false;
                    }
                }
            }
            this._tag.name = name;
            return true;
        };

        TagParser.prototype.parseNamePath = function () {
            return this._parseNamePath(false);
        };

        TagParser.prototype.parseNamePathOptional = function () {
            return this._parseNamePath(true);
        };


        TagParser.prototype.parseName = function () {
            var assign, name;

            // param, property requires name
            if (isAllowedName(this._title)) {
                this._tag.name = parseName(this._last, sloppy && isParamTitle(this._title), isAllowedNested(this._title));
                if (!this._tag.name) {
                    if (!isNameParameterRequired(this._title)) {
                        return true;
                    }

                    // it's possible the name has already been parsed but interpreted as a type
                    // it's also possible this is a sloppy declaration, in which case it will be
                    // fixed at the end
                    if (isParamTitle(this._title) && this._tag.type && this._tag.type.name) {
                        this._extra.name = this._tag.type;
                        this._tag.name = this._tag.type.name;
                        this._tag.type = null;
                    } else {
                        if (!this.addError('Missing or invalid tag name')) {
                            return false;
                        }
                    }
                } else {
                    name = this._tag.name;
                    if (name.charAt(0) === '[' && name.charAt(name.length - 1) === ']') {
                        // extract the default value if there is one
                        // example: @param {string} [somebody=John Doe] description
                        assign = name.substring(1, name.length - 1).split('=');
                        if (assign[1]) {
                            this._tag['default'] = assign[1];
                        }
                        this._tag.name = assign[0];

                        // convert to an optional type
                        if (this._tag.type && this._tag.type.type !== 'OptionalType') {
                            this._tag.type = {
                                type: 'OptionalType',
                                expression: this._tag.type
                            };
                        }
                    }
                }
            }

            return true;
        };

        TagParser.prototype.parseDescription = function parseDescription() {
            var description = trim(sliceSource(source, index, this._last));
            if (description) {
                if ((/^-\s+/).test(description)) {
                    description = description.substring(2);
                }
                this._tag.description = description;
            }
            return true;
        };

        TagParser.prototype.parseCaption = function parseDescription() {
            var description = trim(sliceSource(source, index, this._last));
            var captionStartTag = '<caption>';
            var captionEndTag = '</caption>';
            var captionStart = description.indexOf(captionStartTag);
            var captionEnd = description.indexOf(captionEndTag);
            if (captionStart >= 0 && captionEnd >= 0) {
                this._tag.caption = trim(description.substring(
                    captionStart + captionStartTag.length, captionEnd));
                this._tag.description = trim(description.substring(captionEnd + captionEndTag.length));
            } else {
                this._tag.description = description;
            }
            return true;
        };

        TagParser.prototype.parseKind = function parseKind() {
            var kind, kinds;
            kinds = {
                'class': true,
                'constant': true,
                'event': true,
                'external': true,
                'file': true,
                'function': true,
                'member': true,
                'mixin': true,
                'module': true,
                'namespace': true,
                'typedef': true
            };
            kind = trim(sliceSource(source, index, this._last));
            this._tag.kind = kind;
            if (!hasOwnProperty(kinds, kind)) {
                if (!this.addError('Invalid kind name \'%0\'', kind)) {
                    return false;
                }
            }
            return true;
        };

        TagParser.prototype.parseAccess = function parseAccess() {
            var access;
            access = trim(sliceSource(source, index, this._last));
            this._tag.access = access;
            if (access !== 'private' && access !== 'protected' && access !== 'public') {
                if (!this.addError('Invalid access name \'%0\'', access)) {
                    return false;
                }
            }
            return true;
        };

        TagParser.prototype.parseThis = function parseAccess() {
            // this name may be a name expression (e.g. {foo.bar})
            // or a name path (e.g. foo.bar)
            var value = trim(sliceSource(source, index, this._last));
            if (value && value.charAt(0) === '{') {
                var gotType = this.parseType();
                if (gotType && this._tag.type.type === 'NameExpression') {
                    this._tag.name = this._tag.type.name;
                    return true;
                } else {
                    return this.addError('Invalid name for this');
                }
            } else {
                return this.parseNamePath();
            }
        };

        TagParser.prototype.parseVariation = function parseVariation() {
            var variation, text;
            text = trim(sliceSource(source, index, this._last));
            variation = parseFloat(text, 10);
            this._tag.variation = variation;
            if (isNaN(variation)) {
                if (!this.addError('Invalid variation \'%0\'', text)) {
                    return false;
                }
            }
            return true;
        };

        TagParser.prototype.ensureEnd = function () {
            var shouldBeEmpty = trim(sliceSource(source, index, this._last));
            if (shouldBeEmpty) {
                if (!this.addError('Unknown content \'%0\'', shouldBeEmpty)) {
                    return false;
                }
            }
            return true;
        };

        TagParser.prototype.epilogue = function epilogue() {
            var description;

            description = this._tag.description;
            // un-fix potentially sloppy declaration
            if (isParamTitle(this._title) && !this._tag.type && description && description.charAt(0) === '[') {
                this._tag.type = this._extra.name;
                if (!this._tag.name) {
                    this._tag.name = undefined;
                }

                if (!sloppy) {
                    if (!this.addError('Missing or invalid tag name')) {
                        return false;
                    }
                }
            }

            return true;
        };

        Rules = {
            // http://usejsdoc.org/tags-access.html
            'access': ['parseAccess'],
            // http://usejsdoc.org/tags-alias.html
            'alias': ['parseNamePath', 'ensureEnd'],
            // http://usejsdoc.org/tags-augments.html
            'augments': ['parseType', 'parseNamePathOptional', 'ensureEnd'],
            // http://usejsdoc.org/tags-constructor.html
            'constructor': ['parseType', 'parseNamePathOptional', 'ensureEnd'],
            // Synonym: http://usejsdoc.org/tags-constructor.html
            'class': ['parseType', 'parseNamePathOptional', 'ensureEnd'],
            // Synonym: http://usejsdoc.org/tags-extends.html
            'extends': ['parseType', 'parseNamePathOptional', 'ensureEnd'],
            // http://usejsdoc.org/tags-example.html
            'example': ['parseCaption'],
            // http://usejsdoc.org/tags-deprecated.html
            'deprecated': ['parseDescription'],
            // http://usejsdoc.org/tags-global.html
            'global': ['ensureEnd'],
            // http://usejsdoc.org/tags-inner.html
            'inner': ['ensureEnd'],
            // http://usejsdoc.org/tags-instance.html
            'instance': ['ensureEnd'],
            // http://usejsdoc.org/tags-kind.html
            'kind': ['parseKind'],
            // http://usejsdoc.org/tags-mixes.html
            'mixes': ['parseNamePath', 'ensureEnd'],
            // http://usejsdoc.org/tags-mixin.html
            'mixin': ['parseNamePathOptional', 'ensureEnd'],
            // http://usejsdoc.org/tags-member.html
            'member': ['parseType', 'parseNamePathOptional', 'ensureEnd'],
            // http://usejsdoc.org/tags-method.html
            'method': ['parseNamePathOptional', 'ensureEnd'],
            // http://usejsdoc.org/tags-module.html
            'module': ['parseType', 'parseNamePathOptional', 'ensureEnd'],
            // Synonym: http://usejsdoc.org/tags-method.html
            'func': ['parseNamePathOptional', 'ensureEnd'],
            // Synonym: http://usejsdoc.org/tags-method.html
            'function': ['parseNamePathOptional', 'ensureEnd'],
            // Synonym: http://usejsdoc.org/tags-member.html
            'var': ['parseType', 'parseNamePathOptional', 'ensureEnd'],
            // http://usejsdoc.org/tags-name.html
            'name': ['parseNamePath', 'ensureEnd'],
            // http://usejsdoc.org/tags-namespace.html
            'namespace': ['parseType', 'parseNamePathOptional', 'ensureEnd'],
            // http://usejsdoc.org/tags-private.html
            'private': ['parseType', 'parseDescription'],
            // http://usejsdoc.org/tags-protected.html
            'protected': ['parseType', 'parseDescription'],
            // http://usejsdoc.org/tags-public.html
            'public': ['parseType', 'parseDescription'],
            // http://usejsdoc.org/tags-readonly.html
            'readonly': ['ensureEnd'],
            // http://usejsdoc.org/tags-requires.html
            'requires': ['parseNamePath', 'ensureEnd'],
            // http://usejsdoc.org/tags-since.html
            'since': ['parseDescription'],
            // http://usejsdoc.org/tags-static.html
            'static': ['ensureEnd'],
            // http://usejsdoc.org/tags-summary.html
            'summary': ['parseDescription'],
            // http://usejsdoc.org/tags-this.html
            'this': ['parseThis', 'ensureEnd'],
            // http://usejsdoc.org/tags-todo.html
            'todo': ['parseDescription'],
            // http://usejsdoc.org/tags-typedef.html
            'typedef': ['parseType', 'parseNamePathOptional'],
            // http://usejsdoc.org/tags-variation.html
            'variation': ['parseVariation'],
            // http://usejsdoc.org/tags-version.html
            'version': ['parseDescription']
        };

        TagParser.prototype.parse = function parse() {
            var i, iz, sequences, method;

            // empty title
            if (!this._title) {
                if (!this.addError('Missing or invalid title')) {
                    return null;
                }
            }

            // Seek to content last index.
            this._last = seekContent(this._title);

            if (hasOwnProperty(Rules, this._title)) {
                sequences = Rules[this._title];
            } else {
                // default sequences
                sequences = ['parseType', 'parseName', 'parseDescription', 'epilogue'];
            }

            for (i = 0, iz = sequences.length; i < iz; ++i) {
                method = sequences[i];
                if (!this[method]()) {
                    return null;
                }
            }

            return this._tag;
        };

        function parseTag(options) {
            var title, parser, tag;

            // skip to tag
            if (!skipToTag()) {
                return null;
            }

            // scan title
            title = scanTitle();

            // construct tag parser
            parser = new TagParser(options, title);
            tag = parser.parse();

            // Seek global index to end of this tag.
            while (index < parser._last) {
                advance();
            }
            return tag;
        }

        //
        // Parse JSDoc
        //

        function scanJSDocDescription(preserveWhitespace) {
            var description = '', ch, atAllowed;

            atAllowed = true;
            while (index < length) {
                ch = source.charCodeAt(index);

                if (atAllowed && ch === 0x40  /* '@' */) {
                    break;
                }

                if (esutils.code.isLineTerminator(ch)) {
                    atAllowed = true;
                } else if (atAllowed && !esutils.code.isWhiteSpace(ch)) {
                    atAllowed = false;
                }

                description += advance();
            }

            return preserveWhitespace ? description : trim(description);
        }

        function parse(comment, options) {
            var tags = [], tag, description, interestingTags, i, iz;

            if (options === undefined) {
                options = {};
            }

            if (typeof options.unwrap === 'boolean' && options.unwrap) {
                source = unwrapComment(comment);
            } else {
                source = comment;
            }

            // array of relevant tags
            if (options.tags) {
                if (isArray(options.tags)) {
                    interestingTags = { };
                    for (i = 0, iz = options.tags.length; i < iz; i++) {
                        if (typeof options.tags[i] === 'string') {
                            interestingTags[options.tags[i]] = true;
                        } else {
                            utility.throwError('Invalid "tags" parameter: ' + options.tags);
                        }
                    }
                } else {
                    utility.throwError('Invalid "tags" parameter: ' + options.tags);
                }
            }

            length = source.length;
            index = 0;
            lineNumber = 0;
            recoverable = options.recoverable;
            sloppy = options.sloppy;
            strict = options.strict;

            description = scanJSDocDescription(options.preserveWhitespace);

            while (true) {
                tag = parseTag(options);
                if (!tag) {
                    break;
                }
                if (!interestingTags || interestingTags.hasOwnProperty(tag.title)) {
                    tags.push(tag);
                }
            }

            return {
                description: description,
                tags: tags
            };
        }
        exports.parse = parse;
    }(jsdoc = {}));

    exports.version = utility.VERSION;
    exports.parse = jsdoc.parse;
    exports.parseType = typed.parseType;
    exports.parseParamType = typed.parseParamType;
    exports.unwrapComment = unwrapComment;
    exports.Syntax = shallowCopy(typed.Syntax);
    exports.Error = utility.DoctrineError;
    exports.type = {
        Syntax: exports.Syntax,
        parseType: typed.parseType,
        parseParamType: typed.parseParamType,
        stringify: typed.stringify
    };
}());
/* vim: set sw=4 ts=4 et tw=80 : */

},{"./typed":59,"./utility":60,"esutils":64,"isarray":65}],59:[function(require,module,exports){
/*
 * @fileoverview Type expression parser.
 * @author Yusuke Suzuki <utatane.tea@gmail.com>
 * @author Dan Tao <daniel.tao@gmail.com>
 * @author Andrew Eisenberg <andrew@eisenberg.as>
 */

// "typed", the Type Expression Parser for doctrine.

(function () {
    'use strict';

    var Syntax,
        Token,
        source,
        length,
        index,
        previous,
        token,
        value,
        esutils,
        utility;

    esutils = require('esutils');
    utility = require('./utility');

    Syntax = {
        NullableLiteral: 'NullableLiteral',
        AllLiteral: 'AllLiteral',
        NullLiteral: 'NullLiteral',
        UndefinedLiteral: 'UndefinedLiteral',
        VoidLiteral: 'VoidLiteral',
        UnionType: 'UnionType',
        ArrayType: 'ArrayType',
        RecordType: 'RecordType',
        FieldType: 'FieldType',
        FunctionType: 'FunctionType',
        ParameterType: 'ParameterType',
        RestType: 'RestType',
        NonNullableType: 'NonNullableType',
        OptionalType: 'OptionalType',
        NullableType: 'NullableType',
        NameExpression: 'NameExpression',
        TypeApplication: 'TypeApplication',
        StringLiteralType: 'StringLiteralType',
        NumericLiteralType: 'NumericLiteralType'
    };

    Token = {
        ILLEGAL: 0,    // ILLEGAL
        DOT_LT: 1,     // .<
        REST: 2,       // ...
        LT: 3,         // <
        GT: 4,         // >
        LPAREN: 5,     // (
        RPAREN: 6,     // )
        LBRACE: 7,     // {
        RBRACE: 8,     // }
        LBRACK: 9,    // [
        RBRACK: 10,    // ]
        COMMA: 11,     // ,
        COLON: 12,     // :
        STAR: 13,      // *
        PIPE: 14,      // |
        QUESTION: 15,  // ?
        BANG: 16,      // !
        EQUAL: 17,     // =
        NAME: 18,      // name token
        STRING: 19,    // string
        NUMBER: 20,    // number
        EOF: 21
    };

    function isTypeName(ch) {
        return '><(){}[],:*|?!='.indexOf(String.fromCharCode(ch)) === -1 && !esutils.code.isWhiteSpace(ch) && !esutils.code.isLineTerminator(ch);
    }

    function Context(previous, index, token, value) {
        this._previous = previous;
        this._index = index;
        this._token = token;
        this._value = value;
    }

    Context.prototype.restore = function () {
        previous = this._previous;
        index = this._index;
        token = this._token;
        value = this._value;
    };

    Context.save = function () {
        return new Context(previous, index, token, value);
    };

    function advance() {
        var ch = source.charAt(index);
        index += 1;
        return ch;
    }

    function scanHexEscape(prefix) {
        var i, len, ch, code = 0;

        len = (prefix === 'u') ? 4 : 2;
        for (i = 0; i < len; ++i) {
            if (index < length && esutils.code.isHexDigit(source.charCodeAt(index))) {
                ch = advance();
                code = code * 16 + '0123456789abcdef'.indexOf(ch.toLowerCase());
            } else {
                return '';
            }
        }
        return String.fromCharCode(code);
    }

    function scanString() {
        var str = '', quote, ch, code, unescaped, restore; //TODO review removal octal = false
        quote = source.charAt(index);
        ++index;

        while (index < length) {
            ch = advance();

            if (ch === quote) {
                quote = '';
                break;
            } else if (ch === '\\') {
                ch = advance();
                if (!esutils.code.isLineTerminator(ch.charCodeAt(0))) {
                    switch (ch) {
                    case 'n':
                        str += '\n';
                        break;
                    case 'r':
                        str += '\r';
                        break;
                    case 't':
                        str += '\t';
                        break;
                    case 'u':
                    case 'x':
                        restore = index;
                        unescaped = scanHexEscape(ch);
                        if (unescaped) {
                            str += unescaped;
                        } else {
                            index = restore;
                            str += ch;
                        }
                        break;
                    case 'b':
                        str += '\b';
                        break;
                    case 'f':
                        str += '\f';
                        break;
                    case 'v':
                        str += '\v';
                        break;

                    default:
                        if (esutils.code.isOctalDigit(ch.charCodeAt(0))) {
                            code = '01234567'.indexOf(ch);

                            // \0 is not octal escape sequence
                            // Deprecating unused code. TODO review removal
                            //if (code !== 0) {
                            //    octal = true;
                            //}

                            if (index < length && esutils.code.isOctalDigit(source.charCodeAt(index))) {
                                //TODO Review Removal octal = true;
                                code = code * 8 + '01234567'.indexOf(advance());

                                // 3 digits are only allowed when string starts
                                // with 0, 1, 2, 3
                                if ('0123'.indexOf(ch) >= 0 &&
                                        index < length &&
                                        esutils.code.isOctalDigit(source.charCodeAt(index))) {
                                    code = code * 8 + '01234567'.indexOf(advance());
                                }
                            }
                            str += String.fromCharCode(code);
                        } else {
                            str += ch;
                        }
                        break;
                    }
                } else {
                    if (ch ===  '\r' && source.charCodeAt(index) === 0x0A  /* '\n' */) {
                        ++index;
                    }
                }
            } else if (esutils.code.isLineTerminator(ch.charCodeAt(0))) {
                break;
            } else {
                str += ch;
            }
        }

        if (quote !== '') {
            utility.throwError('unexpected quote');
        }

        value = str;
        return Token.STRING;
    }

    function scanNumber() {
        var number, ch;

        number = '';
        ch = source.charCodeAt(index);

        if (ch !== 0x2E  /* '.' */) {
            number = advance();
            ch = source.charCodeAt(index);

            if (number === '0') {
                if (ch === 0x78  /* 'x' */ || ch === 0x58  /* 'X' */) {
                    number += advance();
                    while (index < length) {
                        ch = source.charCodeAt(index);
                        if (!esutils.code.isHexDigit(ch)) {
                            break;
                        }
                        number += advance();
                    }

                    if (number.length <= 2) {
                        // only 0x
                        utility.throwError('unexpected token');
                    }

                    if (index < length) {
                        ch = source.charCodeAt(index);
                        if (esutils.code.isIdentifierStartES5(ch)) {
                            utility.throwError('unexpected token');
                        }
                    }
                    value = parseInt(number, 16);
                    return Token.NUMBER;
                }

                if (esutils.code.isOctalDigit(ch)) {
                    number += advance();
                    while (index < length) {
                        ch = source.charCodeAt(index);
                        if (!esutils.code.isOctalDigit(ch)) {
                            break;
                        }
                        number += advance();
                    }

                    if (index < length) {
                        ch = source.charCodeAt(index);
                        if (esutils.code.isIdentifierStartES5(ch) || esutils.code.isDecimalDigit(ch)) {
                            utility.throwError('unexpected token');
                        }
                    }
                    value = parseInt(number, 8);
                    return Token.NUMBER;
                }

                if (esutils.code.isDecimalDigit(ch)) {
                    utility.throwError('unexpected token');
                }
            }

            while (index < length) {
                ch = source.charCodeAt(index);
                if (!esutils.code.isDecimalDigit(ch)) {
                    break;
                }
                number += advance();
            }
        }

        if (ch === 0x2E  /* '.' */) {
            number += advance();
            while (index < length) {
                ch = source.charCodeAt(index);
                if (!esutils.code.isDecimalDigit(ch)) {
                    break;
                }
                number += advance();
            }
        }

        if (ch === 0x65  /* 'e' */ || ch === 0x45  /* 'E' */) {
            number += advance();

            ch = source.charCodeAt(index);
            if (ch === 0x2B  /* '+' */ || ch === 0x2D  /* '-' */) {
                number += advance();
            }

            ch = source.charCodeAt(index);
            if (esutils.code.isDecimalDigit(ch)) {
                number += advance();
                while (index < length) {
                    ch = source.charCodeAt(index);
                    if (!esutils.code.isDecimalDigit(ch)) {
                        break;
                    }
                    number += advance();
                }
            } else {
                utility.throwError('unexpected token');
            }
        }

        if (index < length) {
            ch = source.charCodeAt(index);
            if (esutils.code.isIdentifierStartES5(ch)) {
                utility.throwError('unexpected token');
            }
        }

        value = parseFloat(number);
        return Token.NUMBER;
    }


    function scanTypeName() {
        var ch, ch2;

        value = advance();
        while (index < length && isTypeName(source.charCodeAt(index))) {
            ch = source.charCodeAt(index);
            if (ch === 0x2E  /* '.' */) {
                if ((index + 1) >= length) {
                    return Token.ILLEGAL;
                }
                ch2 = source.charCodeAt(index + 1);
                if (ch2 === 0x3C  /* '<' */) {
                    break;
                }
            }
            value += advance();
        }
        return Token.NAME;
    }

    function next() {
        var ch;

        previous = index;

        while (index < length && esutils.code.isWhiteSpace(source.charCodeAt(index))) {
            advance();
        }
        if (index >= length) {
            token = Token.EOF;
            return token;
        }

        ch = source.charCodeAt(index);
        switch (ch) {
        case 0x27:  /* ''' */
        case 0x22:  /* '"' */
            token = scanString();
            return token;

        case 0x3A:  /* ':' */
            advance();
            token = Token.COLON;
            return token;

        case 0x2C:  /* ',' */
            advance();
            token = Token.COMMA;
            return token;

        case 0x28:  /* '(' */
            advance();
            token = Token.LPAREN;
            return token;

        case 0x29:  /* ')' */
            advance();
            token = Token.RPAREN;
            return token;

        case 0x5B:  /* '[' */
            advance();
            token = Token.LBRACK;
            return token;

        case 0x5D:  /* ']' */
            advance();
            token = Token.RBRACK;
            return token;

        case 0x7B:  /* '{' */
            advance();
            token = Token.LBRACE;
            return token;

        case 0x7D:  /* '}' */
            advance();
            token = Token.RBRACE;
            return token;

        case 0x2E:  /* '.' */
            if (index + 1 < length) {
                ch = source.charCodeAt(index + 1);
                if (ch === 0x3C  /* '<' */) {
                    advance();  // '.'
                    advance();  // '<'
                    token = Token.DOT_LT;
                    return token;
                }

                if (ch === 0x2E  /* '.' */ && index + 2 < length && source.charCodeAt(index + 2) === 0x2E  /* '.' */) {
                    advance();  // '.'
                    advance();  // '.'
                    advance();  // '.'
                    token = Token.REST;
                    return token;
                }

                if (esutils.code.isDecimalDigit(ch)) {
                    token = scanNumber();
                    return token;
                }
            }
            token = Token.ILLEGAL;
            return token;

        case 0x3C:  /* '<' */
            advance();
            token = Token.LT;
            return token;

        case 0x3E:  /* '>' */
            advance();
            token = Token.GT;
            return token;

        case 0x2A:  /* '*' */
            advance();
            token = Token.STAR;
            return token;

        case 0x7C:  /* '|' */
            advance();
            token = Token.PIPE;
            return token;

        case 0x3F:  /* '?' */
            advance();
            token = Token.QUESTION;
            return token;

        case 0x21:  /* '!' */
            advance();
            token = Token.BANG;
            return token;

        case 0x3D:  /* '=' */
            advance();
            token = Token.EQUAL;
            return token;

        case 0x2D: /* '-' */
            token = scanNumber();
            return token;

        default:
            if (esutils.code.isDecimalDigit(ch)) {
                token = scanNumber();
                return token;
            }

            // type string permits following case,
            //
            // namespace.module.MyClass
            //
            // this reduced 1 token TK_NAME
            utility.assert(isTypeName(ch));
            token = scanTypeName();
            return token;
        }
    }

    function consume(target, text) {
        utility.assert(token === target, text || 'consumed token not matched');
        next();
    }

    function expect(target, message) {
        if (token !== target) {
            utility.throwError(message || 'unexpected token');
        }
        next();
    }

    // UnionType := '(' TypeUnionList ')'
    //
    // TypeUnionList :=
    //     <<empty>>
    //   | NonemptyTypeUnionList
    //
    // NonemptyTypeUnionList :=
    //     TypeExpression
    //   | TypeExpression '|' NonemptyTypeUnionList
    function parseUnionType() {
        var elements;
        consume(Token.LPAREN, 'UnionType should start with (');
        elements = [];
        if (token !== Token.RPAREN) {
            while (true) {
                elements.push(parseTypeExpression());
                if (token === Token.RPAREN) {
                    break;
                }
                expect(Token.PIPE);
            }
        }
        consume(Token.RPAREN, 'UnionType should end with )');
        return {
            type: Syntax.UnionType,
            elements: elements
        };
    }

    // ArrayType := '[' ElementTypeList ']'
    //
    // ElementTypeList :=
    //     <<empty>>
    //  | TypeExpression
    //  | '...' TypeExpression
    //  | TypeExpression ',' ElementTypeList
    function parseArrayType() {
        var elements;
        consume(Token.LBRACK, 'ArrayType should start with [');
        elements = [];
        while (token !== Token.RBRACK) {
            if (token === Token.REST) {
                consume(Token.REST);
                elements.push({
                    type: Syntax.RestType,
                    expression: parseTypeExpression()
                });
                break;
            } else {
                elements.push(parseTypeExpression());
            }
            if (token !== Token.RBRACK) {
                expect(Token.COMMA);
            }
        }
        expect(Token.RBRACK);
        return {
            type: Syntax.ArrayType,
            elements: elements
        };
    }

    function parseFieldName() {
        var v = value;
        if (token === Token.NAME || token === Token.STRING) {
            next();
            return v;
        }

        if (token === Token.NUMBER) {
            consume(Token.NUMBER);
            return String(v);
        }

        utility.throwError('unexpected token');
    }

    // FieldType :=
    //     FieldName
    //   | FieldName ':' TypeExpression
    //
    // FieldName :=
    //     NameExpression
    //   | StringLiteral
    //   | NumberLiteral
    //   | ReservedIdentifier
    function parseFieldType() {
        var key;

        key = parseFieldName();
        if (token === Token.COLON) {
            consume(Token.COLON);
            return {
                type: Syntax.FieldType,
                key: key,
                value: parseTypeExpression()
            };
        }
        return {
            type: Syntax.FieldType,
            key: key,
            value: null
        };
    }

    // RecordType := '{' FieldTypeList '}'
    //
    // FieldTypeList :=
    //     <<empty>>
    //   | FieldType
    //   | FieldType ',' FieldTypeList
    function parseRecordType() {
        var fields;

        consume(Token.LBRACE, 'RecordType should start with {');
        fields = [];
        if (token === Token.COMMA) {
            consume(Token.COMMA);
        } else {
            while (token !== Token.RBRACE) {
                fields.push(parseFieldType());
                if (token !== Token.RBRACE) {
                    expect(Token.COMMA);
                }
            }
        }
        expect(Token.RBRACE);
        return {
            type: Syntax.RecordType,
            fields: fields
        };
    }

    // NameExpression :=
    //    Identifier
    //  | TagIdentifier ':' Identifier
    //
    // Tag identifier is one of "module", "external" or "event"
    // Identifier is the same as Token.NAME, including any dots, something like
    // namespace.module.MyClass
    function parseNameExpression() {
        var name = value;
        expect(Token.NAME);

        if (token === Token.COLON && (
                name === 'module' ||
                name === 'external' ||
                name === 'event')) {
            consume(Token.COLON);
            name += ':' + value;
            expect(Token.NAME);
        }

        return {
            type: Syntax.NameExpression,
            name: name
        };
    }

    // TypeExpressionList :=
    //     TopLevelTypeExpression
    //   | TopLevelTypeExpression ',' TypeExpressionList
    function parseTypeExpressionList() {
        var elements = [];

        elements.push(parseTop());
        while (token === Token.COMMA) {
            consume(Token.COMMA);
            elements.push(parseTop());
        }
        return elements;
    }

    // TypeName :=
    //     NameExpression
    //   | NameExpression TypeApplication
    //
    // TypeApplication :=
    //     '.<' TypeExpressionList '>'
    //   | '<' TypeExpressionList '>'   // this is extension of doctrine
    function parseTypeName() {
        var expr, applications;

        expr = parseNameExpression();
        if (token === Token.DOT_LT || token === Token.LT) {
            next();
            applications = parseTypeExpressionList();
            expect(Token.GT);
            return {
                type: Syntax.TypeApplication,
                expression: expr,
                applications: applications
            };
        }
        return expr;
    }

    // ResultType :=
    //     <<empty>>
    //   | ':' void
    //   | ':' TypeExpression
    //
    // BNF is above
    // but, we remove <<empty>> pattern, so token is always TypeToken::COLON
    function parseResultType() {
        consume(Token.COLON, 'ResultType should start with :');
        if (token === Token.NAME && value === 'void') {
            consume(Token.NAME);
            return {
                type: Syntax.VoidLiteral
            };
        }
        return parseTypeExpression();
    }

    // ParametersType :=
    //     RestParameterType
    //   | NonRestParametersType
    //   | NonRestParametersType ',' RestParameterType
    //
    // RestParameterType :=
    //     '...'
    //     '...' Identifier
    //
    // NonRestParametersType :=
    //     ParameterType ',' NonRestParametersType
    //   | ParameterType
    //   | OptionalParametersType
    //
    // OptionalParametersType :=
    //     OptionalParameterType
    //   | OptionalParameterType, OptionalParametersType
    //
    // OptionalParameterType := ParameterType=
    //
    // ParameterType := TypeExpression | Identifier ':' TypeExpression
    //
    // Identifier is "new" or "this"
    function parseParametersType() {
        var params = [], optionalSequence = false, expr, rest = false;

        while (token !== Token.RPAREN) {
            if (token === Token.REST) {
                // RestParameterType
                consume(Token.REST);
                rest = true;
            }

            expr = parseTypeExpression();
            if (expr.type === Syntax.NameExpression && token === Token.COLON) {
                // Identifier ':' TypeExpression
                consume(Token.COLON);
                expr = {
                    type: Syntax.ParameterType,
                    name: expr.name,
                    expression: parseTypeExpression()
                };
            }
            if (token === Token.EQUAL) {
                consume(Token.EQUAL);
                expr = {
                    type: Syntax.OptionalType,
                    expression: expr
                };
                optionalSequence = true;
            } else {
                if (optionalSequence) {
                    utility.throwError('unexpected token');
                }
            }
            if (rest) {
                expr = {
                    type: Syntax.RestType,
                    expression: expr
                };
            }
            params.push(expr);
            if (token !== Token.RPAREN) {
                expect(Token.COMMA);
            }
        }
        return params;
    }

    // FunctionType := 'function' FunctionSignatureType
    //
    // FunctionSignatureType :=
    //   | TypeParameters '(' ')' ResultType
    //   | TypeParameters '(' ParametersType ')' ResultType
    //   | TypeParameters '(' 'this' ':' TypeName ')' ResultType
    //   | TypeParameters '(' 'this' ':' TypeName ',' ParametersType ')' ResultType
    function parseFunctionType() {
        var isNew, thisBinding, params, result, fnType;
        utility.assert(token === Token.NAME && value === 'function', 'FunctionType should start with \'function\'');
        consume(Token.NAME);

        // Google Closure Compiler is not implementing TypeParameters.
        // So we do not. if we don't get '(', we see it as error.
        expect(Token.LPAREN);

        isNew = false;
        params = [];
        thisBinding = null;
        if (token !== Token.RPAREN) {
            // ParametersType or 'this'
            if (token === Token.NAME &&
                    (value === 'this' || value === 'new')) {
                // 'this' or 'new'
                // 'new' is Closure Compiler extension
                isNew = value === 'new';
                consume(Token.NAME);
                expect(Token.COLON);
                thisBinding = parseTypeName();
                if (token === Token.COMMA) {
                    consume(Token.COMMA);
                    params = parseParametersType();
                }
            } else {
                params = parseParametersType();
            }
        }

        expect(Token.RPAREN);

        result = null;
        if (token === Token.COLON) {
            result = parseResultType();
        }

        fnType = {
            type: Syntax.FunctionType,
            params: params,
            result: result
        };
        if (thisBinding) {
            // avoid adding null 'new' and 'this' properties
            fnType['this'] = thisBinding;
            if (isNew) {
                fnType['new'] = true;
            }
        }
        return fnType;
    }

    // BasicTypeExpression :=
    //     '*'
    //   | 'null'
    //   | 'undefined'
    //   | TypeName
    //   | FunctionType
    //   | UnionType
    //   | RecordType
    //   | ArrayType
    function parseBasicTypeExpression() {
        var context;
        switch (token) {
        case Token.STAR:
            consume(Token.STAR);
            return {
                type: Syntax.AllLiteral
            };

        case Token.LPAREN:
            return parseUnionType();

        case Token.LBRACK:
            return parseArrayType();

        case Token.LBRACE:
            return parseRecordType();

        case Token.NAME:
            if (value === 'null') {
                consume(Token.NAME);
                return {
                    type: Syntax.NullLiteral
                };
            }

            if (value === 'undefined') {
                consume(Token.NAME);
                return {
                    type: Syntax.UndefinedLiteral
                };
            }

            context = Context.save();
            if (value === 'function') {
                try {
                    return parseFunctionType();
                } catch (e) {
                    context.restore();
                }
            }

            return parseTypeName();

        case Token.STRING:
            next();
            return {
                type: Syntax.StringLiteralType,
                value: value
            };

        case Token.NUMBER:
            next();
            return {
                type: Syntax.NumericLiteralType,
                value: value
            };

        default:
            utility.throwError('unexpected token');
        }
    }

    // TypeExpression :=
    //     BasicTypeExpression
    //   | '?' BasicTypeExpression
    //   | '!' BasicTypeExpression
    //   | BasicTypeExpression '?'
    //   | BasicTypeExpression '!'
    //   | '?'
    //   | BasicTypeExpression '[]'
    function parseTypeExpression() {
        var expr;

        if (token === Token.QUESTION) {
            consume(Token.QUESTION);
            if (token === Token.COMMA || token === Token.EQUAL || token === Token.RBRACE ||
                    token === Token.RPAREN || token === Token.PIPE || token === Token.EOF ||
                    token === Token.RBRACK || token === Token.GT) {
                return {
                    type: Syntax.NullableLiteral
                };
            }
            return {
                type: Syntax.NullableType,
                expression: parseBasicTypeExpression(),
                prefix: true
            };
        }

        if (token === Token.BANG) {
            consume(Token.BANG);
            return {
                type: Syntax.NonNullableType,
                expression: parseBasicTypeExpression(),
                prefix: true
            };
        }

        expr = parseBasicTypeExpression();
        if (token === Token.BANG) {
            consume(Token.BANG);
            return {
                type: Syntax.NonNullableType,
                expression: expr,
                prefix: false
            };
        }

        if (token === Token.QUESTION) {
            consume(Token.QUESTION);
            return {
                type: Syntax.NullableType,
                expression: expr,
                prefix: false
            };
        }

        if (token === Token.LBRACK) {
            consume(Token.LBRACK);
            expect(Token.RBRACK, 'expected an array-style type declaration (' + value + '[])');
            return {
                type: Syntax.TypeApplication,
                expression: {
                    type: Syntax.NameExpression,
                    name: 'Array'
                },
                applications: [expr]
            };
        }

        return expr;
    }

    // TopLevelTypeExpression :=
    //      TypeExpression
    //    | TypeUnionList
    //
    // This rule is Google Closure Compiler extension, not ES4
    // like,
    //   { number | string }
    // If strict to ES4, we should write it as
    //   { (number|string) }
    function parseTop() {
        var expr, elements;

        expr = parseTypeExpression();
        if (token !== Token.PIPE) {
            return expr;
        }

        elements = [expr];
        consume(Token.PIPE);
        while (true) {
            elements.push(parseTypeExpression());
            if (token !== Token.PIPE) {
                break;
            }
            consume(Token.PIPE);
        }

        return {
            type: Syntax.UnionType,
            elements: elements
        };
    }

    function parseTopParamType() {
        var expr;

        if (token === Token.REST) {
            consume(Token.REST);
            return {
                type: Syntax.RestType,
                expression: parseTop()
            };
        }

        expr = parseTop();
        if (token === Token.EQUAL) {
            consume(Token.EQUAL);
            return {
                type: Syntax.OptionalType,
                expression: expr
            };
        }

        return expr;
    }

    function parseType(src, opt) {
        var expr;

        source = src;
        length = source.length;
        index = 0;
        previous = 0;

        next();
        expr = parseTop();

        if (opt && opt.midstream) {
            return {
                expression: expr,
                index: previous
            };
        }

        if (token !== Token.EOF) {
            utility.throwError('not reach to EOF');
        }

        return expr;
    }

    function parseParamType(src, opt) {
        var expr;

        source = src;
        length = source.length;
        index = 0;
        previous = 0;

        next();
        expr = parseTopParamType();

        if (opt && opt.midstream) {
            return {
                expression: expr,
                index: previous
            };
        }

        if (token !== Token.EOF) {
            utility.throwError('not reach to EOF');
        }

        return expr;
    }

    function stringifyImpl(node, compact, topLevel) {
        var result, i, iz;

        switch (node.type) {
        case Syntax.NullableLiteral:
            result = '?';
            break;

        case Syntax.AllLiteral:
            result = '*';
            break;

        case Syntax.NullLiteral:
            result = 'null';
            break;

        case Syntax.UndefinedLiteral:
            result = 'undefined';
            break;

        case Syntax.VoidLiteral:
            result = 'void';
            break;

        case Syntax.UnionType:
            if (!topLevel) {
                result = '(';
            } else {
                result = '';
            }

            for (i = 0, iz = node.elements.length; i < iz; ++i) {
                result += stringifyImpl(node.elements[i], compact);
                if ((i + 1) !== iz) {
                    result += '|';
                }
            }

            if (!topLevel) {
                result += ')';
            }
            break;

        case Syntax.ArrayType:
            result = '[';
            for (i = 0, iz = node.elements.length; i < iz; ++i) {
                result += stringifyImpl(node.elements[i], compact);
                if ((i + 1) !== iz) {
                    result += compact ? ',' : ', ';
                }
            }
            result += ']';
            break;

        case Syntax.RecordType:
            result = '{';
            for (i = 0, iz = node.fields.length; i < iz; ++i) {
                result += stringifyImpl(node.fields[i], compact);
                if ((i + 1) !== iz) {
                    result += compact ? ',' : ', ';
                }
            }
            result += '}';
            break;

        case Syntax.FieldType:
            if (node.value) {
                result = node.key + (compact ? ':' : ': ') + stringifyImpl(node.value, compact);
            } else {
                result = node.key;
            }
            break;

        case Syntax.FunctionType:
            result = compact ? 'function(' : 'function (';

            if (node['this']) {
                if (node['new']) {
                    result += (compact ? 'new:' : 'new: ');
                } else {
                    result += (compact ? 'this:' : 'this: ');
                }

                result += stringifyImpl(node['this'], compact);

                if (node.params.length !== 0) {
                    result += compact ? ',' : ', ';
                }
            }

            for (i = 0, iz = node.params.length; i < iz; ++i) {
                result += stringifyImpl(node.params[i], compact);
                if ((i + 1) !== iz) {
                    result += compact ? ',' : ', ';
                }
            }

            result += ')';

            if (node.result) {
                result += (compact ? ':' : ': ') + stringifyImpl(node.result, compact);
            }
            break;

        case Syntax.ParameterType:
            result = node.name + (compact ? ':' : ': ') + stringifyImpl(node.expression, compact);
            break;

        case Syntax.RestType:
            result = '...';
            if (node.expression) {
                result += stringifyImpl(node.expression, compact);
            }
            break;

        case Syntax.NonNullableType:
            if (node.prefix) {
                result = '!' + stringifyImpl(node.expression, compact);
            } else {
                result = stringifyImpl(node.expression, compact) + '!';
            }
            break;

        case Syntax.OptionalType:
            result = stringifyImpl(node.expression, compact) + '=';
            break;

        case Syntax.NullableType:
            if (node.prefix) {
                result = '?' + stringifyImpl(node.expression, compact);
            } else {
                result = stringifyImpl(node.expression, compact) + '?';
            }
            break;

        case Syntax.NameExpression:
            result = node.name;
            break;

        case Syntax.TypeApplication:
            result = stringifyImpl(node.expression, compact) + '.<';
            for (i = 0, iz = node.applications.length; i < iz; ++i) {
                result += stringifyImpl(node.applications[i], compact);
                if ((i + 1) !== iz) {
                    result += compact ? ',' : ', ';
                }
            }
            result += '>';
            break;

        case Syntax.StringLiteralType:
            result = '"' + node.value + '"';
            break;

        case Syntax.NumericLiteralType:
            result = String(node.value);
            break;

        default:
            utility.throwError('Unknown type ' + node.type);
        }

        return result;
    }

    function stringify(node, options) {
        if (options == null) {
            options = {};
        }
        return stringifyImpl(node, options.compact, options.topLevel);
    }

    exports.parseType = parseType;
    exports.parseParamType = parseParamType;
    exports.stringify = stringify;
    exports.Syntax = Syntax;
}());
/* vim: set sw=4 ts=4 et tw=80 : */

},{"./utility":60,"esutils":64}],60:[function(require,module,exports){
/*
 * @fileoverview Utilities for Doctrine
 * @author Yusuke Suzuki <utatane.tea@gmail.com>
 */


(function () {
    'use strict';

    var VERSION;

    VERSION = require('../package.json').version;
    exports.VERSION = VERSION;

    function DoctrineError(message) {
        this.name = 'DoctrineError';
        this.message = message;
    }
    DoctrineError.prototype = (function () {
        var Middle = function () { };
        Middle.prototype = Error.prototype;
        return new Middle();
    }());
    DoctrineError.prototype.constructor = DoctrineError;
    exports.DoctrineError = DoctrineError;

    function throwError(message) {
        throw new DoctrineError(message);
    }
    exports.throwError = throwError;

    exports.assert = require('assert');
}());

/* vim: set sw=4 ts=4 et tw=80 : */

},{"../package.json":66,"assert":94}],61:[function(require,module,exports){
/*
  Copyright (C) 2013 Yusuke Suzuki <utatane.tea@gmail.com>

  Redistribution and use in source and binary forms, with or without
  modification, are permitted provided that the following conditions are met:

    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above copyright
      notice, this list of conditions and the following disclaimer in the
      documentation and/or other materials provided with the distribution.

  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS 'AS IS'
  AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
  IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
  ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
  DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
  (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
  LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
  ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
  (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
  THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

(function () {
    'use strict';

    function isExpression(node) {
        if (node == null) { return false; }
        switch (node.type) {
            case 'ArrayExpression':
            case 'AssignmentExpression':
            case 'BinaryExpression':
            case 'CallExpression':
            case 'ConditionalExpression':
            case 'FunctionExpression':
            case 'Identifier':
            case 'Literal':
            case 'LogicalExpression':
            case 'MemberExpression':
            case 'NewExpression':
            case 'ObjectExpression':
            case 'SequenceExpression':
            case 'ThisExpression':
            case 'UnaryExpression':
            case 'UpdateExpression':
                return true;
        }
        return false;
    }

    function isIterationStatement(node) {
        if (node == null) { return false; }
        switch (node.type) {
            case 'DoWhileStatement':
            case 'ForInStatement':
            case 'ForStatement':
            case 'WhileStatement':
                return true;
        }
        return false;
    }

    function isStatement(node) {
        if (node == null) { return false; }
        switch (node.type) {
            case 'BlockStatement':
            case 'BreakStatement':
            case 'ContinueStatement':
            case 'DebuggerStatement':
            case 'DoWhileStatement':
            case 'EmptyStatement':
            case 'ExpressionStatement':
            case 'ForInStatement':
            case 'ForStatement':
            case 'IfStatement':
            case 'LabeledStatement':
            case 'ReturnStatement':
            case 'SwitchStatement':
            case 'ThrowStatement':
            case 'TryStatement':
            case 'VariableDeclaration':
            case 'WhileStatement':
            case 'WithStatement':
                return true;
        }
        return false;
    }

    function isSourceElement(node) {
      return isStatement(node) || node != null && node.type === 'FunctionDeclaration';
    }

    function trailingStatement(node) {
        switch (node.type) {
        case 'IfStatement':
            if (node.alternate != null) {
                return node.alternate;
            }
            return node.consequent;

        case 'LabeledStatement':
        case 'ForStatement':
        case 'ForInStatement':
        case 'WhileStatement':
        case 'WithStatement':
            return node.body;
        }
        return null;
    }

    function isProblematicIfStatement(node) {
        var current;

        if (node.type !== 'IfStatement') {
            return false;
        }
        if (node.alternate == null) {
            return false;
        }
        current = node.consequent;
        do {
            if (current.type === 'IfStatement') {
                if (current.alternate == null)  {
                    return true;
                }
            }
            current = trailingStatement(current);
        } while (current);

        return false;
    }

    module.exports = {
        isExpression: isExpression,
        isStatement: isStatement,
        isIterationStatement: isIterationStatement,
        isSourceElement: isSourceElement,
        isProblematicIfStatement: isProblematicIfStatement,

        trailingStatement: trailingStatement
    };
}());
/* vim: set sw=4 ts=4 et tw=80 : */

},{}],62:[function(require,module,exports){
/*
  Copyright (C) 2013-2014 Yusuke Suzuki <utatane.tea@gmail.com>
  Copyright (C) 2014 Ivan Nikulin <ifaaan@gmail.com>

  Redistribution and use in source and binary forms, with or without
  modification, are permitted provided that the following conditions are met:

    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above copyright
      notice, this list of conditions and the following disclaimer in the
      documentation and/or other materials provided with the distribution.

  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
  AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
  IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
  ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
  DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
  (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
  LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
  ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
  (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
  THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

(function () {
    'use strict';

    var ES6Regex, ES5Regex, NON_ASCII_WHITESPACES, IDENTIFIER_START, IDENTIFIER_PART, ch;

    // See `tools/generate-identifier-regex.js`.
    ES5Regex = {
        // ECMAScript 5.1/Unicode v7.0.0 NonAsciiIdentifierStart:
        NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B2\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA7AD\uA7B0\uA7B1\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB5F\uAB64\uAB65\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
        // ECMAScript 5.1/Unicode v7.0.0 NonAsciiIdentifierPart:
        NonAsciiIdentifierPart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B2\u08E4-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58\u0C59\u0C60-\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D57\u0D60-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFC-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA69D\uA69F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA7AD\uA7B0\uA7B1\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C4\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB5F\uAB64\uAB65\uABC0-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2D\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/
    };

    ES6Regex = {
        // ECMAScript 6/Unicode v7.0.0 NonAsciiIdentifierStart:
        NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B2\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA7AD\uA7B0\uA7B1\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB5F\uAB64\uAB65\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDE00-\uDE11\uDE13-\uDE2B\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF5D-\uDF61]|\uD805[\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDE00-\uDE2F\uDE44\uDE80-\uDEAA]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF98]|\uD809[\uDC00-\uDC6E]|[\uD80C\uD840-\uD868\uD86A-\uD86C][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D]|\uD87E[\uDC00-\uDE1D]/,
        // ECMAScript 6/Unicode v7.0.0 NonAsciiIdentifierPart:
        NonAsciiIdentifierPart: /[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B2\u08E4-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58\u0C59\u0C60-\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D57\u0D60-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFC-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA69D\uA69F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA7AD\uA7B0\uA7B1\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C4\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB5F\uAB64\uAB65\uABC0-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2D\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDD0-\uDDDA\uDE00-\uDE11\uDE13-\uDE37\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF01-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF98]|\uD809[\uDC00-\uDC6E]|[\uD80C\uD840-\uD868\uD86A-\uD86C][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/
    };

    function isDecimalDigit(ch) {
        return 0x30 <= ch && ch <= 0x39;  // 0..9
    }

    function isHexDigit(ch) {
        return 0x30 <= ch && ch <= 0x39 ||  // 0..9
            0x61 <= ch && ch <= 0x66 ||     // a..f
            0x41 <= ch && ch <= 0x46;       // A..F
    }

    function isOctalDigit(ch) {
        return ch >= 0x30 && ch <= 0x37;  // 0..7
    }

    // 7.2 White Space

    NON_ASCII_WHITESPACES = [
        0x1680, 0x180E,
        0x2000, 0x2001, 0x2002, 0x2003, 0x2004, 0x2005, 0x2006, 0x2007, 0x2008, 0x2009, 0x200A,
        0x202F, 0x205F,
        0x3000,
        0xFEFF
    ];

    function isWhiteSpace(ch) {
        return ch === 0x20 || ch === 0x09 || ch === 0x0B || ch === 0x0C || ch === 0xA0 ||
            ch >= 0x1680 && NON_ASCII_WHITESPACES.indexOf(ch) >= 0;
    }

    // 7.3 Line Terminators

    function isLineTerminator(ch) {
        return ch === 0x0A || ch === 0x0D || ch === 0x2028 || ch === 0x2029;
    }

    // 7.6 Identifier Names and Identifiers

    function fromCodePoint(cp) {
        if (cp <= 0xFFFF) { return String.fromCharCode(cp); }
        var cu1 = String.fromCharCode(Math.floor((cp - 0x10000) / 0x400) + 0xD800);
        var cu2 = String.fromCharCode(((cp - 0x10000) % 0x400) + 0xDC00);
        return cu1 + cu2;
    }

    IDENTIFIER_START = new Array(0x80);
    for(ch = 0; ch < 0x80; ++ch) {
        IDENTIFIER_START[ch] =
            ch >= 0x61 && ch <= 0x7A ||  // a..z
            ch >= 0x41 && ch <= 0x5A ||  // A..Z
            ch === 0x24 || ch === 0x5F;  // $ (dollar) and _ (underscore)
    }

    IDENTIFIER_PART = new Array(0x80);
    for(ch = 0; ch < 0x80; ++ch) {
        IDENTIFIER_PART[ch] =
            ch >= 0x61 && ch <= 0x7A ||  // a..z
            ch >= 0x41 && ch <= 0x5A ||  // A..Z
            ch >= 0x30 && ch <= 0x39 ||  // 0..9
            ch === 0x24 || ch === 0x5F;  // $ (dollar) and _ (underscore)
    }

    function isIdentifierStartES5(ch) {
        return ch < 0x80 ? IDENTIFIER_START[ch] : ES5Regex.NonAsciiIdentifierStart.test(fromCodePoint(ch));
    }

    function isIdentifierPartES5(ch) {
        return ch < 0x80 ? IDENTIFIER_PART[ch] : ES5Regex.NonAsciiIdentifierPart.test(fromCodePoint(ch));
    }

    function isIdentifierStartES6(ch) {
        return ch < 0x80 ? IDENTIFIER_START[ch] : ES6Regex.NonAsciiIdentifierStart.test(fromCodePoint(ch));
    }

    function isIdentifierPartES6(ch) {
        return ch < 0x80 ? IDENTIFIER_PART[ch] : ES6Regex.NonAsciiIdentifierPart.test(fromCodePoint(ch));
    }

    module.exports = {
        isDecimalDigit: isDecimalDigit,
        isHexDigit: isHexDigit,
        isOctalDigit: isOctalDigit,
        isWhiteSpace: isWhiteSpace,
        isLineTerminator: isLineTerminator,
        isIdentifierStartES5: isIdentifierStartES5,
        isIdentifierPartES5: isIdentifierPartES5,
        isIdentifierStartES6: isIdentifierStartES6,
        isIdentifierPartES6: isIdentifierPartES6
    };
}());
/* vim: set sw=4 ts=4 et tw=80 : */

},{}],63:[function(require,module,exports){
/*
  Copyright (C) 2013 Yusuke Suzuki <utatane.tea@gmail.com>

  Redistribution and use in source and binary forms, with or without
  modification, are permitted provided that the following conditions are met:

    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above copyright
      notice, this list of conditions and the following disclaimer in the
      documentation and/or other materials provided with the distribution.

  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
  AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
  IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
  ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
  DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
  (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
  LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
  ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
  (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
  THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

(function () {
    'use strict';

    var code = require('./code');

    function isStrictModeReservedWordES6(id) {
        switch (id) {
        case 'implements':
        case 'interface':
        case 'package':
        case 'private':
        case 'protected':
        case 'public':
        case 'static':
        case 'let':
            return true;
        default:
            return false;
        }
    }

    function isKeywordES5(id, strict) {
        // yield should not be treated as keyword under non-strict mode.
        if (!strict && id === 'yield') {
            return false;
        }
        return isKeywordES6(id, strict);
    }

    function isKeywordES6(id, strict) {
        if (strict && isStrictModeReservedWordES6(id)) {
            return true;
        }

        switch (id.length) {
        case 2:
            return (id === 'if') || (id === 'in') || (id === 'do');
        case 3:
            return (id === 'var') || (id === 'for') || (id === 'new') || (id === 'try');
        case 4:
            return (id === 'this') || (id === 'else') || (id === 'case') ||
                (id === 'void') || (id === 'with') || (id === 'enum');
        case 5:
            return (id === 'while') || (id === 'break') || (id === 'catch') ||
                (id === 'throw') || (id === 'const') || (id === 'yield') ||
                (id === 'class') || (id === 'super');
        case 6:
            return (id === 'return') || (id === 'typeof') || (id === 'delete') ||
                (id === 'switch') || (id === 'export') || (id === 'import');
        case 7:
            return (id === 'default') || (id === 'finally') || (id === 'extends');
        case 8:
            return (id === 'function') || (id === 'continue') || (id === 'debugger');
        case 10:
            return (id === 'instanceof');
        default:
            return false;
        }
    }

    function isReservedWordES5(id, strict) {
        return id === 'null' || id === 'true' || id === 'false' || isKeywordES5(id, strict);
    }

    function isReservedWordES6(id, strict) {
        return id === 'null' || id === 'true' || id === 'false' || isKeywordES6(id, strict);
    }

    function isRestrictedWord(id) {
        return id === 'eval' || id === 'arguments';
    }

    function isIdentifierNameES5(id) {
        var i, iz, ch;

        if (id.length === 0) { return false; }

        ch = id.charCodeAt(0);
        if (!code.isIdentifierStartES5(ch)) {
            return false;
        }

        for (i = 1, iz = id.length; i < iz; ++i) {
            ch = id.charCodeAt(i);
            if (!code.isIdentifierPartES5(ch)) {
                return false;
            }
        }
        return true;
    }

    function decodeUtf16(lead, trail) {
        return (lead - 0xD800) * 0x400 + (trail - 0xDC00) + 0x10000;
    }

    function isIdentifierNameES6(id) {
        var i, iz, ch, lowCh, check;

        if (id.length === 0) { return false; }

        check = code.isIdentifierStartES6;
        for (i = 0, iz = id.length; i < iz; ++i) {
            ch = id.charCodeAt(i);
            if (0xD800 <= ch && ch <= 0xDBFF) {
                ++i;
                if (i >= iz) { return false; }
                lowCh = id.charCodeAt(i);
                if (!(0xDC00 <= lowCh && lowCh <= 0xDFFF)) {
                    return false;
                }
                ch = decodeUtf16(ch, lowCh);
            }
            if (!check(ch)) {
                return false;
            }
            check = code.isIdentifierPartES6;
        }
        return true;
    }

    function isIdentifierES5(id, strict) {
        return isIdentifierNameES5(id) && !isReservedWordES5(id, strict);
    }

    function isIdentifierES6(id, strict) {
        return isIdentifierNameES6(id) && !isReservedWordES6(id, strict);
    }

    module.exports = {
        isKeywordES5: isKeywordES5,
        isKeywordES6: isKeywordES6,
        isReservedWordES5: isReservedWordES5,
        isReservedWordES6: isReservedWordES6,
        isRestrictedWord: isRestrictedWord,
        isIdentifierNameES5: isIdentifierNameES5,
        isIdentifierNameES6: isIdentifierNameES6,
        isIdentifierES5: isIdentifierES5,
        isIdentifierES6: isIdentifierES6
    };
}());
/* vim: set sw=4 ts=4 et tw=80 : */

},{"./code":62}],64:[function(require,module,exports){
/*
  Copyright (C) 2013 Yusuke Suzuki <utatane.tea@gmail.com>

  Redistribution and use in source and binary forms, with or without
  modification, are permitted provided that the following conditions are met:

    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above copyright
      notice, this list of conditions and the following disclaimer in the
      documentation and/or other materials provided with the distribution.

  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
  AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
  IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
  ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
  DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
  (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
  LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
  ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
  (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
  THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/


(function () {
    'use strict';

    exports.ast = require('./ast');
    exports.code = require('./code');
    exports.keyword = require('./keyword');
}());
/* vim: set sw=4 ts=4 et tw=80 : */

},{"./ast":61,"./code":62,"./keyword":63}],65:[function(require,module,exports){
var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};

},{}],66:[function(require,module,exports){
module.exports={
  "name": "doctrine",
  "description": "JSDoc parser",
  "homepage": "https://github.com/eslint/doctrine",
  "main": "lib/doctrine.js",
  "version": "1.3.0",
  "engines": {
    "node": ">=0.10.0"
  },
  "directories": {
    "lib": "./lib"
  },
  "files": [
    "lib",
    "LICENSE.BSD",
    "LICENSE.closure-compiler",
    "LICENSE.esprima",
    "README.md"
  ],
  "maintainers": [
    {
      "name": "constellation",
      "email": "utatane.tea@gmail.com"
    },
    {
      "name": "eslint",
      "email": "nicholas+eslint@nczconsulting.com"
    },
    {
      "name": "nzakas",
      "email": "nicholas@nczconsulting.com"
    }
  ],
  "repository": {
    "type": "git",
    "url": "git+https://github.com/eslint/doctrine.git"
  },
  "devDependencies": {
    "coveralls": "^2.11.2",
    "dateformat": "^1.0.11",
    "eslint": "^1.10.3",
    "eslint-release": "^0.10.0",
    "istanbul": "^0.4.1",
    "linefix": "^0.1.1",
    "mocha": "^2.3.3",
    "npm-license": "^0.3.1",
    "semver": "^5.0.3",
    "shelljs": "^0.5.3",
    "shelljs-nodecli": "^0.1.1",
    "should": "^5.0.1"
  },
  "licenses": [
    {
      "type": "BSD",
      "url": "http://github.com/eslint/doctrine/raw/master/LICENSE.BSD"
    }
  ],
  "scripts": {
    "test": "npm run lint && node Makefile.js test",
    "lint": "eslint lib/",
    "release": "eslint-release",
    "ci-release": "eslint-ci-release",
    "alpharelease": "eslint-prerelease alpha",
    "betarelease": "eslint-prerelease beta"
  },
  "dependencies": {
    "esutils": "^2.0.2",
    "isarray": "^1.0.0"
  },
  "gitHead": "b4b2870ccb4e47977fafce8e6055740e4dda28af",
  "bugs": {
    "url": "https://github.com/eslint/doctrine/issues"
  },
  "_id": "doctrine@1.3.0",
  "_shasum": "13e75682b55518424276f7c173783456ef913d26",
  "_from": "doctrine@>=1.2.2 <2.0.0",
  "_npmVersion": "2.15.8",
  "_nodeVersion": "4.4.7",
  "_npmUser": {
    "name": "eslint",
    "email": "nicholas+eslint@nczconsulting.com"
  },
  "dist": {
    "shasum": "13e75682b55518424276f7c173783456ef913d26",
    "tarball": "https://registry.npmjs.org/doctrine/-/doctrine-1.3.0.tgz"
  },
  "_npmOperationalInternal": {
    "host": "packages-12-west.internal.npmjs.com",
    "tmp": "tmp/doctrine-1.3.0.tgz_1471897078408_0.6770147804636508"
  },
  "_resolved": "https://registry.npmjs.org/doctrine/-/doctrine-1.3.0.tgz",
  "readme": "ERROR: No README data found!"
}

},{}],67:[function(require,module,exports){
module.exports = require('./lib').elementType;  // eslint-disable-line import/no-unresolved

},{"./lib":73}],68:[function(require,module,exports){
module.exports = require('./lib').hasProp; // eslint-disable-line import/no-unresolved

},{"./lib":73}],69:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = elementType;
/**
 * Returns the tagName associated with a JSXElement.
 */
function elementType() {
  var node = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
  var name = node.name;


  if (!name) {
    throw new Error('The argument provided is not a JSXElement node.');
  }

  if (name.type === 'JSXMemberExpression') {
    var object = name.object;
    var property = name.property;

    return object.name + '.' + property.name;
  } else if (name.type === 'JSXNamespacedName') {
    return name.namespace.name + ':' + name.name.name;
  }

  return node.name.name;
}
},{}],70:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getProp;

var _propName = require('./propName');

var _propName2 = _interopRequireDefault(_propName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEFAULT_OPTIONS = {
  ignoreCase: true
};

/**
 * Returns the JSXAttribute itself or undefined, indicating the prop
 * is not present on the JSXOpeningElement.
 *
 */
function getProp() {
  var props = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
  var prop = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];
  var options = arguments.length <= 2 || arguments[2] === undefined ? DEFAULT_OPTIONS : arguments[2];

  var nodeProp = undefined;
  var propToFind = options.ignoreCase ? prop.toUpperCase() : prop;

  var hasProp = props.some(function (attribute) {
    // If the props contain a spread prop, then skip.
    if (attribute.type === 'JSXSpreadAttribute') {
      return false;
    }

    var currentProp = options.ignoreCase ? (0, _propName2.default)(attribute).toUpperCase() : (0, _propName2.default)(attribute);

    if (propToFind === currentProp) {
      nodeProp = attribute;
      return true;
    }

    return false;
  });

  return hasProp ? nodeProp : undefined;
}
},{"./propName":74}],71:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getPropValue;
exports.getLiteralPropValue = getLiteralPropValue;

var _values = require('./values');

var _values2 = _interopRequireDefault(_values);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var extractValue = function extractValue(attribute, extractor) {
  if (attribute && attribute.type === 'JSXAttribute') {
    if (attribute.value === null) {
      // Null valued attributes imply truthiness.
      // For example: <div aria-hidden />
      // See: https://facebook.github.io/react/docs/jsx-in-depth.html#boolean-attributes
      return true;
    }

    return extractor(attribute.value);
  }

  return undefined;
};

/**
 * Returns the value of a given attribute.
 * Different types of attributes have their associated
 * values in different properties on the object.
 *
 * This function should return the most *closely* associated
 * value with the intention of the JSX.
 *
 * @param attribute - The JSXAttribute collected by AST parser.
 */
function getPropValue(attribute) {
  return extractValue(attribute, _values2.default);
}

/**
 * Returns the value of a given attribute.
 * Different types of attributes have their associated
 * values in different properties on the object.
 *
 * This function should return a value only if we can extract
 * a literal value from its attribute (i.e. values that have generic
 * types in JavaScript - strings, numbers, booleans, etc.)
 *
 * @param attribute - The JSXAttribute collected by AST parser.
 */
function getLiteralPropValue(attribute) {
  return extractValue(attribute, _values.getLiteralValue);
}
},{"./values":91}],72:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hasProp;
exports.hasAnyProp = hasAnyProp;
exports.hasEveryProp = hasEveryProp;

var _propName = require('./propName');

var _propName2 = _interopRequireDefault(_propName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEFAULT_OPTIONS = {
  spreadStrict: true,
  ignoreCase: true
};

/**
 * Returns boolean indicating whether an prop exists on the props
 * property of a JSX element node.
 */
function hasProp() {
  var props = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
  var prop = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];
  var options = arguments.length <= 2 || arguments[2] === undefined ? DEFAULT_OPTIONS : arguments[2];

  var propToCheck = options.ignoreCase ? prop.toUpperCase() : prop;

  return props.some(function (attribute) {
    // If the props contain a spread prop, then refer to strict param.
    if (attribute.type === 'JSXSpreadAttribute') {
      return !options.spreadStrict;
    }

    var currentProp = options.ignoreCase ? (0, _propName2.default)(attribute).toUpperCase() : (0, _propName2.default)(attribute);

    return propToCheck === currentProp;
  });
}

/**
 * Given the props on a node and a list of props to check, this returns a boolean
 * indicating if any of them exist on the node.
 */
function hasAnyProp() {
  var nodeProps = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
  var props = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];
  var options = arguments.length <= 2 || arguments[2] === undefined ? DEFAULT_OPTIONS : arguments[2];

  var propsToCheck = typeof props === 'string' ? props.split(' ') : props;

  return propsToCheck.some(function (prop) {
    return hasProp(nodeProps, prop, options);
  });
}

/**
 * Given the props on a node and a list of props to check, this returns a boolean
 * indicating if all of them exist on the node
 */
function hasEveryProp() {
  var nodeProps = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
  var props = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];
  var options = arguments.length <= 2 || arguments[2] === undefined ? DEFAULT_OPTIONS : arguments[2];

  var propsToCheck = typeof props === 'string' ? props.split(' ') : props;

  return propsToCheck.every(function (prop) {
    return hasProp(nodeProps, prop, options);
  });
}
},{"./propName":74}],73:[function(require,module,exports){
'use strict';

var _hasProp = require('./hasProp');

var _hasProp2 = _interopRequireDefault(_hasProp);

var _elementType = require('./elementType');

var _elementType2 = _interopRequireDefault(_elementType);

var _getProp = require('./getProp');

var _getProp2 = _interopRequireDefault(_getProp);

var _getPropValue = require('./getPropValue');

var _getPropValue2 = _interopRequireDefault(_getPropValue);

var _propName = require('./propName');

var _propName2 = _interopRequireDefault(_propName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  hasProp: _hasProp2.default,
  hasAnyProp: _hasProp.hasAnyProp,
  hasEveryProp: _hasProp.hasEveryProp,
  elementType: _elementType2.default,
  getProp: _getProp2.default,
  getPropValue: _getPropValue2.default,
  getLiteralPropValue: _getPropValue.getLiteralPropValue,
  propName: _propName2.default
};
},{"./elementType":69,"./getProp":70,"./getPropValue":71,"./hasProp":72,"./propName":74}],74:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = propName;
/**
 * Returns the name of the prop given the JSXAttribute object.
 */
function propName() {
  var prop = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  if (!prop.type || prop.type !== 'JSXAttribute') {
    throw new Error('The prop must be a JSXAttribute collected by the AST parser.');
  }

  switch (prop.name.type) {
    case 'JSXIdentifier':
      return prop.name.name;
    case 'JSXNamespacedName':
      return prop.name.namespace.name + ':' + prop.name.name.name;
    default:
      return undefined;
  }
}
},{}],75:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = extractValueFromJSXElement;
/**
 * Extractor function for a JSXElement type value node.
 *
 * Returns self-closing element with correct name.
 */
function extractValueFromJSXElement(value) {
  return "<" + value.openingElement.name.name + " />";
}
},{}],76:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = extractValueFromLiteral;
/**
 * Extractor function for a Literal type value node.
 *
 * @param - value - AST Value object with type `Literal`
 * @returns { String|Boolean } - The extracted value converted to correct type.
 */
function extractValueFromLiteral(value) {
  var extractedValue = value.value;


  if (extractedValue === 'true') {
    return true;
  } else if (extractedValue === 'false') {
    return false;
  }

  return extractedValue;
}
},{}],77:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = extractValueFromBinaryExpression;

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Extractor function for a BinaryExpression type value node.
 * A binary expression has a left and right side separated by an operator
 * such as `a + b`.
 *
 * @param - value - AST Value object with type `BinaryExpression`
 * @returns - The extracted value converted to correct type.
 */
function extractValueFromBinaryExpression(value) {
  var operator = value.operator;
  var left = value.left;
  var right = value.right;

  var leftVal = (0, _index2.default)(left);
  var rightVal = (0, _index2.default)(right);

  switch (operator) {
    case '==':
      return leftVal == rightVal; // eslint-disable-line
    case '!=':
      return leftVal != rightVal; // eslint-disable-line
    case '===':
      return leftVal === rightVal;
    case '!==':
      return leftVal !== rightVal;
    case '<':
      return leftVal < rightVal;
    case '<=':
      return leftVal <= rightVal;
    case '>':
      return leftVal > rightVal;
    case '>=':
      return leftVal >= rightVal;
    case '<<':
      return leftVal << rightVal;
    case '>>':
      return leftVal >> rightVal;
    case '>>>':
      return leftVal >>> rightVal;
    case '+':
      return leftVal + rightVal;
    case '-':
      return leftVal - rightVal;
    case '*':
      return leftVal * rightVal;
    case '/':
      return leftVal / rightVal;
    case '%':
      return leftVal % rightVal;
    case '|':
      return leftVal | rightVal;
    case '^':
      return leftVal ^ rightVal;
    case '&':
      return leftVal & rightVal;
    case 'in':
      try {
        return leftVal in rightVal;
      } catch (err) {
        return false;
      }
    case 'instanceof':
      if (typeof rightVal !== 'function') {
        return false;
      }
      return leftVal instanceof rightVal;
    default:
      return undefined;
  }
}
},{"./index":90}],78:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = extractValueFromCallExpression;

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Extractor function for a CallExpression type value node.
 * A call expression looks like `bar()`
 * This will return `bar` as the value to indicate its existence,
 * since we can not execute the function bar in a static environment.
 *
 * @param - value - AST Value object with type `CallExpression`
 * @returns - The extracted value converted to correct type.
 */
function extractValueFromCallExpression(value) {
  return (0, _index2.default)(value.callee);
}
},{"./index":90}],79:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = extractValueFromConditionalExpression;

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Extractor function for a ConditionalExpression type value node.
 *
 * @param - value - AST Value object with type `ConditionalExpression`
 * @returns - The extracted value converted to correct type.
 */
function extractValueFromConditionalExpression(value) {
  var test = value.test;
  var alternate = value.alternate;
  var consequent = value.consequent;


  return (0, _index2.default)(test) ? (0, _index2.default)(consequent) : (0, _index2.default)(alternate);
}
},{"./index":90}],80:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = extractValueFromFunctionExpression;
/**
 * Extractor function for a FunctionExpression type value node.
 * Statically, we can't execute the given function, so just return a function
 * to indicate that the value is present.
 *
 * @param - value - AST Value object with type `FunctionExpression`
 * @returns - The extracted value converted to correct type.
 */
function extractValueFromFunctionExpression(value) {
  return function () {
    return value;
  };
}
},{}],81:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = extractValueFromIdentifier;
var JS_RESERVED = {
  Array: Array,
  Date: Date,
  Infinity: Infinity,
  Math: Math,
  Number: Number,
  Object: Object,
  String: String,
  undefined: undefined
};

/**
 * Extractor function for a Identifier type value node.
 * An Identifier is usually a reference to a variable.
 * Just return variable name to determine its existence.
 *
 * @param - value - AST Value object with type `Identifier`
 * @returns - The extracted value converted to correct type.
 */
function extractValueFromIdentifier(value) {
  var name = value.name;


  if (JS_RESERVED.hasOwnProperty(name)) {
    return JS_RESERVED[name];
  }

  return name;
}
},{}],82:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = extractValueFromLogicalExpression;

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Extractor function for a LogicalExpression type value node.
 * A logical expression is `a && b` or `a || b`, so we evaluate both sides
 * and return the extracted value of the expression.
 *
 * @param - value - AST Value object with type `LogicalExpression`
 * @returns - The extracted value converted to correct type.
 */
function extractValueFromLogicalExpression(value) {
  var operator = value.operator;
  var left = value.left;
  var right = value.right;

  var leftVal = (0, _index2.default)(left);
  var rightVal = (0, _index2.default)(right);

  return operator === '&&' ? leftVal && rightVal : leftVal || rightVal;
}
},{"./index":90}],83:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = extractValueFromMemberExpression;

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Extractor function for a MemberExpression type value node.
 * A member expression is accessing a property on an object `obj.property`.
 *
 * @param - value - AST Value object with type `MemberExpression`
 * @returns - The extracted value converted to correct type
 *  and maintaing `obj.property` convention.
 */
function extractValueFromMemberExpression(value) {
  return (0, _index2.default)(value.object) + '.' + (0, _index2.default)(value.property);
}
},{"./index":90}],84:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = extractValueFromNewExpression;
/**
 * Extractor function for a NewExpression type value node.
 * A new expression instantiates an object with `new` keyword.
 *
 * @returns - an empty object.
 */
function extractValueFromNewExpression() {
  return new Object(); // eslint-disable-line
}
},{}],85:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = extractValueFromObjectExpression;

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Extractor function for an ObjectExpression type value node.
 * An object expression is using {}.
 *
 * @returns - a representation of the object
 */
function extractValueFromObjectExpression(value) {
  return value.properties.reduce(function (obj, property) {
    var object = (0, _objectAssign2.default)({}, obj);
    object[(0, _index2.default)(property.key)] = (0, _index2.default)(property.value);
    return object;
  }, {});
}
},{"./index":90,"object-assign":92}],86:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = extractValueFromTaggedTemplateExpression;

var _TemplateLiteral = require('./TemplateLiteral');

var _TemplateLiteral2 = _interopRequireDefault(_TemplateLiteral);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Returns the string value of a tagged template literal object.
 * Redirects the bulk of the work to `TemplateLiteral`.
 */
function extractValueFromTaggedTemplateExpression(value) {
  return (0, _TemplateLiteral2.default)(value.quasi);
}
},{"./TemplateLiteral":87}],87:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = extractValueFromTemplateLiteral;
/**
 * Returns the string value of a template literal object.
 * Tries to build it as best as it can based on the passed
 * prop. For instance `This is a ${prop}` will return 'This is a {prop}'.
 *
 * If the template literal builds to undefined (`${undefined}`), then
 * this should return "".
 */
function extractValueFromTemplateLiteral(value) {
  var quasis = value.quasis;
  var expressions = value.expressions;

  var partitions = quasis.concat(expressions);

  return partitions.sort(function (a, b) {
    return a.start - b.start;
  }).reduce(function (raw, part) {
    var type = part.type;

    if (type === 'TemplateElement') {
      return raw + part.value.raw;
    } else if (type === 'Identifier') {
      return part.name === 'undefined' ? raw : raw + '{' + part.name + '}';
    } else if (type.indexOf('Expression') > -1) {
      return raw + '{' + type + '}';
    }

    return raw;
  }, '');
}
},{}],88:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = extractValueFromThisExpression;
/**
 * Extractor function for a ThisExpression type value node.
 * A this expression is using `this` as an identifier.
 *
 * @returns - 'this' as a string.
 */
function extractValueFromThisExpression() {
  return 'this';
}
},{}],89:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = extractValueFromUnaryExpression;

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Extractor function for a UnaryExpression type value node.
 * A unary expression is an expression with a unary operator.
 * For example, !"foobar" will evaluate to false, so this will return false.
 *
 * @param - value - AST Value object with type `UnaryExpression`
 * @returns - The extracted value converted to correct type.
 */
function extractValueFromUnaryExpression(value) {
  var operator = value.operator;
  var argument = value.argument;


  switch (operator) {
    case '-':
      return -(0, _index2.default)(argument);
    case '+':
      return +(0, _index2.default)(argument); // eslint-disable-line no-implicit-coercion
    case '!':
      return !(0, _index2.default)(argument);
    case '~':
      return ~(0, _index2.default)(argument);
    case 'delete':
      // I believe delete statements evaluate to true.
      return true;
    case 'typeof':
    case 'void':
    default:
      return undefined;
  }
}
},{"./index":90}],90:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = extract;
exports.extractLiteral = extractLiteral;

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _Literal = require('../Literal');

var _Literal2 = _interopRequireDefault(_Literal);

var _JSXElement = require('../JSXElement');

var _JSXElement2 = _interopRequireDefault(_JSXElement);

var _Identifier = require('./Identifier');

var _Identifier2 = _interopRequireDefault(_Identifier);

var _TaggedTemplateExpression = require('./TaggedTemplateExpression');

var _TaggedTemplateExpression2 = _interopRequireDefault(_TaggedTemplateExpression);

var _TemplateLiteral = require('./TemplateLiteral');

var _TemplateLiteral2 = _interopRequireDefault(_TemplateLiteral);

var _FunctionExpression = require('./FunctionExpression');

var _FunctionExpression2 = _interopRequireDefault(_FunctionExpression);

var _LogicalExpression = require('./LogicalExpression');

var _LogicalExpression2 = _interopRequireDefault(_LogicalExpression);

var _MemberExpression = require('./MemberExpression');

var _MemberExpression2 = _interopRequireDefault(_MemberExpression);

var _CallExpression = require('./CallExpression');

var _CallExpression2 = _interopRequireDefault(_CallExpression);

var _UnaryExpression = require('./UnaryExpression');

var _UnaryExpression2 = _interopRequireDefault(_UnaryExpression);

var _ThisExpression = require('./ThisExpression');

var _ThisExpression2 = _interopRequireDefault(_ThisExpression);

var _ConditionalExpression = require('./ConditionalExpression');

var _ConditionalExpression2 = _interopRequireDefault(_ConditionalExpression);

var _BinaryExpression = require('./BinaryExpression');

var _BinaryExpression2 = _interopRequireDefault(_BinaryExpression);

var _ObjectExpression = require('./ObjectExpression');

var _ObjectExpression2 = _interopRequireDefault(_ObjectExpression);

var _NewExpression = require('./NewExpression');

var _NewExpression2 = _interopRequireDefault(_NewExpression);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Composition map of types to their extractor functions.
var TYPES = {
  Identifier: _Identifier2.default,
  Literal: _Literal2.default,
  JSXElement: _JSXElement2.default,
  TaggedTemplateExpression: _TaggedTemplateExpression2.default,
  TemplateLiteral: _TemplateLiteral2.default,
  ArrowFunctionExpression: _FunctionExpression2.default,
  FunctionExpression: _FunctionExpression2.default,
  LogicalExpression: _LogicalExpression2.default,
  MemberExpression: _MemberExpression2.default,
  CallExpression: _CallExpression2.default,
  UnaryExpression: _UnaryExpression2.default,
  ThisExpression: _ThisExpression2.default,
  ConditionalExpression: _ConditionalExpression2.default,
  BinaryExpression: _BinaryExpression2.default,
  ObjectExpression: _ObjectExpression2.default,
  NewExpression: _NewExpression2.default
};

var noop = function noop() {
  return null;
};

// Composition map of types to their extractor functions to handle literals.
var LITERAL_TYPES = (0, _objectAssign2.default)({}, TYPES, {
  Literal: function Literal(value) {
    var extractedVal = TYPES.Literal.call(undefined, value);
    var isNull = extractedVal === null;
    // This will be convention for attributes that have null
    // value explicitly defined (<div prop={null} /> maps to 'null').
    return isNull ? 'null' : extractedVal;
  },
  Identifier: function Identifier(value) {
    var isUndefined = TYPES.Identifier.call(undefined, value) === undefined;
    return isUndefined ? undefined : null;
  },
  JSXElement: noop,
  ArrowFunctionExpression: noop,
  FunctionExpression: noop,
  LogicalExpression: noop,
  MemberExpression: noop,
  CallExpression: noop,
  UnaryExpression: function UnaryExpression(value) {
    var extractedVal = TYPES.UnaryExpression.call(undefined, value);
    return extractedVal === undefined ? null : extractedVal;
  },
  ThisExpression: noop,
  ConditionalExpression: noop,
  BinaryExpression: noop,
  ObjectExpression: noop,
  NewExpression: noop
});

var errorMessage = function errorMessage(expression) {
  return 'The prop value with an expression type of ' + expression + ' could not be resolved.\n  Please file issue to get this fixed immediately.';
};

/**
 * This function maps an AST value node
 * to its correct extractor function for its
 * given type.
 *
 * This will map correctly for *all* possible expression types.
 *
 * @param - value - AST Value object with type `JSXExpressionContainer`
 * @returns The extracted value.
 */
function extract(value) {
  // Value will not have the expression property when we recurse.
  var expression = value.expression || value;
  var type = expression.type;


  if (TYPES[type] === undefined) {
    throw new Error(errorMessage(type));
  }

  return TYPES[type](expression);
}

/**
 * This function maps an AST value node
 * to its correct extractor function for its
 * given type.
 *
 * This will map correctly for *some* possible types that map to literals.
 *
 * @param - value - AST Value object with type `JSXExpressionContainer`
 * @returns The extracted value.
 */
function extractLiteral(value) {
  // Value will not have the expression property when we recurse.
  var expression = value.expression || value;
  var type = expression.type;


  if (LITERAL_TYPES[type] === undefined) {
    throw new Error(errorMessage(type));
  }

  return LITERAL_TYPES[type](expression);
}
},{"../JSXElement":75,"../Literal":76,"./BinaryExpression":77,"./CallExpression":78,"./ConditionalExpression":79,"./FunctionExpression":80,"./Identifier":81,"./LogicalExpression":82,"./MemberExpression":83,"./NewExpression":84,"./ObjectExpression":85,"./TaggedTemplateExpression":86,"./TemplateLiteral":87,"./ThisExpression":88,"./UnaryExpression":89,"object-assign":92}],91:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getValue;
exports.getLiteralValue = getLiteralValue;

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _Literal = require('./Literal');

var _Literal2 = _interopRequireDefault(_Literal);

var _JSXElement = require('./JSXElement');

var _JSXElement2 = _interopRequireDefault(_JSXElement);

var _expressions = require('./expressions');

var _expressions2 = _interopRequireDefault(_expressions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Composition map of types to their extractor functions.
var TYPES = {
  Literal: _Literal2.default,
  JSXElement: _JSXElement2.default,
  JSXExpressionContainer: _expressions2.default
};

// Composition map of types to their extractor functions to handle literals.
var LITERAL_TYPES = (0, _objectAssign2.default)({}, TYPES, {
  JSXElement: function JSXElement() {
    return null;
  },
  JSXExpressionContainer: _expressions.extractLiteral
});

/**
 * This function maps an AST value node
 * to its correct extractor function for its
 * given type.
 *
 * This will map correctly for *all* possible types.
 *
 * @param value - AST Value object on a JSX Attribute.
 */
function getValue(value) {
  return TYPES[value.type](value);
}

/**
 * This function maps an AST value node
 * to its correct extractor function for its
 * given type.
 *
 * This will map correctly for *some* possible types that map to literals.
 *
 * @param value - AST Value object on a JSX Attribute.
 */
function getLiteralValue(value) {
  return LITERAL_TYPES[value.type](value);
}
},{"./JSXElement":75,"./Literal":76,"./expressions":90,"object-assign":92}],92:[function(require,module,exports){
'use strict';
/* eslint-disable no-unused-vars */
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (e) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (Object.getOwnPropertySymbols) {
			symbols = Object.getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

},{}],93:[function(require,module,exports){
module.exports = require('./lib').propName; // eslint-disable-line import/no-unresolved

},{"./lib":73}],94:[function(require,module,exports){
// http://wiki.commonjs.org/wiki/Unit_Testing/1.0
//
// THIS IS NOT TESTED NOR LIKELY TO WORK OUTSIDE V8!
//
// Originally from narwhal.js (http://narwhaljs.org)
// Copyright (c) 2009 Thomas Robinson <280north.com>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the 'Software'), to
// deal in the Software without restriction, including without limitation the
// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
// sell copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
// ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

// when used in node, this will actually load the util module we depend on
// versus loading the builtin util module as happens otherwise
// this is a bug in node module loading as far as I am concerned
var util = require('util/');

var pSlice = Array.prototype.slice;
var hasOwn = Object.prototype.hasOwnProperty;

// 1. The assert module provides functions that throw
// AssertionError's when particular conditions are not met. The
// assert module must conform to the following interface.

var assert = module.exports = ok;

// 2. The AssertionError is defined in assert.
// new assert.AssertionError({ message: message,
//                             actual: actual,
//                             expected: expected })

assert.AssertionError = function AssertionError(options) {
  this.name = 'AssertionError';
  this.actual = options.actual;
  this.expected = options.expected;
  this.operator = options.operator;
  if (options.message) {
    this.message = options.message;
    this.generatedMessage = false;
  } else {
    this.message = getMessage(this);
    this.generatedMessage = true;
  }
  var stackStartFunction = options.stackStartFunction || fail;

  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, stackStartFunction);
  }
  else {
    // non v8 browsers so we can have a stacktrace
    var err = new Error();
    if (err.stack) {
      var out = err.stack;

      // try to strip useless frames
      var fn_name = stackStartFunction.name;
      var idx = out.indexOf('\n' + fn_name);
      if (idx >= 0) {
        // once we have located the function frame
        // we need to strip out everything before it (and its line)
        var next_line = out.indexOf('\n', idx + 1);
        out = out.substring(next_line + 1);
      }

      this.stack = out;
    }
  }
};

// assert.AssertionError instanceof Error
util.inherits(assert.AssertionError, Error);

function replacer(key, value) {
  if (util.isUndefined(value)) {
    return '' + value;
  }
  if (util.isNumber(value) && !isFinite(value)) {
    return value.toString();
  }
  if (util.isFunction(value) || util.isRegExp(value)) {
    return value.toString();
  }
  return value;
}

function truncate(s, n) {
  if (util.isString(s)) {
    return s.length < n ? s : s.slice(0, n);
  } else {
    return s;
  }
}

function getMessage(self) {
  return truncate(JSON.stringify(self.actual, replacer), 128) + ' ' +
         self.operator + ' ' +
         truncate(JSON.stringify(self.expected, replacer), 128);
}

// At present only the three keys mentioned above are used and
// understood by the spec. Implementations or sub modules can pass
// other keys to the AssertionError's constructor - they will be
// ignored.

// 3. All of the following functions must throw an AssertionError
// when a corresponding condition is not met, with a message that
// may be undefined if not provided.  All assertion methods provide
// both the actual and expected values to the assertion error for
// display purposes.

function fail(actual, expected, message, operator, stackStartFunction) {
  throw new assert.AssertionError({
    message: message,
    actual: actual,
    expected: expected,
    operator: operator,
    stackStartFunction: stackStartFunction
  });
}

// EXTENSION! allows for well behaved errors defined elsewhere.
assert.fail = fail;

// 4. Pure assertion tests whether a value is truthy, as determined
// by !!guard.
// assert.ok(guard, message_opt);
// This statement is equivalent to assert.equal(true, !!guard,
// message_opt);. To test strictly for the value true, use
// assert.strictEqual(true, guard, message_opt);.

function ok(value, message) {
  if (!value) fail(value, true, message, '==', assert.ok);
}
assert.ok = ok;

// 5. The equality assertion tests shallow, coercive equality with
// ==.
// assert.equal(actual, expected, message_opt);

assert.equal = function equal(actual, expected, message) {
  if (actual != expected) fail(actual, expected, message, '==', assert.equal);
};

// 6. The non-equality assertion tests for whether two objects are not equal
// with != assert.notEqual(actual, expected, message_opt);

assert.notEqual = function notEqual(actual, expected, message) {
  if (actual == expected) {
    fail(actual, expected, message, '!=', assert.notEqual);
  }
};

// 7. The equivalence assertion tests a deep equality relation.
// assert.deepEqual(actual, expected, message_opt);

assert.deepEqual = function deepEqual(actual, expected, message) {
  if (!_deepEqual(actual, expected)) {
    fail(actual, expected, message, 'deepEqual', assert.deepEqual);
  }
};

function _deepEqual(actual, expected) {
  // 7.1. All identical values are equivalent, as determined by ===.
  if (actual === expected) {
    return true;

  } else if (util.isBuffer(actual) && util.isBuffer(expected)) {
    if (actual.length != expected.length) return false;

    for (var i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) return false;
    }

    return true;

  // 7.2. If the expected value is a Date object, the actual value is
  // equivalent if it is also a Date object that refers to the same time.
  } else if (util.isDate(actual) && util.isDate(expected)) {
    return actual.getTime() === expected.getTime();

  // 7.3 If the expected value is a RegExp object, the actual value is
  // equivalent if it is also a RegExp object with the same source and
  // properties (`global`, `multiline`, `lastIndex`, `ignoreCase`).
  } else if (util.isRegExp(actual) && util.isRegExp(expected)) {
    return actual.source === expected.source &&
           actual.global === expected.global &&
           actual.multiline === expected.multiline &&
           actual.lastIndex === expected.lastIndex &&
           actual.ignoreCase === expected.ignoreCase;

  // 7.4. Other pairs that do not both pass typeof value == 'object',
  // equivalence is determined by ==.
  } else if (!util.isObject(actual) && !util.isObject(expected)) {
    return actual == expected;

  // 7.5 For all other Object pairs, including Array objects, equivalence is
  // determined by having the same number of owned properties (as verified
  // with Object.prototype.hasOwnProperty.call), the same set of keys
  // (although not necessarily the same order), equivalent values for every
  // corresponding key, and an identical 'prototype' property. Note: this
  // accounts for both named and indexed properties on Arrays.
  } else {
    return objEquiv(actual, expected);
  }
}

function isArguments(object) {
  return Object.prototype.toString.call(object) == '[object Arguments]';
}

function objEquiv(a, b) {
  if (util.isNullOrUndefined(a) || util.isNullOrUndefined(b))
    return false;
  // an identical 'prototype' property.
  if (a.prototype !== b.prototype) return false;
  // if one is a primitive, the other must be same
  if (util.isPrimitive(a) || util.isPrimitive(b)) {
    return a === b;
  }
  var aIsArgs = isArguments(a),
      bIsArgs = isArguments(b);
  if ((aIsArgs && !bIsArgs) || (!aIsArgs && bIsArgs))
    return false;
  if (aIsArgs) {
    a = pSlice.call(a);
    b = pSlice.call(b);
    return _deepEqual(a, b);
  }
  var ka = objectKeys(a),
      kb = objectKeys(b),
      key, i;
  // having the same number of owned properties (keys incorporates
  // hasOwnProperty)
  if (ka.length != kb.length)
    return false;
  //the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  //~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] != kb[i])
      return false;
  }
  //equivalent values for every corresponding key, and
  //~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!_deepEqual(a[key], b[key])) return false;
  }
  return true;
}

// 8. The non-equivalence assertion tests for any deep inequality.
// assert.notDeepEqual(actual, expected, message_opt);

assert.notDeepEqual = function notDeepEqual(actual, expected, message) {
  if (_deepEqual(actual, expected)) {
    fail(actual, expected, message, 'notDeepEqual', assert.notDeepEqual);
  }
};

// 9. The strict equality assertion tests strict equality, as determined by ===.
// assert.strictEqual(actual, expected, message_opt);

assert.strictEqual = function strictEqual(actual, expected, message) {
  if (actual !== expected) {
    fail(actual, expected, message, '===', assert.strictEqual);
  }
};

// 10. The strict non-equality assertion tests for strict inequality, as
// determined by !==.  assert.notStrictEqual(actual, expected, message_opt);

assert.notStrictEqual = function notStrictEqual(actual, expected, message) {
  if (actual === expected) {
    fail(actual, expected, message, '!==', assert.notStrictEqual);
  }
};

function expectedException(actual, expected) {
  if (!actual || !expected) {
    return false;
  }

  if (Object.prototype.toString.call(expected) == '[object RegExp]') {
    return expected.test(actual);
  } else if (actual instanceof expected) {
    return true;
  } else if (expected.call({}, actual) === true) {
    return true;
  }

  return false;
}

function _throws(shouldThrow, block, expected, message) {
  var actual;

  if (util.isString(expected)) {
    message = expected;
    expected = null;
  }

  try {
    block();
  } catch (e) {
    actual = e;
  }

  message = (expected && expected.name ? ' (' + expected.name + ').' : '.') +
            (message ? ' ' + message : '.');

  if (shouldThrow && !actual) {
    fail(actual, expected, 'Missing expected exception' + message);
  }

  if (!shouldThrow && expectedException(actual, expected)) {
    fail(actual, expected, 'Got unwanted exception' + message);
  }

  if ((shouldThrow && actual && expected &&
      !expectedException(actual, expected)) || (!shouldThrow && actual)) {
    throw actual;
  }
}

// 11. Expected to throw an error:
// assert.throws(block, Error_opt, message_opt);

assert.throws = function(block, /*optional*/error, /*optional*/message) {
  _throws.apply(this, [true].concat(pSlice.call(arguments)));
};

// EXTENSION! This is annoying to write outside this module.
assert.doesNotThrow = function(block, /*optional*/message) {
  _throws.apply(this, [false].concat(pSlice.call(arguments)));
};

assert.ifError = function(err) { if (err) {throw err;}};

var objectKeys = Object.keys || function (obj) {
  var keys = [];
  for (var key in obj) {
    if (hasOwn.call(obj, key)) keys.push(key);
  }
  return keys;
};

},{"util/":99}],95:[function(require,module,exports){
if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}

},{}],96:[function(require,module,exports){
(function (process){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe =
    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var splitPath = function(filename) {
  return splitPathRe.exec(filename).slice(1);
};

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function(path) {
  var result = splitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};


exports.basename = function(path, ext) {
  var f = splitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};


exports.extname = function(path) {
  return splitPath(path)[3];
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

}).call(this,require('_process'))
},{"_process":97}],97:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = setTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    clearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        setTimeout(drainQueue, 0);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],98:[function(require,module,exports){
module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}
},{}],99:[function(require,module,exports){
(function (process,global){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  // Allow for deprecating things in the process of starting up.
  if (isUndefined(global.process)) {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  if (process.noDeprecation === true) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = require('./support/isBuffer');

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = require('inherits');

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./support/isBuffer":98,"_process":97,"inherits":95}]},{},[1]);
