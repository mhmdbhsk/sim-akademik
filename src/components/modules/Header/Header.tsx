import { Box, IconButton, Text, Flex } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { ProfileDropdown } from '@components/modules';

interface SidebarProps {
  onShowSidebar: () => void;
  showSidebarButton?: boolean;
}

const Header = ({ showSidebarButton = true, onShowSidebar }: SidebarProps) => {
  return (
    <Flex
      h={!showSidebarButton ? 100 : 'unset'}
      p={4}
      justifyContent="space-between"
      align="center"
    >
      <Box mr={4}>
        {showSidebarButton && (
          <IconButton
            icon={<HamburgerIcon w={6} h={6} />}
            colorScheme="blackAlpha"
            variant="outline"
            aria-label="Toggle Sidebar"
            onClick={onShowSidebar}
          />
        )}
      </Box>
      <Text fontSize="xl" fontWeight={700} flexGrow={1}>
        Dashboard
      </Text>
      <ProfileDropdown />
    </Flex>
  );
};

export default Header;
