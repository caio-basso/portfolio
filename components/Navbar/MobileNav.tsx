import { Stack } from '@chakra-ui/react';
import { MobileNavItem } from '@/components/Navbar/MobileNavItem';

interface NavProps {
    nav: string[];
}

export const MobileNav = ({ nav }: NavProps) => {
    return (
        <Stack
            p={4}
            h={'15vh'}
            display={{ md: 'none' }}>
            <MobileNavItem label={nav[0]} href={'#'+nav[0]} />
            <MobileNavItem label={nav[1]} href={'#'+nav[1]} />
            <MobileNavItem label={nav[2]} href={'#'+nav[2]} />
        </Stack>
    );
};