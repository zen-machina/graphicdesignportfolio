import {
    Image,
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
                <ModalHeader>MODALLL</ModalHeader>
                <ModalCloseButton></ModalCloseButton>
                <ModalBody>
                    <Image src={props.src} w="100%" fit="cover" />
                </ModalBody>
            </ModalContent>
        </Modal>
    );
}

export default ImgModal;
