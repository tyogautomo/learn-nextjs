import React, { createContext } from 'react';
import { Flex, Box, Button, useColorMode, Switch, color } from '@chakra-ui/react';
import { MoonIcon } from '@chakra-ui/icons';
import { useRouter } from 'next/router';
import Link from 'next/link';

const NavbarContext = createContext({});

const NavbarProvider = ({ children }) => {
  const router = useRouter();
  const { colorMode, toggleColorMode } = useColorMode();
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

  const handleToggle = (e) => {
    toggleColorMode();
  };

  const renderHeader = () => (
    <>
      <Box height="16" width="full" />
      <Flex
        width="full"
        height="16"
        bgColor={colorMode === 'light' ? 'white' : '#232f3b' }
        boxShadow="md"
        position="fixed"
        top="0"
        justifyContent="space-between"
        alignItems="center"
        px="3"
      >
        <Flex alignItems="center">
          <MoonIcon width={7} height={7} mr="2" color={colorMode === 'light' ? 'silver' : 'yellow'} />
          <Switch size="lg" onChange={handleToggle} />
        </Flex>
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
