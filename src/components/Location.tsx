import { styled } from "@stitches/react";
import { Divider } from "antd";

const Wrapper = styled("div", {
  background: "#efebe9",
  backgroundImage: "url(./assets/GroovePaper.png)",
  width: "100%",
  paddingBottom: 42,
  textAlign: "center",
});

const Title = styled("p", {
  fontSize: "2vh",
  fontWeight: "bold",
  opacity: 0.85,
  marginBottom: 0,
});

const Pin = styled("p", {
  fontSize: "1.75vh",
  lineHeight: 1.75,
  opacity: 0.85,
  marginBottom: 0,
  width: "100%",
  textAlign: "center",
});



const ResponsiveMapContainer = styled("div", {
  position: "relative",
  paddingBottom: "56.25%", // This is a 16:9 aspect ratio
  height: 0,
  overflow: "hidden",
  width: "100%",
  maxWidth: 1024,
  margin: "0 auto",
  borderRadius: 8,
  
  // Style for the iframe inside
  "& iframe": {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
});


export default function Location() {
  return (
    <Wrapper>
      <Divider plain style={{ marginTop: 0, marginBottom: 16 }}>
        <Title>Direction</Title>
      </Divider>
      <Pin>📍 E.B. Samot Event Venue (Google Map)</Pin>
      
    <ResponsiveMapContainer>
       <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3864.6012565165693!2d120.93703247587217!3d14.392467282136954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d30a523ea669%3A0x708da2ab7a3b7a4!2sE.B.%20Samot%20Event%20Venue%20%2F%20Chardan%20Events%20Place!5e0!3m2!1sen!2sph!4v1760789257499!5m2!1sen!2sph"
        style={{ border: 0 }}
        allowFullScreen={true} 
        loading="lazy"
        title="E.B. Samot Event Venue on Google Maps"
        referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
    </ResponsiveMapContainer>
    </Wrapper>
  );
}

