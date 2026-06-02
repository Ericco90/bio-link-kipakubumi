import { useState, useEffect } from 'react';
import { ChevronRight, GraduationCap, Flame, Sparkles, Store, Music, Users, Camera, Video, Globe, MessageCircle, X } from 'lucide-react';

const globSpiritualPraktek = import.meta.glob('../assets/privat spiritual siap praktek/*.{jpg,jpeg,png}', { eager: true, query: '?url', import: 'default' });
const imagesSpiritualPraktek = Object.values(globSpiritualPraktek);

const globPaketPadepokan = import.meta.glob('../assets/privat paket padepokan/*.{jpg,jpeg,png}', { eager: true, query: '?url', import: 'default' });
const imagesPaketPadepokan = Object.values(globPaketPadepokan);

const globPaketKeilmuan = import.meta.glob('../assets/privat paket keilmuan/*.{jpg,jpeg,png}', { eager: true, query: '?url', import: 'default' });
const imagesPaketKeilmuan = Object.values(globPaketKeilmuan);

const globKeilmuanSpiritual = import.meta.glob('../assets/privat keilmuan/*.{jpg,jpeg,png}', { eager: true, query: '?url', import: 'default' });
const imagesKeilmuanSpiritual = Object.values(globKeilmuanSpiritual);

const Links = () => {
  const [activeGallery, setActiveGallery] = useState(null);

  // Mengunci scroll background ketika modal terbuka
  useEffect(() => {
    if (activeGallery) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; }
  }, [activeGallery]);

  const linksData = [
    {
      title: 'Private Spiritual Langsung Praktek',
      desc: 'Belajar spiritual secara langsung dengan metode yang mudah dipahami dan diterapkan.',
      btnText: 'Lihat Materi & Harga',
      icon: <GraduationCap size={20} />,
      images: imagesSpiritualPraktek,
      waUrl: 'https://wa.me/6285123722019?text=Halo%20Ki%20Paku%20Bumi,%20saya%20tertarik%20untuk%20mengikuti%20kelas%20Private%20Spiritual%20Langsung%20Praktek.%20Mohon%20info%20lebih%20lanjut.'
    },
    {
      title: 'Private Paket Gemblengan (Padepokan)',
      desc: 'Program pembinaan intensif untuk mempercepat perkembangan spiritual.',
      btnText: 'Lihat Materi & Harga',
      icon: <Flame size={20} />,
      images: imagesPaketPadepokan,
      waUrl: 'https://wa.me/6285123722019?text=Halo%20Ki%20Paku%20Bumi,%20saya%20tertarik%20untuk%20mengikuti%20Private%20Paket%20Gemblengan.%20Mohon%20info%20lebih%20lanjut.'
    },
    {
      title: 'Private Paket Keilmuan',
      desc: 'Pendalaman keilmuan spiritual secara terpadu dalam satu paket khusus.',
      btnText: 'Lihat Materi & Harga',
      icon: <Sparkles size={20} />,
      images: imagesPaketKeilmuan,
      waUrl: 'https://wa.me/6285123722019?text=Halo%20Ki%20Paku%20Bumi,%20saya%20tertarik%20untuk%20mengikuti%20Private%20Paket%20Keilmuan.%20Mohon%20info%20lebih%20lanjut.'
    },
    {
      title: 'Private Keilmuan Spiritual',
      desc: 'Pendalaman keilmuan spiritual secara bertahap dan terarah.',
      btnText: 'Lihat Materi & Harga',
      icon: <GraduationCap size={20} />,
      images: imagesKeilmuanSpiritual,
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
      url: 'https://www.tiktok.com/@kipakubumi'
    },
    {
      title: 'Facebook KI PAKU BUMI',
      desc: 'Informasi kegiatan dan komunitas spiritual.',
      btnText: 'Kunjungi',
      icon: <Users size={20} />,
      url: 'https://web.facebook.com/sastra.ningrat.37?_rdc=1&_rdr#'
    },
    {
      title: 'Instagram KI PAKU BUMI',
      desc: 'Konten edukasi dan dokumentasi kegiatan.',
      btnText: 'Kunjungi',
      icon: <Camera size={20} />,
      url: 'https://www.instagram.com/kipakubumi81'
    },
    {
      title: 'YouTube KI PAKU BUMI',
      desc: 'Video pembelajaran spiritual dan kajian Nusantara.',
      btnText: 'Tonton Sekarang',
      icon: <Video size={20} />,
      url: 'https://www.youtube.com/@kipakubumichannel'
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
            
            {link.images ? (
              <button 
                onClick={() => setActiveGallery({ title: link.title, images: link.images })} 
                className="premium-btn w-full text-left" 
                style={{ background: 'transparent', border: 'none', padding: 0, outline: 'none' }}
              >
                <div className="premium-btn" style={{ width: '100%', boxSizing: 'border-box' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div className="icon-wrapper">
                      {link.icon}
                    </div>
                    <span>{link.btnText}</span>
                  </div>
                  <ChevronRight size={20} style={{ color: 'var(--color-gold)' }} />
                </div>
              </button>
            ) : (
              <a href={link.url} target="_blank" rel="noopener noreferrer" className="premium-btn">
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div className="icon-wrapper">
                    {link.icon}
                  </div>
                  <span>{link.btnText}</span>
                </div>
                <ChevronRight size={20} style={{ color: 'var(--color-gold)' }} />
              </a>
            )}

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

      {/* Gallery Modal Popup */}
      {activeGallery && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.95)',
          zIndex: 9999,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          overflowY: 'auto'
        }}>
          {/* Header Sticky */}
          <div style={{
            width: '100%',
            position: 'sticky',
            top: 0,
            backgroundColor: 'rgba(15, 15, 15, 0.9)',
            backdropFilter: 'blur(10px)',
            borderBottom: '1px solid rgba(212, 175, 55, 0.3)',
            zIndex: 10,
            padding: '16px',
            display: 'flex',
            justifyContent: 'center',
            boxShadow: '0 4px 20px rgba(0,0,0,0.5)'
          }}>
            <div style={{ width: '100%', maxWidth: '600px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 style={{ color: 'var(--color-gold-light)', margin: 0, fontSize: '1.1rem', fontWeight: 'bold' }}>
                {activeGallery.title}
              </h3>
              <button 
                onClick={() => setActiveGallery(null)}
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  borderRadius: '50%',
                  width: '36px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  cursor: 'pointer',
                  flexShrink: 0
                }}
              >
                <X size={20} />
              </button>
            </div>
          </div>
          
          {/* Images List */}
          <div style={{ 
            width: '100%', 
            maxWidth: '600px', 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '12px',
            padding: '20px'
          }}>
            {activeGallery.images.map((imgUrl, idx) => (
              <img 
                key={idx} 
                src={imgUrl} 
                alt={`${activeGallery.title} - page ${idx + 1}`} 
                style={{ 
                  width: '100%', 
                  height: 'auto', 
                  borderRadius: '12px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                  border: '1px solid rgba(255,255,255,0.1)'
                }} 
              />
            ))}
            
            <div style={{ textAlign: 'center', padding: '30px 0', color: 'var(--text-muted)' }}>
              Akhir dari materi.
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Links;
