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

      <div style={{ 
        padding: '24px 20px', 
        border: '1px solid rgba(212, 175, 55, 0.2)', 
        borderRadius: '12px', 
        marginBottom: '24px',
        background: 'linear-gradient(to bottom, rgba(15, 15, 15, 0.8), rgba(5, 5, 5, 0.9))'
      }}>
        <h4 style={{ color: 'var(--color-gold)', fontSize: '0.95rem', fontWeight: 'bold', marginBottom: '8px', letterSpacing: '0.5px' }}>
          YAYASAN IKATAN SPIRITUAL INDONESIA
        </h4>
        <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: '16px', letterSpacing: '0.5px' }}>
          SK.KEMENKUMHAM NOMOR: AHU-0007649.AH.01.04.TAHUN 2024
        </p>
        
        <div style={{ fontSize: '0.8rem', color: 'var(--text-main)', lineHeight: '1.6' }}>
          <p style={{ marginBottom: '4px' }}>
            <span style={{ color: 'var(--color-gold-light)' }}>Sekretariat Pusat:</span><br/>
            Jl. Sitanggal – Larangan, Dukuh Kendaga<br/>
            RT 05 / RW 12, Kec. Larangan<br/>
            Kab. Brebes, Jawa Tengah 52262
          </p>
          <p style={{ marginTop: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '6px' }}>
            <span style={{ color: 'var(--color-gold-light)' }}>Layanan Informasi:</span> <a href="tel:+6285150941574" style={{ color: 'var(--text-main)', textDecoration: 'none' }}>+62 851-5094-1574</a>
          </p>
        </div>
      </div>
      
      <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
        © {new Date().getFullYear()} Yayasan Ikatan Spiritual Indonesia. Semua Hak Dilindungi.
      </p>
    </div>
  );
};

export default Footer;
