import React, { createContext } from 'react';
import { Flex, Box, Text, Button } from '@chakra-ui/react';
import Link from 'next/link';

const NavbarContext = createContext({});

const NavbarProvider = ({ children }) => {
  const renderHeader = () => (
    <>
      <Box height="16" width="full" border="1px" />
      <Flex
        width="full"
        height="16"
        backgroundColor="white"
        boxShadow="md"
        position="fixed"
        top="0"
        justifyContent="end"
        alignItems="center"
        px="3"
      >
        <Link href="/showcase" passHref>
          <Button backgroundColor="tomato" color="white">My Showcase</Button>
        </Link>
      </Flex>
    </>
  );

  return (
    <NavbarContext.Provider value={{ message: 'test' }}>
      {renderHeader()}
      {children}
    </NavbarContext.Provider>
  )
}

export default NavbarProvider;
