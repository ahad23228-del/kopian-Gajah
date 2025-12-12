import React from 'react';
import { useNavigate } from 'react-router-dom';

function Cart({ keranjang }) {
  const navigate = useNavigate();

  // Hitung Total Harga
  const totalBayar = keranjang.reduce((total, item) => total + item.harga, 0);

  // Format Rupiah
  const formatRupiah = (angka) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(angka);
  };

  if (keranjang.length === 0) {
    return (
      <div className="container" style={{textAlign: 'center', padding: '50px'}}>
        <h2>Keranjangmu Masih Kosong 😢</h2>
        <p>Yuk, pesan kopi dulu biar semangat!</p>
        <button className="btn-beli" onClick={() => navigate('/products')} style={{maxWidth: '200px'}}>
          Lihat Menu
        </button>
      </div>
    );
  }

  return (
    <div className="container">
      <h2 style={{marginBottom: '30px'}}>🛒 Keranjang Belanjaan Kamu</h2>

      <div style={{display: 'flex', flexDirection: 'column', gap: '15px'}}>
        {keranjang.map((item, index) => (
          <div key={index} style={{
            display: 'flex', 
            alignItems: 'center', 
            background: 'white', 
            padding: '15px', 
            borderRadius: '10px',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
          }}>
            {/* Foto Kecil */}
            <img 
              src={item.image} 
              alt={item.nama} 
              style={{width: '80px', height: '80px', objectFit: 'cover', borderRadius: '10px', marginRight: '20px'}}
            />
            
            {/* Info Produk */}
            <div style={{flex: 1}}>
              <h4 style={{margin: '0 0 5px 0'}}>{item.nama}</h4>
              <p style={{margin: 0, color: '#6d4c41', fontWeight: 'bold'}}>
                {formatRupiah(item.harga)}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Bagian Total & Checkout */}
      <div style={{
        marginTop: '30px', 
        padding: '20px', 
        background: '#fff3e0', 
        borderRadius: '10px', 
        textAlign: 'right'
      }}>
        <h3>Total Pembayaran: {formatRupiah(totalBayar)}</h3>
        <button 
          className="btn-beli" 
          style={{fontSize: '1.2rem', padding: '15px 40px', background: '#2e7d32'}}
          onClick={() => navigate('/payment')}
        >
          Lanjut Bayar 💸
        </button>
      </div>
    </div>
  );
}

export default Cart;