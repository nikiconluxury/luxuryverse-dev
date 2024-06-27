"use client";
import Banner from "@/components/Banner";
import Essentials from "@/components/Essentials";
import Footer from "@/components/Footer";
import Invest from "@/components/Invest";
import Marquee from "@/components/Marquee";
import Method from "@/components/Method";
import Navbar from "@/components/Navbar";
import { useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div>
      {/* {!isMenuOpen && <Marquee />} */}
      <Marquee />
      <div className="gradient">
        <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        <div className="bg-bannerBg bg-center bg-cover h-[calc(100vh-120px)]">
          <Banner />
        </div>

         <Invest /> 
        {/* <Transform /> */}
        <Method />
        <Essentials />
        <Footer />
      </div>
    </div>
  );
}
