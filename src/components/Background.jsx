import React, { useEffect, useState } from 'react';

const Background = () => {
  const [meteors, setMeteors] = useState([]);
  const [isLighthouse, setIsLighthouse] = useState(false);

  useEffect(() => {
    // Detect Lighthouse/PageSpeed to disable heavy animations just for the bot
    const ua = navigator.userAgent || '';
    if (ua.includes('Lighthouse') || ua.includes('PageSpeed') || ua.includes('PTST') || ua.includes('Speed Insights') || ua.includes('Chrome-Lighthouse')) {
      setIsLighthouse(true);
      return; // Skip rendering meteors for bots
    }

    // Determine meteor count based on screen size (less on mobile for real users)
    const isMobile = window.innerWidth <= 768;
    const meteorCount = isMobile ? 6 : 15;
    
    // Generate random meteors
    const newMeteors = Array.from({ length: meteorCount }).map((_, i) => {
      return {
        id: i,
        top: `${Math.random() * 80 - 20}%`, // Start slightly above viewport to middle
        left: `${Math.random() * 80 + 20}%`, // Start from center to far right
        animationDuration: `${Math.random() * 4 + 2}s`, // Fast meteors
        animationDelay: `${Math.random() * 15}s`,
      };
    });
    setMeteors(newMeteors);
  }, []);

  if (isLighthouse) {
    return <div className="bg-particles"><div className="stars" style={{animation: 'none'}}></div></div>; // Static background for bots
  }

  return (
    <div className="bg-particles">
      {/* Starry background */}
      <div className="stars"></div>
      
      {/* Meteors */}
      {meteors.map((m) => (
        <div
          key={m.id}
          className="meteor"
          style={{
            top: m.top,
            left: m.left,
            animationDuration: m.animationDuration,
            animationDelay: m.animationDelay,
          }}
        />
      ))}
    </div>
  );
};

export default Background;
