import { Flex, Link, IconButton } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { InfoIcon } from "@chakra-ui/icons";
import { FaHome, FaInfoCircle } from "react-icons/fa";

function MenuIcons() {
    return (
        <Flex align={"center"} mb={"10px"}>
            <Link as={RouterLink} to={"/"}>
                <IconButton
                    aria-label="home-gallery"
                    size={"md"}
                    color={"blue.600"}
                    icon={<FaHome />}
                    mr={1}
                />
            </Link>

            <Link as={RouterLink} to={"/about"}>
                <IconButton
                    aria-label="about-info"
                    size={"md"}
                    color={"blue.600"}
                    icon={<FaInfoCircle />}
                    mr={35}
                />
            </Link>
        </Flex>
    );
}
export default MenuIcons;
