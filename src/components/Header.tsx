import { Box, Center, IconButton, Text, Flex } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

interface Props {
  onShowSidebar: Function;
  showSidebarButton?: boolean;
}

const Header = ({ showSidebarButton = true, onShowSidebar }: Props) => {
  return (
    <Flex
      h={!showSidebarButton ? 100 : 'unset'}
      p={4}
      justifyContent="center"
      align="center"
    >
      <Box mr={4}>
        {showSidebarButton && (
          <IconButton
            icon={<HamburgerIcon w={6} h={6} />}
            colorScheme="blackAlpha"
            variant="outline"
            aria-label="Toggle Sidebar"
            onClick={() => onShowSidebar}
          />
        )}
      </Box>
      <Text fontSize="xl" fontWeight={700} flexGrow={1}>
        Dashboard
      </Text>
    </Flex>
  );
};

export default Header;
