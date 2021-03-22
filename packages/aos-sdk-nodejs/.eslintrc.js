module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  extends: [
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    // eslint plugin import settings
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    // eslint plugin import settings [e]
  ],
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    // sort for inside curly.
    'sort-imports': [
      'error',
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'single', 'multiple'],
      },
    ],
    // sort for imports.
    'import/order': [
      'error',
      {
        groups: [
          ['external', 'builtin'], // Built-in types are first
          'internal',
          ['sibling', 'parent'], // Then sibling and parent types. They can be mingled together
          'index', // Then the index file
          'object',
          // Then the rest: internal and external type
        ],
        pathGroups: [
          {
            pattern: '~/**',
            group: 'internal',
          },
          {
            pattern: '@/**',
            group: 'external',
          },
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc', // sort in ascending order. Options: ['ignore', 'asc', 'desc']
          caseInsensitive: true, // ignore case. Options: [true, false]
        },
      },
    ],
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      // use <root>/tsconfig.json
      typescript: {
        alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
      },
    },
  },
};
