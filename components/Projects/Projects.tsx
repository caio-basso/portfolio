import { Box, SimpleGrid, Heading, Center } from '@chakra-ui/react';
import { ProjectCard } from '@/components/Projects/ProjectCard';

export default function Projects() {
    return (
        <Box
            w={'100vw'}
            bg={'green.600'}
        >
            <Heading
                bg={'green.600'}
                pt={'50px'}
                color={'dark.900'}
                fontSize={{ base: '5xl' , md: '7xl'}}
                fontWeight={'600'}
                textAlign={'center'}
            >
                <Center>
                    Projects
                </Center>
            </Heading>
            <Center>
                <SimpleGrid
                    spacing={7}
                    templateColumns={{ base: 'repeat(1, 1fr)', md:'repeat(2, 1fr)' ,lg: 'repeat(3, 1fr)'}}
                    w={'1500px'}
                    py={'90px'}
                    px={'100px'}
                    bg={'green.600'}
                >
                    <ProjectCard heading={'alo 1'} body={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, atque dignissimos dolor eius modi nemo similique. A accusantium alias assumenda autem consectetur deleniti dolor  '}/>
                    <ProjectCard heading={'alo 2'} body={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, atque dignissimos dolor eius modi nemo similique. A accusantium alias assumenda autem consectetur deleniti dolor  '}/>
                    <ProjectCard heading={'alo 3'} body={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, atque dignissimos dolor eius modi nemo similique. A accusantium alias assumenda autem consectetur deleniti dolor  '}/>
                    <ProjectCard heading={'alo 4'} body={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, atque dignissimos dolor eius modi nemo similique. A accusantium alias assumenda autem consectetur deleniti dolor  '}/>
                    <ProjectCard heading={'alo 5'} body={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, atque dignissimos dolor eius modi nemo similique. A accusantium alias assumenda autem consectetur deleniti dolor  '}/>
                    <ProjectCard heading={'alo 6'} body={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, atque dignissimos dolor eius modi nemo similique. A accusantium alias assumenda autem consectetur deleniti dolor  '}/>
                </SimpleGrid>
            </Center>
        </Box>
    )
}