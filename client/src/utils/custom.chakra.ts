import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      orange: '#FF5733',
      blue: '#0A1D3A',
    },
  },
  components: {
    Badge: {
      baseStyle: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '40px',
        width: '200px',
        borderRadius: '50px',
        cursor: 'pointer',
      },
      sizes: {
        md: {
          h: '50px',
          fontSize: 'md',
          px: '32px',
        },
        sm: {
          h: '40px',
          fontSize: 'sm',
          px: '40px',
        },
      },
    },
    Text: {
      baseStyle: {
        bg: 'brand.blue',
        color: 'brand.orange',
        padding: '20px 40px',
        borderRadius: '50px',
        display: 'flex',
        justifyContent: 'center',
        width: '50%',
        margin: '5px',
        cursor: 'pointer',
      },
    },
  },
});

export { theme };
