import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Image,
  Text,
} from '@chakra-ui/react';
import { SidebarContent, SidebarItem } from '@components/elements';

interface SidebarProps {
  onClose: () => void;
  isOpen: boolean;
  variant: 'drawer' | 'sidebar' | string;
}

const Sidebar = ({ isOpen, variant, onClose }: SidebarProps) => {
  return variant === 'sidebar' ? (
    <Box
      position="fixed"
      left={0}
      p={4}
      w={300}
      top={0}
      h="100%"
      bg="#fff"
      boxShadow="0px 4px 16px rgba(0, 0, 0, 0.08)"
    >
      <SidebarContent>
        <Flex h="60px" w="100%" align="center" justify="center">
          <Image src="/assets/logo.svg" />
          <Text ml={4} fontWeight={700}>
            asep.
          </Text>
        </Flex>

        <SidebarItem title="Dashboard" icon="/assets/dashboard.svg" />
        <SidebarItem title="Siswa" icon="/assets/people.svg" />
        <SidebarItem title="Pegawai" icon="/assets/people.svg" />
        <SidebarItem title="Jurusan" icon="/assets/loop.svg" />
        <SidebarItem title="Normatif" icon="/assets/loop.svg" />
        <SidebarItem title="Pengaturan" icon="/assets/settings.svg" />
      </SidebarContent>
    </Box>
  ) : (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <SidebarContent onClick={onClose}>
              <Flex h="60px" w="100%" align="center" justify="center">
                <Image src="/assets/logo.svg" />
                <Text ml={4} fontWeight={700}>
                  asep.
                </Text>
              </Flex>

              <SidebarItem title="Dashboard" icon="/assets/dashboard.svg" />
              <SidebarItem title="Siswa" icon="/assets/people.svg" />
              <SidebarItem title="Pegawai" icon="/assets/people.svg" />
              <SidebarItem title="Jurusan" icon="/assets/loop.svg" />
              <SidebarItem title="Normatif" icon="/assets/loop.svg" />
              <Flex w="100%" flexGrow={1} align="flex-end" py={4} m={0}>
                <SidebarItem title="Pengaturan" icon="/assets/settings.svg" />
              </Flex>
            </SidebarContent>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

export default Sidebar;
