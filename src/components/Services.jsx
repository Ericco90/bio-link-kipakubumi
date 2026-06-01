import React from 'react';
import { BookOpen, Zap, Shield, ShoppingBag, FileText } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Sekolah Private Spiritual',
      desc: 'Program pembelajaran spiritual dari dasar hingga tingkat lanjutan secara terarah dan bertanggung jawab.',
      icon: <BookOpen size={24} />
    },
    {
      title: 'Pembinaan Keilmuan Spiritual',
      desc: 'Pendalaman ilmu spiritual, energi, meditasi, dan pengembangan potensi diri.',
      icon: <Zap size={24} />
    },
    {
      title: 'Penanganan Jasa Spiritual',
      desc: 'Pendampingan berbagai kebutuhan spiritual secara profesional dan etis.',
      icon: <Shield size={24} />
    },
    {
      title: 'Sarana Spiritual',
      desc: 'Penyediaan sarana pendukung spiritual berkualitas.',
      icon: <ShoppingBag size={24} />
    },
    {
      title: 'Legalitas Spiritual',
      desc: 'Pendampingan pembentukan organisasi, komunitas, padepokan, yayasan, dan legalitas badan hukum.',
      icon: <FileText size={24} />
    }
  ];

  return (
    <div className="section animate-fade-in-up delay-200">
      <h2 style={{ textAlign: 'center', marginBottom: '24px', fontSize: '1.5rem' }}>Bidang Layanan</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {services.map((svc, i) => (
          <div key={i} className="glass-panel" style={{ padding: '20px', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
            <div style={{ 
              background: 'rgba(212, 175, 55, 0.1)', 
              padding: '12px', 
              borderRadius: '12px',
              color: 'var(--color-gold)'
            }}>
              {svc.icon}
            </div>
            <div>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '6px', color: 'var(--color-gold-light)' }}>{svc.title}</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>{svc.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
