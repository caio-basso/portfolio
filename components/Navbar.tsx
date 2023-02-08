import {
    Button,
    Container,
    Spacer,
    Stack,
    Text,
    Image,
    useDisclosure,
    Flex,
    IconButton,
    Collapse,
    Icon,
    Box,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { HamburgerIcon, CloseIcon, } from '@chakra-ui/icons';
import Link from 'next/link'

interface NavProps {
    nav: string[];
}

interface NavItem {
    label: string;
    href: string;
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

const DesktopNav = ({ nav }: NavProps) => {
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

const MobileNav = ({ nav }: NavProps) => {
    return (
        <Stack
            p={4}
            h={'100vh'}
            display={{ md: 'none' }}>
            <MobileNavItem label={nav[0]} href={'#'+nav[0]} />
            <MobileNavItem label={nav[1]} href={'#'+nav[1]} />
            <MobileNavItem label={nav[2]} href={'#'+nav[2]} />
        </Stack>
    );
};

const MobileNavItem = ({ label, href }: NavItem) => {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Stack spacing={4} onClick={onToggle}>
            <Flex
                py={2}
                as={Link}
                href={href ?? '#'}
                justify={'space-between'}
                align={'center'}
                borderRadius={'md'}
                _hover={{
                    textDecoration: 'none',
                    backgroundColor: 'rgba(255, 255, 255, .10)',
                    borderRadius: 'md'
                }}>
                <Text
                    fontWeight={600}
                    pl={'10px'}
                    color={'white'}>
                    {label}
                </Text>
            </Flex>
        </Stack>
    );
};
