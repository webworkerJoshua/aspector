const isProduction = !process.env.ROLLUP_WATCH;


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
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
