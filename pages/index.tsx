/* eslint-disable react/jsx-props-no-spreading */
// _app.tsx
import '@styles/globals.css';

import { FC } from 'react';
import { AppProps } from 'next/app';
import { QueryClientProvider, QueryClient } from 'react-query';

const reactQueryClient = new QueryClient();

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <QueryClientProvider client={reactQueryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
};

export default MyApp;
