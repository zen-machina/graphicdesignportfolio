import MenuIcons from "./MenuIcons";
import { Flex, IconButton } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
function HamburgerMenu() {
    return (
        <Flex mr={"40px"}>
            <IconButton
                aria-label="Menu"
                size={"lg"}
                icon={<HamburgerIcon />}
            />
        </Flex>
    );
}
export default HamburgerMenu;
