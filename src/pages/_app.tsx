import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { QueryClientProvider, QueryClient, QueryFunction } from '@tanstack/react-query';
import Head from 'next/head';
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
        <Head>
          <title>Lion Town</title>
          <link rel="icon" href="/favicon.ico" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://liontown.city/" />
          <meta property="og:title" content="함께 놀자! 라이언타운" />
          <meta property="og:image" content="/openGraphImg.png" />
          <meta property="og:description" content="친구에게 내 마음을 전하고 싶다면?" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
        </Head>
        <Component {...pageProps} />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default wrapper.withRedux(MyApp);
