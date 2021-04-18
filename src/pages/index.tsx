import { Text } from '@chakra-ui/react';
import { Container } from '@components/layouts';
import { Dashboard } from '@components/templates';
import CustomHead from 'components/elements/Head/Head';
import { Fragment } from 'react';

const Home = () => {
  return (
    <Fragment>
      <CustomHead />
      <Dashboard>
        <Container>
          <Text>Teast</Text>
        </Container>
      </Dashboard>
    </Fragment>
  );
};

export default Home;
