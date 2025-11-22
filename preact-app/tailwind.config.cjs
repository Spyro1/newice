module.exports = {
    content: [
        './index.html',
        './src/**/*.{js,jsx,ts,tsx}'
    ],
    theme: {
        extend: {
            colors: {
                accent: '#24CBD3',
                'accent-dark': '#037f89',
                background: '#ffffff',
                surface: '#ffffff',
                heading: '#191919',
                text: '#444444'
            },
            fontFamily: {
                sans: ['"Open Sans"', 'system-ui', 'sans-serif'],
                heading: ['Raleway', 'sans-serif']
            }
        }
    },
    plugins: []
}
