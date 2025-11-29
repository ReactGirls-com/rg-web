module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-prettier-scss',
    'stylelint-config-hudochenkov/full',
  ],
  plugins: ['stylelint-scss', 'stylelint-order'],
  rules: {
    'selector-class-pattern': null, // Allow custom class names
    'selector-id-pattern': null, // Allow custom id names
    'selector-max-type': null, // Allow multiple type selectors
    'selector-max-id': null, // Allow multiple id selectors
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['export'],
      },
    ],
  },
};
