import React from 'react';

const clients = [
  "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?auto=format&fit=crop&q=80&w=200",
  "https://images.unsplash.com/photo-1614680376408-16e9652d86d1?auto=format&fit=crop&q=80&w=200",
  "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?auto=format&fit=crop&q=80&w=200",
  "https://images.unsplash.com/photo-1614680376739-8568f7989bab?auto=format&fit=crop&q=80&w=200",
];

const Clients = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">Trusted by Industry Leaders</h2>
        
        <div className="relative">
          {/* Decorative elements */}
          <div className="absolute -top-10 -left-10 w-20 h-20 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full z-0 hidden md:block"></div>
          <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full z-0 hidden md:block"></div>
          
          {/* Client logos */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center relative z-10">
            {clients.map((client, index) => (
              <div key={index} className="flex justify-center transform hover:scale-105 transition-transform duration-300">
                <img
                  src={client}
                  alt={`Client ${index + 1}`}
                  className="h-16 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Join hundreds of satisfied clients who have transformed their businesses with our IT solutions and staffing services.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Clients;