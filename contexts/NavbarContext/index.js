import React, { createContext } from 'react';
import { Flex, Box, Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const NavbarContext = createContext({});

const NavbarProvider = ({ children }) => {
  const router = useRouter();
  console.log(router);

  const handleLink = () => {
    let content = { url: '', title: '' };
    const pathName = router.pathname;
    switch (pathName) {
      case '/':
        content = { url: '/showcase', title: 'My Showcase' };
        break;
      case '/showcase':
        content = { url: '/', title: 'Home' };
        break;
      default:
        break;
    }
    return content;
  };

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
        <Link href={handleLink().url} passHref>
          <Button backgroundColor="tomato" color="white">{handleLink().title}</Button>
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
