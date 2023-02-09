import {
    Box,
    Container,
    Stack,
    Text,
} from '@chakra-ui/react';

interface FooterProps {
    text: string
}

export default function Footer({ text }: FooterProps) {
    return (
        <Box
            bg={'gray.50'}
            color={'gray.700'}>
            <Container
                as={Stack}
                maxW={'6xl'}
                py={4}
                display={'flex'}
                direction={{ base: 'column', md: 'row' }}
                justify={{ base: 'center', md: 'center' }}
                align={{ base: 'center', md: 'center' }}>
                <Text>{'© 2023 Caio Basso. ' + text}</Text>
            </Container>
        </Box>
    );
}