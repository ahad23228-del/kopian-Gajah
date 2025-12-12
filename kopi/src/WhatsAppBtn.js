import React from 'react';

function WhatsAppBtn() {
  return (
    <a 
      href="https://wa.me/6281234567890?text=Halo%20Kopi%20Gajah,%20saya%20mau%20pesan" 
      className="wa-float"
      target="_blank"
      rel="noopener noreferrer"
    >
      {/* Kita pakai emoji biar gampang (bisa diganti icon) */}
      💬
    </a>
  );
}

export default WhatsAppBtn;