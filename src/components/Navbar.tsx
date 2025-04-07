
import { useState } from 'react';
import { Menu, X, Github, Mail, Phone, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-lg border-b border-cyber-blue/20 text-white">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <a href="#home" className="text-xl font-bold cyber-text">Chakin<span className="text-white">.Kim</span></a>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:bg-cyber-blue/10"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#home" className="hover:text-cyber-blue transition-colors">Home</a>
          <a href="#about" className="hover:text-cyber-blue transition-colors">About</a>
          <a href="#skills" className="hover:text-cyber-blue transition-colors">Skills</a>
          <a href="#projects" className="hover:text-cyber-blue transition-colors">Projects</a>
          <a href="#contact" className="hover:text-cyber-blue transition-colors">Contact</a>
        </div>

        {/* Social Icons */}
        <div className="hidden md:flex items-center space-x-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-cyber-blue/10 transition-colors"
                >
                  <Github size={20} className="text-white" />
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>GitHub</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-cyber-blue/10 transition-colors"
                >
                  <Linkedin size={20} className="text-white" />
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>LinkedIn</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <a 
                  href="mailto:chakinkim@gmail.com" 
                  className="p-2 rounded-full hover:bg-cyber-blue/10 transition-colors"
                >
                  <Mail size={20} className="text-white" />
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>chakinkim@gmail.com</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <a 
                  href="tel:+254732727890" 
                  className="p-2 rounded-full hover:bg-cyber-blue/10 transition-colors"
                >
                  <Phone size={20} className="text-white" />
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>+254 732 727 890</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/90 border-b border-cyber-blue/20">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a 
              href="#home" 
              className="p-2 hover:bg-cyber-blue/10 rounded transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
            <a 
              href="#about" 
              className="p-2 hover:bg-cyber-blue/10 rounded transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a 
              href="#skills" 
              className="p-2 hover:bg-cyber-blue/10 rounded transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Skills
            </a>
            <a 
              href="#projects" 
              className="p-2 hover:bg-cyber-blue/10 rounded transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </a>
            <a 
              href="#contact" 
              className="p-2 hover:bg-cyber-blue/10 rounded transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
            
            <div className="flex space-x-4 py-2">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-cyber-blue/10 transition-colors"
              >
                <Github size={20} className="text-white" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-cyber-blue/10 transition-colors"
              >
                <Linkedin size={20} className="text-white" />
              </a>
              <a 
                href="mailto:chakinkim@gmail.com" 
                className="p-2 rounded-full hover:bg-cyber-blue/10 transition-colors"
              >
                <Mail size={20} className="text-white" />
              </a>
              <a 
                href="tel:+254732727890" 
                className="p-2 rounded-full hover:bg-cyber-blue/10 transition-colors"
              >
                <Phone size={20} className="text-white" />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
