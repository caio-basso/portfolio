import { Flex, Stack, Text, useDisclosure } from '@chakra-ui/react';
import Link from 'next/link';

interface NavItem {
    label: string;
    href: string;
}

export const MobileNavItem = ({ label, href }: NavItem) => {
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
                    backgroundColor: 'rgba(72, 187, 120, 1)',
                    borderRadius: 'md'
                }}>
                <Text
                    fontWeight={600}
                    pl={'10px'}
                >
                    {label}
                </Text>
            </Flex>
        </Stack>
    );
};