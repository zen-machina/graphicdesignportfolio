import { useState } from "react";
import {
    Button,
    ButtonGroup,
    Flex,
    IconButton,
    Image,
    Text,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalOverlay,
    useDisclosure,
    useMediaQuery,
} from "@chakra-ui/react";
import { MdOutlineEmail, MdPhone } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

function ContactInfo() {
    const [isMobile] = useMediaQuery("(max-width: 480px)");
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [contactText, setContactText] = useState("-");
    const contactInfo = {
        email: "arojo@arojostudio.com",
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
                        onClick={() => setContactText(contactInfo.email)}
                    />
                    <IconButton
                        aria-label="phone"
                        icon={<MdPhone />}
                        fontSize={25}
                        _hover={{ color: "blue.600" }}
                        onClick={() => setContactText(contactInfo.phone)}
                    />
                    <IconButton
                        aria-label="github"
                        icon={<FaGithub />}
                        fontSize={25}
                        _hover={{ color: "blue.600" }}
                        onClick={() =>
                            window.open(
                                "https://github.com/zen-machina",
                                "_blank"
                            )
                        }
                    />
                </ButtonGroup>
            </Flex>
            <Flex justify="center">
                <Button
                    backgroundColor="blue.600"
                    color="white"
                    mt={10}
                    w={100}
                    _hover={{
                        color: "blue.600",
                        backgroundColor: "white",
                        fontSize: "lg",
                    }}
                    onClick={onOpen}
                >
                    RESUME
                </Button>
            </Flex>
            <Modal
                isOpen={isOpen}
                onClose={onClose}
                size={!isMobile ? "6xl" : "full"}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalCloseButton />
                    <ModalBody>
                        <Image
                            src="../resume/designresume.png"
                            w="100%"
                            fit="cover"
                        />
                    </ModalBody>
                </ModalContent>
            </Modal>
        </Flex>
    );
}
export default ContactInfo;
