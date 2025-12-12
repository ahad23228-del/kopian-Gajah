import React, { useState } from 'react';

function Payment() {
  // State untuk mengatur Tab (Transfer atau QRIS)
  const [metodeBayar, setMetodeBayar] = useState('transfer'); 
  
  // State untuk menyimpan foto bukti
  const [previewFoto, setPreviewFoto] = useState(null);

  // Fungsi saat user memilih foto dari galeri
  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Membuat link sementara agar foto bisa dilihat di layar
      const imageUrl = URL.createObjectURL(file);
      setPreviewFoto(imageUrl);
    }
  };

  const handleKirim = () => {
    if (!previewFoto) {
      alert("⚠️ Jangan lupa upload bukti transfernya dulu ya!");
    } else {
      alert("✅ Terima kasih! Bukti pembayaran sudah kami terima. Pesanan segera diproses.");
    }
  };

  return (
    <div className="container">
      <h2 style={{textAlign: 'center', marginBottom: '30px'}}>Informasi Pembayaran</h2>

      <div className="payment-wrapper">
        
        {/* 1. PILIHAN METODE (TAB) */}
        <div className="payment-methods">
          <button 
            className={`method-btn ${metodeBayar === 'transfer' ? 'active' : ''}`}
            onClick={() => setMetodeBayar('transfer')}
          >
            🏦 Transfer Bank
          </button>
          <button 
            className={`method-btn ${metodeBayar === 'qris' ? 'active' : ''}`}
            onClick={() => setMetodeBayar('qris')}
          >
            📱 QRIS (Scan)
          </button>
        </div>

        {/* 2. AREA INFORMASI (Berubah sesuai tombol yang diklik) */}
        <div style={{textAlign: 'center', padding: '20px', border: '1px solid #eee', borderRadius: '10px'}}>
          
          {metodeBayar === 'transfer' ? (
            // --- INI DATA LAMA KAMU (TETAP ADA) ---
            <div>
              <h3 style={{color: '#003d79', margin: '0'}}>Bank BCA</h3>
              <p style={{fontSize: '0.9rem', color: '#666'}}>Silakan transfer ke:</p>
              <h1 style={{fontSize: '2rem', margin: '10px 0', letterSpacing: '2px'}}>123-456-7890</h1>
              <p style={{fontWeight: 'bold'}}>A/N: Kopi Gajah Official</p>
              <hr style={{margin: '20px 0', border: '0', borderTop: '1px dashed #ccc'}}/>
              <p>Konfirmasi WA: <strong>0812-3456-7890</strong></p>
            </div>
            // ---------------------------------------
          ) : (
            // --- INI FITUR BARU (QRIS) ---
            <div>
              <h3>Scan QRIS</h3>
              <p>Bisa pakai GoPay, OVO, Dana, ShopeePay, atau Mobile Banking.</p>
              {/* Generate QR Code Otomatis */}
              <img 
                src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=KopiGajahPayment" 
                alt="QR Code" 
                style={{margin: '10px', border: '1px solid #ddd', padding: '10px', borderRadius: '10px'}}
              />
              <p style={{fontSize: '0.8rem', color: '#888'}}>NMID: ID1020304050</p>
            </div>
          )}

        </div>

        {/* 3. AREA UPLOAD BUKTI (Sesuai Request) */}
        <div style={{marginTop: '30px'}}>
          <h4 style={{marginBottom: '10px'}}>📸 Upload Bukti Pembayaran</h4>
          
          <div className="upload-box">
            {/* Input File "Rahasia" (Transparan tapi berfungsi) */}
            <input 
              type="file" 
              accept="image/*" 
              className="input-file-hidden"
              onChange={handleUpload}
            />

            {/* Tampilan Kondisional (Kalau belum ada foto vs Kalau sudah ada) */}
            {!previewFoto ? (
              <div>
                <span style={{fontSize: '2.5rem'}}>📂</span>
                <p style={{margin: '5px 0', fontWeight: 'bold'}}>Klik di sini untuk pilih foto</p>
                <p style={{fontSize: '0.8rem', color: '#999'}}>Mendukung JPG, PNG, JPEG</p>
              </div>
            ) : (
              <div>
                <p style={{color: 'green', fontWeight: 'bold'}}>File Siap Dikirim! ✅</p>
                <img src={previewFoto} alt="Preview Bukti" className="preview-image" />
                <p style={{fontSize: '0.8rem', marginTop: '10px'}}>(Klik gambar untuk ganti foto lain)</p>
              </div>
            )}
          </div>

          <button 
            className="btn-beli" 
            style={{marginTop: '20px', width: '100%', fontSize: '1.1rem'}}
            onClick={handleKirim}
          >
            Kirim Bukti Pembayaran 🚀
          </button>
        </div>

      </div>
    </div>
  );
}

export default Payment;