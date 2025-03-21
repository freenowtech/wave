module.exports = {
    plugins: ['@typescript-eslint', 'eslint-comments', 'jest', 'promise', 'unicorn'],
    extends: [
        'airbnb-typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:eslint-comments/recommended',
        'plugin:jest/recommended',
        'plugin:promise/recommended',
        'plugin:unicorn/recommended',
        'prettier',
        'plugin:storybook/recommended',
        'plugin:storybook/recommended'
    ],
    env: {
        node: true,
        browser: true,
        jest: true
    },
    parserOptions: {
        project: './tsconfig.eslint.json'
    },
    rules: {
        // conflicts with stylelint rule
        'unicorn/numeric-separators-style': 'off',
        'unicorn/no-useless-undefined': 'off',
        'unicorn/no-null': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        'react/require-default-props': 'off',
        // Often used for this library
        'react/jsx-props-no-spreading': 'off',
        'unicorn/filename-case': 'off',
        // Too restrictive, writing ugly code to defend against a very unlikely scenario: https://eslint.org/docs/rules/no-prototype-builtins
        'no-prototype-builtins': 'off',
        // https://basarat.gitbooks.io/typescript/docs/tips/defaultIsBad.html
        'import/prefer-default-export': 'off',
        'import/no-default-export': 'off',
        // Too restrictive: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
        'react/destructuring-assignment': 'off',
        // No jsx extension: https://github.com/facebook/create-react-app/issues/87#issuecomment-234627904
        'react/jsx-filename-extension': 'off',
        // Use function hoisting to improve code readability
        'no-use-before-define': 'off',
        // Allow most functions to rely on type inference. If the function is exported, then `@typescript-eslint/explicit-module-boundary-types` will ensure
        // it's typed.
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-use-before-define': [
            'error',
            {
                functions: false,
                classes: true,
                variables: true,
                typedefs: true
            }
        ],
        // Common abbreviations are known and readable
        'unicorn/prevent-abbreviations': 'off',
        // Airbnb prefers forEach
        'unicorn/no-array-for-each': 'off',
        // It's not accurate in the monorepo style
        'import/no-extraneous-dependencies': 'off',
        // Storybook Template.bind returns any type
        '@typescript-eslint/no-unsafe-member-access': 'off'
    },
    overrides: [
        {
            files: ['*.js'],
            rules: {
                // Allow `require()`
                '@typescript-eslint/no-var-requires': 'off'
            }
        }
    ]
};
