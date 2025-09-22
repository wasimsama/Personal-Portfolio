import React from 'react';
import { Card } from './ui/card';
import { CheckCircle } from 'lucide-react';
import { aboutData } from '../data/mockData';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Service delivery leader with a passion for transforming operations and building high-performing teams
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {aboutData.description}
            </p>
            
            <div className="space-y-4">
              {aboutData.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:text-center">
            <div className="glass-card p-8 rounded-2xl premium-shadow interactive-scale">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center group">
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">13+</div>
                  <div className="text-sm text-gray-600 font-medium">Years Experience</div>
                </div>
                <div className="text-center group">
                  <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">5+</div>
                  <div className="text-sm text-gray-600 font-medium">Companies Served</div>
                </div>
                <div className="text-center group">
                  <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">£200K</div>
                  <div className="text-sm text-gray-600 font-medium">Cost Savings</div>
                </div>
                <div className="text-center group">
                  <div className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">8K+</div>
                  <div className="text-sm text-gray-600 font-medium">Work Streams</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;