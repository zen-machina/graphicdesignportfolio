import Navigation from "./components/Navigation";
import Work from "./pages/work";
import About from "./pages/about";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

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
