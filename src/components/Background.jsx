import React, { useEffect, useState } from 'react';

const Background = () => {
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    // Generate random meteors
    const meteorCount = 15;
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
