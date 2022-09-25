import React from 'react';
import type { AppProps } from 'next/app';
import { Reset } from 'styled-reset';
import GlobalStyle from '../components/layout/GlobalStyle';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Reset />
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
