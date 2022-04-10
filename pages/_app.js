import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';

import '../styles/globals.css';
import '../styles/landingpage.css';
import theme from '../themes';
import NavbarProvider from '../contexts/NavbarContext';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <NavbarProvider>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Component {...pageProps} />
      </NavbarProvider>
    </ChakraProvider>
  )
}

export default MyApp
