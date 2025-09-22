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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300 relative">
              <div className="flex items-center mb-4">
                <Quote className="w-8 h-8 text-blue-200 absolute top-4 right-4" />
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center">
                <Avatar className="w-12 h-12 mr-4">
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                  <AvatarFallback className="bg-blue-100 text-blue-600">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.position}</div>
                  <div className="text-sm text-gray-500">{testimonial.company}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 bg-blue-50 inline-block px-6 py-3 rounded-lg">
            <strong>Note:</strong> These are placeholder testimonials. Real testimonials will be extracted from your LinkedIn profile.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;