import {
    Container,
    Spacer,
    Stack,
    Text,
    Image,
    useDisclosure,
    Flex,
    IconButton,
    Collapse,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { HamburgerIcon, CloseIcon, } from '@chakra-ui/icons';
import { DesktopNav } from '@/components/Navbar/DesktopNav';
import { MobileNav } from '@/components/Navbar/MobileNav';
import { Logo } from '@/components/Logo/Logo';

interface NavProps {
    nav: string[];
}

export default function Navbar({ nav }: NavProps) {
    const { isOpen, onToggle } = useDisclosure();
    const { locales } = useRouter();
    return (
        <header>
            <nav>
                <Container
                    maxW={'full'}
                    h={'70px'}
                    display={'flex'}
                    alignItems={'center'}
                    px={'7vw'}
                    bg={'gray.600'}
                >
                    <Logo />
                    <Spacer />
                    <Stack
                        direction={'row'}
                        display={'flex'}
                        alignItems={'center'}
                        gap={'20px'}
                    >
                        <Flex
                            display={{ base: 'flex', md: 'none' }}
                            alignItems={'center'}
                            gap={'20px'}
                        >
                            {locales &&
                                <>
                                    <a href={locales[0]}>
                                        <Image
                                            alt={'pt-BR'}
                                            src={'/us.svg'}
                                            boxSize={'20px'}
                                            borderRadius={'md'}
                                        >
                                        </Image>
                                    </a>
                                    <a href={locales[1]}>
                                        <Image
                                            alt={'pt-BR'}
                                            src={'/br.svg'}
                                            boxSize={'20px'}
                                            borderRadius={'md'}
                                        >
                                        </Image>
                                    </a>
                                </>
                            }
                        </Flex>
                        <Flex
                            flex={{ base: 1, md: 'auto' }}
                            ml={{ base: -2 }}
                            display={{ base: 'flex', md: 'none' }}>
                            <IconButton
                                onClick={onToggle}
                                icon={
                                    isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
                                }
                                variant={'ghost'}
                                aria-label={'Toggle Navigation'}
                            />
                        </Flex>

                        <Flex display={{ base: 'none', md: 'flex' }}>
                            <DesktopNav nav={nav}/>
                        </Flex>
                    </Stack>
                </Container>
                <Collapse in={isOpen} animateOpacity>
                    <MobileNav nav={nav}/>
                </Collapse>
            </nav>
        </header>
    )
}
