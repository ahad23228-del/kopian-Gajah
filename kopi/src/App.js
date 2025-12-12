import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

import Home from './Home';
import About from './About';
import Products from './Products';
import Payment from './Payment';
import Footer from './Footer'; 
import WhatsAppBtn from './WhatsAppBtn';
import Reviews from './Reviews';
import Ambiance from './Ambiance';
import CoffeeQuiz from './CoffeeQuiz';
import Cart from './Cart';

// Import Saklar Mode Malam
import DarkModeToggle from './DarkModeToggle';

function App() {
  const [keranjang, setKeranjang] = useState([]);

  const tambahKeKeranjang = (produk) => {
    const keranjangBaru = [...keranjang, produk];
    setKeranjang(keranjangBaru);
    alert(`Sukses! ${produk.nama} masuk keranjang.`);
  };

  return (
    <Router>
      <div>
        <div className="promo-banner">
          📢 DISKON 20% KHUSUS HARI INI! GUNAKAN KODE: GAJAH20
        </div>

        {/* HAPUS DarkModeToggle YANG DULU ADA DI SINI */}

        <nav>
          <h1>🐘 Kopi Gajah</h1>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">Tentang Kami</Link></li>
            <li><Link to="/products">Produk</Link></li>
            
            {/* Menu Keranjang */}
            <li>
              <Link to="/cart" style={{
                background: '#ff6f00', 
                padding: '8px 15px', 
                borderRadius: '20px', 
                color: 'white',
                textDecoration: 'none',
                fontWeight: 'bold'
              }}>
                🛒 {keranjang.length}
              </Link>
            </li>

            {/* --- POSISI BARU: DI DALAM MENU --- */}
            <li>
              <DarkModeToggle />
            </li>
            {/* ---------------------------------- */}

          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products fungsiTambah={tambahKeKeranjang} />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/cart" element={<Cart keranjang={keranjang} />} />
        </Routes>

        <CoffeeQuiz />
        <Reviews />
        <Ambiance />
        <WhatsAppBtn />
        <Footer />
        
      </div>
    </Router>
  );
}

export default App;