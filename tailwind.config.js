/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'system-ui', 'sans-serif'],
        'heading': ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'system-ui', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#525252',
            lineHeight: '1.75',
            h1: {
              fontWeight: '500',
              fontSize: '2.25rem',
              marginTop: '0',
              marginBottom: '1rem',
            },
            h2: {
              fontWeight: '500',
              fontSize: '1.875rem',
              marginTop: '2rem',
              marginBottom: '1rem',
            },
            h3: {
              fontWeight: '500',
              fontSize: '1.5rem',
              marginTop: '1.5rem',
              marginBottom: '0.5rem',
            },
            p: {
              marginTop: '1rem',
              marginBottom: '1rem',
            },
            strong: {
              fontWeight: '500',
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
