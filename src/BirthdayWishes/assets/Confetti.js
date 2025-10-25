// import React, { useEffect, useState } from 'react';

// export default function Confetti() {
//   const [pieces, setPieces] = useState([]);

//   useEffect(() => {
//     const confetti = Array.from({ length: 50 }, (_, i) => ({
//       id: i,
//       left: Math.random() * 100,
//       delay: Math.random() * 3,
//       duration: 3 + Math.random() * 2,
//       color: ['#ff6b9d', '#ffd93d', '#6bcf7f', '#4d9de0', '#bb6bd9'][Math.floor(Math.random() * 5)],
//       size: Math.random() * 8 + 4
//     }));
//     setPieces(confetti);
//   }, []);

//   return (
//     <>
//       <style>{`
//         @keyframes fall {
//           to {
//             transform: translateY(100vh) rotate(360deg);
//             opacity: 0;
//           }
//         }
//       `}</style>
      
//       {pieces.map(piece => (
//         <div
//           key={piece.id}
//           style={{
//             position: 'fixed',
//             left: `${piece.left}%`,
//             top: '-20px',
//             width: `${piece.size}px`,
//             height: `${piece.size}px`,
//             backgroundColor: piece.color,
//             borderRadius: Math.random() > 0.5 ? '50%' : '0',
//             animation: `fall ${piece.duration}s linear ${piece.delay}s infinite`,
//             zIndex: 1
//           }}
//         />
//       ))}
//     </>
//   );
// }
import React, { useEffect, useState } from 'react';

export default function Confetti({ originX = '50%', originY = '50%' }) {
  const [pieces, setPieces] = useState([]);

  useEffect(() => {
    const confetti = Array.from({ length: 100 }, (_, i) => {
      const angle = (Math.PI * 2 * i) / 100;
      const velocity = 200 + Math.random() * 300;
      
      return {
        id: i,
        angle: angle,
        velocity: velocity,
        color: ['#ff6b9d', '#ffd93d', '#6bcf7f', '#4d9de0', '#bb6bd9', '#ff8c42'][Math.floor(Math.random() * 6)],
        size: Math.random() * 10 + 5,
        duration: 1.5 + Math.random() * 1
      };
    });
    setPieces(confetti);
  }, []);

  return (
    <>
      <style>{`
        @keyframes burst {
          0% {
            transform: translate(-50%, -50%) translate(0, 0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) translate(var(--tx), var(--ty)) rotate(720deg);
            opacity: 0;
          }
        }
      `}</style>
      
      {pieces.map(piece => {
        const tx = Math.cos(piece.angle) * piece.velocity;
        const ty = Math.sin(piece.angle) * piece.velocity;
        
        return (
          <div
            key={piece.id}
            style={{
              position: 'fixed',
              left: originX,
              top: originY,
              width: `${piece.size}px`,
              height: `${piece.size}px`,
              backgroundColor: piece.color,
              borderRadius: Math.random() > 0.5 ? '50%' : '0',
              '--tx': `${tx}px`,
              '--ty': `${ty}px`,
              animation: `burst ${piece.duration}s ease-out forwards`,
              zIndex: 1,
              pointerEvents: 'none'
            }}
          />
        );
      })}
    </>
  );
}