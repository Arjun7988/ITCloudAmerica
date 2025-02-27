import React from 'react';
import { Users, Target, Award, Clock, UserCheck, FileSearch, Briefcase, CheckCircle } from 'lucide-react';

const Staffing = () => {
  return (
    <div className="pt-20">
      <div className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">IT Staffing Solutions</h1>
          <p className="text-xl">Connect with top tech talent for your business needs</p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold mb-6">Expert IT Staffing Services</h2>
              <p className="text-gray-600 mb-6">
                Finding the right talent is crucial for your business success. Our IT staffing solutions connect you with skilled professionals who can drive your projects forward and help achieve your business goals.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1920"
                alt="IT professionals"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
            <div className="service-card text-center">
              <Users className="h-12 w-12 text-primary mx-auto mb-1" />
              <h3 className="text-xl font-semibold mb-2">Skilled Talent</h3>
              <p className="text-gray-600">Access to a vast network of pre-vetted IT professionals</p>
            </div>
            <div className="service-card text-center">
              <Target className="h-12 w-12 text-primary mx-auto mb-1" />
              <h3 className="text-xl font-semibold mb-2">Perfect Match</h3>
              <p className="text-gray-600">Precise matching of skills with your requirements</p>
            </div>
            <div className="service-card text-center">
              <Award className="h-12 w-12 text-primary mx-auto mb-1" />
              <h3 className="text-xl font-semibold mb-2">Quality Assured</h3>
              <p className="text-gray-600">Rigorous screening and evaluation process</p>
            </div>
            <div className="service-card text-center">
              <Clock className="h-12 w-12 text-primary mx-auto mb-1" />
              <h3 className="text-xl font-semibold mb-2">Fast Placement</h3>
              <p className="text-gray-600">Quick turnaround time for your staffing needs</p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-8 mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Staffing Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2 shadow-lg">
                  <FileSearch className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Requirements Analysis</h3>
                <p className="text-gray-600">We understand your specific needs and requirements</p>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2 shadow-lg">
                  <UserCheck className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Talent Matching</h3>
                <p className="text-gray-600">We identify and screen the best candidates</p>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2 shadow-lg">
                  <Briefcase className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Placement & Support</h3>
                <p className="text-gray-600">We ensure smooth onboarding and ongoing support</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Staffing;