import {
    Image,
    Text,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
} from "@chakra-ui/react";

function ImgModal(props) {
    return (
        <Modal isOpen={props.isOpen} onClose={props.onClose} size="5xl">
            <ModalOverlay />
            <ModalContent>
                <ModalHeader fontSize={["sm", "2xl"]}>
                    {props.title}
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Image src={props.src} w="100%" fit="cover" />
                    <Text fontSize={["sm", "2xl"]}>{props.text}</Text>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
}

export default ImgModal;
