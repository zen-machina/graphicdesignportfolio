import Navigation from "./components/Navigation";
import Portfolio from "./pages/portfolio";
import About from "./pages/about";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
    return (
        <Router>
            <>
                <Navigation />
                <Routes>
                    <Route path="/" element={<Portfolio />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </>
        </Router>
    );
}

export default App;
