import { styled } from "@stitches/react";
import { Divider } from "antd";

const Wrapper = styled("div", {
  background: "#efebe9",
  backgroundImage: "url(./assets/GroovePaper.png)",
  padding: "0 16px 18px 16px",
  width: "100%",
  textAlign: "center",
});

const Title = styled("p", {
  fontSize: "2vh",
  fontWeight: "bold",
  opacity: 0.85,
  marginBottom: 0,
});

const Content = styled("p", {
  fontSize: "1.5vh",
  lineHeight: 1.75,
  opacity: 0.75,
  marginBottom: 24,
});

const Description = styled("p", {
  fontSize: "1.3vh",
  lineHeight: 1.75,
  opacity: 0.65,
  marginTop: 8,
  marginBottom: 16,
});

const ColorSwatch = styled("div", {
  width: "100%",
  height: "30px",
  marginBottom: "8px",
  borderRadius: "4px",
  border: "1px solid #ddd",
});

const PaletteContainer = styled("div", {
  display: "flex",
  justifyContent: "center",
  gap: "20px",
  flexWrap: "wrap",
  maxWidth: "800px",
  margin: "0 auto",
});

const PaletteSection = styled("div", {
  flex: 1,
  minWidth: "200px",
  textAlign: "center",
});

const SectionTitle = styled("p", {
  fontSize: "1.5vh",
  fontWeight: "bold",
  opacity: 0.85,
  marginBottom: 16,
  marginTop: 0,
});

// New styled component for the reference images
const ReferenceImage = styled("img", {
    width: "100%", // Fit within the column
    marginTop: "24px", // Space above the image
    borderRadius: "8px", // Optional: subtle rounded corners
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)", // Optional: subtle shadow
    maxWidth: "300px", // Ensure image is not too large on wide screens
});


type CongratulatoryMoneyProps = {};

export default function CongratulatoryMoney({}: CongratulatoryMoneyProps) {
  // Removed warmPeachOrange to balance the palettes
  const blushPink = ["#F3D1C8", "#FE828C", "#E6A9EC"];
  const sageGreen = ["#B2AC88", "#8A9A5B", "#9CAF88"];
  const lightBlue = ["#ADD8E6", "#B0E0E6"];
  const navyBlue = ["#000080", "#224870"];

  return (
    <Wrapper>
      <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
        <Title>Dress Code</Title>
      </Divider>
      <Content>View recommended color palettes and attire references.</Content>

      <PaletteContainer>
        {/* Male Guest Palette Column */}
        <PaletteSection>
          <SectionTitle>Male Guests</SectionTitle>
          
          <div>
            <b>Sage Green Palette</b>
            <Description>Subtle and natural tones.</Description>
            {sageGreen.map((color) => (
              <ColorSwatch key={color} css={{ background: color }} />
            ))}
          </div>
          <div style={{ marginTop: 24 }}>
            <b>Navy Blue Palette</b>
            <Description>Classic and formal tones.</Description>
            {navyBlue.map((color) => (
              <ColorSwatch key={color} css={{ background: color }} />
            ))}
          </div>
          
          {/* Male Guest Reference Image */}
          <ReferenceImage src="./assets/Gallery_Photo_8.JPG" alt="Male attire reference" />

        </PaletteSection>

        {/* Female Guest Palette Column */}
        <PaletteSection>
          <SectionTitle>Female Guests</SectionTitle>

          {/* Removed Warm Peach/Orange Palette */}

          <div>
            <b>Blush Pink Palette</b>
            <Description>Soft and elegant tones.</Description>
            {blushPink.map((color) => (
              <ColorSwatch key={color} css={{ background: color }} />
            ))}
          </div>
          <div style={{ marginTop: 24 }}>
            <b>Light Blue Palette</b>
            <Description>Calm and inviting tones.</Description>
            {lightBlue.map((color) => (
              <ColorSwatch key={color} css={{ background: color }} />
            ))}
          </div>

          {/* Female Guest Reference Image */}
          <ReferenceImage src="./assets/Gallery_Photo_9.JPG" alt="Female attire reference" />

        </PaletteSection>
      </PaletteContainer>
    </Wrapper>
  );
}
