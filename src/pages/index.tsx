import Head from "next/head";
import { useState } from "react";
import { Noto_Sans_KR } from "next/font/google";
import dynamic from "next/dynamic";
import { styled } from "@stitches/react";
import JsonData from "@/data.json";
import Script from "next/script";
import EnvelopeSplash from "@/components/EnvelopeSplash";

const Gretting = dynamic(() => import("@/components/Greeting"), { ssr: false });
const Gallery = dynamic(() => import("@/components/Gallery"), { ssr: false });
const Location = dynamic(() => import("@/components/Location"), { ssr: false });
const MainImage = dynamic(() => import("@/components/MainImage"), { ssr: false });
const Greeting = dynamic(() => import("@/components/Greeting2"), { ssr: false });
const Image2nd = dynamic(() => import("@/components/Image2nd"), { ssr: false });
const Image3rd = dynamic(() => import("@/components/Image3rd"), { ssr: false });
const Image4th = dynamic(() => import("@/components/Image4th"), { ssr: false });
const Image5th = dynamic(() => import("@/components/Image5th"), { ssr: false });
const Image6th = dynamic(() => import("@/components/Image6th"), { ssr: false });
const DressCode = dynamic(
  () => import("@/components/Dresscode"),
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
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);

  const handleEnvelopeOpen = () => {
    setIsEnvelopeOpen(true);
  };

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#BCAAA4" />

        {/* Updated link preview meta tags */}
        <title>✨Angel Rhianne's 18th Bday ✨</title>
        <meta property="og:title" content="✨Angel Rhianne's 18th Bday ✨" />
        <meta property="og:type" content="website" />
        
        {/* Set the image for the link preview. Assumes image is in /public */}
        <meta property="og:image" content="/Gallery_Photo_A5a.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Angel Rhianne's 18th Birthday invitation" />

        <meta name="Description" content="You're invited to Angel Rhianne's 18th birthday celebration!" />
        <meta property="og:description" content="You're invited to Angel Rhianne's 18th birthday celebration!" />
      </Head>

      {!isEnvelopeOpen && (
        <EnvelopeSplash onOpen={handleEnvelopeOpen} />
      )}

      <main className={`${notoSansKR.className}`}>
        <Script src="https://developers.kakao.com/sdk/js/kakao.min.js" strategy="afterInteractive" />
        <MainImage />
        <Greeting />
        <Image2nd />
        <Gallery />
        <Image3rd />
        <RSVP />
        <Image4th />
        <DressCode />
        <Image5th />
        <Location />
        <Image6th />
        <Share data={JsonData} />
        <Footer>Copyright © 2025 IT Consultancy</Footer>
      </main>
    </>
  );
}
