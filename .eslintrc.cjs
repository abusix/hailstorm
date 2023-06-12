module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
    },
    extends: [
        'airbnb',
        'airbnb-typescript',
        'airbnb/hooks',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:storybook/recommended',
        'plugin:prettier/recommended',
    ],
    plugins: ['react', '@typescript-eslint', 'prettier'],
    rules: {
        'import/prefer-default-export': 'off',
        'no-restricted-exports': ['error', { restrictDefaultExports: { direct: true } }],
        'react/react-in-jsx-scope': 'off',
        'react/require-default-props': 'off',
        'no-alert': 'off',
        'react/function-component-definition': [
            'error',
            {
                namedComponents: ['arrow-function'],
                unnamedComponents: ['arrow-function'],
            },
        ],
        'react/display-name': 'off',
        'import/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: ['**/*.stories.tsx', '**/*.test.tsx', '**/*.test.ts'],
            },
        ],
    },
    overrides: [
        {
            files: ['*.stories.tsx'],
            rules: {
                'no-plusplus': 'off',
                'no-restricted-exports': 'off',
                'react/no-unstable-nested-components': 'off',
                'react/jsx-props-no-spreading': 'off',
            },
        },
        {
            files: ['src/icons/**/*.tsx'],
            rules: {
                'no-restricted-exports': 'off',
                'react/jsx-props-no-spreading': 'off',
                'import/prefer-default-export': 'off',
            }
        },
        {
            files: ['src/util/class-names.tsx'],
            rules: {
                'import/no-extraneous-dependencies': 'off',
            }
        }
    ],
};
