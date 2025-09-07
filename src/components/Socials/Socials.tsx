import { HStack, Link as ChakraLink, Icon } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { RiTwitterXLine } from 'react-icons/ri';
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaMediumM,
  FaTiktok
} from 'react-icons/fa';
import { SiSessionize } from 'react-icons/si';

export const Socials: React.FC = () => (
  <HStack gap={3}>
    <ChakraLink asChild>
      <Link to="https://x.com/busy_dev" target="_blank">
        <Icon size="md">
          <RiTwitterXLine />
        </Icon>
      </Link>
    </ChakraLink>
    <ChakraLink asChild>
      <Link to="https://www.facebook.com/ezeobika.o.solomon/" target="_blank">
        <Icon size="sm">
          <FaFacebookF />
        </Icon>
      </Link>
    </ChakraLink>
    <ChakraLink asChild>
      <Link to="https://www.instagram.com/debig_solo/" target="_blank">
        <Icon size="md">
          <FaInstagram />
        </Icon>
      </Link>
    </ChakraLink>
    <ChakraLink asChild>
      <Link
        to="https://www.linkedin.com/in/odinakachukwu-ezeobika-5892778a/"
        target="_blank"
      >
        <Icon size="md">
          <FaLinkedinIn />
        </Icon>
      </Link>
    </ChakraLink>
    <ChakraLink asChild>
      <Link to="https://github.com/ODINAKACHUKWU" target="_blank">
        <Icon size="md">
          <FaGithub />
        </Icon>
      </Link>
    </ChakraLink>
    <ChakraLink asChild>
      <Link to="https://medium.com/@solomonzbk" target="_blank">
        <Icon size="md">
          <FaMediumM />
        </Icon>
      </Link>
    </ChakraLink>
    <ChakraLink asChild>
      <Link to="https://sessionize.com/odinakachukwu-ezeobika" target="_blank">
        <Icon size="sm">
          <SiSessionize />
        </Icon>
      </Link>
    </ChakraLink>
    <ChakraLink asChild>
      <Link to="https://tiktok.com/@debig_solo" target="_blank">
        <Icon size="sm">
          <FaTiktok />
        </Icon>
      </Link>
    </ChakraLink>
  </HStack>
);
