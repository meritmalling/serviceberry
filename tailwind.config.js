export default {
  content: [
    "./src/index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
      keyframes: {
        'fade-in-up': {
          '0%': {
            opacity: 0,
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },
        'fade-in-down': {
          '0%': {
            opacity: 0,
            transform: 'translateY(-20px)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)',
            color: 'theme(colors.dark-green)',
          },
        },
        'fade-in': {
          '0%': {
            opacity: 0,
          },
          '100%': {
            opacity: 1,
          },
        },
        stamp: {
          '0%': {
            opacity: 0,
            transform: 'scale(0.9) translateY(-6px)',
          },
          '50%': {
            opacity: 1,
            transform: 'scale(1.12) translateY(0)',
            color: 'theme(colors.dark-green)',
          },
          '75%': {
            transform: 'scale(0.97)',
          },
          '100%': {
            transform: 'scale(1)',
            color: 'theme(colors.dark-green)',
          },
        },
        scroll: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'stamp-1': 'stamp 0.3s ease-out forwards',
        'stamp-2': 'stamp 0.3s ease-out 0.25s forwards',
        'stamp-3': 'stamp 0.3s ease-out 0.5s forwards',
        'stamp-4': 'stamp 0.3s ease-out 0.75s forwards',
        'fade-in-up': 'fade-in-up 0.6s ease-out both',
        'fade-in-down': 'fade-in-down 0.6s ease-out both',
        'fade-in-down-1': 'fade-in-down 0.6s ease-out both 0.25s',
        'fade-in-down-2': 'fade-in-down 0.6s ease-out both 0.5s',
        'fade-in-down-3': 'fade-in-down 0.6s ease-out both 0.75s',
        'fade-in-down-4': 'fade-in-down 0.6s ease-out both 1.05s',
        'fade-in-1': 'fade-in 0.7s ease-out both 0.5s',
        'fade-in-2': 'fade-in 0.7s ease-out both 0.75s',
        'fade-in-3': 'fade-in 0.6s ease-out both 1s',
        'fade-in-4': 'fade-in 0.6s ease-out both 1.25s',
        scroll: 'scroll 60s linear infinite',
      },
      fontFamily: {
        serif: ['Lora', 'serif'],
        lora: ['Lora', 'serif'],
      },
      colors: {
        'light-green': '#83c5be',
        'dark-green': '#0a9396',
        'light-pink': '#FBE6E1',
        'dark-pink': '#a4133c',
        'dark-teal': '#2F4B61',
      },
    },
  },
  plugins: [],
}