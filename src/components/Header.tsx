import React from 'react';
import { useColorMode } from '../utils/chakra-ui/color-mode';
import {
  Circle,
  Stack,
  Flex,
  Box,
  Text,
  Button,
  Image
} from '@chakra-ui/react';

interface Props {}

export const Header: React.FC<Props> = () => {
  const { colorMode } = useColorMode();

  const isDark: boolean = colorMode === 'dark';

  return (
    <Stack>
      <Circle
        position="absolute"
        bg="blue.100"
        opacity="0.1"
        w="300px"
        h="300px"
        alignSelf="flex-end"
      />
      <Flex direction="column" spacing="200px" p="32" alignSelf="flex-start">
        <Box mt={16} align="flex-start">
          <Text fontSize="5xl" fontWeight="semibold">
            Hi! I am
          </Text>
          <Text
            fontSize="7xl"
            fontWeight="bold"
            bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
            bgClip="text"
          >
            Odinakachukwu Ezeobika
          </Text>
          <Text color={isDark ? 'gray.200' : 'gray.500'}>
            Software Engineer - Javascript (NodeJS, AdonisJS, ReactJs), Rails
            (Ruby on Rails)
          </Text>
          <Button
            mt={8}
            colorScheme="blue"
            onClick={() => window.open('https://pawan.live')}
          >
            Hire Me
          </Button>
        </Box>
        <Image
          alignSelf="center"
          mt={12}
          mb={12}
          borderRadius="full"
          bgColor="transparent"
          boxShadow="lg"
          boxSize="300px"
          src="https://avatars.githubusercontent.com/u/41029613?v=4"
          alt="Profile picture"
        />
      </Flex>
    </Stack>
  );
};
