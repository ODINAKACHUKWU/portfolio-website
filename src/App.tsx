import React from 'react';
import { Flex, VStack, Heading, Spacer, IconButton } from '@chakra-ui/react';
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
        <Spacer></Spacer>
        <IconButton
          aria-label="Linkedin"
          icon={<Linkedin />}
          isRound={true}
        ></IconButton>
        <IconButton
          aria-label="Instagram"
          ml={2}
          icon={<Instagram />}
          isRound={true}
        ></IconButton>
        <IconButton
          aria-label="Github"
          ml={2}
          icon={<Github />}
          isRound={true}
        ></IconButton>
        <IconButton
          aria-label="Color mode"
          ml={8}
          icon={isDark ? <Sun /> : <Moon />}
          isRound={true}
          onClick={toggleColorMode}
        ></IconButton>
      </Flex>
      <Header></Header>
      <Social></Social>
      <Profile></Profile>
    </VStack>
  );
};
