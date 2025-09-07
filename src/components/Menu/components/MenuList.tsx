import { ListRoot, ListItem, Link as ChakraLink } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export const MenuList: React.FC = () => {
  return (
    <ListRoot
      variant="plain"
      align="start"
      gapY={{ base: 5, md: 8 }}
      fontSize="md"
      fontWeight="medium"
    >
      <ListItem>
        <ChakraLink asChild _hover={{ color: 'orange.600' }}>
          <Link to="#">About</Link>
        </ChakraLink>
      </ListItem>
      <ListItem>
        <ChakraLink asChild _hover={{ color: 'orange.600' }}>
          <Link to="#">Projects</Link>
        </ChakraLink>
      </ListItem>
      <ListItem>
        <ChakraLink asChild _hover={{ color: 'orange.600' }}>
          <Link to="#">Talks</Link>
        </ChakraLink>
      </ListItem>
      <ListItem>
        <ChakraLink asChild _hover={{ color: 'orange.600' }}>
          <Link to="#">Recommendations</Link>
        </ChakraLink>
      </ListItem>
      <ListItem>
        <ChakraLink asChild _hover={{ color: 'orange.600' }}>
          <Link to="#">Gallery</Link>
        </ChakraLink>
      </ListItem>
      <ListItem>
        <ChakraLink asChild _hover={{ color: 'orange.600' }}>
          <Link to="#">Resume</Link>
        </ChakraLink>
      </ListItem>
    </ListRoot>
  );
};
