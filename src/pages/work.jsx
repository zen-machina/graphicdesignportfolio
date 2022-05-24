import { Fade } from "@chakra-ui/react";
import Gallery from "../components/Gallery";

function work() {
    return (
        <Fade in={true} transition={{ enter: { duration: 0.9 } }}>
            <Gallery />;
        </Fade>
    );
}

export default work;
