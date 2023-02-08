import { Box, Divider, Stack, Text } from '@chakra-ui/react';

export const Logo = () => {
    return (
        <Box>
            <Text
                fontSize={'4xl'}
                fontWeight={'400'}
                width={'200px'}
                align={'start'}
            >
                Caio Basso
            </Text>
            <Stack
                direction={'row'}
                display={'flex'}
                alignItems={'center'}
                width={'200px'}
                mt={'-2'}
            >
                <Text
                    fontWeight={'300'}
                    fontSize={'12px'}
                    ml={'2px'}
                >
                    Web Development
                </Text>
                <Divider
                    borderRadius={'20px'}
                    borderWidth={'1px'}
                    width={'37%'}
                />
            </Stack>
        </Box>
    )
}