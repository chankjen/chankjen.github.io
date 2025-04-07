
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FunElementsBar from '@/components/FunElementsBar';
import { useEffect } from 'react';

const Index = () => {
  // Change document title
  useEffect(() => {
    document.title = "Chakin Kim | AI Engineer & Data Scientist";
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <FunElementsBar />
    </div>
  );
};

export default Index;
