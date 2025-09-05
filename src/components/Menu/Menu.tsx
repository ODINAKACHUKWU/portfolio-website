import {
  CloseButton,
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
  DrawerCloseTrigger
} from '@chakra-ui/react';
import { LuAlignLeft } from 'react-icons/lu';
import { useColorMode } from '../../utils/chakra-ui/color-mode';
import { AvatarIllustration } from './components/AvatarIllustration';
import { Socials } from '..';

const Trigger: any = DrawerTrigger;
const Positioner: any = DrawerPositioner;
const CloseTrigger: any = DrawerCloseTrigger;
const Content: any = DrawerContent;

export const Menu: React.FC = () => {
  const { isLight } = useColorMode();

  return (
    <DrawerRoot size="full">
      <Trigger asChild>
        <IconButton
          aria-label="Menu"
          variant={isLight ? 'solid' : 'ghost'}
          rounded="full"
        >
          <LuAlignLeft />
        </IconButton>
      </Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Positioner>
          <Content>
            <DrawerHeader p={{ base: 5, md: 12 }}>
              <AvatarIllustration />
            </DrawerHeader>
            <DrawerBody p={{ base: 5, md: 12 }}>
              {/* Menu items go here */}
            </DrawerBody>
            <DrawerFooter justifyContent="flex-start" p={{ base: 5, md: 12 }}>
              <Socials />
            </DrawerFooter>
            <CloseTrigger asChild>
              <CloseButton rounded="full" />
            </CloseTrigger>
          </Content>
        </Positioner>
      </Portal>
    </DrawerRoot>
  );
};
