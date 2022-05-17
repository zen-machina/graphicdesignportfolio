import { Flex, Grid, Image } from "@chakra-ui/react";
import getImageUrl from "../tools/getImageUrl";

function Portfolio() {
    const imgURLs = Object.keys(getImageUrl());

    return (
        <Flex m="6" justify="center">
            <Grid
                templateColumns={["1fr", "1fr ", "1fr 1fr", "1fr 1fr 1fr"]}
                mt={20}
                maxW={2100}
                gap={6}
            >
                {imgURLs.map((img, index) => {
                    return (
                        <Flex
                            key={index}
                            minW="245px"
                            maxW="440px"
                            maxH="440px"
                        >
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
