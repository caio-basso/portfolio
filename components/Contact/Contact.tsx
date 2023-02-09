import { Box, Heading } from '@chakra-ui/react';
import { Form } from '@/components/Contact/Form';

interface ContactProps {
    fields: string[];
}

export default function Contact({fields}: ContactProps) {
    return (
        <>
            <Box
                w={'100vw'}
                h={'100vh'}
                bgGradient={'linear(to-t, green.400, green.200)'}
                px={'7vw'}
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
                flexDirection={'column'}
            >
                <Heading
                    mb={'50px'}
                    color={'dark.900'}
                    fontSize={{ base: '5xl' , md: '7xl'}}
                    fontWeight={'600'}
                    textAlign={'center'}
                >
                    {fields[5]}
                </Heading>
                <Form fields={fields} />
            </Box>
        </>
    )
}