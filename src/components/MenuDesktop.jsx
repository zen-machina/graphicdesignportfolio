import { Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

function MenuDesktop() {
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

    return (
        <Flex>
            {navLinks.map((link, index) => (
                <Link
                    as={RouterLink}
                    to={link.path}
                    textDecor="none"
                    fontSize={["1.2em", "2.2em"]}
                    key={index}
                    mr={["40px", "175px"]}
                    mb={["40px", "175px"]}
                    fontWeight={400}
                    _hover={{ background: "none", color: "blue.600" }}
                    _focus={{ boxShadow: "none", color: "blue.600" }}
                >
                    {link.title}
                </Link>
            ))}
        </Flex>
    );
}
export default MenuDesktop;
