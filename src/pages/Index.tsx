import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ClientLogos from "@/components/ClientLogos";
import Team from "@/components/Team";
import Projects from "@/components/Projects";
import Expertise from "@/components/Expertise";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AIChatbot from "@/components/AIChatbot";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <Hero />
        <ClientLogos />
        <About />
        <Team />
        <Projects />
        <Expertise />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <AIChatbot />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
