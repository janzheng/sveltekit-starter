
const plugin = require('tailwindcss/plugin'); 


// this lets you set css variable colors
// colors: { primary: withOpacityValue('--color-primary'), }
function withOpacityValue(variable) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`
    }
    return `rgb(var(${variable}) / ${opacityValue})`
  }
}

module.exports = {
  // add this section
  content: [
    './src/**/*.html',
    './src/**/*.svelte'
  ],
  darkMode: 'media', // or true or 'media' or 'class'
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'md-1': '845px',
      'lg': '1024px',
      'lg-1': '1200',
      'xl': '1280px',
      'xl-1': '1440px',
      '2xl': '1536px',
      //   'team-lg': '1200px',
    },
    extend: {
      colors: {
        copy: '#303030',
        _yellow: '#FFD028', // 'hsla(47, 100%, 58%, 1)', // brand yellow (header tab)
        _black: 'hsla(0, 0%, 0%, 1)', // for black bgs
        _link: '#7411D7',
        '_link-hover': '#D71188',
        _footerGray: 'hsla(47, 5%, 22%, 1)',
        _hover: '#403C2E',
        active: 'blue'
      },
      gridTemplateColumns: {
        '3-1': '3fr 1fr',
        '3-2': '3fr 2fr',
        '2-1': '2fr 1fr',
        '1-2': '1fr 2fr',
        '1-3': '1fr 3fr',
        '2-3': '2fr 3fr',
      },
      typography: {
        DEFAULT: {
          css: {
            h1: {
              lineHeight: '1.75rem'
            }
          }
        },
        'lg': {
          css: {
            fontSize: '1.125rem',
            lineHeight: '1.75rem',
            h1: {
              fontSize: '2rem',
            },
          },
        },
      }
    },
    fontFamily: {
      'sans': ['"Inter"', '"Open Sans"', 'system-ui'],
      'serif': ['"Editorial New"', 'Georgia', 'Constantia', 'serif'],
      'mono': ['Consolas', '"Courier New"', 'Courier', 'monospace'],
      'display': ['Editorial New'],
    },
    colors: {
      // primary: withOpacityValue('--color-primary'),
      // primary: 'red'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('tailwindcss/nesting'),
    plugin(function ({ addBase }) {
      addBase({
        '@font-face': {
          // fontFamily: 'Editorial New',
          // fontWeight: '300',
          // src: ['url(/fonts/editorial-new/PPEditorialNew-Regular.eot)',
          //   'url(/fonts/editorial-new/PPEditorialNew-Regular.otf)',
          //   'url(/fonts/editorial-new/PPEditorialNew-Regular.ttf)',
          //   'url(/fonts/editorial-new/PPEditorialNew-Regular.woff)',
          //   'url(/fonts/editorial-new/PPEditorialNew-Regular.woff2)',
          // ]
        }
      })
    }),
  ],
}





