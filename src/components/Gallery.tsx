import ImageGallery from "react-image-gallery";
import { Divider } from "antd";
import { styled } from "@stitches/react";
import "react-image-gallery/styles/css/image-gallery.css";

const Wrapper = styled("div", {
  background: "#efebe9",
  backgroundImage: "url(./assets/GroovePaper.png)",
  width: "100%",
});

const Title = styled("p", {
  fontSize: "2vh",
  fontWeight: "bold",
  opacity: 0.85,
  marginBottom: 0,
});

const images = [
  {
    original: "./assets/Gallery_Photo_2A.jpg",
    thumbnail: "./assets/Gallery_Photo_2A.jpg",
  },
  {
    original: "./assets/Gallery_Photo_3A.jpg",
    thumbnail: "./assets/Gallery_Photo_3A.jpg",
  },
  {
    original: "./assets/Gallery_Photo_4A.png",
    thumbnail: "./assets/Gallery_Photo_4A.png",
  },
];

export default function Gallery() {
  return (
    <Wrapper>
      <Divider plain style={{ marginTop: 0, marginBottom: 16 }}>
        <Title>18 Specials</Title>
      </Divider>
      <ImageGallery
        showPlayButton={false}
        showFullscreenButton={false}
        items={images}
      />
    </Wrapper>
  );
}
