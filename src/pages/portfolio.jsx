import { Flex, Grid, Image } from "@chakra-ui/react";
import getImageUrl from "../tools/getImageUrl";

function Portfolio() {
    const imgURLs = Object.keys(getImageUrl());

    return (
        <Flex mx="6" justify="center">
            <Grid
                templateColumns={["1fr", "1fr ", "1fr 1fr", "1fr 1fr 1fr"]}
                mt="50px"
                maxW={1800}
                gap={6}
            >
                {imgURLs.map((img, index) => {
                    return (
                        <Flex key={index} minW="245px" maxH="400px">
                            <Image
                                src={`${img}`}
                                w="100%"
                                fit="cover"
                                borderRadius="xl"
                            />
                        </Flex>
                    );
                })}
            </Grid>
        </Flex>
    );
}

export default Portfolio;
