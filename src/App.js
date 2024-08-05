import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import IntroSection from './components/IntroSection';
import AboutSection from './components/AboutSection';
import PatternSection from './components/PatternSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import TestimonialsDashboard from './components/TestimonialsDashboard';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<TestimonialsDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

const HomePage = () => (
  <>
    <IntroSection />
    <AboutSection />
    <PatternSection />
    <TestimonialsSection />
    <ContactSection />
    <Footer />
  </>
);

export default App;
