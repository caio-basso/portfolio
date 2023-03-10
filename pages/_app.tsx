import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react';
import '@fontsource/roboto/100.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/700.css'
import '@fontsource/roboto/900.css'
import { theme } from '@/theme/theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
  )
}
