import React from 'react';
import { Eye, Award, Lightbulb } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-20">
      <div className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl">Leading the way in IT solutions and staffing services</p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-6">
                At IT Cloud America Inc., our mission is to empower businesses through innovative technology solutions and exceptional talent. We strive to be the leading force in digital transformation, helping organizations navigate the ever-evolving technology landscape.
              </p>
              <p className="text-gray-600">
                We believe in building lasting partnerships with our clients, understanding their unique challenges, and delivering tailored solutions that drive growth and success.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1920"
                alt="Team meeting"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="service-card text-center">
              <Eye className="h-16 w-16 text-primary mx-auto mb-1" />
              <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
              <p className="text-gray-600">To be the most trusted partner in consulting, known for our innovation, expertise, and commitment to client success.</p>
            </div>
            <div className="service-card text-center">
              <Award className="h-16 w-16 text-primary mx-auto mb-1" />
              <h3 className="text-2xl font-semibold mb-4">Our Values</h3>
              <p className="text-gray-600">Integrity, innovation, excellence, and collaboration are the core values that drive everything we do.</p>
            </div>
            <div className="service-card text-center">
              <Lightbulb className="h-16 w-16 text-primary mx-auto mb-1" />
              <h3 className="text-2xl font-semibold mb-4">Our Approach</h3>
              <p className="text-gray-600">We take a client-centric approach, focusing on delivering measurable results and long-term value.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;