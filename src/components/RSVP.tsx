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

const LayoutContainer = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center", 
  gap: "20px", 
  maxWidth: "600px",
  margin: "0 auto",

  '@media (max-width: 768px)': {
    flexDirection: 'column',
    gap: "0px",
  },
});

const CenterContent = styled("div", {
    flex: 2, 
    textAlign: "center",
    '@media (max-width: 768px)': {
        paddingTop: "16px", 
    },
});

const AttireImage = styled("img", {
    width: "100%",
    maxWidth: "150px", 
    borderRadius: "8px",
    objectFit: "cover",
    height: "auto",
    flex: 1,
});

const RSVPMessage = styled("p", {
    fontSize: "1.8vh",
    fontWeight: "bold",
    color: "#444",
    marginBottom: "8px",
});

const RSVPDate = styled("p", {
    fontSize: "1.4vh",
    color: "#666",
    marginBottom: "0",
});


type RSVPProps = {};

export default function RSVP({}: RSVPProps) {
  return (
    <Wrapper>
      <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
        <Title>RSVP</Title>
      </Divider>
      <Content>Please confirm your attendance below.</Content>

      <LayoutContainer>
        
        <AttireImage src="./assets/Gallery_Photo_13.png" alt="Wedding reference image" />

        <CenterContent>
            <RSVPMessage>We have reserved 1 seat in your honor</RSVPMessage>
            <RSVPDate>Kindly reply by Nov 15, 2025</RSVPDate>
        </CenterContent>
        
      </LayoutContainer>
    </Wrapper>
  );
}
