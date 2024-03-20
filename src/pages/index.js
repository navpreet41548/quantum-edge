import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "../../components/Navbar/Navbar";
import HomeSection from "../../section/HomeSection";
import AboutSection from "../../section/AboutSection";
import IndustrySection from "../../section/IndustrySection";
import TeamSection from "../../section/TeamSection";
import ContactSection from "../../section/ContactSection";
import Footer from "../../components/Footer/Footer";
import CapabilitieSection from "../../section/CapabilitySection";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Quantum Edge | Home</title>
        <meta
          name="description"
          content="Quantum Edge is a new cutting-edge machine shop providing manufacturing and engineering services to many industries including Aerospace, Defense, and Renewable Energy. We are proud to say that we are a fully certified and authorized MADE IN USA machine shop"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.png" />
      </Head>
      <Navbar />
      <HomeSection />
      <AboutSection />
      <IndustrySection />
      <CapabilitieSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </>
  );
}
