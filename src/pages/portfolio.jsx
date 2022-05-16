import { Flex, Grid, Image } from "@chakra-ui/react";

function Portfolio() {
    return (
        <Flex m="6" justify="center">
            <Grid
                templateColumns={["1fr", "1fr ", "1fr 1fr", "1fr 1fr 1fr"]}
                mt={20}
                maxW={2100}
                gap={6}
            >
                <Flex minW="245px" maxW="440px" maxH="440px">
                    <Image
                        src="../../images/my-img_001.jpg"
                        w="100%"
                        fit="cover"
                        borderRadius="xl"
                    />
                </Flex>
            </Grid>
        </Flex>
    );
}

export default Portfolio;
