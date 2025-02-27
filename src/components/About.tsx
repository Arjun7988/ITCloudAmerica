import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1920"
              alt="Team collaboration"
              className="rounded-lg shadow-xl relative z-10"
            />
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary/20 rounded-lg z-0"></div>
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg z-0"></div>
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">About IT Cloud America</h2>
            <p className="text-gray-600 mb-6">
              IT Cloud America Inc. is a leading provider of innovative IT solutions and staffing services. 
              With years of experience in the technology sector, we help businesses transform their 
              operations through cutting-edge technology and exceptional talent.
            </p>
            <p className="text-gray-600 mb-8">
              Our commitment to excellence and customer satisfaction has made us a trusted partner 
              for businesses across various industries. We believe in building long-term relationships 
              and delivering value through our comprehensive range of services.
            </p>
            <Link 
              to="/about" 
              className="inline-flex items-center text-primary font-medium hover:text-secondary transition-colors duration-300"
            >
              <span>Read More</span>
              <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;