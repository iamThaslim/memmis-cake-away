import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

// Additional plugins (Flat config uses ESM import side-effects pattern)
import jsxA11y from 'eslint-plugin-jsx-a11y';
import importPlugin from 'eslint-plugin-import';
import unusedImports from 'eslint-plugin-unused-imports';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Base Next.js + TS recommended sets
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  // Global ignores
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
  // App / src code rules
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: {
      'jsx-a11y': jsxA11y,
      import: importPlugin,
      'unused-imports': unusedImports,
    },
    settings: {
      react: { version: "detect" },
      // Helps import plugin resolve TS paths
      'import/resolver': {
        node: { extensions: [".js", ".jsx", ".ts", ".tsx"] },
        typescript: {},
      },
    },
    rules: {
      // General best practices
      'no-debugger': 'error',
      'no-alert': 'warn',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'eqeqeq': ['error', 'smart'],
      'curly': ['error', 'all'],
      'no-unused-vars': 'off', // handled by unused-imports & TS
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' }
      ],
      'no-restricted-imports': [
        'warn',
        {
          paths: [
            { name: 'next/document', message: 'Not needed in App Router unless customizing <html> outside layout.' },
          ],
        },
      ],

      // Import hygiene
      'import/order': ['warn', {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true },
        pathGroups: [
          { pattern: 'react', group: 'external', position: 'before' },
          { pattern: 'next/**', group: 'external', position: 'before' },
          { pattern: '@/**', group: 'internal' },
        ],
        pathGroupsExcludedImportTypes: ['react'],
      }],
      'import/no-unresolved': 'error',
      'import/no-duplicates': 'warn',
      'import/newline-after-import': ['warn', { count: 1 }],

      // Accessibility (key subset)
      'jsx-a11y/alt-text': 'warn',
      'jsx-a11y/anchor-is-valid': 'warn',
      'jsx-a11y/no-autofocus': 'warn',
      'jsx-a11y/aria-role': 'warn',
      'jsx-a11y/label-has-for': 'off', // noisy with custom components

      // React / Next specifics (some already covered by core-web-vitals)
      'react/jsx-no-target-blank': 'warn',

      // TypeScript specific overrides (TS compiler catches many already)
      '@typescript-eslint/consistent-type-imports': ['warn', { prefer: 'type-imports', disallowTypeAnnotations: false }],

      // Stylistic / consistency
      'no-trailing-spaces': 'warn',
      'eol-last': ['warn', 'always'],
      'object-shorthand': ['warn', 'always'],
      'arrow-body-style': ['warn', 'as-needed'],
      'prefer-const': ['warn', { destructuring: 'all' }],
      'prefer-template': 'warn',
    },
  },
];

export default eslintConfig;
