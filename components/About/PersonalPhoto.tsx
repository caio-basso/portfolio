import { Box, Image } from '@chakra-ui/react';

export const PersonalPhoto = () => {
    return (
        <>
            <Box
                display={{ base: 'none', md: 'flex', lg: 'flex'}}
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
            >
                <Image
                    alt={'Teste'}
                    src={'/caio.png'}
                    borderRadius={'30px'}
                />
            </Box>

            <Box
                display={{ base: 'flex', md: 'none', lg: 'none'}}
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