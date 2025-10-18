import { Divider } from "antd";
import { styled } from "@stitches/react";
// Assuming you will replace the single Image with a gallery component later
// import ImageGallery from "react-image-gallery"; 
import "react-image-gallery/styles/css/image-gallery.css";

const Wrapper = styled("div", {
  background: "#efebe9",
  backgroundImage: "url(./assets/GroovePaper.png)",
  width: "100%",
  textAlign: "center",
  position: "relative", // Essential: This is the positioning context for children
  minHeight: "480px", // Ensure the wrapper has a minimum height
});

const ContentWrapper = styled("div", {
  position: "relative", // Position relative to Wrapper
  zIndex: 2, // Place in front of the video
  padding: "20px", // Add some padding so content isn't flush with edges
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
  // Add some margin here for spacing
  margin: "auto", 
  display: "block",
});

export default function SingleGallery() {
  return (
    <Wrapper>

      {/* Content Placed on Top of the Video */}
      <ContentWrapper>
        <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
        </Divider>
        
        {/* Your Image or Gallery Component goes here */}
        <Image src="./assets/Gallery_Photo_1A.JPG" alt="Gallery Photo" />

      </ContentWrapper>
    </Wrapper>
  );
}
