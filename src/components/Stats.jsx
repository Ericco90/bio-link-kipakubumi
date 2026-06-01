import React from 'react';
import { Users, Clock, MessageCircle } from 'lucide-react';

const Stats = () => {
  const statsData = [
    { icon: <Users size={24} />, value: '1000+', label: 'Peserta Binaan' },
    { icon: <Clock size={24} />, value: '20+', label: 'Tahun Pengalaman' },
    { icon: <MessageCircle size={24} />, value: 'Ribuan', label: 'Konsultasi Spiritual' },
  ];

  return (
    <div className="section animate-fade-in-up delay-100">
      <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
        {statsData.map((stat, index) => (
          <div 
            key={index} 
            className="glass-panel" 
            style={{ 
              flex: '1', 
              minWidth: '100px', 
              padding: '16px 8px', 
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <div style={{ color: 'var(--color-gold)' }}>
              {stat.icon}
            </div>
            <h3 style={{ fontSize: '1.2rem', margin: '0' }}>{stat.value}</h3>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', margin: '0' }}>{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
