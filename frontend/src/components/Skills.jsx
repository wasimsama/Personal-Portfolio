import React from 'react';
import { Card } from './ui/card';
import { skillsData } from '../data/mockData';

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive skill set developed through years of leadership and technical excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.categories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="glass-card p-6 rounded-2xl premium-shadow interactive-scale group">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 relative">
                {category.name}
                <div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-500"></div>
              </h3>
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group/skill">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-sm font-medium text-gray-700 group-hover/skill:text-gray-900 transition-colors">{skill.name}</span>
                      <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                      <div 
                        className="h-full rounded-full transition-all duration-1000 ease-out bg-gradient-to-r from-blue-500 to-purple-500 group-hover/skill:from-blue-600 group-hover/skill:to-purple-600"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;