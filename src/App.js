import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import Home from "./Components/Home";
import Work from "./Components/Work";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import PrivacyAndAgreement from './Components/PrivacyAndAgreement';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <>
              <Home />
              <Work />
              <Testimonial />
              <Contact />
              <Footer />
            </>
          } />
          <Route path="/privacy-and-agreement" element={<PrivacyAndAgreement />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
