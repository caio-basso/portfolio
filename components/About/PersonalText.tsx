import { Text, Container } from '@chakra-ui/react';

interface AboutProps {
    texts: string[];
}

export const PersonalText = ({texts}: AboutProps) => {
    return (
        <Container mx={'0px'}>
            <Text
                bgGradient='linear(to-t, green.700, green.500)'
                bgClip='text'
                fontSize='6xl'
                fontWeight='extrabold'
            >
                {texts[0]}
            </Text>
            <Text
                bg='dark.800'
                bgClip='text'
                fontSize='2xl'
                fontWeight='extrabold'
            >
                {texts[1]}
            </Text>
        </Container>
    )
}