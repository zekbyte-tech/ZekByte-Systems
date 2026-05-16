/** @type {import("prettier").Config} */
export default {
    plugins: [
        "prettier-plugin-astro",
        "@ianvs/prettier-plugin-sort-imports",
        "prettier-plugin-tailwindcss",
    ],

    semi: true,
    singleQuote: false,
    tabWidth: 4,

    overrides: [
        {
            files: "*.astro",
            options: {
                parser: "astro",
            },
        },
    ],

    importOrder: ["^astro:(.*)$", "^@/(.*)$", "^[./]"],

    importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
};
