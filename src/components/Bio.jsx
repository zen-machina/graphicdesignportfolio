import { Flex, Text, Heading, Fade } from "@chakra-ui/react";

function Bio() {
    return (
        <Flex justify="center">
            <Flex m={10} pt={20} maxW={1200} flexDir="column">
                <Heading>Hello!</Heading>
                <Text fontSize={["sm", "2xl"]}>
                    My name is Armando Alvarez and I am a graphic designer,
                    project manager, and an overall creative person. With six
                    years under my belt leading teams in a fast paced start-up
                    environment, I have what it takes to solve problems and
                    think quickly on my feet. I’ve learned a lot from my various
                    work experiences and have grown into what I believe would be
                    a strong asset to any team, but the learning is never done.
                    Currently, I am broadening my skill set to include web
                    design/development, something that I’ve had interest in
                    learning for a long time and is in high demand in our modern
                    age. When I’m not learning a new skill, I enjoy spending
                    time with my son, watching all kinds of movies, and drawing.
                </Text>
            </Flex>
        </Flex>
    );
}
export default Bio;
