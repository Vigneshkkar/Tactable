import { QueryClient, QueryClientProvider, Hydrate } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ReactNode, useState } from 'react';
import { createTheme, NextUIProvider } from '@nextui-org/react';
import theme from '../styles/theme.module.scss';
import { NextPage } from 'next';

const customTheme = createTheme({
  type: 'light', // it could be "light" or "dark"
  theme: {
    colors: {
      gradient: theme.cardBgColorHover,
    },
  },
});

const Wrapper: NextPage<{ children: ReactNode }> = ({ children }) => {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <NextUIProvider theme={customTheme}>{children}</NextUIProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default Wrapper;
