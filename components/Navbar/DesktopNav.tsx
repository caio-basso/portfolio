import { useRouter } from 'next/router';
import { Box, Button, Image, Stack, Text } from '@chakra-ui/react';
import Link from 'next/link';

interface NavProps {
    nav: string[];
}

export const DesktopNav = ({ nav }: NavProps) => {
    const { locales, asPath } = useRouter();
    return (
        <Stack
            direction={'row'}
            display={'flex'}
            alignItems={'center'}
            gap={'20px'}
        >
            <Stack
                direction={'row'}
                gap={'20px'}
            >
                <Text
                    _hover={{
                        textDecoration: 'underline',
                    }}
                >
                    {nav[0]}
                </Text>
                <Text
                    _hover={{
                        textDecoration: 'underline',
                    }}
                >
                    {nav[1]}
                </Text>
                <Text
                    _hover={{
                        textDecoration: 'underline',
                    }}
                >
                    {nav[2]}
                </Text>
            </Stack>
            <Button
                variant={'solid'}
                borderRadius={'20px'}
                bgGradient={'linear(to-tl, green.700, green.400)'}
                color={'white'}
                _hover={{
                    bgGradient: 'linear(to-tl, green.600, green.300)',
                    textDecoration: 'underline',
                }}
            >
                {nav[3]}
            </Button>
            {locales &&
                <>
                    <Box as={Link} href={asPath} locale={locales[0]}>
                        <Image
                            alt={'pt-BR'}
                            src={'/us.svg'}
                            boxSize={'20px'}
                            borderRadius={'md'}
                        >
                        </Image>
                    </Box>
                    <Box as={Link} href={asPath} locale={locales[1]}>
                        <Image
                            alt={'pt-BR'}
                            src={'/br.svg'}
                            boxSize={'20px'}
                            borderRadius={'md'}
                        >
                        </Image>
                    </Box>
                </>
            }
        </Stack>
    );
};