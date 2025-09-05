import { Box, HStack, IconButton } from '@chakra-ui/react';
import { Logo, Menu } from '..';
import { useColorMode } from '../../utils/chakra-ui/color-mode';
import { LuMoon, LuSun } from 'react-icons/lu';

export const NavBar: React.FC = () => {
  const { toggleColorMode, isLight } = useColorMode();

  return (
    <Box
      as="header"
      display="flex"
      w="full"
      bgColor="transparent"
      _hover={{ bg: isLight ? 'none' : 'blackAlpha.500' }}
      transition="background 0.5s ease"
      position="fixed"
      top={0}
      left={0}
      zIndex={10}
    >
      <Box
        as="nav"
        w="full"
        mx="auto"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        py={5}
        px={{ base: 4, md: 8 }}
      >
        <Box>
          <Logo
            color={{
              base: 'teal.200',
              md: isLight ? 'teal.600' : 'teal.200'
            }}
          />
        </Box>
        <HStack>
          <IconButton
            aria-label="Color mode toggle"
            onClick={toggleColorMode}
            variant={isLight ? 'solid' : 'ghost'}
            rounded="full"
          >
            {isLight ? <LuMoon /> : <LuSun />}
          </IconButton>
          <Menu />
        </HStack>
      </Box>
    </Box>
  );
};
