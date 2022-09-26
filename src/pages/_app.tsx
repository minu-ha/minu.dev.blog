import React from 'react';
import type { AppProps } from 'next/app';
import { Reset } from 'styled-reset';
import CustomLayout from '../components/layout/CustomLayout';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Reset />
      <CustomLayout>
        <Component {...pageProps} />
      </CustomLayout>
    </>
  );
};

export default MyApp;
