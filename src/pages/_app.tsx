import '../styles/globals.scss';
import type { AppProps } from 'next/app';

import { QueryClient, QueryClientProvider, Hydrate } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { useState } from 'react';
import { createTheme, NextUIProvider } from '@nextui-org/react';
import theme from '../styles/theme.module.scss';

const customTheme = createTheme({
  type: 'light', // it could be "light" or "dark"
  theme: {
    colors: {
      gradient: theme.cardBgColorHover,
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <NextUIProvider theme={customTheme}>
          <Component {...pageProps} />
        </NextUIProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
