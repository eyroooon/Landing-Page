import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import PrivacyAndAgreement from './Components/PrivacyAndAgreement';
import React, { lazy, Suspense } from 'react';

const Home = lazy(() => import('./Components/Home'));
const Work = lazy(() => import('./Components/Work'));
const Testimonial = lazy(() => import('./Components/Testimonial'));
const Contact = lazy(() => import('./Components/Contact'));
const Footer = lazy(() => import('./Components/Footer'));

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Suspense fallback={<div>Loading...</div>}>
                  <Home />
                  <Work />
                  <Testimonial />
                  <Contact />
                  <Footer />
                </Suspense>
              </>
            }
          />
          <Route path="/privacy-and-agreement" element={<PrivacyAndAgreement />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
