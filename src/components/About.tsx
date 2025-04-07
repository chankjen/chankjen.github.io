
import { Server, Brain, Code, Database } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const About = () => {
  return (
    <section id="about" className="relative py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="cyber-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-cyber-blue mx-auto mb-10"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-1 flex flex-col items-center lg:items-start">
            <div className="mb-6 w-48 h-48 md:w-64 md:h-64 relative rounded-full overflow-hidden border-4 border-cyber-blue/30 animate-pulse-glow">
              <Avatar className="w-full h-full">
                <AvatarImage src="https://images.unsplash.com/photo-1639194300633-0c04c88fc1cc?q=80&w=2070&auto=format&fit=crop" alt="Chakin Kim" />
                <AvatarFallback className="bg-cyber-darkpurple text-white text-4xl">CK</AvatarFallback>
              </Avatar>
            </div>

            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold mb-2">Chakin Kim</h3>
              <p className="text-cyber-blue font-mono mb-4">AI Engineer & Data Scientist</p>
              
              <div className="flex justify-center lg:justify-start space-x-4 mb-6">
                <div className="inline-flex gap-2 items-center">
                  <span className="w-3 h-3 rounded-full bg-cyber-blue"></span>
                  <span className="text-white/70">Python</span>
                </div>
                <div className="inline-flex gap-2 items-center">
                  <span className="w-3 h-3 rounded-full bg-cyber-pink"></span>
                  <span className="text-white/70">Django</span>
                </div>
                <div className="inline-flex gap-2 items-center">
                  <span className="w-3 h-3 rounded-full bg-cyber-purple"></span>
                  <span className="text-white/70">R</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="prose prose-invert max-w-none mb-10">
              <p className="text-lg mb-4">
                I'm an AI Engineer with expertise in developing intelligent systems and data-driven solutions. My background combines deep theoretical knowledge with practical experience in implementing AI technologies to solve complex problems.
              </p>
              <p className="text-lg mb-4">
                With a passion for machine learning and deep learning, I've worked on projects ranging from predictive analytics to computer vision and natural language processing. My goal is to bridge the gap between cutting-edge AI research and practical business applications.
              </p>
              <p className="text-lg">
                When I'm not coding or training models, I enjoy staying updated with the latest AI research papers, contributing to open source projects, and mentoring aspiring data scientists.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="glass-card group hover:border-cyber-blue/30 transition-all duration-300">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="bg-cyber-blue/20 p-3 rounded-lg group-hover:bg-cyber-blue/30 transition-colors">
                    <Brain className="h-6 w-6 text-cyber-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">AI & Machine Learning</h3>
                    <p className="text-white/70">
                      Designing and implementing AI algorithms and ML models for real-world applications
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card group hover:border-cyber-pink/30 transition-all duration-300">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="bg-cyber-pink/20 p-3 rounded-lg group-hover:bg-cyber-pink/30 transition-colors">
                    <Code className="h-6 w-6 text-cyber-pink" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Python Development</h3>
                    <p className="text-white/70">
                      Building robust and scalable Python applications with Django and other frameworks
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card group hover:border-cyber-purple/30 transition-all duration-300">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="bg-cyber-purple/20 p-3 rounded-lg group-hover:bg-cyber-purple/30 transition-colors">
                    <Database className="h-6 w-6 text-cyber-purple" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Data Science</h3>
                    <p className="text-white/70">
                      Analyzing complex datasets to extract insights and drive data-informed decisions
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card group hover:border-cyber-blue/30 transition-all duration-300">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="bg-cyber-blue/20 p-3 rounded-lg group-hover:bg-cyber-blue/30 transition-colors">
                    <Server className="h-6 w-6 text-cyber-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Deep Learning</h3>
                    <p className="text-white/70">
                      Creating neural networks for computer vision, NLP, and other AI applications
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
