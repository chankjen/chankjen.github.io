
import { useState, useEffect } from 'react';
import { Progress } from '@/components/ui/progress';

type Skill = {
  name: string;
  level: number;
  category: 'ai' | 'data' | 'dev';
  color: string;
};

const skills: Skill[] = [
  { name: 'Python', level: 95, category: 'dev', color: 'bg-cyber-blue' },
  { name: 'Machine Learning', level: 90, category: 'ai', color: 'bg-cyber-pink' },
  { name: 'Deep Learning', level: 85, category: 'ai', color: 'bg-cyber-purple' },
  { name: 'TensorFlow', level: 88, category: 'ai', color: 'bg-cyber-blue' },
  { name: 'PyTorch', level: 82, category: 'ai', color: 'bg-cyber-pink' },
  { name: 'Django', level: 87, category: 'dev', color: 'bg-cyber-purple' },
  { name: 'Data Science', level: 92, category: 'data', color: 'bg-cyber-blue' },
  { name: 'NLP', level: 80, category: 'ai', color: 'bg-cyber-pink' },
  { name: 'Computer Vision', level: 78, category: 'ai', color: 'bg-cyber-purple' },
  { name: 'SQL', level: 85, category: 'data', color: 'bg-cyber-blue' },
  { name: 'R Programming', level: 75, category: 'data', color: 'bg-cyber-pink' },
  { name: 'Data Visualization', level: 88, category: 'data', color: 'bg-cyber-purple' },
];

const SkillBadge = ({ name, level }: { name: string; level: number }) => {
  return (
    <div className="bg-white/5 backdrop-blur-sm px-3 py-1 rounded-full text-sm flex items-center gap-2">
      <span>{name}</span>
      <span className="text-xs opacity-70">{level}%</span>
    </div>
  );
};

const Skills = () => {
  const [filter, setFilter] = useState<'all' | 'ai' | 'data' | 'dev'>('all');
  const [animated, setAnimated] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    const interval = setInterval(() => {
      skills.forEach((skill) => {
        if (animated[skill.name] === undefined) {
          setAnimated(prev => ({ ...prev, [skill.name]: 0 }));
        } else if (animated[skill.name] < skill.level) {
          setAnimated(prev => ({ 
            ...prev, 
            [skill.name]: Math.min(prev[skill.name] + 3, skill.level)
          }));
        }
      });
    }, 30);

    return () => clearInterval(interval);
  }, [animated]);

  const filteredSkills = filter === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === filter);

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="matrix-container">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i} 
              className="matrix-column"
              style={{ 
                left: `${Math.random() * 100}%`, 
                animationDuration: `${Math.random() * 10 + 5}s`,
                animationDelay: `${Math.random() * 5}s` 
              }}
            >
              {[...Array(Math.floor(Math.random() * 20 + 10))].map((_, j) => (
                <div key={j}>{Math.random() > 0.5 ? '1' : '0'}</div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="cyber-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-cyber-blue mx-auto mb-10"></div>
        </div>

        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 rounded-lg bg-black/30 backdrop-blur-sm border border-white/10">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-md transition-colors ${
                filter === 'all' ? 'bg-cyber-blue text-black font-medium' : 'text-white hover:bg-white/10'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter('ai')}
              className={`px-4 py-2 rounded-md transition-colors ${
                filter === 'ai' ? 'bg-cyber-pink text-black font-medium' : 'text-white hover:bg-white/10'
              }`}
            >
              AI & ML
            </button>
            <button
              onClick={() => setFilter('data')}
              className={`px-4 py-2 rounded-md transition-colors ${
                filter === 'data' ? 'bg-cyber-purple text-black font-medium' : 'text-white hover:bg-white/10'
              }`}
            >
              Data Science
            </button>
            <button
              onClick={() => setFilter('dev')}
              className={`px-4 py-2 rounded-md transition-colors ${
                filter === 'dev' ? 'bg-cyber-blue text-black font-medium' : 'text-white hover:bg-white/10'
              }`}
            >
              Development
            </button>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {skills.map((skill) => (
            <SkillBadge key={skill.name} name={skill.name} level={skill.level} />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {filteredSkills.map((skill) => (
            <div key={skill.name} className="glass-card p-5 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium">{skill.name}</h3>
                <span className="text-sm opacity-70">{animated[skill.name] || 0}%</span>
              </div>
              <Progress 
                value={animated[skill.name] || 0} 
                className="h-2 bg-white/10" 
                indicatorClassName={skill.color}
              />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold mb-6">Tools & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="w-12 h-12 rounded bg-white/10 p-2" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" alt="TensorFlow" className="w-12 h-12 rounded bg-white/10 p-2" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" alt="PyTorch" className="w-12 h-12 rounded bg-white/10 p-2" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" alt="Django" className="w-12 h-12 rounded bg-white/10 p-2" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" alt="NumPy" className="w-12 h-12 rounded bg-white/10 p-2" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" alt="Pandas" className="w-12 h-12 rounded bg-white/10 p-2" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg" alt="R" className="w-12 h-12 rounded bg-white/10 p-2" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" alt="Jupyter" className="w-12 h-12 rounded bg-white/10 p-2" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="VS Code" className="w-12 h-12 rounded bg-white/10 p-2" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" className="w-12 h-12 rounded bg-white/10 p-2" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
