import { Fade } from "@chakra-ui/react";
import Bio from "../components/Bio";

function About() {
    return (
        <Fade in={true} transition={{ enter: { duration: 0.9 } }}>
            <Bio />;
        </Fade>
    );
}

export default About;
