/** @type {import("prettier").Config} */
export default {
    plugins: [
        "prettier-plugin-astro",
        "@ianvs/prettier-plugin-sort-imports",
        "prettier-plugin-tailwindcss",
    ],

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
