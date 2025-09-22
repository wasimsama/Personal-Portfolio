import React from 'react';
import { Card } from './ui/card';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import { Quote } from 'lucide-react';
import { testimonialsData } from '../data/mockData';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">What Colleagues Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Testimonials from colleagues and partners I've had the privilege to work with
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className="glass-card p-8 rounded-2xl premium-shadow interactive-scale relative group">
              <div className="flex items-center mb-4">
                <Quote className="w-10 h-10 text-blue-300 absolute top-6 right-6 group-hover:text-blue-500 transition-colors duration-300" />
              </div>
              
              <p className="text-gray-700 mb-8 leading-relaxed italic text-lg">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center">
                <Avatar className="w-16 h-16 mr-4 ring-2 ring-blue-100 group-hover:ring-blue-300 transition-all duration-300">
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                  <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-bold text-gray-900 text-lg">{testimonial.name}</div>
                  <div className="text-sm text-gray-600 font-medium">{testimonial.position}</div>
                  <div className="text-sm text-blue-600 font-medium">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="glass-card px-6 py-4 rounded-xl inline-block">
            <p className="text-gray-700 font-medium">
              ⭐ <strong>Real testimonials</strong> from colleagues and managers on LinkedIn
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;