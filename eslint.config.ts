import js from '@eslint/js';
import tslint from '@typescript-eslint/parser';
import globals from 'globals';

export default [
    js.configs.recommended,
    {
        files: ['src/**/*.ts', 'build/**/*.js'],
        // ignores: ['build/**/*.js'],
        rules: {
            'no-console': 'warn',
            'no-unused-vars': 'warn',
            'no-undef': 'warn',
        },
        languageOptions: {
            parser: tslint,
            parserOptions: {
                globals: {
                    ...globals.node,
                    console: false,
                },
                ecmaVersion: 2023,
                sourceType: 'module',
            },
        },
    },
];
