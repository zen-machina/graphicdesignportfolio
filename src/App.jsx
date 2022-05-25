import Navigation from "./components/Navigation";
import Work from "./pages/work";
import About from "./pages/about";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// TODO:
// X page fade in transitions ( framer motion or just use ChakraUI? )
// x contact info: phone, email, resume
// - resume modal
// - footer: c 2022 all rights reserved, designed by armando alvarez, arojostudio
// - hamberger menu on mobile size
// - fully responsive ?
// - hosting

function App() {
    return (
        <>
            <Router>
                <>
                    <Navigation />
                    <Routes>
                        <Route path="/" element={<Work />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                </>
            </Router>
            <Footer />
        </>
    );
}

export default App;
