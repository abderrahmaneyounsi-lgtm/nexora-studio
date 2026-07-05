"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import WelcomeAnimation from "./WelcomeAnimation";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Process from "./Process";
import Testimonials from "./Testimonials";
import CTA from "./CTA";
import Footer from "./Footer";

export default function PageWrapper() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [contentReady, setContentReady] = useState(false);

  const handleWelcomeComplete = useCallback(() => {
    setShowWelcome(false);
    setContentReady(true);
  }, []);

  return (
    <>
      {showWelcome && <WelcomeAnimation onComplete={handleWelcomeComplete} />}

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: contentReady ? 1 : 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="min-h-screen bg-background overflow-x-hidden"
      >
        <Navbar hiddenUntilReady={!contentReady} />
        <Hero animateIn={contentReady} />
        <Services />
        <Portfolio />
        <Process />
        <Testimonials />
        <CTA />
        <Footer />
      </motion.main>
    </>
  );
}
