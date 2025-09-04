import {
  Box,
  Text,
  Image,
  Heading,
  Link as ChakraLink,
  HStack
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { NavBar } from '../../components';
import { useColorMode } from '../../utils/chakra-ui/color-mode';

import profilePicture from '../../assets/images/primary-profile-pic.jpg';
import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

export const Home: React.FC = () => {
  //   const { ColorMode } = useColorMode();

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
        display={{ base: 'none', md: 'block' }}
        w="50%"
        order={{ base: 2, md: 1 }}
        px={20}
        pt="180px"
        pb={8}
      >
        <Heading
          as="h1"
          textStyle="headline-1"
          textTransform="uppercase"
          mb={14}
        >
          SOLOMON
        </Heading>
        <Text lineHeight="24px" fontWeight={300} mb={6}>
          👋 Hi, I am Odinakachukwu Solomon Ezeobika - but you can call me
          Solomon. 😜
        </Text>
        <Text lineHeight="24px" fontWeight={300} mb={6}>
          I am a Full-Stack Software Engineer with 6+ years of experience
          building web applications with Ruby (Ruby on Rails) and JavaScript
          (Node.js, React, and TypeScript).
        </Text>
        <Text lineHeight="24px" fontWeight={300} mb={6}>
          I'm happy to share more about my work and experiences.{' '}
          <ChakraLink asChild>
            <Link to="#">Click here</Link>
          </ChakraLink>{' '}
          to know more about me.
        </Text>
        <HStack>
          Let’s connect! 🤝
          <ChakraLink asChild>
            <Link to="#">
              <Twitter />
            </Link>
          </ChakraLink>
          <ChakraLink asChild>
            <Link to="#">
              <Facebook />
            </Link>
          </ChakraLink>
          <ChakraLink asChild>
            <Link to="#">
              <Instagram />
            </Link>
          </ChakraLink>
          <ChakraLink asChild>
            <Link to="#">
              <Linkedin />
            </Link>
          </ChakraLink>
          <ChakraLink asChild>
            <Link to="#">
              <Github />
            </Link>
          </ChakraLink>
        </HStack>
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
          bg={{ base: 'blackAlpha.800', md: 'blackAlpha.700' }}
          zIndex={1}
          pointerEvents="none"
        />
      </Box>
    </Box>
  );
};
