import { useState, useEffect } from 'react';
import { ChevronRight, GraduationCap, Flame, Sparkles, Store, Music, Users, Camera, Video, Globe, MessageCircle, X, Info } from 'lucide-react';

const globSpiritualPraktek = import.meta.glob('../assets/privat spiritual siap praktek/*.{jpg,jpeg,png}', { eager: true, query: '?url', import: 'default' });
const imagesSpiritualPraktek = Object.values(globSpiritualPraktek);

const globPaketPadepokan = import.meta.glob('../assets/privat paket padepokan/*.{jpg,jpeg,png}', { eager: true, query: '?url', import: 'default' });
const imagesPaketPadepokan = Object.values(globPaketPadepokan);

const globPaketKeilmuan = import.meta.glob('../assets/privat paket keilmuan/*.{jpg,jpeg,png}', { eager: true, query: '?url', import: 'default' });
const imagesPaketKeilmuan = Object.values(globPaketKeilmuan);

const globKeilmuanSpiritual = import.meta.glob('../assets/privat keilmuan/*.{jpg,jpeg,png}', { eager: true, query: '?url', import: 'default' });
const imagesKeilmuanSpiritual = Object.values(globKeilmuanSpiritual);

const Links = () => {
  const [activeModal, setActiveModal] = useState(null);

  useEffect(() => {
    if (activeModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; }
  }, [activeModal]);

  const privateMenus = [
    {
      title: 'Privat Keilmuan',
      desc: 'Pendalaman keilmuan spiritual secara bertahap dan terarah.',
      icon: <GraduationCap size={28} />,
      images: imagesKeilmuanSpiritual,
      waUrl: 'https://wa.me/6285123722019?text=Halo%20Ki%20Paku%20Bumi,%20saya%20tertarik%20untuk%20mengikuti%20Private%20Keilmuan.%20Mohon%20info%20lebih%20lanjut.'
    },
    {
      title: 'Privat Paket Keilmuan',
      desc: 'Pendalaman keilmuan spiritual secara terpadu dalam satu paket khusus.',
      icon: <Sparkles size={28} />,
      images: imagesPaketKeilmuan,
      waUrl: 'https://wa.me/6285123722019?text=Halo%20Ki%20Paku%20Bumi,%20saya%20tertarik%20untuk%20mengikuti%20Private%20Paket%20Keilmuan.%20Mohon%20info%20lebih%20lanjut.'
    },
    {
      title: 'Privat Spiritual Langsung Praktek',
      desc: 'Belajar spiritual secara langsung dengan metode yang mudah dipahami dan diterapkan.',
      icon: <GraduationCap size={28} />,
      images: imagesSpiritualPraktek,
      waUrl: 'https://wa.me/6285123722019?text=Halo%20Ki%20Paku%20Bumi,%20saya%20tertarik%20untuk%20mengikuti%20kelas%20Private%20Spiritual%20Langsung%20Praktek.%20Mohon%20info%20lebih%20lanjut.'
    },
    {
      title: 'Privat Khusus Padepokan',
      desc: 'Program pembinaan intensif untuk mempercepat perkembangan spiritual.',
      icon: <Flame size={28} />,
      images: imagesPaketPadepokan,
      waUrl: 'https://wa.me/6285123722019?text=Halo%20Ki%20Paku%20Bumi,%20saya%20tertarik%20untuk%20mengikuti%20Private%20Khusus%20Padepokan.%20Mohon%20info%20lebih%20lanjut.'
    },
    {
      title: 'Pemaharan Produk Media',
      desc: 'Berbagai kebutuhan dan sarana spiritual pilihan.',
      icon: <Store size={28} />,
      url: 'https://produk.ikatanspiritualindonesia.com/'
    }
  ];

  const otherLinks = [
    {
      title: 'Website Resmi',
      desc: 'Informasi organisasi dan legalitas spiritual Indonesia.',
      btnText: 'Buka Website',
      icon: <Globe size={20} />,
      url: '#'
    },
    {
      title: 'Facebook',
      desc: 'Informasi kegiatan dan komunitas spiritual.',
      btnText: 'Kunjungi',
      icon: <Users size={20} />,
      url: 'https://web.facebook.com/sastra.ningrat.37?_rdc=1&_rdr#'
    },
    {
      title: 'Instagram',
      desc: 'Konten edukasi dan dokumentasi kegiatan.',
      btnText: 'Kunjungi',
      icon: <Camera size={20} />,
      url: 'https://www.instagram.com/kipakubumi81'
    },
    {
      title: 'TikTok',
      desc: 'Inspirasi dan edukasi spiritual harian.',
      btnText: 'Kunjungi',
      icon: <Music size={20} />, 
      url: 'https://www.tiktok.com/@kipakubumi'
    },
    {
      title: 'YouTube',
      desc: 'Video pembelajaran spiritual dan kajian Nusantara.',
      btnText: 'Tonton Sekarang',
      icon: <Video size={20} />,
      url: 'https://www.youtube.com/@kipakubumichannel'
    }
  ];

  const renderOtherLinkItem = (link) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '8px' }}>
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
    </div>
  );

  return (
    <div className="section animate-fade-in-up delay-300">
      
      {/* MENU INTI PRIVAT */}
      <div style={{ marginBottom: '50px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '24px', fontSize: '1.5rem', color: 'var(--color-gold-light)' }}>
          KELAS PEMBELAJARAN INTI PRIVAT
        </h2>
        
        {/* Horizontal scroll container with small compact boxes */}
        <div style={{ 
          display: 'flex', 
          overflowX: 'auto', 
          gap: '16px', 
          paddingBottom: '20px',
          WebkitOverflowScrolling: 'touch',
          scrollSnapType: 'x mandatory',
          margin: '0 -20px',
          padding: '0 20px 20px 20px', 
        }}>
          {privateMenus.map((menu, i) => (
            <div 
              key={i} 
              className="glass-panel glow-effect-hover"
              onClick={() => {
                if (menu.images && menu.waUrl) {
                  setActiveModal(menu);
                } else if (menu.url) {
                  window.open(menu.url, '_blank');
                }
              }}
              style={{ 
                minWidth: '130px', 
                width: '130px',
                flex: '0 0 auto', 
                scrollSnapAlign: 'start',
                padding: '20px 12px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
            >
              <div style={{
                width: '56px', 
                height: '56px', 
                borderRadius: '16px', 
                background: 'linear-gradient(145deg, rgba(212, 175, 55, 0.15), rgba(212, 175, 55, 0.05))',
                border: '1px solid rgba(212, 175, 55, 0.3)',
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                color: 'var(--color-gold)',
                marginBottom: '12px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
              }}>
                {menu.icon}
              </div>
              <h4 style={{ 
                fontSize: '0.85rem', 
                color: 'var(--text-main)', 
                lineHeight: '1.3',
                fontWeight: '600',
                marginBottom: '12px'
              }}>
                {menu.title}
              </h4>
              <div style={{
                marginTop: 'auto',
                background: 'rgba(212, 175, 55, 0.15)',
                padding: '4px 10px',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                color: 'var(--color-gold)',
                fontSize: '0.75rem',
                fontWeight: '600',
                border: '1px solid rgba(212, 175, 55, 0.3)'
              }} className="pulse-btn">
                <span>Klik Detail</span>
                <ChevronRight size={14} className="bounce-horizontal" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* INFORMASI DAN LINK LAINNYA */}
      <div>
        <h2 style={{ textAlign: 'center', marginBottom: '24px', fontSize: '1.5rem', color: 'var(--color-gold-light)' }}>
          INFORMASI DAN LINK LAINNYA
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {otherLinks.map((link, i) => (
            <div key={i}>
              {renderOtherLinkItem(link)}
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal Popup */}
      {activeModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(5, 5, 5, 0.98)',
          zIndex: 9999,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          overflowY: 'auto',
          backdropFilter: 'blur(10px)'
        }}>
          {/* Header Sticky */}
          <div style={{
            width: '100%',
            position: 'sticky',
            top: 0,
            backgroundColor: 'rgba(15, 15, 15, 0.95)',
            borderBottom: '1px solid rgba(212, 175, 55, 0.3)',
            zIndex: 10,
            padding: '16px 20px',
            display: 'flex',
            justifyContent: 'center',
            boxShadow: '0 4px 20px rgba(0,0,0,0.8)'
          }}>
            <div style={{ width: '100%', maxWidth: '600px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ color: 'var(--color-gold)' }}>{activeModal.icon}</div>
                <h3 style={{ color: 'var(--color-gold-light)', margin: 0, fontSize: '1.1rem', fontWeight: 'bold' }}>
                  {activeModal.title}
                </h3>
              </div>
              <button 
                onClick={() => setActiveModal(null)}
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
          
          <div style={{ 
            width: '100%', 
            maxWidth: '600px', 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '24px',
            padding: '24px 20px 40px 20px'
          }}>
            
            {/* Description Section */}
            <div className="glass-panel" style={{ padding: '20px', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <Info size={24} style={{ color: 'var(--color-gold)', flexShrink: 0, marginTop: '2px' }} />
              <p style={{ color: 'var(--text-main)', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
                {activeModal.desc}
              </p>
            </div>

            {/* Action Buttons */}
            {activeModal.waUrl && (
              <a href={activeModal.waUrl} target="_blank" rel="noopener noreferrer" className="premium-btn" style={{ 
                background: 'linear-gradient(145deg, rgba(37, 211, 102, 0.15) 0%, rgba(18, 140, 126, 0.1) 100%)',
                borderColor: 'rgba(37, 211, 102, 0.4)',
                justifyContent: 'center',
                boxShadow: '0 4px 20px rgba(37, 211, 102, 0.15)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <MessageCircle size={24} style={{ color: '#25D366' }} />
                  <span style={{ color: '#25D366', fontWeight: '600', fontSize: '1.05rem' }}>Pesan / Konsultasi WhatsApp</span>
                </div>
              </a>
            )}

            <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', margin: '10px 0' }}></div>

            {/* Gallery Images */}
            {activeModal.images && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <h4 style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '4px', textAlign: 'center' }}>Galeri Materi / Brosur</h4>
                {activeModal.images.map((imgUrl, idx) => (
                  <img 
                    key={idx} 
                    src={imgUrl} 
                    alt={`${activeModal.title} - page ${idx + 1}`} 
                    style={{ 
                      width: '100%', 
                      height: 'auto', 
                      borderRadius: '12px',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                      border: '1px solid rgba(212, 175, 55, 0.2)'
                    }} 
                  />
                ))}
                <div style={{ textAlign: 'center', padding: '20px 0', color: 'var(--text-muted)' }}>
                  Akhir dari materi.
                </div>
              </div>
            )}

          </div>
        </div>
      )}
    </div>
  );
};

export default Links;
