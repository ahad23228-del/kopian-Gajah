import React, { useState } from 'react';

function CoffeeQuiz() {
  const [step, setStep] = useState(0); // 0: Start, 1: Tanya 1, 2: Hasil

  // Logika sederhana
  const [hasil, setHasil] = useState("");

  const pilih = (tipe) => {
    if (tipe === 'kuat') {
      setHasil("☕ Kopi Gajah Tubruk (Paling Kuat!)");
    } else if (tipe === 'manis') {
      setHasil("🥛 Es Kopi Gajah Susu (Manis & Creamy)");
    } else {
      setHasil("🥤 Cold Brew (Segar & Ringan)");
    }
    setStep(2); // Lompat ke hasil
  };

  return (
    <div className="container">
      <div className="quiz-container">
        
        {step === 0 && (
          <div>
            <h2>Bingung Pilih Kopi? 🤔</h2>
            <p>Jawab pertanyaan singkat, kami carikan yang pas buat kamu!</p>
            <button className="quiz-btn" onClick={() => setStep(1)}>Mulai Quiz</button>
          </div>
        )}

        {step === 1 && (
          <div>
            <h3>Kamu tipe yang mana?</h3>
            <button className="quiz-btn" onClick={() => pilih('kuat')}>💪 Butuh Melek (Kuat)</button>
            <button className="quiz-btn" onClick={() => pilih('manis')}>🍰 Suka Manis-Manis</button>
            <button className="quiz-btn" onClick={() => pilih('segar')}>❄️ Pengen yang Segar</button>
          </div>
        )}

        {step === 2 && (
          <div>
            <h3>Rekomendasi Kami:</h3>
            <h1 style={{color: '#ffecb3'}}>{hasil}</h1>
            <button className="quiz-btn" onClick={() => setStep(0)}>Coba Lagi</button>
          </div>
        )}

      </div>
    </div>
  );
}

export default CoffeeQuiz;