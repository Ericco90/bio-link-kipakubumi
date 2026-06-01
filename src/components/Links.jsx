import React from 'react';
import { ChevronRight, GraduationCap, Flame, Sparkles, Store, Music, Users, Camera, Video, Globe } from 'lucide-react';

const Links = () => {
  const linksData = [
    {
      title: 'Private Spiritual Langsung Praktek',
      desc: 'Belajar spiritual secara langsung dengan metode yang mudah dipahami dan diterapkan.',
      btnText: 'Masuk Sekarang',
      icon: <GraduationCap size={20} />,
      url: 'https://drive.google.com/drive/folders/19JINyJUg1Ib-Ba6_VbZNPR_ETi28YDQA?usp=drive_link'
    },
    {
      title: 'Private Paket Gemblengan',
      desc: 'Program pembinaan intensif untuk mempercepat perkembangan spiritual.',
      btnText: 'Ikuti Program',
      icon: <Flame size={20} />,
      url: 'https://drive.google.com/drive/folders/19JINyJUg1Ib-Ba6_VbZNPR_ETi28YDQA?usp=drive_link'
    },
    {
      title: 'Private Keilmuan Spiritual',
      desc: 'Pendalaman keilmuan spiritual secara bertahap dan terarah.',
      btnText: 'Pelajari Lebih Lanjut',
      icon: <Sparkles size={20} />,
      url: 'https://drive.google.com/drive/folders/1iI65T1ScOD_K3ZTDF7UIObhtaZ4oW7Ao?usp=drive_link'
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
      icon: <Music size={20} />, // Using Music as TikTok icon placeholder
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
          <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ padding: '0 8px' }}>
              <h4 style={{ fontSize: '1rem', color: 'var(--color-gold)', marginBottom: '4px' }}>{link.title}</h4>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{link.desc}</p>
            </div>
            <a href={link.url} className="premium-btn">
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div className="icon-wrapper">
                  {link.icon}
                </div>
                <span>{link.btnText}</span>
              </div>
              <ChevronRight size={20} style={{ color: 'var(--color-gold)' }} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Links;
