import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    // Kita gabungkan class container (agar rapi) dan home-container (untuk background tekstur)
    <div className="container home-container">
      <div style={{textAlign: 'center', padding: '50px 0'}}>
        <h1 style={{fontSize: '3rem', marginBottom: '10px'}}>Selamat Datang di Kedai Kopi Gajah 🐘☕</h1>
        <p style={{fontSize: '1.2rem', marginBottom: '40px'}}>Rasakan kekuatan cita rasa kopi asli Nusantara.</p>
        
        {/* --- AREA GAMBAR 3 KOLOM --- */}
        <div className="hero-wrapper">
          
          {/* 1. GAMBAR KIRI (View Atas) */}
          <img 
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&h=900&q=80" 
            alt="Secangkir Kopi Hangat"
            className="side-img"
            style={{marginTop: '50px', objectFit: 'cover'}} 
          />

          {/* 2. GAMBAR TENGAH (Utama) */}
          <div style={{flex: 1, maxWidth: '600px'}}> 
            <img 
              src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=800&q=80" 
              alt="Kopi Gajah Utama"
              className="img-animate" 
            />
          </div>

          {/* 3. GAMBAR KANAN (Latte Art) */}
          <img 
            src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=400&q=80" 
            alt="Latte Art"
            className="side-img"
            style={{marginTop: '-50px'}} 
          />

        </div>
        {/* -------------------------------- */}

        <br />
        
        <button 
          onClick={() => navigate('/products')} 
          className="btn-liquid"
        >
         <span>PESAN SEKARANG</span> {/* Tambahkan span di sini */}
        </button>
      </div>
    </div>
  );
}

export default Home;