import { useState, useRef, useEffect } from 'react';
import { styled, keyframes } from '@stitches/react';

const sparkleAnimation = keyframes({
  '0%': { transform: 'scale(0) rotate(0deg)', opacity: 0 },
  '50%': { transform: 'scale(1.2) rotate(180deg)', opacity: 1 },
  '100%': { transform: 'scale(0) rotate(360deg)', opacity: 0 },
});

const SplashContainer = styled('div', {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  // --- EDITED: Changed solid hex to rgba to apply slight opacity (0.9) ---
  backgroundColor: 'rgba(188, 170, 164, 0.9)', 
  // -----------------------------------------------------------------------
  zIndex: 9999,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer', // Cursor indicates it's clickable
  transition: 'opacity 1s ease-out, visibility 1s ease-out',
  
  variants: {
    isOpen: {
      true: {
        opacity: 0,
        visibility: 'hidden',
      },
      false: {
        opacity: 1,
        visibility: 'visible',
      },
    },
  },
});

const Envelope = styled('div', {
  width: 'fit-content',
  height: 'fit-content',
  backgroundColor: 'transparent',
  border: 'none',
  borderRadius: '0px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  boxShadow: 'none',
});

const EnvelopeImage = styled('img', {
  width: '70%',
  height: 'auto',
  maxWidth: '200px',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
  },
});

const Sparkle = styled('span', {
  position: 'absolute',
  color: '#FFD700',
  fontSize: '2rem',
  fontWeight: 'bold',
  animation: `${sparkleAnimation} 1.5s ease-in-out infinite`,
  
  variants: {
    position: {
      top: { top: '10px', left: '20px', animationDelay: '0s' },
      bottom: { bottom: '10px', right: '20px', animationDelay: '0.5s' },
      center: { top: '50%', left: '50%', transform: 'translate(-50%, -50%)', animationDelay: '1s' },
    }
  }
});


export default function EnvelopeSplash({ onOpen }) {
  const [isOpening, setIsOpening] = useState(false);
  const audioRef = useRef(null); 
  
  // Ref to store the audio element reference persistently
  const audioElRef = useRef(null);

  // Set up the persistent reference on mount
  useEffect(() => {
    if (audioRef.current) {
      audioElRef.current = audioRef.current;
    }
  }, []);

  const handleClick = () => {
    // 1. Start audio IMMEDIATELY (Fixes browser autoplay policy issue)
    if (audioElRef.current) {
      audioElRef.current.play().catch(error => {
        console.log("Audio play failed, relying on subsequent unmount logic:", error); 
      });
    }

    // 2. Start the visual fade-out
    setIsOpening(true);
    
    // 3. Wait for 1 second for the fade to complete.
    setTimeout(() => {
      // 4. FIX: Before calling onOpen (which causes component unmount):
      // Manually move the audio element to the document body. 
      // This ensures the audio element stays in the DOM and continues playing.
      if (audioElRef.current) {
        audioElRef.current.style.display = 'none'; // Hide the audio player controls
        document.body.appendChild(audioElRef.current);
        console.log("Audio element persisted in document.body.");
      }
      
      // 5. Reveal the main content (onOpen)
      onOpen();
    }, 1000); 
  };

  return (
    <SplashContainer isOpen={isOpening} onClick={handleClick}>
      <audio ref={audioRef} loop>
        <source src="./assets/theme_song.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      <Envelope>
        <Sparkle position="top">✨</Sparkle>
        <Sparkle position="bottom">🌟</Sparkle>
        <Sparkle position="center">💫</Sparkle>
        
        <EnvelopeImage 
          src="./assets/Gallery_Photo_13.png"
          alt="Clickable image of an envelope or invitation" 
        />
      </Envelope>
    </SplashContainer>
  );
}
