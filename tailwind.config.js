const isProduction = !process.env.ROLLUP_WATCH;
const colors = require("tailwindcss/colors")

module.exports = {
    purge: {
        enabled: isProduction,
        mode: 'all',
        content: [
            './**/**/*.html',
            './**/**/*.svelte',
        ],
        options: {
            whitelistPatterns: [/svelte-/],
            defaultExtractor: (content) =>
                [...content.matchAll(/(?:class:)*([\w\d-/:%.]+)/gm)].map(([_match, group, ..._rest]) => group),
        },
    },
    darkMode: "media", // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                gray: colors.blueGray
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
