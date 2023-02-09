import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
    initialColorMode: 'light',
    useSystemColorMode: false,
}

export const theme = extendTheme({
    config,
    colors: {
        dark: {
            900: '#1A1A1A',
            800: '#333333',
            700: '#4D4D4D',
            600: '#666666',
            500: '#808080',
            400: '#969696',
            300: '#ADADAD',
            200: '#C4C4C4',
            100: '#DBDBDB',
            50: '#F2F2F2',
        },
    },
    fonts: {
        heading: `'Roboto', sans-serif`,
        body: `'Roboto', sans-serif`,
    },
})