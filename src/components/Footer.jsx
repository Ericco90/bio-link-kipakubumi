import React from 'react';

const Footer = () => {
  return (
    <div className="section animate-fade-in-up delay-500" style={{ textAlign: 'center', paddingBottom: '80px', borderTop: '1px solid rgba(212, 175, 55, 0.1)', marginTop: '20px' }}>
      <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>KI PAKU BUMI</h3>
      <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '4px' }}>Pengasuh Padepokan Payung Agung Nusantara</p>
      <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '24px' }}>Ketua Umum Pusat Yayasan Ikatan Spiritual Indonesia</p>
      
      <div style={{ padding: '20px', background: 'rgba(28, 28, 31, 0.4)', borderRadius: '12px', marginBottom: '24px' }}>
        <p style={{ fontFamily: 'var(--font-heading)', fontStyle: 'italic', color: 'var(--color-gold-light)', fontSize: '0.95rem' }}>
          "Menjaga Tradisi, Mengembangkan Spiritualitas, Membangun Manfaat Untuk Sesama."
        </p>
      </div>
      
      <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
        © {new Date().getFullYear()} Semua Hak Dilindungi
      </p>
    </div>
  );
};

export default Footer;
