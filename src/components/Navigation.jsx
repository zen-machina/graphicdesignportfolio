import { Flex, Link, useMediaQuery } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import MenuDesktop from "./MenuDesktop";
import MenuIcons from "./MenuIcons";

const Navigation = () => {
    const [isMobile] = useMediaQuery("(max-width: 480px)");
    return (
        <Flex mt="50px" justify="center" alignItems="center">
            <Flex justify="space-between" w="100%" align="center">
                <Link
                    as={RouterLink}
                    to="/"
                    textDecor="none"
                    ml={["40px", "175px"]}
                    mb={["10px", "175px"]}
                    fontSize={["1.2em", "2.2em"]}
                    fontWeight={400}
                    _hover={{ background: "none", color: "blue.600" }}
                    _focus={{ boxShadow: "none", color: "blue.600" }}
                >
                    {!isMobile ? "ARMANDO R. ALVAREZ" : "ARMANDO"}
                </Link>
                {!isMobile ? <MenuDesktop /> : <MenuIcons />}
            </Flex>
        </Flex>
    );
};

export default Navigation;
