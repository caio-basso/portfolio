import { Text, Container, Button, Box, Icon, Center } from '@chakra-ui/react';
import { TypeAnimation } from 'react-type-animation';
import { CiLinkedin } from 'react-icons/ci';
import { VscGithub } from 'react-icons/vsc';

interface AboutProps {
    texts: string[];
}

export const PersonalText = ({texts}: AboutProps) => {
    return (
        <Container mx={'0px'}>
            <Text
                as={TypeAnimation}
                sequence={[texts[0], 2000, texts[3], 2000, '']}
                repeat={Infinity}
                bgGradient={'linear(to-t, green.700, green.500)'}
                bgClip={'text'}
                fontSize={'6xl'}
                fontWeight={'800'}
                h={'180px'}
            />
            <Text
                bg={'dark.800'}
                bgClip={'text'}
                fontSize={'2xl'}
                fontWeight={'500'}
            >
                {texts[1]}
            </Text>
            <Box
                display={'flex'}
                alignItems={'center'}
                justifyContent={{base: 'center', lg: 'start'}}
            >
                <Button
                    variant={'solid'}
                    borderRadius={'20px'}
                    bgGradient={'linear(to-tl, dark.700, dark.800)'}
                    color={'white'}
                    mt={'20px'}
                    fontWeight={'600'}
                    w={'300px'}
                    transition={'all .2s ease'}
                    _hover={{
                        bgGradient: 'linear(to-tl, green.600, green.300)',
                        transform: 'scale(1.05)'
                    }}
                >
                    {texts[2]}
                </Button>
                <Center
                    as={'a'}
                    href={'https://linkedin.com/in/caiobasso/'}
                    w={'40px'}
                    h={'40px'}
                    bg={'red'}
                    mt={'20px'}
                    ml={'10px'}
                    bgGradient={'linear(to-tl, dark.700, dark.800)'}
                    borderRadius={'20px'}
                    transition={'all .2s ease'}
                    _hover={{
                        bgGradient: 'linear(to-tl, green.600, green.300)',
                        transform: 'scale(1.1)'
                    }}
                >
                    <Icon
                        as={CiLinkedin}
                        w={7}
                        h={7}
                        color='white'
                    />
                </Center>
                <Center
                    as={'a'}
                    href={'https://github.com/caio-basso'}
                    w={'40px'}
                    h={'40px'}
                    bg={'red'}
                    borderRadius={'20px'}
                    mt={'20px'}
                    ml={'10px'}
                    bgGradient={'linear(to-tl, dark.700, dark.800)'}
                    transition={'all .2s ease'}
                    _hover={{
                        bgGradient: 'linear(to-tl, green.600, green.300)',
                        transform: 'scale(1.1)'
                    }}
                >
                    <Icon
                        as={VscGithub}
                        w={7}
                        h={7}
                        color='white'
                    />
                </Center>
            </Box>
        </Container>
    )
}