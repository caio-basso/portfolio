import { Text, Container, Button } from '@chakra-ui/react';

interface AboutProps {
    texts: string[];
}

export const PersonalText = ({texts}: AboutProps) => {
    return (
        <Container mx={'0px'}>
            <Text
                bgGradient={'linear(to-t, green.700, green.500)'}
                bgClip={'text'}
                fontSize={'6xl'}
                fontWeight={'800'}
            >
                {texts[0]}
            </Text>
            <Text
                bg={'dark.800'}
                bgClip={'text'}
                fontSize={'2xl'}
                fontWeight={'500'}
            >
                {texts[1]}
            </Text>
            <Button
                variant={'solid'}
                borderRadius={'20px'}
                /*bgGradient={'linear(to-l, dark.900, dark.600)'}*/
                bg={'dark.700'}
                color={'white'}
                mt={'20px'}
                fontWeight={'600'}
                w={'300px'}
                _hover={{
                    bgGradient: 'linear(to-tl, green.600, green.300)',
                    textDecoration: 'underline',
                }}
            >
                {texts[2]}
            </Button>
        </Container>
    )
}