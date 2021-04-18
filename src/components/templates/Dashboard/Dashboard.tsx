import { Fragment, useState } from 'react';
import { useBreakpointValue, Box } from '@chakra-ui/react';
import { Sidebar, Header } from '@components/modules';
import { Container } from '@components/layouts';

const smVariant = { navigation: 'drawer', navigationButton: true };
const mdVariant = { navigation: 'sidebar', navigationButton: false };

const Dashboard = ({ children }) => {
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
          <Container>{children}</Container>
        </Box>
      </Box>
    </Fragment>
  );
};

export default Dashboard;
