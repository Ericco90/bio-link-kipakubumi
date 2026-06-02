import React from 'react';
import profileImg from '../assets/profile.jpg';

const Hero = () => {
  return (
    <div className="section animate-fade-in-up" style={{ textAlign: 'center', paddingTop: '60px' }}>
      <div 
        style={{
          width: '140px',
          height: '140px',
          margin: '0 auto 24px',
          borderRadius: '50%',
          padding: '4px',
          background: 'linear-gradient(135deg, var(--color-gold), var(--color-copper))',
          boxShadow: '0 0 25px rgba(212, 175, 55, 0.6)'
        }}
        className="glow-effect"
      >
        <img 
          src={profileImg} 
          alt="KI PAKU BUMI" 
          style={{
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            objectFit: 'cover',
            border: '4px solid var(--color-bg-dark)'
          }} 
          onError={(e) => {
            // Fallback if image not found
            e.target.src = 'https://ui-avatars.com/api/?name=Ki+Paku+Bumi&background=1c1c1f&color=D4AF37&size=200';
          }}
        />
      </div>
      
      <div className="glass-panel" style={{ padding: '30px 24px', marginTop: '10px', textAlign: 'center', width: '100%' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '8px', fontWeight: '700' }}>KI PAKU BUMI</h1>
        
        <p style={{ color: 'var(--color-gold)', fontWeight: '500', marginBottom: '24px', fontSize: '1.1rem' }}>
          Master Spiritual<br/>
          <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
            Pengasuh Padepokan Payung Agung Nusantara<br/>
            Ketua Umum Pusat Yayasan Ikatan Spiritual Indonesia
          </span>
        </p>
        
        <div style={{ borderTop: '1px solid rgba(212, 175, 55, 0.2)', paddingTop: '20px', textAlign: 'left' }}>
          <h2 style={{ fontSize: '1.3rem', marginBottom: '12px', textAlign: 'center', color: 'var(--color-gold-light)' }}>Gerbang Kesadaran Sejati</h2>
          <p style={{ lineHeight: '1.7', fontSize: '0.95rem', marginBottom: '16px', color: 'var(--text-main)', textAlign: 'center', fontStyle: 'italic' }}>
            "Menyelami kedalaman batin, menggali potensi diri berlandaskan kearifan warisan leluhur Nusantara."
          </p>
          <p style={{ lineHeight: '1.6', fontSize: '0.95rem', color: 'var(--text-muted)', textAlign: 'center' }}>
            Kami hadir untuk mendampingi setiap langkah perjalanan spiritual Anda—membimbing pencapaian ketenangan jiwa, penguasaan energi batin, hingga pemahaman keilmuan tingkat tinggi secara terarah, etis, dan profesional. Bersama <strong>Payung Agung Nusantara</strong>, mari wujudkan kualitas hidup yang lebih damai dan bermakna.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
