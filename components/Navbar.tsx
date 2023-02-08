import { Button, Container, Flex, Spacer, Stack, Text, Box, textDecoration } from '@chakra-ui/react';

interface NavProps {
    nav: string[];
}

export default function Navbar({ nav }: NavProps) {
    return (
        <header>
            <nav>
                <Container
                    maxW={'full'}
                    h={'70px'}
                    display={'flex'}
                    alignItems={'center'}
                    px={'40px'}
                    bg={'gray.600'}
                >
                    <Text
                        fontFamily={'unset'}
                        fontSize={'2xl'}
                    >
                        Caio Basso
                    </Text>
                    <Spacer />
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
                    </Stack>
                </Container>
            </nav>
        </header>
    )
}