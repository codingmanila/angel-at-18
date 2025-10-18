import { useState, useEffect } from "react";
import { Divider } from "antd";
import { styled } from "@stitches/react";

// Define a type for the Countdown component's props
type CountdownProps = {
  targetDate: string;
};

// Define a type for the shape of the `timeLeft` object
type TimeLeft = {
  days: number;
  hrs: number;
  mins: number;
  secs: number;
};

// The component that displays the countdown timer
const Countdown = ({ targetDate }: CountdownProps) => {
  const calculateTimeLeft = (): Partial<TimeLeft> => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft: Partial<TimeLeft> = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hrs: Math.floor((difference / (1000 * 60 * 60)) % 24),
        mins: Math.floor((difference / 1000 / 60) % 60),
        secs: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents: JSX.Element[] = [];

  (Object.keys(timeLeft) as (keyof TimeLeft)[]).forEach((interval) => {
    if (timeLeft[interval] !== undefined) {
      timerComponents.push(
        <div key={interval}>
          <span className="digit">{timeLeft[interval]?.toString().padStart(2, "0")}</span>
          <span className="label">{interval}</span>
        </div>
      );
    }
  });

  return (
    <CountdownWrapper>
      {timerComponents.length ? (
        timerComponents
      ) : (
        <span>Time&apos;s up!</span>
      )}
    </CountdownWrapper>
  );
};

// Corrected styles for the countdown display, including the Italianno font
const CountdownWrapper = styled("div", {
  display: "flex",
  justifyContent: "center",
  gap: "10px",
  color: "#fff",
  fontFamily: "'Italianno', cursive", // Italianno font
  fontSize: "2vh", // Increased font size for better visibility with the new font
  fontWeight: "normal", // Script fonts often look best with normal weight
  opacity: 0.9,
  // Positioned at the bottom of its parent, the image container
  position: "absolute",
  bottom: "0",
  left: "0",
  right: "0",
  padding: "10px",
  backgroundColor: "rgba(0, 0, 0, 0.5)", // Added for better readability on various images
  zIndex: 3,
  
  // Custom styles for the digits and labels for improved appearance
  "& .digit": {
    fontSize: "3vh", // Slightly larger digits to stand out
  },
  "& .label": {
    fontSize: "1vh", // Smaller label text
  },
  "& div": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});

const Wrapper = styled("div", {
  background: "#efebe9",
  backgroundImage: "url(./assets/GroovePaper.png)",
  width: "100%",
  textAlign: "center",
  position: "relative",
  minHeight: "240px",
});

const VideoBackground = styled("video", {
  backgroundColor: "#aeb8b3 !important",
  opacity: 0.9,
  objectFit: "cover",
  objectPosition: "center center",
  width: "100%",
  height: "100%",
  position: "absolute",
  top: 0,
  left: 0,
  zIndex: 1,
});

const ContentWrapper = styled("div", {
  position: "relative",
  zIndex: 2,
  padding: "20px",
});

const ImageOverlayContainer = styled("div", {
  position: "relative",
  display: "inline-block",
});

const Title = styled("p", {
  fontSize: "2vh",
  fontWeight: "bold",
  opacity: 0.85,
  marginBottom: 0,
});

const Image = styled("img", {
  width: "100%",
  maxWidth: 1024,
  margin: "auto",
  display: "block",
});

export default function Image2nd() {
  const targetDate = "November 30, 2025 15:29:59";

  return (
    <Wrapper >
      <VideoBackground autoPlay loop muted playsInline={true}>
        <source src="./assets/BackgroundVideo.mp4" type="video/mp4" />
      </VideoBackground>
      <ContentWrapper>
        <Divider plain style={{ marginTop: 0, marginBottom: 0 }} />
        <ImageOverlayContainer>
          <Countdown targetDate={targetDate} />
          <Image src="./assets/Gallery_Photo_A5.JPG" alt="Gallery Photo" />
        </ImageOverlayContainer>
      </ContentWrapper>
    </Wrapper>
  );
}
