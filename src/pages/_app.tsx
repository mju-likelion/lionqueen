import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { RecoilRoot } from 'recoil';
import { wrapper } from '../store';
import { theme } from '~/styles/theme';

import '../styles/globals.css';
import Notice from '~components/Notice';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <Notice />
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default wrapper.withRedux(MyApp);
