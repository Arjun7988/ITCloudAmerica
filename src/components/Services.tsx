import React from 'react';
import { 
  ServerCog, 
  Network, 
  Shield, 
  Clock, 
  Users, 
  UserCheck, 
  FileSearch, 
  Briefcase,
  Cloud, 
  Lock, 
  Cpu, 
  BarChart,
  Server,
  Database,
  HardDrive,
  Layers,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: <div className="grid grid-cols-2 gap-2">
      <ServerCog className="h-6 w-6" />
      <Network className="h-6 w-6" />
      <Shield className="h-6 w-6" />
      <Clock className="h-6 w-6" />
    </div>,
    headerIcon: <Server className="h-16 w-16 text-primary mb-1" />,
    title: "IT Infrastructure",
    description: "Modern, scalable infrastructure solutions tailored to your business needs",
    features: ["Cloud Migration", "Network Security", "System Integration", "24/7 Support"],
    link: "/"
  },
  {
    icon: <div className="grid grid-cols-2 gap-2">
      <Users className="h-6 w-6" />
      <UserCheck className="h-6 w-6" />
      <FileSearch className="h-6 w-6" />
      <Briefcase className="h-6 w-6" />
    </div>,
    headerIcon: <Users className="h-16 w-16 text-primary mb-1" />,
    title: "IT Staffing",
    description: "Connect with skilled IT professionals for your project requirements",
    features: ["Technical Recruitment", "Contract Staffing", "Direct Hire", "Skill Assessment"],
    link: "/staffing"
  },
  {
    icon: <div className="grid grid-cols-2 gap-2">
      <Cloud className="h-6 w-6" />
      <Lock className="h-6 w-6" />
      <Cpu className="h-6 w-6" />
      <BarChart className="h-6 w-6" />
    </div>,
    headerIcon: <Cloud className="h-16 w-16 text-primary mb-1" />,
    title: "Cloud Solutions",
    description: "Secure and efficient cloud services for business transformation",
    features: ["AWS & Azure", "Cloud Security", "DevOps", "Performance Optimization"],
    link: "/"
  },
];

const Services = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,102,204,0.05)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,51,102,0.05)_0%,transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent
            [text-shadow:0_4px_8px_rgba(0,0,0,0.1)]">
            Our Services
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Empowering businesses with cutting-edge technology solutions and exceptional talent
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative bg-white rounded-3xl overflow-hidden
                transform hover:-translate-y-2 transition-all duration-500
                shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)]"
            >
              {/* Card Top Gradient Border */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              
              <div className="p-8">
                {/* Header Icon with Background */}
                <div className="relative mb-6 inline-flex items-center justify-center">
                  <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative">
                    {service.headerIcon}
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-gray-800 to-gray-600 
                  group-hover:from-primary group-hover:to-secondary bg-clip-text text-transparent 
                  transition-all duration-500">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} 
                      className="flex items-center space-x-3 text-gray-600
                        transform transition-transform duration-300 group-hover:translate-x-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-primary to-secondary
                        group-hover:animate-pulse" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Learn More Link */}
                
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
       
      </div>
    </section>
  );
};

export default Services;