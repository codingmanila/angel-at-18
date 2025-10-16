import Head from "next/head";
import { useEffect, useState } from "react";
import { Noto_Sans_KR } from "next/font/google";
import dynamic from "next/dynamic";
import { styled } from "@stitches/react";
import JsonData from "@/data.json";
import Script from "next/script";
import EnvelopeSplash from "@/components/EnvelopeSplash";

const SingleGallery = dynamic(() => import("@/components/SingleGallery"), { ssr: false });
{/* const Title = dynamic(() => import("@/components/Title"), { ssr: false }); */} 
const Gretting = dynamic(() => import("@/components/Greeting"), { ssr: false });
const Gallery = dynamic(() => import("@/components/Gallery"), { ssr: false });
const Location = dynamic(() => import("@/components/Location"), { ssr: false });
const DressCode = dynamic(
  () => import("@/components/CongratulatoryMoney"),
  { ssr: false }
);
const RSVP = dynamic(
  () => import("@/components/RSVP"),
  { ssr: false }
);
const Share = dynamic(() => import("@/components/Share"), { ssr: false });

const notoSansKR = Noto_Sans_KR({
  weight: ["400", "700"],
  subsets: [],
  style: "normal",
});

const Footer = styled("footer", {
  background: "#D7CCC8",
  backgroundImage: "url(./assets/GroovePaper.png)",
  opacity: 0.6,
  textAlign: "center",
  width: "100%",
  height: "100px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  "-webkit-box-align": "center",
  "-webkit-box-pack": "center",
});

export default function Home() {
  // 2. Add state to control the visibility of the splash screen
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);

  // Function to be called when the envelope is clicked and finished its animation
  const handleEnvelopeOpen = () => {
    setIsEnvelopeOpen(true);
  };
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:type" content="website" />
        <meta content="Angel Rhianne 18th birthday" name="Title" />
        <meta
          content=""
          name="Description"
        />
        <meta content="" name="Keyword" />
        <meta property="og:title" content="Angel Rhianne 18th birthday" />
        <meta
          property="og:description"
          content=""
        />
        <meta
          property="og:url"
          content=""
        />
        <meta name="theme-color" content="#BCAAA4" />
        <title>Angel Rhianne 18th birthday</title>
      </Head>
      {/* 3. Render the Splash Screen if the envelope is not open */}
      {!isEnvelopeOpen && (
        <EnvelopeSplash onOpen={handleEnvelopeOpen} />
      )}

      {/* 4. Render the main content (inside the <main> tag) */}
      <main className={`${notoSansKR.className}`}>
        <Script src="https://developers.kakao.com/sdk/js/kakao.min.js"></Script>
        <SingleGallery />
        {/* <Title data={JsonData} />*/} 
        <Gretting data={JsonData} />
        <Gallery />
        <RSVP  />
        <DressCode  />
        <Location  />
        <Share data={JsonData} />
        <Footer>Copyright © 2025 IT Consultancy</Footer>
      </main>
    </>
  );
}
