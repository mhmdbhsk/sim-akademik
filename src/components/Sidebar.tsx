import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Image,
  position,
  Text,
  VStack,
} from '@chakra-ui/react';

interface SidebarProps {
  onClose: Function;
  isOpen: boolean;
  variant: 'drawer' | 'sidebar' | string;
}

interface SidebarContentProps {
  onClick?: Function;
}

const SidebarMenuItem = ({ title, icon }) => {
  return (
    <Button width="100%" h={16} justifyContent="flex-start">
      <Image src={icon} mr={2.5} />
      <Text>{title}</Text>
    </Button>
  );
};

const SidebarContent = ({ onClick }: SidebarContentProps) => {
  return (
    <VStack>
      <Flex h="60px" w="100%" align="center" justify="center">
        <Image src="/assets/logo.svg" />
        <Text ml={4} fontWeight={700}>
          asep.
        </Text>
      </Flex>

      <SidebarMenuItem title="Dashboard" icon="/assets/dashboard.svg" />
      <SidebarMenuItem title="Siswa" icon="/assets/people.svg" />
      <SidebarMenuItem title="Pegawai" icon="/assets/people.svg" />
      <SidebarMenuItem title="Jurusan" icon="/assets/loop.svg" />
      <SidebarMenuItem title="Normatif" icon="/assets/loop.svg" />
      <SidebarMenuItem title="Pengaturan" icon="/assets/settings.svg" />
    </VStack>
  );
};

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
      <SidebarContent />
    </Box>
  ) : (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>asep.</DrawerHeader>
          <DrawerBody>
            <SidebarContent onClick={onClose} />
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

export default Sidebar;
