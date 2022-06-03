import { Flex, Text, Heading, Fade } from "@chakra-ui/react";

function Bio() {
    return (
        <Flex justify="center">
            <Flex m={10} pt={20} maxW={1200} flexDir="column">
                <Heading>Hello!</Heading>
                <Text fontSize={["sm", "2xl"]}>
                    my name is Armando Alvarez. I am a graphic designer and team
                    leader with a passion for creative design and project
                    management. With multiple years of experience in a fast
                    paced start-up environment, learning a lot along the way, I
                    believe I have what it takes to play a critical role on any
                    team... But the learning is never done. Currently, I am
                    broadening my skill set to include web design/development,
                    something that I’ve had interest in learning for a long time
                    and is in high demand in our modern age. In fact, this
                    portfolio site is completely custom made by me. When I’m not
                    learning a new skill, I enjoy spending time with my son,
                    watching all kinds of movies, and drawing.
                </Text>
            </Flex>
        </Flex>
    );
}
export default Bio;
