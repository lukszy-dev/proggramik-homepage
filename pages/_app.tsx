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
      sm: 500,
      md: 700,
      lg: 1200,
      xl: 1536,
    },
  },
  components: {
    MuiDivider: {
      styleOverrides: {
        root: {
          ':after': {
            borderColor: 'black',
            borderTopWidth: '3px'
          },
          ':before': {
            borderColor: 'black',
            borderTopWidth: '3px'
          }
        }
      }
    }
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
      <title>Łukasz Szypliński - Homepage</title>
      <meta name="viewport" content="initial-scale=1, width=device-width" />

      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="theme-color" content="#000000" />
    </Head>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  </CacheProvider>
);

export default MyApp;
