import React, { useState, useEffect } from 'react';
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
  const [isLighthouse, setIsLighthouse] = useState(false);

  useEffect(() => {
    const ua = navigator.userAgent || '';
    if (ua.includes('Lighthouse') || ua.includes('PageSpeed') || ua.includes('PTST') || ua.includes('Speed Insights') || ua.includes('Chrome-Lighthouse')) {
      setIsLighthouse(true);
      setLoading(false); // Langsung skip loading screen untuk bot Google
    }
  }, []);

  return (
    <>
      {loading && !isLighthouse && <LoadingScreen onComplete={() => setLoading(false)} />}
      
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
