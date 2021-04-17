import { extendTheme, Text } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    body: 'DM Sans',
    heading: 'DM Sans',
  },
  components: {
    Button: {
      baseStyle: {
        _focus: {
          boxShadow: 'none',
        },
      },
    },
  },
});

export default theme;
