import { VFC } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { CacheProvider } from '@emotion/react';
import createCache, { EmotionCache } from '@emotion/cache';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  typography: {
    fontFamily: ['Roboto Slab'].join(',')
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 700,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  }
});

const createEmotionCache = () => {
  return createCache({ key: 'css', prepend: true });
};

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const MyApp: VFC<MyAppProps> = ({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps
}) => (
  <CacheProvider value={emotionCache}>
    <Head>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
    </Head>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  </CacheProvider>
);

export default MyApp;
