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
        bg: 'gray.100',
        color: 'brand.blue',
        padding: '20px 30px',
        borderRadius: '50px',
        display: 'flex',
        justifyContent: 'center',
        width: '50%',
      },
    },
  },
});

export { theme };
