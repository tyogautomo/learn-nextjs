import { ChakraProvider } from '@chakra-ui/react';

import '../styles/globals.css';
import NavbarProvider from '../contexts/NavbarContext';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <NavbarProvider>
        <Component {...pageProps} />
      </NavbarProvider>
    </ChakraProvider>
  )
}

export default MyApp
