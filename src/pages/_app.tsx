import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { QueryClientProvider, QueryClient, QueryFunction } from '@tanstack/react-query';
import { wrapper } from '../store';
import { theme } from '~/styles/theme';

import '~styles/globals.css';
import Axios from '~lib/axios';

const defaultQueryFn: QueryFunction<unknown, readonly unknown[]> = async ({ queryKey }) => {
  const { data } = await Axios.get(queryKey[0] as string);
  return data;
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: defaultQueryFn,
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default wrapper.withRedux(MyApp);
