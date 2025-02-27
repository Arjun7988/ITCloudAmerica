import React from 'react';
import { Briefcase, GraduationCap, Heart, Globe } from 'lucide-react';

const Careers = () => {
  const benefits = [
    {
      icon: <Heart className="h-12 w-12 text-primary" />,
      title: "Health & Wellness",
      description: "Comprehensive health insurance and wellness programs"
    },
    {
      icon: <GraduationCap className="h-12 w-12 text-primary" />,
      title: "Learning & Development",
      description: "Continuous learning opportunities and certification support"
    },
    {
      icon: <Briefcase className="h-12 w-12 text-primary" />,
      title: "Work-Life Balance",
      description: "Flexible work arrangements and paid time off"
    },
    {
      icon: <Globe className="h-12 w-12 text-primary" />,
      title: "Global Opportunities",
      description: "Work with clients and teams across the globe"
    }
  ];

  const openPositions = [
    {
      title: "Senior Full Stack Developer",
      location: "Remote",
      type: "Full-time"
    },
    {
      title: "Cloud Solutions Architect",
      location: "New York, NY",
      type: "Full-time"
    },
    {
      title: "DevOps Engineer",
      location: "Remote",
      type: "Full-time"
    },
    {
      title: "Data Scientist",
      location: "San Francisco, CA",
      type: "Full-time"
    }
  ];

  return (
    <div className="pt-20">
      <div className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Careers at IT Cloud America</h1>
          <p className="text-xl">Join our team and shape the future of technology</p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-bold mb-6">Why Join Us?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              At IT Cloud America, we're building a team of passionate individuals who are excited about technology and innovation. Join us and be part of something extraordinary.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
            {benefits.map((benefit, index) => (
              <div key={index} className="service-card text-center">
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center">Open Positions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {openPositions.map((position, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-xl font-semibold mb-2">{position.title}</h3>
                  <div className="flex items-center text-gray-600 mb-4">
                    <span className="mr-4">{position.location}</span>
                    <span>{position.type}</span>
                  </div>
                  <button className="gradient-btn">Apply Now</button>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Don't See the Right Fit?</h2>
            <p className="text-gray-600 mb-8">
              We're always looking for talented individuals to join our team. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <button className="gradient-btn">Submit Your Resume</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;