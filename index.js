const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ variants, addUtilities }) {
    addUtilities(
        {
            '.make-fullwidth': { margin: '0 calc(50% - 50vw)' }
        },
        variants('makeFullwidth')
    )
});