import pluginVue from 'eslint-plugin-vue';
import vueToEslintConfig from '@vue/eslint-config-typescript';
import js from '@eslint/js';

import prettier from 'eslint-config-prettier';
import pluginPrettier from 'eslint-plugin-prettier/recommended';

export default [
  ...pluginVue.configs['flat/recommended'],
  ...vueToEslintConfig(),
  js.configs.recommended,
  pluginPrettier,
  prettier,
  {
    rules: {
      'prettier/prettier': [
        'error',
        {
          singleAttributePerLine: true,
        },
      ],
    },
  },
  { ignores: ['**/dist', 'src/services/fetch.ts'] },
  {
    languageOptions: {
      globals: {
        window: true,
        document: true,
        navigator: true,
        console: true,
        Element: true,
        HTMLElement: true,
        IntersectionObserver: true,
        Request: true,
        Response: true,
      },
    },
  },
  {
    rules: {
      'func-style': ['error', 'declaration'],
      'no-console': 'warn',
      '@typescript-eslint/no-unused-expressions': [
        'error',
        { allowShortCircuit: true, allowTernary: true },
      ],
      'vue/require-toggle-inside-transition': 'off',
      'vue/multi-word-component-names': 'off',
      'vue/block-order': ['warn', { order: ['script', 'template', 'style'] }],
      'vue/component-api-style': ['error', ['script-setup', 'composition']],
      'vue/component-name-in-template-casing': [
        'warn',
        'kebab-case',
        { registeredComponentsOnly: false },
      ],
      'vue/component-options-name-casing': 'warn',
      'vue/custom-event-name-casing': 'warn',
      'vue/define-macros-order': [
        'warn',
        {
          order: [
            'defineModel',
            'defineProps',
            'defineEmits',
            'defineSlots',
            'defineOptions',
          ],
        },
      ],
      'vue/define-props-declaration': 'error',
      'vue/enforce-style-attribute': 'off',
      'vue/match-component-file-name': ['warn', { extensions: ['vue'] }],
      'vue/next-tick-style': 'error',
      'vue/no-duplicate-attr-inheritance': 'error',
      'vue/no-deprecated-model-definition': 'error',
      'vue/no-empty-component-block': 'warn',
      'vue/no-ref-object-reactivity-loss': 'error',
      'vue/no-required-prop-with-default': 'error',
      'vue/no-setup-props-reactivity-loss': 'error',
      'vue/no-undef-properties': 'error',
      'vue/no-unsupported-features': ['error', { version: '^3.5.13' }],
      'vue/no-unused-emit-declarations': 'warn',
      'vue/no-unused-properties': [
        'warn',
        {
          groups: ['props', 'data', 'computed', 'methods'],
          deepData: true,
          unreferencedOptions: [
            'unknownMemberAsUnreferenced',
            'returnAsUnreferenced',
          ],
        },
      ],
      'vue/no-useless-mustaches': 'warn',
      'vue/no-useless-v-bind': 'warn',
      'vue/no-v-text': 'error',
      'vue/padding-line-between-blocks': 'warn',
      'vue/prefer-define-options': 'error',
      'vue/require-default-export': 'error',
      'vue/require-default-prop': 'off',
      'vue/require-emit-validator': 'error',
      'vue/require-explicit-slots': 'error',
      'vue/require-macro-variable-name': 'error',
      'vue/require-typed-object-prop': 'error',
      'vue/require-typed-ref': 'error',
      'vue/v-for-delimiter-style': 'error',
      'vue/valid-define-options': 'error',
      'vue/valid-v-slot': ['error', { allowModifiers: true }],
    },
  },
];
