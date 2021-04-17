import { Header, Sidebar } from '@components';
import { Fragment, useState } from 'react';
import { useBreakpointValue, Box } from '@chakra-ui/react';

const smVariant = { navigation: 'drawer', navigationButton: true };
const mdVariant = { navigation: 'sidebar', navigationButton: false };

const Container = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const variants = useBreakpointValue({ base: smVariant, md: mdVariant });

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <Fragment>
      <Sidebar
        variant={variants?.navigation}
        isOpen={isSidebarOpen}
        onClose={toggleSidebar}
      />
      <Box
        pl={variants?.navigation === 'sidebar' && '300px'}
        minH="100vh"
        h="100%"
      >
        <Header
          showSidebarButton={variants?.navigationButton}
          onShowSidebar={toggleSidebar}
        />
        <Box h="100%" mx={variants?.navigation === 'sidebar' && 8}>
          {children}
        </Box>
      </Box>
    </Fragment>
  );
};

export default Container;
