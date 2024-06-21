/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        green: {
          50: '#30AF5B',
          90: '#292C27',
          green1: '#007F73',
          green2: '#4CCD99',
          green3: '#'
        },
        gray: {
          10: '#EEEEEE',
          20: '#A2A2A2',
          30: '#7B7B7B',
          50: '#585858',
          90: '#141414',
        },
        orange: {
          50: '#FF814C',
          o1 :'#FF7F3E',
          mainorange: '#DC5F00',
          light:'#FD9B63',
        },
        blue: {
          70: '#021639',
          b1: '#0F1035',
          b2: '#365486',
          b3: '#7FC7D9',
          o2 : '#80C4E9',
          o3 : '#80C4E9',
          dark: '#002379',
          mainblue: '#CAF4FF',
        },
        yellow: {
          50: '#FEC601',
          yellow1: '#4CCD99',
          yellow2: '#FFF455'
        },
      },
      backgroundImage: {
        'bg-img-1': "url('/img-1.png')",
        'bg-img-2': "url('/img-2.png')",
        'feature-bg': "url('/feature-bg.png')",
        pattern: "url('/pattern.png')",
        'pattern-2': "url('/pattern-bg.png')",
      },
      screens: {
        xs: '400px',
        '3xl': '1680px',
        '4xl': '2200px',
      },
      maxWidth: {
        '10xl': '1512px',
      },
      borderRadius: {
        '5xl': '40px',
      },
    },
  },
  plugins: [],
};
