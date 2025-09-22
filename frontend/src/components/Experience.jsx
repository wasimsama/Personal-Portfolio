import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Building, MapPin, Calendar } from 'lucide-react';
import { experienceData } from '../data/mockData';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A progressive career journey across leading technology organizations
          </p>
        </div>

        <div className="space-y-8">
          {experienceData.map((job, index) => (
            <Card key={index} className="p-6 sm:p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{job.position}</h3>
                  <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-4">
                    <div className="flex items-center">
                      <Building className="w-4 h-4 mr-2" />
                      <span className="font-medium">{job.company}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{job.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{job.location}</span>
                    </div>
                  </div>
                </div>
                <Badge 
                  variant="secondary" 
                  className="bg-blue-100 text-blue-800 mt-2 sm:mt-0"
                >
                  {index === 0 ? 'Current' : 'Previous'}
                </Badge>
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed">{job.description}</p>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Key Achievements:</h4>
                <ul className="space-y-2">
                  {job.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2.5 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;