module.exports = {
    theme: {
        extend: {
            keyframes: {
                shine: {
                    '0%, 100%': { backgroundColor: '#3b82f6' }, // blue-500
                    '50%': { backgroundColor: '#60a5fa' }, // blue-400
                },
            },
            animation: {
                shine: 'shine 1s infinite',
            },
        },
    },
};
