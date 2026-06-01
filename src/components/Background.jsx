import React, { useEffect, useState } from 'react';

const Background = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate random particles
    const particleCount = 45;
    const newParticles = Array.from({ length: particleCount }).map((_, i) => {
      const size = Math.random() * 4 + 1;
      return {
        id: i,
        left: `${Math.random() * 100}%`,
        width: `${size}px`,
        height: `${size}px`,
        animationDuration: `${Math.random() * 10 + 10}s`,
        animationDelay: `${Math.random() * 5}s`,
      };
    });
    setParticles(newParticles);
  }, []);

  return (
    <>
      <div className="bg-particles">
        {particles.map((p) => (
          <div
            key={p.id}
            className="particle"
            style={{
              left: p.left,
              width: p.width,
              height: p.height,
              animationDuration: p.animationDuration,
              animationDelay: p.animationDelay,
            }}
          />
        ))}
      </div>
      <div className="smoke-overlay" />
    </>
  );
};

export default Background;
