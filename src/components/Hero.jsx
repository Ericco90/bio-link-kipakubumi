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
      
      <h1 style={{ fontSize: '2.5rem', marginBottom: '8px', fontWeight: '700' }}>KI PAKU BUMI</h1>
      
      <p style={{ color: 'var(--color-gold)', fontWeight: '500', marginBottom: '16px', fontSize: '1.1rem' }}>
        Master Spiritual<br/>
        <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
          Pengasuh Padepokan Payung Agung Nusantara<br/>
          Ketua Umum Pusat Yayasan Ikatan Spiritual Indonesia
        </span>
      </p>
      
      <div className="glass-panel" style={{ padding: '24px', marginTop: '30px', textAlign: 'left' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '12px', textAlign: 'center' }}>Selamat Datang</h2>
        <p style={{ lineHeight: '1.6', fontSize: '0.95rem', marginBottom: '16px', color: 'var(--text-main)' }}>
          Membuka jalan menuju pengembangan diri, ketenangan batin, serta pemahaman spiritual yang bertanggung jawab dan berlandaskan nilai luhur Nusantara.
        </p>
        <p style={{ lineHeight: '1.6', fontSize: '0.95rem', color: 'var(--text-muted)' }}>
          Selama bertahun-tahun mendampingi masyarakat dalam pembelajaran spiritual, pembinaan energi batin, pengembangan keilmuan, serta pendampingan legalitas lembaga spiritual di Indonesia.
        </p>
      </div>
    </div>
  );
};

export default Hero;
