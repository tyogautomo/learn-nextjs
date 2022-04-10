import React from 'react';
import { Flex, Text, Box, Image, useColorMode } from '@chakra-ui/react';

const LandingPage = ({ profile }) => {
  const { colorMode } = useColorMode();
  return (
    <>
      <Text fontSize="5xl" margin="2rem 0" textAlign="center" fontWeight="bold">
        Landing Page
      </Text>
      <Flex direction={'column'} alignItems="center">
        {profile.map((prof, i) => (
          <Box
            key={i}
            borderRadius="xl"
            padding="5"
            marginBottom="3"
            display="flex"
            alignItems="center"
            bgColor={colorMode === 'light' ? 'white' : '#232f3b' }
            boxShadow="md"
            cursor="pointer"
            width={'xl'}
            _hover={{
              transform: { scaleX: 2 }
            }}
          >
            <Image alt="test" src={prof.photo} width="32" height="32" borderRadius="full" marginRight="10" />
            <div>
              <Text fontSize={'2xl'} fontWeight="bold" borderBottomWidth="1px">{prof.name}</Text>
              <Text fontSize={'xl'} color="gray">{prof.job}</Text>
              <Text fontSize={'lg'}><span className="span">message:</span>  &quot;{prof.greeting}&quot;</Text>
            </div>
          </Box>
        ))}
      </Flex>
    </>
  )
};

export default LandingPage;
