import React from 'react';
import { useNavigate } from 'react-router-dom';

function About() {
  const navigate = useNavigate();

  return (
    <div className="about-page-wrapper">
      
      {/* --- BAGIAN 1: BANNER ATAS --- */}
      <div className="about-banner">
        <div className="banner-overlay"></div>
        <div className="banner-text">
          <h1>Kisah Kopi Gajah</h1>
          <p>Lebih dari sekadar minuman, ini adalah warisan.</p>
        </div>
      </div>

      <div className="container">
        
        {/* --- BAGIAN 2: ASAL USUL (Gambar Kiri, Teks Kanan) --- */}
        <div className="about-section">
          <img 
            src="https://images.unsplash.com/photo-1610632380989-680fe40816c6?auto=format&fit=crop&w=800&q=80" 
            alt="Tangan Petani Kopi" 
            className="about-img"
          />
          <div className="about-content">
            <h2>🌱 Asal Mula Kami</h2>
            <p>
              Perjalanan Kopi Gajah dimulai dari tanah vulkanik subur di dataran tinggi Nusantara. 
              Kami percaya bahwa kopi terbaik tidak lahir di pabrik, melainkan dirawat dengan cinta oleh 
              tangan-tangan terampil para petani lokal.
            </p>
            <p>
              Kami menjalin kemitraan langsung (<em>direct trade</em>) untuk memastikan setiap biji yang kami 
              pilih adalah yang terbaik, sekaligus menyejahterakan komunitas petani di Sumatera dan Jawa.
            </p>
          </div>
        </div>

        {/* --- BAGIAN 3: FILOSOFI (Teks Kiri, Gambar Kanan) --- */}
        {/* Perhatikan className="reverse" untuk membalik posisi */}
        <div className="about-section reverse">
          <img 
            src="https://images.unsplash.com/photo-1575424909138-46b05e5919ec?auto=format&fit=crop&w=800&q=80" 
            alt="Tanaman Kopi Kuat" 
            className="about-img"
          />
          <div className="about-content">
            <h2>🐘 Filosofi Sang Gajah</h2>
            <p>
              Mengapa Gajah? Bagi kami, Gajah melambangkan <span className="gold-text">Kekuatan</span> yang tenang, 
              <span className="gold-text">Kesabaran</span> yang luar biasa, dan <span className="gold-text">Ingatan</span> yang kuat.
            </p>
            <p>
              Itulah karakter rasa yang ingin kami sajikan dalam setiap cangkir. Kopi yang kuat untuk membangunkan semangat Anda, 
              namun tetap tenang dinikmati, dan meninggalkan jejak rasa yang tak terlupakan di ingatan.
            </p>
          </div>
        </div>

        {/* --- BAGIAN 4: PENUTUP & AJAKAN --- */}
        <div style={{textAlign: 'center', margin: '80px 0'}}>
          <h3 style={{fontSize: '1.8rem', color: '#3e2723'}}>Siap Merasakan Kekuatannya?</h3>
          <p style={{marginBottom: '30px', fontSize: '1.1rem'}}>Jangan hanya membaca kisahnya, rasakan sendiri pengalamannya.</p>
          
          {/* Kita pakai class tombol yang sudah ada di App.css */}
          <button onClick={() => navigate('/products')} className="btn-pesan">
            Lihat Produk Kami
          </button>
        </div>

      </div>
    </div>
  );
}

export default About;