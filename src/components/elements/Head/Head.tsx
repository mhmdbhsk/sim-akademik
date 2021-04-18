import { Fragment } from 'react';
import Head from 'next/head';

interface CustomHeadProps {
  title?: string;
}

const CustomHead = ({ title }: CustomHeadProps) => {
  return (
    <Fragment>
      <Head>
        <title>{title || 'SIM'}</title>
      </Head>
    </Fragment>
  );
};

export default CustomHead;
