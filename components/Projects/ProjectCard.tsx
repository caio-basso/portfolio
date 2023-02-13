import { Box, Button, Card, CardBody, CardFooter, CardHeader, Heading, Text, useDisclosure } from '@chakra-ui/react';

interface CardsProps {
    heading: string;
    body: string;
}

export const ProjectCard = ({ heading, body }: CardsProps) => {
    const { isOpen, onToggle } = useDisclosure()

    return (
        <Card
            h={'500px'}
            align={'center'}
            _hover={{
                bg: 'rgba(255,255,255,0.5)',
                transform: 'scale(1.04)',
            }}
            transition={'all .2s ease'}
        >
            <CardHeader>
                <Heading size='md'> {heading}</Heading>
            </CardHeader>
            <CardBody>
                <Text>{body}</Text>
            </CardBody>
            <CardFooter>
                <Button>View here</Button>
            </CardFooter>
        </Card>
    )
}