import React from "react";
import Layout from "../components/layout/layout";
import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import WhatIDoSection from "../components/sections/WhatIDoSection";
import TechStackSection from "../components/sections/TechStackSection";
import ContactSection from "../components/sections/ContactSection";

export default function Home() {
  return (
    <Layout>
      <div className="min-h-screen w-full">
        <HeroSection />
        <AboutSection />
        <WhatIDoSection />
        <TechStackSection />
        <ContactSection />
      </div>
    </Layout>
  );
}
