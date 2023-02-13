import { Box, SimpleGrid, Heading, Center } from '@chakra-ui/react';
import { ProjectCard } from '@/components/Projects/ProjectCard';

export default function Projects() {
    return (
        <>
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
            <SimpleGrid
                spacing={4}
                templateColumns='repeat(auto-fit, minmax(300px, 1fr))'
                w={'100vw'}
                py={'80px'}
                px={'100px'}
                bg={'green.600'}
            >
                <ProjectCard heading={'alo 1'} body={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, atque dignissimos dolor eius modi nemo similique. A accusantium alias assumenda autem consectetur deleniti dolor doloremque eius eos eveniet excepturi ipsa iste laborum magnam maiores minus nam nostrum pariatur perspiciatis quam quas quia quibusdam quisquam ratione recusandae sapiente, voluptates? A, alias dolore eos error et fuga odio odit optio porro quo sit tempora ullam vero? Animi autem ipsum recusandae! Ab accusamus aliquam asperiores autem blanditiis, dolor eaque esse nam obcaecati officiis, quo repellendus, sapiente sint. Ab amet autem corporis debitis ea, enim eum facere fugiat inventore laboriosam libero porro sequi, sit?'}/>
                <ProjectCard heading={'alo 2'} body={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, atque dignissimos dolor eius modi nemo similique. A accusantium alias assumenda autem consectetur deleniti dolor doloremque eius eos eveniet excepturi ipsa iste laborum magnam maiores minus nam nostrum pariatur perspiciatis quam quas quia quibusdam quisquam ratione recusandae sapiente, voluptates? A, alias dolore eos error et fuga odio odit optio porro quo sit tempora ullam vero? Animi autem ipsum recusandae! Ab accusamus aliquam asperiores autem blanditiis, dolor eaque esse nam obcaecati officiis, quo repellendus, sapiente sint. Ab amet autem corporis debitis ea, enim eum facere fugiat inventore laboriosam libero porro sequi, sit?'}/>
                <ProjectCard heading={'alo 3'} body={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, atque dignissimos dolor eius modi nemo similique. A accusantium alias assumenda autem consectetur deleniti dolor doloremque eius eos eveniet excepturi ipsa iste laborum magnam maiores minus nam nostrum pariatur perspiciatis quam quas quia quibusdam quisquam ratione recusandae sapiente, voluptates? A, alias dolore eos error et fuga odio odit optio porro quo sit tempora ullam vero? Animi autem ipsum recusandae! Ab accusamus aliquam asperiores autem blanditiis, dolor eaque esse nam obcaecati officiis, quo repellendus, sapiente sint. Ab amet autem corporis debitis ea, enim eum facere fugiat inventore laboriosam libero porro sequi, sit?'}/>
                <ProjectCard heading={'alo 4'} body={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, atque dignissimos dolor eius modi nemo similique. A accusantium alias assumenda autem consectetur deleniti dolor doloremque eius eos eveniet excepturi ipsa iste laborum magnam maiores minus nam nostrum pariatur perspiciatis quam quas quia quibusdam quisquam ratione recusandae sapiente, voluptates? A, alias dolore eos error et fuga odio odit optio porro quo sit tempora ullam vero? Animi autem ipsum recusandae! Ab accusamus aliquam asperiores autem blanditiis, dolor eaque esse nam obcaecati officiis, quo repellendus, sapiente sint. Ab amet autem corporis debitis ea, enim eum facere fugiat inventore laboriosam libero porro sequi, sit?'}/>
                <ProjectCard heading={'alo 5'} body={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, atque dignissimos dolor eius modi nemo similique. A accusantium alias assumenda autem consectetur deleniti dolor doloremque eius eos eveniet excepturi ipsa iste laborum magnam maiores minus nam nostrum pariatur perspiciatis quam quas quia quibusdam quisquam ratione recusandae sapiente, voluptates? A, alias dolore eos error et fuga odio odit optio porro quo sit tempora ullam vero? Animi autem ipsum recusandae! Ab accusamus aliquam asperiores autem blanditiis, dolor eaque esse nam obcaecati officiis, quo repellendus, sapiente sint. Ab amet autem corporis debitis ea, enim eum facere fugiat inventore laboriosam libero porro sequi, sit?'}/>
                <ProjectCard heading={'alo 6'} body={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, atque dignissimos dolor eius modi nemo similique. A accusantium alias assumenda autem consectetur deleniti dolor doloremque eius eos eveniet excepturi ipsa iste laborum magnam maiores minus nam nostrum pariatur perspiciatis quam quas quia quibusdam quisquam ratione recusandae sapiente, voluptates? A, alias dolore eos error et fuga odio odit optio porro quo sit tempora ullam vero? Animi autem ipsum recusandae! Ab accusamus aliquam asperiores autem blanditiis, dolor eaque esse nam obcaecati officiis, quo repellendus, sapiente sint. Ab amet autem corporis debitis ea, enim eum facere fugiat inventore laboriosam libero porro sequi, sit?'}/>
            </SimpleGrid>
        </>
    )
}