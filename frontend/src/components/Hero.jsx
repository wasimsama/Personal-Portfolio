import React from 'react';
import { ChevronDown, Download, MapPin } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl floating-element"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl floating-element" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-indigo-400/10 rounded-full blur-2xl floating-element" style={{animationDelay: '4s'}}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          <div className="flex items-center justify-center mb-6 glass-card px-4 py-2 rounded-full w-fit mx-auto">
            <MapPin className="w-5 h-5 text-blue-600 mr-2" />
            <span className="text-gray-700 font-medium">South Delhi, Delhi, India</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 mb-6 relative">
            <span className="block bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent">
              Wasim Sama
            </span>
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-blue-600/20 blur-2xl opacity-30 rounded-lg"></div>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto font-medium">
            Service Delivery Manager & Technical Leader
          </p>
          
          <div className="glass-card p-6 rounded-2xl mb-12 max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed">
              Transforming service delivery through strategic leadership, process optimization, 
              and cross-functional collaboration. Proven track record of managing global teams 
              and delivering impactful solutions across diverse industries.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              onClick={scrollToAbout}
              className="premium-button text-white px-8 py-4 text-lg rounded-xl font-semibold"
            >
              Learn More About Me
            </Button>
            <Button 
              variant="outline" 
              className="glass-card border-blue-600/30 text-blue-700 hover:bg-blue-50/50 px-8 py-4 text-lg rounded-xl font-semibold interactive-scale"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
          </div>
          
          <div className="animate-bounce">
            <button 
              onClick={scrollToAbout}
              className="text-gray-400 hover:text-blue-600 transition-all duration-300 p-3 glass-card rounded-full hover:scale-110"
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