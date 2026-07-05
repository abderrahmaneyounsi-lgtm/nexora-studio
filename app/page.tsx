import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Process />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
