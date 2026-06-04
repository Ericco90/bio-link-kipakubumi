import React from 'react';
import Background from './components/Background';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import Links from './components/Links';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  return (
    <>
      <Background />
      
      <div className="container">
        <Hero />
        <Links />
        <Stats />
        <Services />
        <Testimonials />
        <Footer />
      </div>

      <FloatingWhatsApp />
    </>
  );
}

export default App;
