const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ variants, addUtilities }) {
    addUtilities(
        {
            '.make-fullwidth': {
                'margin-left': 'calc(50% - 50vw)',
                'margin-right': 'calc(50% - 50vw)',
              }
        },
        variants('makeFullwidth')
    )
});
