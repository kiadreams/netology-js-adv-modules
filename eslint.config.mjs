import globals from 'globals';
import js from '@eslint/js';


/** @type {import('eslint').Linter.Config[]} */
export default [
  // js.configs.recommended,
  Object.assign({},
    js.configs.recommended,
    {
      ignores: ['*.config.*', 'dist/*', 'node_modules/*']
    }
  ),

  {
    rules: {
      "no-unused-vars": 'warn',
      "no-undef": 'warn'
    },
    ignores: ['*.config.*', 'dist/*', 'node_modules/*']
  },
]
