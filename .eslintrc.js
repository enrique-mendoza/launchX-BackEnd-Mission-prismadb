module.exports = {
    'env': {
        'browser': true,
        'commonjs': true,
        'es2021': true,
        'jest': true
    },
    'extends': 'eslint:recommended',
    'parserOptions': {
        'ecmaVersion': 'latest'
    },
    'rules': {
        indent: ['error', 4],
        quotes: ['error', 'single', {'avoidEscape': true}],
        semi: ['error', 'always']
    }
};