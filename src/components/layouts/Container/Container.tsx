import { Box } from '@chakra-ui/layout';
import React from 'react';
import { Fragment } from 'react';

interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <Fragment>
      <Box>{children}</Box>
    </Fragment>
  );
};

export default Container;
