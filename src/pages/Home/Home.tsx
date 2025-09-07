import {
  Box,
  Text,
  Image,
  Heading,
  Link as ChakraLink
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Copyright, NavBar, Socials } from '../../components';
import { useColorMode } from '../../utils/chakra-ui/color-mode';

import profilePicture from '../../assets/images/primary-profile-pic.jpg';

export const Home: React.FC = () => {
  const { isLight } = useColorMode();

  return (
    <Box
      display="flex"
      h="100vh"
      flexDir={{ base: 'column', md: 'row' }}
      overflow="hidden"
      position="relative"
    >
      {/* Fixed NavBar */}
      <NavBar />

      {/* Main Content */}
      {/* Left Side: Text */}
      <Box
        display={{ base: 'none', md: 'flex' }}
        flexDirection="column"
        w="50%"
        order={{ base: 2, md: 1 }}
        px={{ base: 4, md: 8, lg: 20 }}
        pt="200px"
        pb={8}
      >
        <Heading
          as="h1"
          textStyle="headline-1"
          textTransform="uppercase"
          textWrap="nowrap"
          mb={14}
          fontSize={{ base: '2xl', sm: '3xl', md: '4xl', lg: '7xl' }}
        >
          SOLOMON
        </Heading>
        <Text lineHeight="24px" fontWeight={300} mb={6}>
          👋 Hi, I am Odinakachukwu Solomon Ezeobika - but you can call me
          Solomon. 😉
        </Text>
        <Text lineHeight="24px" fontWeight={300} mb={6}>
          I am a Full-Stack Software Engineer with 6+ years of experience
          building web applications with Ruby (Ruby on Rails) and JavaScript
          (Node.js, React, and TypeScript).
        </Text>
        <Text lineHeight="24px" fontWeight={300} mb={10}>
          Want to know more about me?{' '}
          <ChakraLink asChild variant="underline">
            <Link to="#">Click here</Link>
          </ChakraLink>
        </Text>
        <Text lineHeight="24px" fontWeight={300} mb={3}>
          Don't be a stranger! 🤝
        </Text>
        <Socials />
        <Copyright />
      </Box>

      {/* Right Side: Image */}
      <Box
        w={{ base: 'full', md: '50%' }}
        h="full"
        display="flex"
        alignItems="center"
        justifyContent="center"
        overflow="hidden"
        position="relative"
        order={{ base: 1, md: 2 }}
      >
        <Image
          src={profilePicture}
          alt="Profile picture"
          objectFit="cover"
          w="100%"
          h="100%"
        />
        <Box
          position="absolute"
          top={0}
          left={0}
          w="100%"
          h="100%"
          bg={{
            base: 'blackAlpha.800',
            md: isLight ? 'blackAlpha.400' : 'blackAlpha.600'
          }}
          zIndex={1}
          pointerEvents="none"
        />
      </Box>
    </Box>
  );
};
