import { Flex, Grid, Image, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import ImgModal from "../components/ImgModal";
import getImageUrl from "../tools/getImageUrl";

function Gallery() {
    const imgURLs = Object.keys(getImageUrl());
    // chakra ui hook, using for modal
    const { isOpen, onOpen, onClose } = useDisclosure();
    // state for image src on handleClick
    const [currentImgSrc, setCurrentImgSrc] = useState("");

    // sets image source state on click for modal popup
    const handleModalClick = (e) => {
        const imgSrcRaw = e.target.src;
        const imgSRC = imgSrcRaw.replace("http://localhost:3000", "");
        setCurrentImgSrc(imgSRC);
        onOpen();
    };
    return (
        <Flex mx="6" justify="center">
            <Grid
                templateColumns={["1fr", "1fr ", "1fr 1fr", "1fr 1fr 1fr"]}
                mt="50px"
                maxW={1800}
                gap={6}
            >
                {/* maps through image urls ( imgURLs ) */}
                {imgURLs.map((img, index) => {
                    return (
                        <Flex
                            key={index}
                            minW="245px"
                            maxH="400px"
                            _hover={{
                                backgroundColor: "black",
                                borderRadius: "xl",
                            }}
                        >
                            <Image
                                src={`${img}`}
                                w="100%"
                                fit="cover"
                                borderRadius="xl"
                                _hover={{
                                    opacity: "0.4",
                                }}
                                onClick={handleModalClick}
                            />
                        </Flex>
                    );
                })}

                {/* image modal for <Image> onClic */}
                <ImgModal
                    isOpen={isOpen}
                    onClose={onClose}
                    src={currentImgSrc}
                ></ImgModal>
            </Grid>
        </Flex>
    );
}

export default Gallery;
