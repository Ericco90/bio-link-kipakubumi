import React, { useEffect, useState } from 'react';

const LoadingScreen = ({ onComplete }) => {
  const [opacity, setOpacity] = useState(1);
  const [display, setDisplay] = useState('flex');

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpacity(0);
      setTimeout(() => {
        setDisplay('none');
        if (onComplete) onComplete();
      }, 800); // Wait for fade out transition
    }, 2000); // Show loading screen for 2 seconds

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'var(--color-bg-dark)',
        display: display,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        opacity: opacity,
        transition: 'opacity 0.8s ease-in-out',
      }}
    >
      <div 
        className="glow-effect"
        style={{
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          marginBottom: '20px',
          boxShadow: '0 0 30px rgba(212, 175, 55, 0.4)'
        }}
      >
        <img 
          src="/logo.jpg" 
          alt="Logo Payung Agung" 
          style={{
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            objectFit: 'cover'
          }} 
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
      </div>
    </div>
  );
};

export default LoadingScreen;
