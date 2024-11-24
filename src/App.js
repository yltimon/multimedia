import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import VCLandingPage from "./components/Vc/VCLandindPage";
import Footer from "./components/Footer";
function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/vc" element={<VCLandingPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
