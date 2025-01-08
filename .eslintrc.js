module.exports = {
  root: true,
  env: {
    browser: true,
    es2022: true,
    node: true,
    commonjs: true,
    'cypress/globals': true,
  },
  extends: [
    // "airbnb": 这是由 Airbnb 团队维护的一组 JavaScript 代码规范，
    // 它提供了一套严格的、可读性高的代码规则，用于保持代码质量和一致性
    'airbnb',
    // 这个规则集合由 eslint-plugin-import 提供，它包含一些用于检查和约束 ES6 模块导入和导出的规则
    'plugin:import/recommended',
    // 这个规则集合扩展了 "plugin:import/recommended"，添加了一些用于 TypeScript 中的导入和导出的规则
    'plugin:import/typescript',
    // 这个规则集合由 eslint-plugin-promise 提供，它提供了一些规则用于检查和约束 Promise 的使用
    'plugin:promise/recommended',
    // 这个规则集合由 eslint-plugin-react 提供，它包含一些用于检查和约束 React 代码的规则
    'plugin:react/recommended',
    // 这个规则集合由 eslint-plugin-react-hooks 提供，它包含一些用于检查和约束 React Hooks 的规则
    'plugin:react-hooks/recommended',
    // 这个规则集合由 eslint-plugin-jsx-a11y 提供，它包含一些用于检查和约束 JSX 元素上可访问性的规则
    'plugin:jsx-a11y/recommended',
    // 这个规则集合由 @typescript-eslint/eslint-plugin 提供，它包含一些用于检查和约束 TypeScript 代码的规则
    'plugin:@typescript-eslint/recommended',
    // 这个规则集合扩展了 "plugin:@typescript-eslint/recommended"，添加了一些需要类型检查的 TypeScript 规则
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:@tanstack/eslint-plugin-query/recommended',
    'plugin:cypress/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.json',
  },
  plugins: ['import', 'promise', 'react', 'react-hooks', 'jsx-a11y', '@typescript-eslint', 'cypress'],
  rules: {
    // 缩进2个空格
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
        VariableDeclarator: 1,
        outerIIFEBody: 1,
        FunctionDeclaration: { parameters: 1, body: 1 },
        FunctionExpression: { parameters: 1, body: 1 },
        CallExpression: { arguments: 1 },
        ArrayExpression: 1,
        ObjectExpression: 1,
        ImportDeclaration: 1,
        flatTernaryExpressions: false,
        ignoreComments: false,
        ignoredNodes: [
          'JSXElement',
          'JSXElement > *',
          'JSXAttribute',
          'JSXIdentifier',
          'JSXNamespacedName',
          'JSXMemberExpression',
          'JSXSpreadAttribute',
          'JSXExpressionContainer',
          'JSXOpeningElement',
          'JSXClosingElement',
          'JSXFragment',
          'JSXOpeningFragment',
          'JSXClosingFragment',
          'JSXText',
          'JSXEmptyExpression',
          'JSXSpreadChild',
        ],
        offsetTernaryExpressions: true,
      },
    ],
    // jsx缩进2个空格
    'react/jsx-indent': ['error', 2],
    // jsx属性缩进2个空格
    'react/jsx-indent-props': ['error', 2],
    // 只能使用单引号
    quotes: ['error', 'single'],
    // 忽略换行符类型
    'linebreak-style': 'off',
    // 可以在tsx文件中使用拓展名为jsx的文件
    'react/jsx-filename-extension': 'off',
    // 禁止使用 @ts-ignore
    '@typescript-eslint/ban-ts-ignore': 'off',
    // 忽略导入时的文件扩展名
    'import/no-unresolved': 'off',
    // 忽略表达式必须单独一行
    'react/jsx-one-expression-per-line': 'off',
    // 忽略button必须有类型
    'react/button-has-type': 'off',
    // 当使用 jsx 时不用显式引用 React
    'react/react-in-jsx-scope': 'off',
    // 允许项目中使用多种函数声明方式
    'react/function-component-definition': 'off',
    // typescript 项目不需要
    'react/prop-types': 'off',
    'import/extensions': 'off',
    'no-bitwise': 'off',
    'react/state-in-constructor': 'off',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    'cypress/no-assigning-return-values': 'error',
    'cypress/no-unnecessary-waiting': 'error',
    'cypress/assertion-before-screenshot': 'warn',
    'cypress/no-force': 'warn',
    'cypress/no-async-tests': 'error',
    'cypress/no-pause': 'error',
    // 数组解构
    'prefer-destructuring': 'off',
    'no-underscore-dangle': 'off',
    'no-param-reassign': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    'dot-notation': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
  },
  globals: {},
  overrides: [],
};
