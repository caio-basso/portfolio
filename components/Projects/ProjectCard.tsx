import { Button, Card, CardBody, CardFooter, CardHeader, Heading, Text } from '@chakra-ui/react';

interface CardsProps {
    heading: string;
    body: string;
}

export const ProjectCard = ({ heading, body }: CardsProps) => {
    return (
        <Card>
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