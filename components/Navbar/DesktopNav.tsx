import { useRouter } from 'next/router';
import { Button, Image, Stack, Text } from '@chakra-ui/react';
import Link from 'next/link';

interface NavProps {
    nav: string[];
}

export const DesktopNav = ({ nav }: NavProps) => {
    const { locales } = useRouter();
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
                    <Text as={Link} href={locales[0]}>
                        <Image
                            alt={'pt-BR'}
                            src={'/us.svg'}
                            boxSize={'20px'}
                            borderRadius={'md'}
                        >
                        </Image>
                    </Text>
                    <Text as={Link} href={locales[1]}>
                        <Image
                            alt={'pt-BR'}
                            src={'/br.svg'}
                            boxSize={'20px'}
                            borderRadius={'md'}
                        >
                        </Image>
                    </Text>
                </>
            }
        </Stack>
    );
};