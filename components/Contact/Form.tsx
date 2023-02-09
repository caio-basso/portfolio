import { Input, Button, Box, Textarea, Text } from '@chakra-ui/react';

interface ContactProps {
    fields: string[];
}

export const Form = ({ fields }: ContactProps) => {
    return (
        <Box
            display={'flex'}
            flexDirection={'column'}
            minW={'300px'}
            w={'70vw'}
            maxW={'900px'}
            h={'600px'}
            gap={'20px'}
            bg={'white'}
            borderRadius={'20px'}
            alignItems={'center'}
            justifyContent={'center'}
            boxShadow={'dark-lg'}
        >
            <Box>
                <Text
                    color={'gray.800'}
                    fontWeight={'700'}
                >
                    {fields[0] + ':'}
                </Text>
                <Input
                    focusBorderColor='green.800'
                    variant={'flushed'}
                    borderColor={'green.600'}
                    minW={'200px'}
                    w={'60vw'}
                    maxW={'700px'}
                    _hover= {{
                        borderColor: 'green.800',
                    }}
                />
            </Box>

            <Box>
                <Text
                    color={'gray.800'}
                    fontWeight={'700'}
                >
                    {fields[1] + ':'}
                </Text>
                <Input
                    focusBorderColor='green.800'
                    variant={'flushed'}
                    borderColor={'green.600'}
                    minW={'200px'}
                    w={'60vw'}
                    maxW={'700px'}
                    _hover= {{
                        borderColor: 'green.800',
                    }}
                />
            </Box>


            <Box>
                <Text
                    color={'gray.800'}
                    fontWeight={'700'}
                >
                    {fields[2] + ':'}
                </Text>
                <Input
                    focusBorderColor='green.800'
                    variant={'flushed'}
                    borderColor={'green.600'}
                    minW={'200px'}
                    w={'60vw'}
                    maxW={'700px'}
                    _hover= {{
                        borderColor: 'green.800',
                    }}
                />
            </Box>

            <Box>
            <Text
                color={'gray.800'}
                fontWeight={'700'}
            >
                {fields[3] + ':'}
            </Text>
            <Textarea
                focusBorderColor='green.800'
                variant={'flushed'}
                resize={'none'}
                borderColor={'green.600'}
                minW={'200px'}
                w={'60vw'}
                maxW={'700px'}
                h={'180px'}
                _hover= {{
                    borderColor: 'green.800',
                }}
            />
            </Box>

            <Box
                minW={'200px'}
                w={'60vw'}
                maxW={'700px'}
                mt={'15px'}>
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
                    {fields[4]}
                </Button>
            </Box>
        </Box>
    )
}