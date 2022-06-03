import { Flex, Grid, Image, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import ImgModal from "../components/ImgModal";

// list of all images
const IMGLIST = [
    {
        imgSrc: "https://www.arojodesign.com/images/E_00.jpeg",
        imgTitle: "Eastern Sierras Cycling Collection",
        imgText:
            "Inspired by the sublime mountain landscapes and gradient skies of the Eastern Sierras. This collection was all about subtle changes of color and contrast hits of pattern that invoke the felling of flying through this legendary part of California. ",
    },
    {
        imgSrc: "/images/E_01.jpeg",
        imgTitle: "Eastern Sierras Cycling Collection",
        imgText:
            "Inspired by the sublime mountain landscapes and gradient skies of the Eastern Sierras. This collection was all about subtle changes of color and contrast hits of pattern that invoke the felling of flying through this legendary part of California. ",
    },
    {
        imgSrc: "/images/E_03.jpeg",
        imgTitle: "Eastern Sierras Cycling Collection",
        imgText:
            "Inspired by the sublime mountain landscapes and gradient skies of the Eastern Sierras. This collection was all about subtle changes of color and contrast hits of pattern that invoke the felling of flying through this legendary part of California. ",
    },
    {
        imgSrc: "/images/E_04.jpeg",
        imgTitle: "Eastern Sierras Cycling Collection",
        imgText:
            "Inspired by the sublime mountain landscapes and gradient skies of the Eastern Sierras. This collection was all about subtle changes of color and contrast hits of pattern that invoke the felling of flying through this legendary part of California. ",
    },
    {
        imgSrc: "/images/E_05.jpeg",
        imgTitle: "Eastern Sierras Cycling Collection",
        imgText:
            "Inspired by the sublime mountain landscapes and gradient skies of the Eastern Sierras. This collection was all about subtle changes of color and contrast hits of pattern that invoke the felling of flying through this legendary part of California. ",
    },
    {
        imgSrc: "/images/E_06.jpg",
        imgTitle: "Eastern Sierras Cycling Collection",
        imgText:
            "Inspired by the sublime mountain landscapes and gradient skies of the Eastern Sierras. This collection was all about subtle changes of color and contrast hits of pattern that invoke the felling of flying through this legendary part of California. ",
    },
    {
        imgSrc: "/images/E_07.jpg",
        imgTitle: "Eastern Sierras Cycling Collection",
        imgText:
            "Inspired by the sublime mountain landscapes and gradient skies of the Eastern Sierras. This collection was all about subtle changes of color and contrast hits of pattern that invoke the felling of flying through this legendary part of California. ",
    },
    {
        imgSrc: "/images/E_08.jpg",
        imgTitle: "Eastern Sierras Cycling Collection",
        imgText:
            "Inspired by the sublime mountain landscapes and gradient skies of the Eastern Sierras. This collection was all about subtle changes of color and contrast hits of pattern that invoke the felling of flying through this legendary part of California. ",
    },
    {
        imgSrc: "/images/E_09.jpg",
        imgTitle: "Eastern Sierras Cycling Collection",
        imgText:
            "Inspired by the sublime mountain landscapes and gradient skies of the Eastern Sierras. This collection was all about subtle changes of color and contrast hits of pattern that invoke the felling of flying through this legendary part of California. ",
    },
    {
        imgSrc: "/images/E_10.jpg",
        imgTitle: "LA Arts District Collection",
        imgText:
            "Inspired by the gritty street art splattered throughout the industrial architecture of the Arts District in Downtown Los Angeles.",
    },
    {
        imgSrc: "/images/E_11.jpg",
        imgTitle: "LA Arts District Collection",
        imgText:
            "Inspired by the gritty street art splattered throughout the industrial architecture of the Arts District in Downtown Los Angeles.",
    },
    {
        imgSrc: "/images/E_12.jpg",
        imgTitle: "LA Arts District Collection",
        imgText:
            "Inspired by the gritty street art splattered throughout the industrial architecture of the Arts District in Downtown Los Angeles.",
    },
    {
        imgSrc: "/images/E_13.jpg",
        imgTitle: "LA Arts District Collection",
        imgText:
            "Inspired by the gritty street art splattered throughout the industrial architecture of the Arts District in Downtown Los Angeles.",
    },
    {
        imgSrc: "/images/E_14.jpg",
        imgTitle: "LA Arts District Collection",
        imgText:
            "Inspired by the gritty street art splattered throughout the industrial architecture of the Arts District in Downtown Los Angeles.",
    },
    {
        imgSrc: "/images/E_downshift_01.jpg",
        imgTitle: "Downshift Cycling Design",
        imgText:
            "Bold and simple, designed to make you feel fast as you leave the competition in the dust.",
    },
    {
        imgSrc: "/images/E_downshift_02.jpg",
        imgTitle: "Downshift Cycling Design",
        imgText:
            "Bold and simple, designed to make you feel fast as you leave the competition in the dust.",
    },
    {
        imgSrc: "/images/E_downshift_03.jpg",
        imgTitle: "Downshift Cycling Design",
        imgText:
            "Bold and simple, designed to make you feel fast as you leave the competition in the dust.",
    },
    {
        imgSrc: "/images/E_downshift_04.jpg",
        imgTitle: "Downshift Cycling Design",
        imgText:
            "Bold and simple, designed to make you feel fast as you leave the competition in the dust.",
    },
    {
        imgSrc: "/images/PAC_KITS-01.jpg",
        imgTitle: "Team Stages",
        imgText: "Cycling kit design for Team Stages.",
    },
    {
        imgSrc: "/images/PAC_KITS-02.jpg",
        imgTitle: "Blue 70",
        imgText: "Cycling kit design for Blue 70.",
    },
    {
        imgSrc: "/images/PAC_KITS-03.jpg",
        imgTitle: "Team Infinit",
        imgText: "Cycling kit design for Team Infinit.",
    },
    {
        imgSrc: "/images/PAC_KITS-04.jpg",
        imgTitle: "FLO Factory Team",
        imgText: "Cycling kit design for FLO Factory Team.",
    },
    {
        imgSrc: "/images/PAC_KITS-05.jpg",
        imgTitle: "ENVE",
        imgText: "Cycling kit design for ENVE.",
    },
    {
        imgSrc: "/images/PAC_KITS-06.jpg",
        imgTitle: "B Squad",
        imgText: "Cycling kit design for B Squad Racing Team.",
    },
    {
        imgSrc: "/images/w01.jpg",
        imgTitle: "Mary Beth Ellis's Honey Badger Design",
        imgText:
            "Mary Beth is known as the Honey Badger in the professional triathlon scene. Together we came up with a design that showcased her serious Honey Badger tenacity as well as her love of pattern and color.",
    },
    {
        imgSrc: "/images/w02.jpg",
        imgTitle: "Mary Beth Ellis's Honey Badger Design",
        imgText:
            "Mary Beth is known as the Honey Badger in the professional triathlon scene. Together we came up with a design that showcased her serious Honey Badger tenacity as well as her love of pattern and color.",
    },
    {
        imgSrc: "/images/w03.jpg",
        imgTitle: "Mary Beth Ellis's Honey Badger Design",
        imgText:
            "Mary Beth is known as the Honey Badger in the professional triathlon scene. Together we came up with a design that showcased her serious Honey Badger tenacity as well as her love of pattern and color.",
    },
    {
        imgSrc: "/images/w04.jpg",
        imgTitle: "Josh Amberger's Death Metal Kit",
        imgText:
            "Inspired by Josh's love of hard core death metal and his pedal to the metal attitude.",
    },
    {
        imgSrc: "/images/w05.jpg",
        imgTitle: "Josh Amberger's Death Metal Kit",
        imgText:
            "Inspired by Josh's love of hard core death metal and his pedal to the metal attitude.",
    },
    {
        imgSrc: "/images/w06.jpg",
        imgTitle: "Axiom Triathlon Design",
        imgText:
            "Designed for Wattie Ink's premium line of Athletic Wear. Showcases the technical lightweight fabrics in a fun but elegant design.",
    },
    {
        imgSrc: "/images/w07.jpg",
        imgTitle: "Axiom Triathlon Design",
        imgText:
            "Designed for Wattie Ink's premium line of Athletic Wear. Showcases the technical lightweight fabrics in a fun but elegant design.",
    },
    {
        imgSrc: "/images/w08.jpg",
        imgTitle: "Axiom Triathlon Design",
        imgText:
            "Designed for Wattie Ink's premium line of Athletic Wear. Showcases the technical lightweight fabrics in a fun but elegant design.",
    },
    {
        imgSrc: "/images/w09.jpg",
        imgTitle: "Axiom Triathlon Design",
        imgText:
            "Designed for Wattie Ink's premium line of Athletic Wear. Showcases the technical lightweight fabrics in a fun but elegant design.",
    },
    {
        imgSrc: "/images/w10.jpg",
        imgTitle: "Custom Team Design",
        imgText: "",
    },
    {
        imgSrc: "/images/w11.jpg",
        imgTitle: "Custom Team Design",
        imgText: "",
    },
    {
        imgSrc: "/images/z01.jpg",
        imgTitle: "PLUSH Logo Design",
        imgText: "Logo design for start up Triathlon company PLUSH.",
    },
    {
        imgSrc: "/images/z02.jpg",
        imgTitle: "Castles: Album Cover Design",
        imgText: "",
    },
    {
        imgSrc: "/images/z03.jpg",
        imgTitle: "Starships: Album Cover Design",
        imgText: "",
    },
];

function Gallery() {
    // chakra ui hook, using for modal
    const { isOpen, onOpen, onClose } = useDisclosure();
    // states for image src, title, and text for handleClick()
    const [currentImgSrc, setCurrentImgSrc] = useState("");
    const [currentImgTitle, setCurrentImgTitle] = useState("");
    const [currentImgText, setCurrentImgText] = useState("");

    return (
        <Flex mx="6" justify="center">
            <Grid
                templateColumns={["1fr", "1fr ", "1fr 1fr", "1fr 1fr 1fr"]}
                mt="50px"
                maxW={1800}
                gap={6}
            >
                {IMGLIST.map((img, index) => {
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
                                src={`${img.imgSrc}`}
                                w="100%"
                                fit="cover"
                                borderRadius="xl"
                                _hover={{
                                    opacity: "0.4",
                                }}
                                onClick={() => {
                                    setCurrentImgSrc(img.imgSrc);
                                    setCurrentImgTitle(img.imgTitle);
                                    setCurrentImgText(img.imgText);
                                    onOpen();
                                }}
                            />
                        </Flex>
                    );
                })}

                {/* image modal for <Image> onClick */}
                <ImgModal
                    isOpen={isOpen}
                    onClose={onClose}
                    src={currentImgSrc}
                    title={currentImgTitle}
                    text={currentImgText}
                />
            </Grid>
        </Flex>
    );
}

export default Gallery;
