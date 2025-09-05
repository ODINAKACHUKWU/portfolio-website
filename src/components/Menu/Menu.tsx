import { useState } from 'react';
import {
  Portal,
  IconButton,
  DrawerRoot,
  DrawerTrigger,
  DrawerPositioner,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Drawer,
  DrawerContent,
  Box,
  Text
} from '@chakra-ui/react';
import { LuAlignLeft, LuX } from 'react-icons/lu';
import { useColorMode } from '../../utils/chakra-ui/color-mode';
import { AvatarIllustration } from './components/AvatarIllustration';
import { Socials } from '..';

const Trigger: any = DrawerTrigger;
const Positioner: any = DrawerPositioner;
const Content: any = DrawerContent;

export const Menu: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { isLight } = useColorMode();

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  const handleOpenMenu = () => {
    setIsOpen(true);
  };

  return (
    <DrawerRoot
      open={isOpen}
      size="full"
      aria-label="Navigation Menu"
      initialFocusEl={() => null}
      onEscapeKeyDown={handleCloseMenu}
    >
      <Trigger asChild>
        <IconButton
          aria-label="Menu"
          variant={isLight ? 'solid' : 'ghost'}
          rounded="full"
          onClick={handleOpenMenu}
        >
          <LuAlignLeft />
        </IconButton>
      </Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Positioner>
          <Content>
            <Box pos="absolute" bottom={0} right={0}>
              <Text
                fontSize={{ base: '6rem', md: '12.5rem' }}
                fontFamily="'Gravitas One', 'Inter', 'Helvetica Neue', 'Helvetica', 'Arial', 'monospace', 'sans-serif'"
                opacity={0.03}
                lineHeight={0.8}
              >
                Solomon
              </Text>
            </Box>
            <DrawerHeader
              p={{ base: 5, md: 12 }}
              justifyContent="space-between"
            >
              <AvatarIllustration onImageClick={handleCloseMenu} />
              <IconButton
                aria-label="Close menu"
                variant="ghost"
                rounded="full"
                onClick={handleCloseMenu}
              >
                <LuX />
              </IconButton>
            </DrawerHeader>
            <DrawerBody p={{ base: 5, md: 12 }}>
              {/* Menu items go here */}
            </DrawerBody>
            <DrawerFooter justifyContent="flex-start" p={{ base: 5, md: 12 }}>
              <Socials />
            </DrawerFooter>
          </Content>
        </Positioner>
      </Portal>
    </DrawerRoot>
  );
};
