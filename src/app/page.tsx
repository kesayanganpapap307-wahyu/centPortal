import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Solutions from "@/components/Solutions";
import Features from "@/components/Features";
import RoiCalculator from "@/components/RoiCalculator";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Solutions />
      <Features />
      <RoiCalculator />
      <Testimonials />
      <Faq />
      <Contact />
      <Footer />
    </main>
  );
}
