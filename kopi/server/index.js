const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'kopi_gajah_db',
  port: 3307 // <--- TAMBAHKAN BARIS INI
});

db.connect((err) => {
  if (err) console.log('❌ Gagal Konek Database (Cek XAMPP!)', err);
  else console.log('✅ BERHASIL Terhubung ke MySQL XAMPP!');
});

// API Terima Pesanan
app.post('/api/pesan', (req, res) => {
  const { nama, metode, total } = req.body;
  const sql = "INSERT INTO pesanan (nama_pembeli, metode_bayar, total_harga) VALUES (?, ?, ?)";
  
  db.query(sql, [nama, metode, total], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Gagal");
    } else {
      res.send("Sukses");
      console.log(`📦 Pesanan baru dari ${nama}`);
    }
  });
});

app.listen(5000, () => {
  console.log("🚀 Server Backend jalan di port 5000");
});