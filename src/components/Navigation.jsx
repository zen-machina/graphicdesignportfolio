import { Flex, Link, ListItem, List } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const navLinks = [
    {
        title: "WORK",
        path: "/",
    },
    {
        title: "ABOUT",
        path: "about",
    },
];

const Navigation = () => {
    return (
        <Flex mt="50px" justify="space-around" alignItems="center">
            <Flex justify="space-between" w="70%" align="center">
                <Link
                    as={RouterLink}
                    to="/"
                    textDecor="none"
                    m="6"
                    fontSize={["1.5em", "2.2em"]}
                    fontWeight={400}
                    _hover={{ background: "none", color: "blue.600" }}
                    _focus={{ boxShadow: "none", color: "blue.600" }}
                >
                    ARMANDO R. ALVAREZ
                </Link>
                <Flex m="6" justify="space-around">
                    {navLinks.map((link, index) => (
                        <Link
                            as={RouterLink}
                            to={link.path}
                            textDecor="none"
                            fontSize={["1.5em", "2.2em"]}
                            key={index}
                            mx="5"
                            fontWeight={400}
                            _hover={{ background: "none", color: "blue.600" }}
                            _focus={{ boxShadow: "none", color: "blue.600" }}
                        >
                            {link.title}
                        </Link>
                    ))}
                </Flex>
            </Flex>
        </Flex>
    );
};
// m="6"
// h="70px"
// justifyContent="space-between"
// align="center"
// maxW={2100}
export default Navigation;
