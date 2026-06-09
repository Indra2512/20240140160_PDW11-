import React from 'react';
import { HoloLiveIDMember } from './DataMember';
import MemberCard from './MemberCard';

function App() {
  const appStyle = {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f6f9',
    minHeight: '100vh',
    padding: '40px 20px',
    textAlign: 'center'
  };

  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: '30px'
  };

  return (
    <div style={appStyle}>
      <header>
        <h1 style={{ color: '#2c3e50', marginBottom: '10px' }}>
          Database Lore HoloLive ID
        </h1>
        <p style={{ color: '#7f8c8d', fontSize: '16px' }}>
          Mengenal lebih dalam kisah latar belakang talenta Virtual Youtuber HoloLive Indonesia.
        </p>
      </header>

      <main style={containerStyle}>
        {/* Melakukan perulangan data member untuk dirender ke dalam komponen */}
        {HoloLiveIDMember.map((member) => (
          <MemberCard key={member.id} memberData={member} />
        ))}
      </main>

      <footer style={{ marginTop: '50px', color: '#bdc3c7', fontSize: '12px' }}>
        <p>&copy; 2026 Tugas PDW - HoloLive ID Lore Web App</p>
      </footer>
    </div>
  );
}

export default App;