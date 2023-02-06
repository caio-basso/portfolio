import { Html, Head, Main, NextScript } from 'next/document'
import { ColorModeScript, theme } from '@chakra-ui/react';

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
