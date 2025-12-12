import React, { useState } from 'react';

function Reviews() {
  // Data Dummy (Pura-pura dari database)
  const [daftarUlasan, setDaftarUlasan] = useState([
    { nama: "Budi Santoso", text: "Kopinya nendang banget! Cocok buat lembur.", rating: 5 },
    { nama: "Siti Aminah", text: "Pengiriman cepat, aroma gajah tubruknya wangi.", rating: 5 },
    { nama: "Rudi Hartono", text: "Latte-nya creamy, pas di lidah.", rating: 4 },
  ]);

  // State untuk form input
  const [namaBaru, setNamaBaru] = useState('');
  const [komenBaru, setKomenBaru] = useState('');
  const [ratingBaru, setRatingBaru] = useState(5);

  // Fungsi mengubah angka jadi bintang
  const renderBintang = (jumlah) => "⭐".repeat(jumlah);

  // Fungsi Simpan (Hanya di layar browser sementara)
  const handleKirim = (e) => {
    e.preventDefault();

    if (!namaBaru || !komenBaru) {
      alert("Isi nama dan komentarnya dulu ya!");
      return;
    }

    // Masukkan data baru ke daftar yang sudah ada
    const ulasanBaru = {
      nama: namaBaru,
      text: komenBaru,
      rating: parseInt(ratingBaru)
    };

    setDaftarUlasan([...daftarUlasan, ulasanBaru]);

    // Reset form
    setNamaBaru('');
    setKomenBaru('');
    setRatingBaru(5);
    
    alert("Mantap! Ulasanmu berhasil ditambahkan (Mode Demo).");
  };

  return (
    <div className="review-section">
      <h2 style={{marginBottom: '30px'}}>Apa Kata Mereka?</h2>

      {/* Tampilan Review */}
      <div className="review-grid">
        {daftarUlasan.map((item, index) => (
          <div key={index} className="review-card">
            <div className="stars">{renderBintang(item.rating)}</div>
            <p>"{item.text}"</p>
            <h4 style={{marginTop: '15px', color: '#6d4c41'}}>- {item.nama}</h4>
          </div>
        ))}
      </div>

      {/* Form Input */}
      <div className="review-form-container">
        <h3>✍️ Tulis Ulasanmu</h3>
        <form onSubmit={handleKirim}>
          <div className="form-group">
            <label>Nama Kamu:</label>
            <input 
              type="text" className="form-input" placeholder="Isi nama..."
              value={namaBaru} onChange={(e) => setNamaBaru(e.target.value)} 
            />
          </div>
          <div className="form-group">
            <label>Rating:</label>
            <select className="form-select" value={ratingBaru} onChange={(e) => setRatingBaru(e.target.value)}>
              <option value="5">⭐⭐⭐⭐⭐</option>
              <option value="4">⭐⭐⭐⭐</option>
              <option value="3">⭐⭐⭐</option>
            </select>
          </div>
          <div className="form-group">
            <label>Komentar:</label>
            <textarea className="form-textarea" placeholder="Tulis pendapatmu..."
              value={komenBaru} onChange={(e) => setKomenBaru(e.target.value)} 
            ></textarea>
          </div>
          <button type="submit" className="btn-submit">Kirim Ulasan 🚀</button>
        </form>
      </div>
    </div>
  );
}

export default Reviews;