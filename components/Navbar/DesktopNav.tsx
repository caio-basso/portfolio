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
                <Text>
                    {nav[0]}
                </Text>
                <Text>
                    {nav[1]}
                </Text>
                <Text>
                    {nav[2]}
                </Text>
            </Stack>
            <Button
                variant={'outline'}
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