import { Fragment } from 'react';
import Head from 'next/head';

interface CustomHead {
  title: string;
}

const CustomHead = ({ title }) => {
  return (
    <Fragment>
      <Head>
        <title>{title || 'SIM'}</title>
      </Head>
    </Fragment>
  );
};

export default CustomHead;
