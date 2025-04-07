
import { useState } from 'react';
import { ExternalLink, Github, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    id: 1,
    title: 'Neural Network for Image Classification',
    description: 'A deep CNN model for classifying images with high accuracy using PyTorch and TensorFlow.',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2070&auto=format&fit=crop',
    demoUrl: '#',
    codeUrl: '#',
    category: 'AI',
    tags: ['PyTorch', 'TensorFlow', 'CNN', 'Computer Vision']
  },
  {
    id: 2,
    title: 'Sentiment Analysis API',
    description: 'A RESTful API for real-time sentiment analysis of text data using BERT and Django.',
    image: 'https://images.unsplash.com/photo-1516110833967-0b5716ca1387?q=80&w=1974&auto=format&fit=crop',
    demoUrl: '#',
    codeUrl: '#',
    category: 'NLP',
    tags: ['NLP', 'BERT', 'Django', 'API']
  },
  {
    id: 3,
    title: 'Predictive Analytics Dashboard',
    description: 'An interactive dashboard for visualizing predictive models built with R and Shiny.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    demoUrl: '#',
    codeUrl: '#',
    category: 'Data',
    tags: ['R', 'Shiny', 'Data Visualization', 'Statistics']
  },
  {
    id: 4,
    title: 'Customer Churn Prediction',
    description: 'ML model to predict customer churn using ensemble methods and feature engineering.',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop',
    demoUrl: '#',
    codeUrl: '#',
    category: 'ML',
    tags: ['Machine Learning', 'Python', 'Scikit-learn', 'XGBoost']
  },
  {
    id: 5,
    title: 'Recommendation Engine',
    description: 'A content-based recommendation system for products using collaborative filtering.',
    image: 'https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?q=80&w=2076&auto=format&fit=crop',
    demoUrl: '#',
    codeUrl: '#',
    category: 'AI',
    tags: ['Recommendation Systems', 'Django', 'Python', 'Collaborative Filtering']
  },
  {
    id: 6,
    title: 'Time Series Forecasting Tool',
    description: 'A tool for predicting future values in time series data using ARIMA and LSTM models.',
    image: 'https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=2074&auto=format&fit=crop',
    demoUrl: '#',
    codeUrl: '#',
    category: 'Data',
    tags: ['Time Series', 'LSTM', 'Forecasting', 'Python']
  }
];

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="cyber-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-cyber-blue mx-auto mb-10"></div>
          <p className="max-w-2xl mx-auto text-white/70">
            Here are some of my recent projects showcasing my skills in AI, machine learning, 
            data science, and web development.
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 rounded-lg bg-black/30 backdrop-blur-sm border border-white/10">
            <button
              onClick={() => setFilter('All')}
              className={`px-4 py-2 rounded-md transition-colors ${
                filter === 'All' ? 'bg-cyber-blue text-black font-medium' : 'text-white hover:bg-white/10'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter('AI')}
              className={`px-4 py-2 rounded-md transition-colors ${
                filter === 'AI' ? 'bg-cyber-pink text-black font-medium' : 'text-white hover:bg-white/10'
              }`}
            >
              AI
            </button>
            <button
              onClick={() => setFilter('ML')}
              className={`px-4 py-2 rounded-md transition-colors ${
                filter === 'ML' ? 'bg-cyber-purple text-black font-medium' : 'text-white hover:bg-white/10'
              }`}
            >
              ML
            </button>
            <button
              onClick={() => setFilter('NLP')}
              className={`px-4 py-2 rounded-md transition-colors ${
                filter === 'NLP' ? 'bg-cyber-blue text-black font-medium' : 'text-white hover:bg-white/10'
              }`}
            >
              NLP
            </button>
            <button
              onClick={() => setFilter('Data')}
              className={`px-4 py-2 rounded-md transition-colors ${
                filter === 'Data' ? 'bg-cyber-pink text-black font-medium' : 'text-white hover:bg-white/10'
              }`}
            >
              Data
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="glass-card overflow-hidden group h-full flex flex-col">
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                
                <div className="absolute top-3 right-3 flex space-x-2">
                  <Badge variant="secondary" className="bg-cyber-blue/80 text-white">
                    {project.category}
                  </Badge>
                </div>
              </div>
              
              <CardHeader className="p-4">
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-white/70">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="px-4 py-0 flex-grow">
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="bg-white/5">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="p-4 flex justify-between">
                <Button 
                  size="sm" 
                  variant="ghost" 
                  className="border border-cyber-blue/30 hover:bg-cyber-blue/10"
                  asChild
                >
                  <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                    <Github size={16} className="mr-2" />
                    Code
                  </a>
                </Button>
                <Button 
                  size="sm" 
                  className="bg-cyber-blue hover:bg-cyber-blue/80 text-black"
                  asChild
                >
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={16} className="mr-2" />
                    Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      
      <div className="text-center mt-12">
        <a 
          href="https://github.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-cyber-blue hover:text-cyber-blue/80 transition-colors"
        >
          <Code size={20} />
          <span>See more projects on GitHub</span>
        </a>
      </div>
    </section>
  );
};

export default Projects;
