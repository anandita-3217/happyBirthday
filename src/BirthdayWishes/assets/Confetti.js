import React, { useEffect, useState } from 'react';

export default function Confetti() {
  const [pieces, setPieces] = useState([]);

  useEffect(() => {
    const confetti = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 3 + Math.random() * 2,
      color: ['#ff6b9d', '#ffd93d', '#6bcf7f', '#4d9de0', '#bb6bd9'][Math.floor(Math.random() * 5)],
      size: Math.random() * 8 + 4
    }));
    setPieces(confetti);
  }, []);

  return (
    <>
      <style>{`
        @keyframes fall {
          to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
      
      {pieces.map(piece => (
        <div
          key={piece.id}
          style={{
            position: 'fixed',
            left: `${piece.left}%`,
            top: '-20px',
            width: `${piece.size}px`,
            height: `${piece.size}px`,
            backgroundColor: piece.color,
            borderRadius: Math.random() > 0.5 ? '50%' : '0',
            animation: `fall ${piece.duration}s linear ${piece.delay}s infinite`,
            zIndex: 1
          }}
        />
      ))}
    </>
  );
}