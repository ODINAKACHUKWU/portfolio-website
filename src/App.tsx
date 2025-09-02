import React from 'react';
import { Flex, VStack, Heading, IconButton, HStack } from '@chakra-ui/react';
import { Sun, Moon, Instagram, Github, Linkedin } from 'lucide-react';
import { useColorMode } from './utils/chakra-ui/color-mode';
import { Header } from './components/Header';
import { Social } from './components/Social';
import { Profile } from './components/Profile';

export const App: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  console.log(colorMode);
  const isDark: boolean = colorMode === 'dark';

  return (
    <VStack p={5}>
      <Flex w="100%">
        <Heading ml="8" size="md" fontWeight="semibold" color="cyan.400">
          Heading
        </Heading>

        <HStack>
          <IconButton aria-label="Linkedin">
            <Linkedin />
          </IconButton>
          <IconButton aria-label="Instagram">
            <Instagram />
          </IconButton>
          <IconButton aria-label="Github">
            <Github />
          </IconButton>
          <IconButton aria-label="Color mode" onClick={toggleColorMode}>
            {isDark ? <Sun /> : <Moon />}
          </IconButton>
        </HStack>
      </Flex>
      <Header></Header>
      <Social></Social>
      <Profile></Profile>
    </VStack>
  );
};
