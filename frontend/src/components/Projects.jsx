import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { TrendingUp, Users, Target, Award } from 'lucide-react';
import { projectsData } from '../data/mockData';

const Projects = () => {
  const getProjectIcon = (index) => {
    const icons = [Users, TrendingUp, Target];
    const Icon = icons[index % icons.length];
    return <Icon className="w-8 h-8 text-blue-600" />;
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Key Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Strategic initiatives that delivered measurable impact and transformation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div key={index} className="glass-card p-8 rounded-2xl premium-shadow interactive-scale group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
              
              <div className="flex items-center mb-6 relative z-10">
                <div className="p-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                  {getProjectIcon(index)}
                </div>
                <h3 className="text-xl font-bold text-gray-900 leading-tight">{project.title}</h3>
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed">{project.description}</p>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Technologies & Skills:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="bg-gray-100 text-gray-700">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Key Achievements:</h4>
                <ul className="space-y-2">
                  {project.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} className="flex items-start text-sm">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="border-t pt-4">
                <div className="flex items-center text-green-600">
                  <Award className="w-4 h-4 mr-2" />
                  <span className="font-medium text-sm">Impact: {project.impact}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;