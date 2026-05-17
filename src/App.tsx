import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Programs } from "@/components/site/Programs";
import { Features } from "@/components/site/Features";
import { WhyUs } from "@/components/site/WhyUs";
import { Stats } from "@/components/site/Stats";
import { Success } from "@/components/site/Success";
import { Testimonials } from "@/components/site/Testimonials";
import { Gallery } from "@/components/site/Gallery";
import { FAQ } from "@/components/site/FAQ";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { ScrollProgress } from "@/components/site/ScrollProgress";
import { BackToTop } from "@/components/site/BackToTop";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";

export default function App() {
  return (
    <div className="relative overflow-x-clip bg-background text-foreground">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Programs />
        <Features />
        <WhyUs />
        <Stats />
        <Success />
        <Testimonials />
        <Gallery />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      <WhatsAppButton />
    </div>
  );
}
