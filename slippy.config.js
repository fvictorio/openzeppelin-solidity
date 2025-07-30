const namingConvention = [
  {
    selector: ['default'],
    format: ['camelCase'],
  },
  {
    selector: ['typeLike', 'enumMember'],
    format: ['PascalCase'],
  },
];

module.exports = [
  {
    rules: {
      'explicit-types': 'error',
      'id-denylist': 'error',
      'imports-on-top': 'error',
      'max-state-vars': 'error',
      'naming-convention': ['off', namingConvention],
      'no-console': 'error',
      'no-default-visibility': 'error',
      'no-duplicate-imports': 'error',
      'no-empty-blocks': 'off',
      'no-global-imports': 'error',
      'no-tx-origin': 'error',
      'no-uninitialized-immutable-references': 'error',
      'no-unused-vars': 'error',
      'private-vars': 'off',
      'require-revert-reason': 'off',
      'sort-imports': 'off',
      'sort-modifiers': 'error',
    },
  },
  {
    files: ['contracts/interfaces/**/*.sol'],
    rules: {
      'no-unused-vars': 'off',
    },
  },
  {
    files: ['contracts/mocks/**/*.sol', 'test/**/*.sol'],
    rules: {
      'no-default-visibility': 'off',
    },
  },
];
