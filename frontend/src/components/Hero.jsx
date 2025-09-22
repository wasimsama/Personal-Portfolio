import React from 'react';
import { ChevronDown, Download, MapPin } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="flex items-center justify-center mb-6">
            <MapPin className="w-5 h-5 text-gray-600 mr-2" />
            <span className="text-gray-600">South Delhi, Delhi, India</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            <span className="block">Wasim Sama</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Service Delivery Manager & Technical Leader
          </p>
          
          <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto leading-relaxed">
            Transforming service delivery through strategic leadership, process optimization, 
            and cross-functional collaboration. Proven track record of managing global teams 
            and delivering impactful solutions across diverse industries.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              onClick={scrollToAbout}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
            >
              Learn More About Me
            </Button>
            <Button 
              variant="outline" 
              className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
          </div>
          
          <div className="animate-bounce">
            <button 
              onClick={scrollToAbout}
              className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
            >
              <ChevronDown className="w-8 h-8" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;