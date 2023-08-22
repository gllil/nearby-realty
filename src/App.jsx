import "bootstrap/dist/css/bootstrap.min.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
function App() {
  return (
    <div>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
