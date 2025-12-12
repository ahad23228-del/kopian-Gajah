import React, { useState, useRef } from 'react';

function Ambiance() {
  const [isPlaying, setIsPlaying] = useState(false);
  
  // Link lagu Jazz santai (Copyright Free)
  const audioUrl = "https://cdn.pixabay.com/download/audio/2022/11/22/audio_febc508520.mp3?filename=coffee-shop-126286.mp3";
  
  const audioRef = useRef(new Audio(audioUrl));

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.volume = 0.5; // Volume 50% biar gak kaget
      audioRef.current.play();
      audioRef.current.loop = true; // Ulang terus
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div 
      className={`music-float ${isPlaying ? 'music-playing' : ''}`} 
      onClick={toggleMusic}
      title={isPlaying ? "Matikan Musik" : "Putar Musik Kafe"}
    >
      {isPlaying ? "🎵" : "🔇"}
    </div>
  );
}

export default Ambiance;