/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
  tailwindConfig: 'tailwind.config.ts',
  singleQuote: true,
  printWidth: 90,
  plugins: ['@ianvs/prettier-plugin-sort-imports', 'prettier-plugin-tailwindcss'],
  importOrder: [
    '^react$',
    '<THIRD_PARTY_MODULES>',
    '',
    '^@/components/(.*)$',
    '^@/pages/(.*)$',
    '',
    '^@/lib/(.*)$',
    '^@/utils/(.*)$',
    '',
    '^[./]',
  ],
};

module.exports = config;
