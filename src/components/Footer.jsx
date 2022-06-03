import { Box, Flex, Text, useMediaQuery } from "@chakra-ui/react";

function Footer() {
    const [isMobile] = useMediaQuery("(max-width: 480px)");

    return (
        <Box color={"white"} w="100%" h={50} background="blue.600">
            <Flex w="100%" h="100%" justify={"center"}>
                {!isMobile ? (
                    <Flex
                        w="100%"
                        mx={6}
                        justify={"space-between"}
                        align={"center"}
                    >
                        <Flex>2022 All Rights Reserverd</Flex>
                        <Flex>Designed by Armando Alvarez</Flex>
                        <Flex>arojo@arojostudio.com</Flex>
                    </Flex>
                ) : (
                    <Flex align={"center"}>
                        <Text>2022 All Rights Reserverd</Text>
                    </Flex>
                )}
            </Flex>
        </Box>
    );
}
export default Footer;
