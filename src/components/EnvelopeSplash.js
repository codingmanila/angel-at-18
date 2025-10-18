import { useState, useRef, useEffect } from 'react';
import { styled, keyframes } from '@stitches/react';

const sparkleAnimation = keyframes({
  '0%': { transform: 'scale(0) rotate(0deg)', opacity: 0 },
  '50%': { transform: 'scale(1.2) rotate(180deg)', opacity: 1 },
  '100%': { transform: 'scale(0) rotate(360deg)', opacity: 0 },
});

// --- Mini Player Styling (Minimalist Icon Only) ---
const MiniPlayerContainer = styled('div', {
  // Only handles fixed positioning for the final element
  position: 'fixed',
  bottom: '20px',
  left: '50%',
  transform: 'translateX(-50%)',
  zIndex: 99999, // Set an extremely high z-index
  // Removed all visual styles (background, border, padding, shadow)
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'opacity 0.5s ease',
  fontFamily: 'Inter, sans-serif',
});

const PlayPauseButton = styled('button', {
  opacity: 0.5,
  background: 'none', 
  border: 'none',
  outline: 'none',
  boxShadow: 'none',
  padding: '0', 
  margin: '0',
  borderRadius: '50%',
  width: '65px', 
  height: '65px',
  display: 'flex', 
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  transition: 'transform 0.15s ease, opacity 0.15s ease',
  
  '&:hover': {
    transform: 'scale(1.1)',
    opacity: 1,
  },
  '&:active': {
    transform: 'scale(0.95)',
  },
  
  '& img': {
    width: '90%',
    height: '90%',
    objectFit: 'contain',
    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.4))', 
  }
});
// ---------------------------

const SplashContainer = styled('div', {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  backgroundColor: 'rgba(188, 170, 164, 0.9)', 
  zIndex: 9999,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
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

const mountMiniPlayer = (audioElement) => {
    // Check if player already exists to prevent duplicates
    if (document.getElementById('mini-music-player')) return;

    // 1. Create the container element and apply Stitches styles
    const container = document.createElement('div');
    container.id = 'mini-music-player';
    container.className = MiniPlayerContainer.className;

    // 2. --- CENTERING FIX (Required for fixed element outside React tree) ---
    container.style.position = 'fixed';
    container.style.bottom = '20px';
    container.style.left = '50%';
    container.style.transform = 'translateX(-50%)';
    container.style.zIndex = '99999'; // Use an extremely high z-index
    // -------------------------
    
    // 3. Create the button element and an img element for the icon
    const button = document.createElement('button');
    button.className = PlayPauseButton.className;
    
    const iconImage = document.createElement('img');
    iconImage.alt = "Play/Pause Music"; 
    iconImage.src = './assets/pause_icon.png';
    
    button.appendChild(iconImage);
    container.appendChild(button);

    // 4. Define click handler
    let isPlaying = true;
    
    button.onclick = () => {
        if (isPlaying) {
            audioElement.pause();
            iconImage.src = './assets/play_icon.png';
        } else {
            audioElement.play().catch(e => console.error("Could not resume audio:", e));
            iconImage.src = './assets/pause_icon.png';
        }
        isPlaying = !isPlaying;
    };

    // 5. Append to body and fade in
    container.style.opacity = 0;
    document.body.appendChild(container);
    
    setTimeout(() => container.style.opacity = 1, 10); 
};


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
    // 1. Start audio IMMEDIATELY
    if (audioElRef.current) {
      audioElRef.current.play().catch(error => {
        console.log("Audio play failed, relying on subsequent unmount logic:", error); 
      });
    }

    // 2. Start the visual fade-out
    setIsOpening(true);
    
    // 3. Wait for 1 second for the fade to complete.
    setTimeout(() => {
      // 4. Persist Audio Element and Mount Mini Player
      if (audioElRef.current) {
        audioElRef.current.style.display = 'none';
        document.body.appendChild(audioElRef.current);
        console.log("Audio element persisted in document.body.");
        
        // MOUNT THE MINI PLAYER HERE
        mountMiniPlayer(audioElRef.current);
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
