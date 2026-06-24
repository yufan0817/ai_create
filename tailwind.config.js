/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'palace-red': '#8B1E1E',
        'palace-red-light': '#A52A2A',
        'palace-red-dark': '#6B1414',
        'gold': '#D4AF37',
        'gold-light': '#F5D76E',
        'gold-dark': '#B8941F',
        'rice-white': '#FFF8E7',
        'rice-yellow': '#FAF0D7',
        'cyan-jade': '#4EC5C1',
        'paper-bg': '#FAF0D7',
        'paper-dark': '#E8DCC8',
      },
      fontFamily: {
        'song': ['Noto Serif SC', 'Source Han Serif SC', 'STSong', 'SimSun', 'serif'],
        'kai': ['Noto Serif SC', 'Source Han Serif SC', 'STSong', 'SimSun', 'serif'],
        'serif-title': ['Noto Serif SC', 'Source Han Serif SC', 'STSong', 'SimSun', 'serif'],
        'sans': ['Noto Sans SC', 'Source Han Sans SC', 'PingFang SC', 'Microsoft YaHei', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'floatSlow 8s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'scroll-reveal': 'scrollReveal 0.8s ease-out forwards',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'ink-spread': 'inkSpread 8s ease-out infinite',
        'gold-shimmer': 'goldShimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-25px) rotate(2deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(1.05)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        goldShimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        scrollReveal: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(212, 175, 55, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(212, 175, 55, 0.6)' },
        },
        inkSpread: {
          '0%': { transform: 'scale(0.5)', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { transform: 'scale(2)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
