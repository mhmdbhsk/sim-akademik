import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const config: Partial<ThemeConfig> = {
  useSystemColorMode: false,
  initialColorMode: 'light',
};

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
  config,
});

export default theme;
