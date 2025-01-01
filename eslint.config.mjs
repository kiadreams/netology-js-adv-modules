import globals from 'globals';
import js from '@eslint/js';


/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['src/**/*.js', 'src/**/*.mjs'],
    languageOptions: {
      globals: globals.browser,
      sourceType: 'commonjs',
      sourceType: 'module'
    },
    rules: js.configs.recommended.rules,
  }
]
