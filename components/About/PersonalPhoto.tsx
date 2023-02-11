import { Box, Image } from '@chakra-ui/react';

export const PersonalPhoto = () => {
    return (
        <>
            <Box
                display={{ base: 'none', md: 'none', lg: 'flex'}}
                boxSize={'400px'}
                borderColor={'white'}
                borderWidth={'6px'}
                borderRadius={'30px'}
                h={'full'}
                bgGradient={'linear(to-t, black ,green.700, green.400)'}
                boxShadow={'dark-lg'}
                outline={'solid 2px'}
                outlineColor={'black'}
                mt={{md: '40px', lg: '0px'}}
                transition={'all .2s ease'}
                filter={'brightness(110%)'}
                _hover={{ transform: 'scale(1.07)' }}
            >
                <Image
                    alt={'Teste'}
                    src={'/caio.png'}
                    borderRadius={'30px'}
                />
            </Box>

            <Box
                display={{ base: 'flex', md: 'flex', lg: 'none'}}
                boxSize={'300px'}
                borderColor={'white'}
                borderWidth={'6px'}
                borderRadius={'30px'}
                h={'full'}
                bgGradient={'linear(to-t, black ,green.700, green.400)'}
                boxShadow={'dark-lg'}
                outline={'solid 2px'}
                outlineColor={'black'}
                mt={'40px'}
            >
                <Image
                    alt={'Teste'}
                    src={'/caio.png'}
                    borderRadius={'30px'}
                />
            </Box>
        </>
    )
}