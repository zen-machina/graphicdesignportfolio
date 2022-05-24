import Navigation from "./components/Navigation";
import Work from "./pages/work";
import About from "./pages/about";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// TODO:
// X page fade in transitions ( framer motion or just use ChakraUI? )
// - contact info: phone, email, and link to resume
// - hamberger menu on mobile size
// - fully responsive ?
// - hosting

function App() {
    return (
        <Router>
            <>
                <Navigation />
                <Routes>
                    <Route path="/" element={<Work />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </>
        </Router>
    );
}

export default App;
