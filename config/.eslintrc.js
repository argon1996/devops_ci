module.exports = {
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module'
    },
    env: {
      browser: true,   // Si tu código se ejecuta en el navegador
      es2021: true,    // Soporte para características de ECMAScript 2021
      node: true,      // Soporte para Node.js
      jest: true       // Soporte para Jest
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended'
    ],
    settings: {
      react: {
        version: 'detect' // Detecta automáticamente la versión de React
      }
    },
    rules: {
      // Puedes agregar o sobrescribir reglas aquí
    }
  };
  