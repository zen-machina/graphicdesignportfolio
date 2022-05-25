import { Fade, Box, Button } from "@chakra-ui/react";
import Bio from "../components/Bio";
import ContactInfo from "../components/ContactInfo";

function About() {
    return (
        <Fade in={true} transition={{ enter: { duration: 0.9 } }}>
            <Box h="100vh">
                <Bio />;
                <ContactInfo />
            </Box>
        </Fade>
    );
}

export default About;
