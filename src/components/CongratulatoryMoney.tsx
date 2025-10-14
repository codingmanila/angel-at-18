import { CheckCircleTwoTone } from "@ant-design/icons";
import { styled } from "@stitches/react";
import { Button, Divider, Modal, message } from "antd";
import { useState } from "react";
// CopyToClipboard is not needed anymore as we are not copying account numbers.
// import CopyToClipboard from "react-copy-to-clipboard"; 

const Wrapper = styled("div", {
  background: "#efebe9",
  backgroundImage: "url(./assets/GroovePaper.png)",
  paddingBottom: 18,
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

const SubContent = styled("p", {
  fontSize: "1.3vh",
  lineHeight: 1.75,
  opacity: 0.75,
  marginBottom: 24,
});

const Description = styled("p", {
  fontSize: "1.3vh",
  lineHeight: 1.75,
  opacity: 0.65,
  marginTop: 8,
});

const ContactButton = styled("div", {
  display: "inline-block",
  textAlign: "center",
  marginLeft: 24,
  marginRight: 24,
  marginBottom: 24,
  cursor: "pointer", // Added for better UX since it's clickable
});

const ColorSwatch = styled("div", {
  width: "100%",
  height: "30px",
  marginBottom: "8px",
  borderRadius: "4px",
  border: "1px solid #ddd",
});

// The Data prop type and data usage related to accounts are removed as they are no longer relevant
type CongratulatoryMoneyProps = {
  // data?: Data; 
};

export default function CongratulatoryMoney({
  // data,
}: CongratulatoryMoneyProps) {
  const [groomVisible, setGroomVisible] = useState<boolean>(false);
  const [brideVisible, setBrideVisible] = useState<boolean>(false);

  // Define the colors based on the provided set
  const warmPeachOrange = ["#FFE5B4", "#FFCC98", "#FFB07C"];
  const blushPink = ["#F3D1C8", "#FE828C", "#E6A9EC"];
  const sageGreen = ["#B2AC88", "#8A9A5B", "#9CAF88"];
  const lightBlue = ["#ADD8E6", "#B0E0E6"];
  const navyBlue = ["#000080", "#224870"];

  return (
    <Wrapper>
      <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
        <Title>Dress Code</Title>
      </Divider>
      <Content>View recommended color palettes for your attire.</Content>
      <ContactButton onClick={() => setGroomVisible(true)}>
        <CheckCircleTwoTone
          style={{ fontSize: 64, marginBottom: 16 }}
          twoToneColor="#829fe0" // Color kept for styling the icon
        />
        <br />
        <SubContent>Male guests color palette</SubContent>
      </ContactButton>
      <ContactButton onClick={() => setBrideVisible(true)}>
        <CheckCircleTwoTone
          style={{ fontSize: 64, marginBottom: 16 }}
          twoToneColor="#fe7daf" // Color kept for styling the icon
        />
        <br />
        <SubContent>Female guests color palette</SubContent>
      </ContactButton>
      <Modal
        title={<b>Male guests color palette</b>}
        open={groomVisible}
        onOk={() => setGroomVisible(false)}
        onCancel={() => setGroomVisible(false)}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
        footer={null}
      >
        <div>
          <b>Sage Green Palette</b>
          {sageGreen.map((color) => (
            <ColorSwatch key={color} css={{ background: color }} />
          ))}
        </div>
        <div style={{ marginTop: 24, marginBottom: 24 }}>
          <b>Navy Blue Palette</b>
          {navyBlue.map((color) => (
            <ColorSwatch key={color} css={{ background: color }} />
          ))}
        </div>
        <div>
          <Description>
           These are suggested color palettes for Male guests.
          </Description>
        </div>
      </Modal>
      <Modal
        title={<b>Female guests color palette</b>}
        open={brideVisible}
        onOk={() => setBrideVisible(false)}
        onCancel={() => setBrideVisible(false)}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
        footer={null}
      >
        <div>
          <b>Warm Peach/Orange Palette</b>
          {warmPeachOrange.map((color) => (
            <ColorSwatch key={color} css={{ background: color }} />
          ))}
        </div>
        <div style={{ marginTop: 24, marginBottom: 24 }}>
          <b>Blush Pink Palette</b>
          {blushPink.map((color) => (
            <ColorSwatch key={color} css={{ background: color }} />
          ))}
        </div>
        <div style={{ marginTop: 24, marginBottom: 24 }}>
          <b>Light Blue Palette</b>
          {lightBlue.map((color) => (
            <ColorSwatch key={color} css={{ background: color }} />
          ))}
        </div>
        <div>
          <Description>
           These are suggested color palettes for Female guests.
          </Description>
        </div>
      </Modal>
    </Wrapper>
  );
}
