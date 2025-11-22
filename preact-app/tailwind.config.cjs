module.exports = {
    content: [
        './index.html',
        './src/**/*.{js,jsx,ts,tsx}'
    ],
    theme: {
        extend: {
            colors: {
                accent: '#39d5ff',
                'accent-dark': '#1ea2d6',
                midnight: '#061727',
                background: '#f3fbff',
                surface: '#ffffff',
                heading: '#0d1f2d',
                text: '#1f394a',
                'text-muted': '#5b7a8f'
            },
            fontFamily: {
                sans: ['"Inter"', 'system-ui', 'sans-serif'],
                heading: ['"Space Grotesk"', 'Raleway', 'sans-serif']
            }
        }
    },
    plugins: []
}
