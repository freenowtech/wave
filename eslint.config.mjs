// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from 'eslint-plugin-storybook';

import tseslint from 'typescript-eslint';
import reactPlugin from '@eslint-react/eslint-plugin';
import reactHooks from 'eslint-plugin-react-hooks';
import importX from 'eslint-plugin-import-x';
import jest from 'eslint-plugin-jest';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import promise from 'eslint-plugin-promise';
import unicorn from 'eslint-plugin-unicorn';
import eslintComments from '@eslint-community/eslint-plugin-eslint-comments';
import prettier from 'eslint-config-prettier';
import globals from 'globals';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default tseslint.config(
    // Ignore build output, dependencies, generated icons, and codemod test fixtures
    {
        ignores: [
            'lib/**',
            'node_modules/**',
            'coverage/**',
            'fixtures/**',
            'src/icons/**',
            'src/codemods/__testfixtures__/**'
        ]
    },
    // TypeScript recommended + type-checked rules
    tseslint.configs.recommendedTypeChecked,
    // React rules (type-checked)
    reactPlugin.configs['recommended-type-checked'],
    // React Hooks — classic rules only (no React Compiler rules)
    {
        plugins: { 'react-hooks': reactHooks },
        rules: {
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn'
        }
    },
    // Unicorn (opinionated JS quality rules)
    unicorn.configs['flat/recommended'],
    // Promise best practices
    promise.configs['flat/recommended'],
    // JSX accessibility
    jsxA11y.flatConfigs.recommended,
    // Import order and resolution (TypeScript-aware)
    importX.flatConfigs.recommended,
    importX.flatConfigs.typescript,
    // eslint-disable comments must be valid
    {
        plugins: { '@eslint-community/eslint-comments': eslintComments },
        rules: {
            ...eslintComments.configs.recommended.rules
        }
    },
    // Jest rules scoped to test files
    {
        files: ['src/**/*.spec.{ts,tsx}', 'src/**/*.test.{ts,tsx}', 'codemods/**/__tests__/**/*.ts'],
        ...jest.configs['flat/recommended']
    },
    // ── Main config — component library source ────────────────────────────────
    {
        files: ['src/**/*.{ts,tsx}'],
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
                ...globals.jest
            },
            parserOptions: {
                project: './tsconfig.eslint.json',
                tsconfigRootDir: __dirname
            }
        },
        rules: {
            // ── unicorn ──────────────────────────────────────────────────────
            // conflicts with stylelint rule
            'unicorn/numeric-separators-style': 'off',
            'unicorn/no-useless-undefined': 'off',
            'unicorn/no-null': 'off',
            'unicorn/filename-case': 'off',
            // Browser component library — window is intentional
            'unicorn/prefer-global-this': 'off',
            // Common abbreviations are known and readable
            'unicorn/prevent-abbreviations': 'off',
            'unicorn/no-array-for-each': 'off',
            'unicorn/prefer-logical-operator-over-ternary': 'off',
            'unicorn/no-useless-switch-case': 'off',
            'unicorn/no-await-expression-member': 'off',
            // jscodeshift API uses .find(Type, callback) — not a plain array method
            'unicorn/no-array-callback-reference': 'off',
            'unicorn/no-array-method-this-argument': 'off',

            // ── @typescript-eslint ───────────────────────────────────────────
            '@typescript-eslint/no-unsafe-return': 'off',
            '@typescript-eslint/no-unsafe-assignment': 'off',
            '@typescript-eslint/no-unsafe-member-access': 'off',
            '@typescript-eslint/no-unsafe-argument': 'off',
            '@typescript-eslint/no-unsafe-call': 'off',
            '@typescript-eslint/no-redundant-type-constituents': 'off',
            '@typescript-eslint/no-misused-promises': 'off',
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/no-base-to-string': 'off',
            '@typescript-eslint/explicit-function-return-type': 'off',
            '@typescript-eslint/no-use-before-define': [
                'error',
                { functions: false, classes: true, variables: true, typedefs: true }
            ],
            '@typescript-eslint/consistent-type-imports': [
                'error',
                { prefer: 'type-imports', fixStyle: 'inline-type-imports' }
            ],
            '@typescript-eslint/consistent-type-exports': ['error', { fixMixedExportsWithInlineTypeSpecifier: true }],

            // ── import-x ────────────────────────────────────────────────────
            'import-x/no-extraneous-dependencies': 'off',
            // `import React from 'react'` + React.useState is common — not a bug
            'import-x/no-named-as-default-member': 'off',

            // ── @eslint-react — new rules not previously enforced ────────────
            // Components inside functions are a common pattern in this library
            '@eslint-react/component-hook-factories': 'off',
            '@eslint-react/no-nested-component-definitions': 'off',
            '@eslint-react/no-nested-lazy-component-declarations': 'off',
            // IIFE in JSX is a React Compiler concern, not applicable here
            '@eslint-react/unsupported-syntax': 'off',
            // React 19 style suggestions — informational only
            '@eslint-react/no-use-context': 'off',
            '@eslint-react/no-context-provider': 'off',
            // Library supports React ^18 || ^19 — forwardRef still needed for React 18 consumers
            '@eslint-react/no-forward-ref': 'off'
        }
    },
    // ── Storybook stories — hooks rules relaxed ───────────────────────────────
    // CSF3 render() functions are React components but named lowercase
    {
        files: ['src/**/*.stories.{ts,tsx}', 'src/**/*.storybook.{ts,tsx}'],
        rules: {
            'react-hooks/rules-of-hooks': 'off',
            '@eslint-react/rules-of-hooks': 'off'
        }
    },
    // ── Codemods — Node.js/CommonJS scripts ───────────────────────────────────
    {
        files: ['src/codemods/**/*.{ts,js}'],
        languageOptions: {
            globals: { ...globals.node },
            parserOptions: {
                project: './tsconfig.eslint.json',
                tsconfigRootDir: __dirname
            }
        },
        rules: {
            // jscodeshift codemods use CommonJS and __dirname
            'unicorn/prefer-module': 'off',
            'unicorn/no-array-callback-reference': 'off',
            'unicorn/no-array-method-this-argument': 'off',
            'unicorn/no-array-reduce': 'off',
            'unicorn/prefer-set-has': 'off',
            'unicorn/prefer-spread': 'off',
            'unicorn/no-anonymous-default-export': 'off',
            'unicorn/filename-case': 'off',
            'unicorn/prevent-abbreviations': 'off',
            '@typescript-eslint/no-require-imports': 'off',
            '@typescript-eslint/consistent-type-imports': [
                'error',
                { prefer: 'type-imports', fixStyle: 'inline-type-imports' }
            ]
        }
    },
    // ── Scripts ───────────────────────────────────────────────────────────────
    {
        files: ['scripts/**/*.{ts,js}'],
        languageOptions: {
            globals: { ...globals.node },
            parserOptions: {
                project: './tsconfig.eslint.json',
                tsconfigRootDir: __dirname
            }
        },
        rules: {
            'unicorn/prevent-abbreviations': 'off',
            'unicorn/filename-case': 'off'
        }
    },
    // Disable Prettier-conflicting formatting rules (must be last)
    { rules: prettier.rules },
    // JS/CJS files — allow require()
    {
        files: ['**/*.js', '**/*.cjs'],
        rules: {
            '@typescript-eslint/no-require-imports': 'off'
        }
    },
    storybook.configs['flat/recommended']
);
