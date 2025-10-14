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
    original: "./assets/Gallery_Photo_1.JPG",
    thumbnail: "./assets/Gallery_Photo_1.JPG",
  },
  {
    original: "./assets/Gallery_Photo_2.JPG",
    thumbnail: "./assets/Gallery_Photo_2.JPG",
  },
  {
    original: "./assets/Gallery_Photo_3.JPG",
    thumbnail: "./assets/Gallery_Photo_3.JPG",
  },
  {
    original: "./assets/Gallery_Photo_4.JPG",
    thumbnail: "./assets/Gallery_Photo_4.JPG",
  },
  {
    original: "./assets/Gallery_Photo_5.JPG",
    thumbnail: "./assets/Gallery_Photo_5.JPG",
  },
  {
    original: "./assets/Gallery_Photo_6.JPG",
    thumbnail: "./assets/Gallery_Photo_6.JPG",
  },
  {
    original: "./assets/Gallery_Photo_7.JPG",
    thumbnail: "./assets/Gallery_Photo_7.JPG",
  },
  {
    original: "./assets/Gallery_Photo_8.JPG",
    thumbnail: "./assets/Gallery_Photo_8.JPG",
  },
  {
    original: "./assets/Gallery_Photo_9.JPG",
    thumbnail: "./assets/Gallery_Photo_9.JPG",
  },
  {
    original: "./assets/Gallery_Photo_10.JPG",
    thumbnail: "./assets/Gallery_Photo_10.JPG",
  },
  {
    original: "./assets/Gallery_Photo_11.JPG",
    thumbnail: "./assets/Gallery_Photo_11.JPG",
  },
  {
    original: "./assets/Gallery_Photo_12.JPG",
    thumbnail: "./assets/Gallery_Photo_12.JPG",
  },
];

export default function Gallery() {
  return (
    <Wrapper>
      <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
        <Title>The {"'"}Gram</Title>
      </Divider>
      <ImageGallery
        showPlayButton={false}
        showFullscreenButton={false}
        items={images}
      />
    </Wrapper>
  );
}
