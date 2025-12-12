import React from 'react';

// Kita terima 'fungsiTambah' dari App.js
function Products({ fungsiTambah }) {
  
  const produk = [
    { 
      id: 1, 
      nama: 'Kopi Gajah Tubruk', 
      harga: 15000, 
      hargaTampil: 'Rp 15.000',
      desc: 'Hitam pekat, ampas turun cepat.',
      image: 'https://images.pexels.com/photos/4264049/pexels-photo-4264049.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    { 
      id: 2, 
      nama: 'Espresso Gajah', 
      harga: 18000,
      hargaTampil: 'Rp 18.000',
      desc: 'Satu shot murni booster energi.',
      image: 'https://images.pexels.com/photos/3020919/pexels-photo-3020919.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    { 
      id: 3, 
      nama: 'Es Kopi Gajah Susu', 
      harga: 22000,
      hargaTampil: 'Rp 22.000',
      desc: 'Gula aren asli dan susu creamy.',
      image: 'https://images.pexels.com/photos/11373964/pexels-photo-11373964.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    { 
      id: 4, 
      nama: 'Gajah Cold Brew', 
      harga: 25000,
      hargaTampil: 'Rp 25.000',
      desc: 'Diseduh dingin 12 jam. Segar.',
      image: 'https://images.pexels.com/photos/4790061/pexels-photo-4790061.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
  ];

  // Fungsi pengaman biar ga error
  const handleKlikBeli = (item) => {
    if (fungsiTambah) {
      fungsiTambah(item); // Panggil fungsi dari App.js
    } else {
      console.error("Fungsi tambah belum nyambung!");
      alert("Maaf, terjadi kesalahan koneksi ke keranjang. Coba refresh halaman.");
    }
  };

  return (
    <div className="container">
      <h2 style={{textAlign: 'center', marginBottom: '30px', fontSize: '2.5rem'}}>
        Menu Andalan Kami
      </h2>
      
      <div className="product-grid">
        {produk.map((item) => (
          <div key={item.id} className="card product-card">
            
            <div className="img-wrapper">
              <img 
                src={item.image} 
                alt={item.nama} 
                className="product-img"
                onError={(e) => {e.target.src = 'https://cdn-icons-png.flaticon.com/512/751/751621.png'}} 
              />
              {item.id === 3 && <span className="badge">Paling Laris</span>}
            </div>

            <div style={{padding: '15px'}}>
              <h3>{item.nama}</h3>
              <p style={{color: '#777', fontSize: '0.9rem', minHeight: '40px'}}>
                {item.desc}
              </p>
              <p style={{fontSize: '1.2rem', fontWeight: 'bold', color: '#6d4c41'}}>
                {item.hargaTampil}
              </p>
              
              <button 
                className="btn-beli"
                onClick={() => handleKlikBeli(item)}
              >
                Tambah ke Keranjang 🛒
              </button>
              
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;