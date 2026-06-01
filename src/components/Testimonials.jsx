import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      text: "Bimbingan yang sangat membantu dalam memahami dunia spiritual secara lebih bijaksana.",
      stars: 5
    },
    {
      text: "Materi mudah dipahami dan dapat langsung dipraktekkan.",
      stars: 5
    },
    {
      text: "Pendampingan legalitas sangat membantu komunitas kami.",
      stars: 5
    }
  ];

  return (
    <div className="section animate-fade-in-up delay-400">
      <h2 style={{ textAlign: 'center', marginBottom: '24px', fontSize: '1.5rem' }}>Apa Kata Mereka</h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {testimonials.map((testi, i) => (
          <div key={i} className="glass-panel" style={{ padding: '24px', textAlign: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '4px', marginBottom: '12px' }}>
              {[...Array(testi.stars)].map((_, idx) => (
                <Star key={idx} size={16} fill="var(--color-gold)" color="var(--color-gold)" />
              ))}
            </div>
            <p style={{ fontStyle: 'italic', fontSize: '0.95rem', lineHeight: '1.6', color: 'var(--text-main)' }}>
              "{testi.text}"
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
