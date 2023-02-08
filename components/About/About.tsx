import { Box, Container, Text, Center, Image } from '@chakra-ui/react';
import { PersonalPhoto } from '@/components/About/PersonalPhoto';
import { PersonalText } from '@/components/About/PersonalText';

interface AboutProps {
    texts: string[];
}

export default function About({ texts }: AboutProps) {
    return (
        <>
            <Box
                w={'100vw'}
                h={'100vh'}
                px={'7vw'}
                py={'15vh'}
            >
                {/* Mobile and Tablets*/}
                <Box
                    display={{ base: 'flex', lg: 'none' }}
                    flexDirection={'column'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    textAlign={'center'}
                >
                    <PersonalText texts={texts}/>
                    <PersonalPhoto />
                </Box>

                {/* Desktop */}
                <Box
                    display={{ base: 'none', lg: 'flex' }}
                    justifyContent={'center'}
                    alignItems={'center'}
                    gap={'100px'}
                >
                    <PersonalPhoto />
                    <PersonalText texts={texts}/>
                </Box>
            </Box>
        </>
    )
}