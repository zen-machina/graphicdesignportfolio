import { useState } from "react";
import { Button, ButtonGroup, Flex, IconButton, Text } from "@chakra-ui/react";
import { MdOutlineEmail, MdPhone } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

function ContactInfo() {
    const [contactText, setContactText] = useState("-");
    const texts = {
        email: "arojodesign@gmail.com",
        phone: "760.481.5579",
        github: "github.com/zen-machina",
    };

    return (
        <Flex justify="center" flexDir="column" align="center">
            <Flex justify="center" flexDir="column" align="center">
                <Flex>
                    <Text mb={25} fontSize="2xl" color="blue.600">
                        {contactText}
                    </Text>
                </Flex>
                <ButtonGroup gap={3}>
                    <IconButton
                        aria-label="email"
                        icon={<MdOutlineEmail />}
                        fontSize={25}
                        _hover={{ color: "blue.600" }}
                        onClick={() => setContactText(texts.email)}
                    />
                    <IconButton
                        aria-label="phone"
                        icon={<MdPhone />}
                        fontSize={25}
                        _hover={{ color: "blue.600" }}
                        onClick={() => setContactText(texts.phone)}
                    />
                    <IconButton
                        aria-label="github"
                        icon={<FaGithub />}
                        fontSize={25}
                        _hover={{ color: "blue.600" }}
                        onClick={() => setContactText(texts.github)}
                    />
                </ButtonGroup>
            </Flex>
            <Flex justify="center">
                <Button
                    backgroundColor="blue.600"
                    color="white"
                    mt={10}
                    w={100}
                    _hover={{ color: "blue.600", backgroundColor: "white" }}
                >
                    RESUME
                </Button>
            </Flex>
        </Flex>
    );
}
export default ContactInfo;
