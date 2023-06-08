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
        'react/react-in-jsx-scope': 0,
        'react/require-default-props': 0,
        'no-alert': 0,
        'react/function-component-definition': [
            2,
            {
                namedComponents: ['arrow-function'],
                unnamedComponents: ['arrow-function'],
            },
        ],
        'react/display-name': 0,
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
                'no-restricted-exports': 0,
            },
        },
    ],
};
