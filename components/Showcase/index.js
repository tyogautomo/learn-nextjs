import React from 'react';
import axios from 'axios';
import useSWR from 'swr';
import { Text, Flex, Box, Image, Container } from '@chakra-ui/react';

const Showcase = () => {
  const fetcher = async (path) => {
    try {
      const { data } = await axios.get(`http://localhost:3000/${path}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
  const { data, error } = useSWR('api/showcase', fetcher);

  if (error) return <div>ERROR!!!!</div>;
  if (!data) return <div>Loading....</div>;

  return (
    <Flex direction="column">
      <Text textAlign="center" fontSize="3rem" py="2rem" fontWeight="bold">Show Case</Text>
      <Container>
        <Flex wrap="wrap" justifyContent="center">
          {data.map((user, i) => (
            <Box
              mx="3"
              mb="10"
              key={i}
              width="220px"
              boxShadow="xl"
              cursor="pointer"
              borderRadius="xl"
              overflow="hidden"
              borderColor="black"
              _active={{
                
              }}
            >
              <Image alt="image" src={user.photo} />
              <Box p="2">
                <Text mb="2" fontWeight="bold">{user.title}</Text>
                <Text fontSize="10">{new Date().toString()}</Text>
              </Box>
            </Box>
          ))}
        </Flex>
      </Container >
    </Flex >
  )
}

export default Showcase