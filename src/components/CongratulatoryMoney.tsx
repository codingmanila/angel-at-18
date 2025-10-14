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
  width: "30px",
  height: "30px",
  borderRadius: "50%",
  border: "1px solid #ddd",
  margin: "0 4px",
});

const SwatchRow = styled("div", {
  display: "flex",
  justifyContent: "center",
  marginBottom: "16px",
  marginTop: "16px",
});

// Layout container using flexbox for responsiveness
const LayoutContainer = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "20px", // Horizontal gap for desktop
  maxWidth: "1000px",
  margin: "0 auto",

  // On mobile screens, stack the items vertically
  "@media (max-width: 768px)": {
    flexDirection: "column",
    gap: "0px", // Remove horizontal gap when stacked vertically
  },
});

const CenterContent = styled("div", {
  flex: 2,
  textAlign: "center",
  // Ensure no unwanted top margin on mobile
  "@media (max-width: 768px)": {
    marginTop: "0",
    paddingTop: "24px", // Add padding for internal spacing from the image above
    paddingBottom: "24px", // Add padding for internal spacing from the image below
  },
});

const AttireImage = styled("img", {
  width: "100%",
  maxWidth: "200px",
  borderRadius: "8px",
  objectFit: "cover",
  height: "auto",
  flex: 1,
  // Add vertical margins for mobile view when stacked
  "@media (max-width: 768px)": {
    marginTop: "16px",
    marginBottom: "0",
    // The bottom image needs a small bottom margin before the next section of the website begins
    "&:last-child": {
      marginBottom: "16px",
    },
  },
});

// Added a styled component for the color descriptions to manage wrapping better
const ColorDescription = styled("span", {
    fontSize: '1.1vh',
    opacity: 0.7,
    marginRight: '8px',
    // Prevent text from breaking onto new lines mid-word if possible
    whiteSpace: 'nowrap', 
});


type CongratulatoryMoneyProps = {};

export default function CongratulatoryMoney({}: CongratulatoryMoneyProps) {
  const sharedPalette = [
    { name: "Dark Orange", hex: "#C06E3E" },
    { name: "Warm White", hex: "#F6EEDD" },
    { name: "Light Pink/Peach", hex: "#F9FCF2" },
    { name: "Light Lavender", hex: "#D4BFD9" },
    { name: "Cool Blue/Baby Blue", hex: "#9DD5E4" },
    { name: "Light Olive Green", hex: "#98B342" },
  ];


  return (
    <Wrapper>
      <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
        <Title>Dress Code</Title>
      </Divider>
      <Content>View our suggested shared color palette and attire references.</Content>

      <LayoutContainer>
        
        {/* LEFT/TOP: Male Guest Image */}
        <AttireImage src="./assets/Gallery_Photo_8.png" alt="Male attire reference" />

        {/* CENTER: Shared Palette Content */}
        <CenterContent>
            <h3>Recommended Colors</h3>
            <SwatchRow>
              {sharedPalette.map((color) => (
                <ColorSwatch key={color.hex} css={{ background: color.hex }} title={color.name} />
              ))}
            </SwatchRow>

            {/* Use a div with flex-wrap and gap to manage spacing on small screens */}
            <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '8px 4px'}}>
                {sharedPalette.map((color) => (
                    <ColorDescription key={color.name}>
                        {color.name}
                    </ColorDescription>
                ))}
            </div>
            
        </CenterContent>

        {/* RIGHT/BOTTOM: Female Guest Image */}
        <AttireImage src="./assets/Gallery_Photo_9.png" alt="Female attire reference" />
        
      </LayoutContainer>
    </Wrapper>
  );
}
