import React, { useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Background from './components/Background';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import Links from './components/Links';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      
      <Background />
      
      <div className="container" style={{ opacity: loading ? 0 : 1, transition: 'opacity 0.5s ease' }}>
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
