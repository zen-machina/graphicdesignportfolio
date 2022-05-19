import { Flex, Grid, Image, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import ImgModal from "../components/ImgModal";
import getImageUrl from "../tools/getImageUrl";

function Work(props) {
    const imgURLs = Object.keys(getImageUrl());
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [currentImgSrc, setCurrentImgSrc] = useState("");

    // need a way to pass the current image source on the onClick event to my custom ImgModal
    const handleClick = (e) => {
        const imgSrcRaw = e.target.src;
        const imgSRC = imgSrcRaw.replace("http://localhost:3000", "");
        setCurrentImgSrc(imgSRC);
        console.log(currentImgSrc);
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
                                onClick={handleClick}
                            />
                        </Flex>
                    );
                })}
                <ImgModal
                    isOpen={isOpen}
                    onClose={onClose}
                    src={currentImgSrc}
                ></ImgModal>
            </Grid>
        </Flex>
    );
}

export default Work;
