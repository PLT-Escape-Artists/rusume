import { type Config } from 'prettier';

const config: Config = {
    plugins: ['prettier-plugin-astro'],
    overrides: [{ files: '*.astro', options: { parser: 'astro' } }],

    printWidth: 120,
    useTabs: false,
    tabWidth: 4,

    singleQuote: true,
    jsxSingleQuote: true,
    semi: true,
    trailingComma: 'es5',
    bracketSameLine: true,
    endOfLine: 'lf',
};

export default config;
