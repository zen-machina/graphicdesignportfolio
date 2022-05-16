import { Box, Flex, Link, ListItem, UnorderedList } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const navLinks = [
    {
        title: "Portfolio",
        path: "/",
    },
    {
        title: "About",
        path: "about",
    },
];

const Navigation = () => {
    return (
        <Flex bg="blue.500" justify="center">
            <Flex justify="space-between" w="70%">
                <Link as={RouterLink} to="/" textDecor="none" m="6">
                    Armando Alvarez
                </Link>
                <UnorderedList p="0" styleType="none" display="flex">
                    {navLinks.map((link, index) => (
                        <ListItem m="6" key={index} listStylePosition="inside">
                            <Link
                                as={RouterLink}
                                to={link.path}
                                textDecor="none"
                            >
                                {link.title}
                            </Link>
                        </ListItem>
                    ))}
                </UnorderedList>
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
