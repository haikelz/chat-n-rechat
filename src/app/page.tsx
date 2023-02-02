"use client";

import Aos from "aos";
import { useEffect } from "react";
import Banner from "~sections/Banner";
import Download from "~sections/Download";
import Faq from "~sections/Faq";
import Features from "~sections/Features";
import Footer from "~sections/Footer";
import Navbar from "~sections/Navbar";
import Technologies from "~sections/Technologies";

const HomePage = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Navbar />
      <main className="flex w-full max-w-full flex-col items-center justify-center pt-8">
        <Banner />
        <Features />
        <Technologies />
        <Download />
        <Faq />
        <Footer />
      </main>
    </>
  );
};

export default HomePage;
