import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { wrapper } from '../store';
import { theme } from '~/styles/theme';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default wrapper.withRedux(MyApp);
