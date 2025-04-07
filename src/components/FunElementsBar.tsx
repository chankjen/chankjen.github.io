
import { useState, useEffect } from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

// Each gif object has a URL and alt text
const gifs = [
  { url: "https://media1.giphy.com/media/l41lJ8ywG1ncm9FXW/giphy.gif", alt: "Robot waving" },
  { url: "https://media3.giphy.com/media/3o7bugDTSonKTqVd3q/giphy.gif", alt: "Loading brain" },
  { url: "https://media4.giphy.com/media/3oKIPsx2VAYAgEHC12/giphy.gif", alt: "AI face" },
  { url: "https://media2.giphy.com/media/RkN5bDxOVHdlboBIGK/giphy.gif", alt: "Smart robot" },
  { url: "https://media0.giphy.com/media/f6hnhHkks8bk4jwjh3/giphy.gif", alt: "Neural network" },
];

const quotes = [
  "Artificial intelligence is the new electricity. - Andrew Ng",
  "The real question is not whether machines think but whether humans do. - B.F. Skinner",
  "A year spent in artificial intelligence is enough to make one believe in God. - Alan Perlis",
  "Machine intelligence is the last invention that humanity will ever need to make. - Nick Bostrom",
  "AI is likely to be either the best or worst thing to happen to humanity. - Stephen Hawking",
  "By far, the greatest danger of AI is that people conclude too early that they understand it. - Eliezer Yudkowsky",
  "The development of full artificial intelligence could spell the end of the human race. - Stephen Hawking",
  "The question of whether a computer can think is no more interesting than the question of whether a submarine can swim. - Edsger W. Dijkstra",
  "We're going to need a better way of thinking about AI. - Douglas Hofstadter",
  "The coming era of AI will not be an era of war but be an era of human understanding. - Chakin Kim",
];

const FunElementsBar = () => {
  const [currentQuote, setCurrentQuote] = useState('');
  const [currentGifIndex, setCurrentGifIndex] = useState(0);
  const [showGif, setShowGif] = useState(false);
  
  useEffect(() => {
    // Set initial quote
    setCurrentQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    
    // Change quote every 10 seconds
    const quoteInterval = setInterval(() => {
      setCurrentQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    }, 10000);
    
    // Cycle through gifs
    const gifInterval = setInterval(() => {
      setCurrentGifIndex((prev) => (prev + 1) % gifs.length);
    }, 5000);
    
    return () => {
      clearInterval(quoteInterval);
      clearInterval(gifInterval);
    };
  }, []);
  
  return (
    <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
      <div className="flex flex-col space-y-4">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <button 
                className="bg-cyber-blue/20 hover:bg-cyber-blue/30 p-3 rounded-full backdrop-blur-sm border border-cyber-blue/30 transition-all hover:scale-110"
                onClick={() => setShowGif(!showGif)}
              >
                <span role="img" aria-label="fun">🤖</span>
              </button>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>Click for fun!</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <button className="bg-cyber-pink/20 hover:bg-cyber-pink/30 p-3 rounded-full backdrop-blur-sm border border-cyber-pink/30 transition-all hover:scale-110">
                <span role="img" aria-label="brain">🧠</span>
              </button>
            </TooltipTrigger>
            <TooltipContent side="right" className="max-w-xs">
              <p>{currentQuote}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <a 
                href="mailto:chakinkim@gmail.com"
                className="bg-cyber-purple/20 hover:bg-cyber-purple/30 p-3 rounded-full backdrop-blur-sm border border-cyber-purple/30 transition-all hover:scale-110"
              >
                <span role="img" aria-label="email">📧</span>
              </a>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>Email me: chakinkim@gmail.com</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      
      {/* Fun GIF popup */}
      {showGif && (
        <div className="absolute top-0 left-16 bg-black/70 backdrop-blur-md border border-cyber-blue/30 rounded-lg p-2 shadow-lg transition-all w-48 h-48">
          <button 
            className="absolute top-1 right-1 text-white/50 hover:text-white"
            onClick={() => setShowGif(false)}
          >
            ✕
          </button>
          <img 
            src={gifs[currentGifIndex].url} 
            alt={gifs[currentGifIndex].alt}
            className="w-full h-full object-contain"
          />
        </div>
      )}
    </div>
  );
};

export default FunElementsBar;
