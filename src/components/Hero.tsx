
import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MatrixRain from './MatrixRain';

const TypewriterText = ({ text, delay = 100 }: { text: string, delay?: number }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return (
    <span>{displayText}<span className="animate-pulse">|</span></span>
  );
};

const Hero = () => {
  const [showFullText, setShowFullText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFullText(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background animation */}
      <MatrixRain />
      
      <div className="container mx-auto px-4 py-20 z-10">
        <div className="max-w-3xl">
          <h2 className="text-cyber-blue text-xl md:text-2xl mb-4 font-mono">
            {showFullText ? "Hello, World! I'm" : <TypewriterText text="Hello, World! I'm" />}
          </h2>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="cyber-text">Chakin Kim</span>
          </h1>
          
          <h3 className="text-xl md:text-2xl lg:text-3xl mb-8 text-white/80">
            {showFullText ? (
              "AI Engineer & Data Scientist"
            ) : (
              <TypewriterText text="AI Engineer & Data Scientist" delay={70} />
            )}
          </h3>
          
          <p className="text-lg text-white/70 mb-10 max-w-2xl">
            Specializing in Artificial Intelligence, Machine Learning, 
            Deep Learning, and Python Django development. Creating data-driven 
            solutions and turning complex problems into intelligent systems.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button 
              className="bg-cyber-blue hover:bg-cyber-blue/80 text-black font-medium py-2 px-6 rounded-md flex items-center gap-2 shadow-lg shadow-cyber-blue/20"
              asChild
            >
              <a href="#projects">
                View My Work
                <ArrowRight size={18} className="animate-bounce-horizontal" />
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              className="border-cyber-pink hover:bg-cyber-pink/10 text-white py-2 px-6 rounded-md"
              asChild
            >
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scrolling text marquee */}
      <div className="absolute bottom-10 w-full overflow-hidden">
        <div className="whitespace-nowrap animate-marquee">
          <span className="text-sm md:text-base font-mono mr-4 text-cyber-blue opacity-60">PYTHON</span>
          <span className="text-sm md:text-base font-mono mr-4 text-cyber-pink opacity-60">MACHINE LEARNING</span>
          <span className="text-sm md:text-base font-mono mr-4 text-cyber-purple opacity-60">DEEP LEARNING</span>
          <span className="text-sm md:text-base font-mono mr-4 text-cyber-blue opacity-60">DATA SCIENCE</span>
          <span className="text-sm md:text-base font-mono mr-4 text-cyber-pink opacity-60">NEURAL NETWORKS</span>
          <span className="text-sm md:text-base font-mono mr-4 text-cyber-purple opacity-60">DJANGO</span>
          <span className="text-sm md:text-base font-mono mr-4 text-cyber-blue opacity-60">R PROGRAMMING</span>
          <span className="text-sm md:text-base font-mono mr-4 text-cyber-pink opacity-60">TENSORFLOW</span>
          <span className="text-sm md:text-base font-mono mr-4 text-cyber-purple opacity-60">PYTORCH</span>
          <span className="text-sm md:text-base font-mono mr-4 text-cyber-blue opacity-60">NLP</span>
          <span className="text-sm md:text-base font-mono mr-4 text-cyber-pink opacity-60">COMPUTER VISION</span>
          <span className="text-sm md:text-base font-mono mr-4 text-cyber-purple opacity-60">REINFORCEMENT LEARNING</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
