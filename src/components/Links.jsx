import React from 'react';
import { ChevronRight, GraduationCap, Flame, Sparkles, Store, Music, Users, Camera, Video, Globe, MessageCircle } from 'lucide-react';

const Links = () => {
  const linksData = [
    {
      title: 'Private Spiritual Langsung Praktek',
      desc: 'Belajar spiritual secara langsung dengan metode yang mudah dipahami dan diterapkan.',
      btnText: 'Materi & Harga (Google Drive)',
      icon: <GraduationCap size={20} />,
      url: 'https://drive.google.com/drive/folders/1iI65T1ScOD_K3ZTDF7UIObhtaZ4oW7Ao',
      waUrl: 'https://wa.me/6285123722019?text=Halo%20Ki%20Paku%20Bumi,%20saya%20tertarik%20untuk%20mengikuti%20kelas%20Private%20Spiritual%20Langsung%20Praktek.%20Mohon%20info%20lebih%20lanjut.'
    },
    {
      title: 'Private Paket Gemblengan',
      desc: 'Program pembinaan intensif untuk mempercepat perkembangan spiritual.',
      btnText: 'Materi & Harga (Google Drive)',
      icon: <Flame size={20} />,
      url: 'https://drive.google.com/drive/folders/19JINyJUg1Ib-Ba6_VbZNPR_ETi28YDQA?usp=drive_link',
      waUrl: 'https://wa.me/6285123722019?text=Halo%20Ki%20Paku%20Bumi,%20saya%20tertarik%20untuk%20mengikuti%20Private%20Paket%20Gemblengan.%20Mohon%20info%20lebih%20lanjut.'
    },
    {
      title: 'Private Keilmuan Spiritual',
      desc: 'Pendalaman keilmuan spiritual secara bertahap dan terarah.',
      btnText: 'Materi & Harga (Google Drive)',
      icon: <Sparkles size={20} />,
      url: 'https://drive.google.com/drive/folders/1iI65T1ScOD_K3ZTDF7UIObhtaZ4oW7Ao?usp=drive_link',
      waUrl: 'https://wa.me/6285123722019?text=Halo%20Ki%20Paku%20Bumi,%20saya%20tertarik%20untuk%20mengikuti%20Private%20Keilmuan%20Spiritual.%20Mohon%20info%20lebih%20lanjut.'
    },
    {
      title: 'Toko Online Payung Agung',
      desc: 'Berbagai kebutuhan dan sarana spiritual pilihan.',
      btnText: 'Kunjungi Toko',
      icon: <Store size={20} />,
      url: '#'
    },
    {
      title: 'TikTok KI PAKU BUMI',
      desc: 'Inspirasi dan edukasi spiritual harian.',
      btnText: 'Kunjungi',
      icon: <Music size={20} />, 
      url: '#'
    },
    {
      title: 'Facebook KI PAKU BUMI',
      desc: 'Informasi kegiatan dan komunitas spiritual.',
      btnText: 'Kunjungi',
      icon: <Users size={20} />,
      url: '#'
    },
    {
      title: 'Instagram KI PAKU BUMI',
      desc: 'Konten edukasi dan dokumentasi kegiatan.',
      btnText: 'Kunjungi',
      icon: <Camera size={20} />,
      url: '#'
    },
    {
      title: 'YouTube KI PAKU BUMI',
      desc: 'Video pembelajaran spiritual dan kajian Nusantara.',
      btnText: 'Tonton Sekarang',
      icon: <Video size={20} />,
      url: '#'
    },
    {
      title: 'Website Yayasan Ikatan Spiritual Indonesia',
      desc: 'Informasi organisasi dan legalitas spiritual Indonesia.',
      btnText: 'Buka Website',
      icon: <Globe size={20} />,
      url: '#'
    }
  ];

  return (
    <div className="section animate-fade-in-up delay-300">
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <p style={{ fontSize: '1.05rem', lineHeight: '1.6', marginBottom: '16px', color: 'var(--text-main)' }}>
          "Setiap perjalanan spiritual membutuhkan bimbingan yang tepat."
        </p>
        <p style={{ fontSize: '0.9rem', lineHeight: '1.6', color: 'var(--text-muted)' }}>
          Temukan pembelajaran, pendampingan, dan wawasan spiritual yang dapat membantu Anda berkembang secara lahir maupun batin.
          <br /><br />
          Silakan pilih layanan yang tersedia di bawah ini untuk informasi lebih lanjut.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {linksData.map((link, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '8px' }}>
            <div style={{ padding: '0 8px' }}>
              <h4 style={{ fontSize: '1rem', color: 'var(--color-gold)', marginBottom: '4px' }}>{link.title}</h4>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{link.desc}</p>
            </div>
            
            <a href={link.url} target="_blank" rel="noopener noreferrer" className="premium-btn">
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div className="icon-wrapper">
                  {link.icon}
                </div>
                <span>{link.btnText}</span>
              </div>
              <ChevronRight size={20} style={{ color: 'var(--color-gold)' }} />
            </a>

            {link.waUrl && (
              <a href={link.waUrl} target="_blank" rel="noopener noreferrer" className="premium-btn" style={{ 
                marginTop: '-8px', 
                background: 'linear-gradient(145deg, rgba(37, 211, 102, 0.15) 0%, rgba(18, 140, 126, 0.1) 100%)',
                borderColor: 'rgba(37, 211, 102, 0.3)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div className="icon-wrapper" style={{ background: 'rgba(37, 211, 102, 0.2)', color: '#25D366' }}>
                    <MessageCircle size={20} />
                  </div>
                  <span style={{ color: '#25D366' }}>Daftar via WhatsApp</span>
                </div>
                <ChevronRight size={20} style={{ color: '#25D366' }} />
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Links;
