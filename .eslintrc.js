/** @format */

module.exports = {
  env: {
    browser: true,
    node: true,
  },

  extends: 'eslint:recommended',

  overrides: [],

  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },

  // See https://eslint.org/docs/latest/rules/
  rules: {
    //region Possible Problems

    'array-callback-return': ['error', { checkForEach: true }],

    'no-constant-binary-expression': 'error',

    'no-constructor-return': 'error',

    'no-duplicate-imports': 'error',

    'no-new-native-nonconstructor': 'error',

    'no-promise-executor-return': 'error',

    'no-self-compare': 'error',

    'no-unmodified-loop-condition': 'error',

    'no-unreachable-loop': 'error',

    'no-unused-private-class-members': 'error',

    'no-use-before-define': ['error', { allowNamedExports: true }],

    //endregion

    //region Suggestions

    'accessor-pairs': 'error',

    'arrow-body-style': [
      'error',
      'as-needed',
      { requireReturnForObjectLiteral: true },
    ],

    // The keyword var should not be used anyway.
    'block-scoped-var': 'error',

    'class-methods-use-this': 'error',

    'curly': 'error',

    'default-case': 'error',
    'default-case-last': 'error',

    'default-param-last': 'error',

    'eqeqeq': 'error',

    'func-style': 'error',

    'init-declarations': 'error',

    'logical-assignment-operators': [
      'error',
      'always',
      { enforceForIfStatements: true },
    ],

    // Using bare-block instead of default starred-block because it's easier to format.
    'multiline-comment-style': ['warn', 'bare-block'],

    'no-array-constructor': 'error',

    'no-floating-decimal': 'error',

    'no-implicit-coercion': 'error',

    'no-invalid-this': 'error',

    'no-iterator': 'error',

    'no-magic-numbers': [
      'warn',

      {
        ignore: [
          1,
          '1n',
          0,
          -1,
          '-1n',
          100,
          '100n',
          -100,
          '-100n',
          2,
          '2n',
          -2,
          '-2n',
        ],

        ignoreArrayIndexes: true,
        ignoreDefaultValues: true,
        ignoreClassFieldInitialValues: true,
      },
    ],

    // Use template literals instead.
    'no-multi-str': 'warn',

    'no-new': 'error',

    'no-new-func': 'error',

    'no-new-object': 'error',

    'no-new-wrappers': 'error',

    'no-octal': 'warn',

    'no-param-reassign': 'warn',

    'no-proto': 'error',

    'no-return-assign': 'error',

    'no-sequences': 'error',

    'no-shadow': [
      'error',

      {
        builtinGlobals: false,
        hoist: 'all',
        ignoreOnInitialization: true,
      },
    ],

    'no-undefined': 'error',

    'no-unneeded-ternary': ['warn', { defaultAssignment: false }],

    'no-unused-expressions': [
      'warn',

      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
      },
    ],

    'no-useless-concat': 'warn',

    'no-var': 'error',

    'object-shorthand': 'warn',

    'one-var-declaration-per-line': 'error',

    'operator-assignment': 'warn',

    'prefer-arrow-callback': ['error', { allowNamedFunctions: true }],

    'prefer-const': ['error', { ignoreReadBeforeAssign: true }],

    'prefer-destructuring': [
      'error',
      { array: true, object: true },
      { enforceForRenamedProperties: true },
    ],

    'prefer-exponentiation-operator': 'error',

    'prefer-numeric-literals': 'error',

    'prefer-object-has-own': 'error',

    'prefer-object-spread': 'error',

    'prefer-regex-literals': ['error', { disallowRedundantWrapping: true }],

    'prefer-rest-params': 'error',

    'prefer-spread': 'error',

    'prefer-template': 'error',

    'quote-props': ['warn', 'consistent-as-needed'],

    'spaced-comment': [
      'warn',
      'always',

      {
        exceptions: [
          '-',
          '_',
          '+',
          '=',
          '*',
        ],

        markers: [
          '/',
          '*',
          'region',
          'endregion',
        ],

        block: { balanced: true },
      },
    ],

    'yoda': 'error',

    //endregion

    //region Layout & Formatting

    'array-bracket-newline': ['warn', { multiline: true, minItems: 3 }],
    'array-bracket-spacing': 'warn',
    'array-element-newline': [
      'warn',

      {
        ArrayExpression: { multiline: true, minItems: 3 },
        ArrayPattern: { multiline: true, minItems: 3 },
      },
    ],

    'arrow-parens': 'error',
    'arrow-spacing': 'error',

    'block-spacing': 'warn',

    'brace-style': 'warn',

    'comma-dangle': ['error', 'always-multiline'],
    'comma-spacing': 'error',
    'comma-style': 'error',

    'computed-property-spacing': 'error',

    'dot-location': ['error', 'property'],

    'eol-last': 'error',

    'func-call-spacing': 'error',
    'function-call-argument-newline': ['error', 'consistent'],
    'function-paren-newline': ['error', 'never'],

    'generator-star-spacing': 'error',

    'implicit-arrow-linebreak': 'error',

    'indent': [
      'warn',
      2,

      {
        SwitchCase: 1,
        VariableDeclarator: 'first',
        outerIIFEBody: 0,
        MemberExpression: 1,
        FunctionDeclaration: { body: 1, parameters: 'first' },
        FunctionExpression: { body: 1, parameters: 'first' },
        StaticBlock: { body: 1 },
        CallExpression: { arguments: 'first' },
        ArrayExpression: 'first',
        ObjectExpression: 'first',
        ImportDeclaration: 'first',
        flatTernaryExpressions: false,
        offsetTernaryExpressions: true,
        ignoreComments: true,
      },
    ],

    'key-spacing': 'error',

    'keyword-spacing': 'error',

    'linebreak-style': 'error',

    'lines-around-comment': [
      'error',

      {
        beforeBlockComment: true,
        afterBlockComment: false,
        beforeLineComment: true,
        afterLineComment: false,
        allowBlockStart: true,
        allowBlockEnd: true,
        allowObjectStart: true,
        allowObjectEnd: true,
        allowArrayStart: true,
        allowArrayEnd: true,
        allowClassStart: true,
        allowClassEnd: true,
        applyDefaultIgnorePatterns: true,
      },
    ],

    'lines-between-class-members': 'error',

    'max-statements-per-line': ['error', { max: 3 }],

    'multiline-ternary': ['error', 'always-multiline'],

    'new-parens': 'error',

    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 3 }],

    'no-multi-spaces': 'error',

    'no-multiple-empty-lines': [
      'error',

      {
        max: 3,
        maxEOF: 1,
        maxBOF: 0,
      },
    ],

    'no-tabs': 'error',

    'no-trailing-spaces': 'error',

    'no-whitespace-before-property': 'error',

    'nonblock-statement-body-position': 'error',

    'object-curly-newline': [
      'error',

      {
        multiline: true,
        minProperties: 3,
        consistent: true,
      },
    ],

    'object-curly-spacing': [
      'error',
      'always',
      { arraysInObjects: true, objectsInObjects: true },
    ],

    'object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],

    'operator-linebreak': ['error', 'before'],

    'padded-blocks': [
      'error',

      {
        blocks: 'never',
        classes: 'always',
        switches: 'never',
      },

      { allowSingleLineBlocks: true },
    ],

    'padding-line-between-statements': [
      'error',

      {
        blankLine: 'always',
        prev: '*',
        next: 'block',
      },

      {
        blankLine: 'always',
        prev: 'block',
        next: '*',
      },

      {
        blankLine: 'always',
        prev: '*',
        next: 'multiline-block-like',
      },

      {
        blankLine: 'always',
        prev: 'multiline-block-like',
        next: '*',
      },

      {
        blankLine: 'always',
        prev: '*',
        next: 'return',
      },

      {
        blankLine: 'always',
        prev: '*',
        next: 'continue',
      },

      {
        blankLine: 'always',
        prev: '*',
        next: 'break',
      },

      {
        blankLine: 'always',

        prev: [
          'const',
          'let',
          'var',
        ],

        next: '*',
      },
      {
        blankLine: 'any',

        prev: [
          'const',
          'let',
          'var',
        ],

        next: [
          'const',
          'let',
          'var',
        ],
      },

      {
        blankLine: 'always',
        prev: 'directive',
        next: '*',
      },

      {
        blankLine: 'any',
        prev: 'directive',
        next: 'directive',
      },

      {
        blankLine: 'always',
        prev: ['case', 'default'],
        next: '*',
      },

      {
        blankLine: 'always',
        prev: ['import', 'cjs-import'],
        next: '*',
      },

      {
        blankLine: 'always',
        prev: '*',
        next: ['export', 'cjs-export'],
      },
    ],

    'quotes': ['error', 'single'],

    'rest-spread-spacing': 'error',

    'semi': ['error', 'always'],

    'semi-spacing': 'error',

    'semi-style': 'error',

    'space-before-blocks': 'error',

    'space-before-function-paren': [
      'error',

      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],

    'space-in-parens': 'error',

    'space-infix-ops': ['error', { int32Hint: true }],

    'space-unary-ops': ['error', { words: true, nonwords: false }],

    'switch-colon-spacing': 'error',

    'template-curly-spacing': 'error',

    'template-tag-spacing': 'error',

    'unicode-bom': 'error',

    'wrap-iife': 'error',

    'wrap-regex': 'error',

    'yield-star-spacing': ['error', 'before'],

    //endregion
  },
};
