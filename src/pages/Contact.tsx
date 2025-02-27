import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-20">
      <div className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6 text-center">Contact Us</h1>
          <p className="text-xl text-center">Get in touch with our team</p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            
            <div className="space-y-12 mb-8">
              <div className="flex flex-col items-center space-y-2">
                <MapPin className="h-12 w-12 text-primary" />
                <div>
                  <h3 className="text-xl font-semibold">Address</h3>
                  <p className="text-gray-600 text-lg">Irving, Texas-75063.</p>
                </div>
              </div>
              
              <div className="flex flex-col items-center space-y-2">
                <Phone className="h-12 w-12 text-primary" />
                <div>
                  <h3 className="text-xl font-semibold">Phone</h3>
                  <p className="text-gray-600 text-lg">+1 (732) 822-3737</p>
                </div>
              </div>
              
              <div className="flex flex-col items-center space-y-2">
                <Mail className="h-12 w-12 text-primary" />
                <div>
                  <h3 className="text-xl font-semibold">Email</h3>
                  <p className="text-gray-600 text-lg">admin@itcloudamerica.com</p>
                  <p className="text-gray-600 text-lg">hr@itcloudamerica.com</p>
                </div>
              </div>
            </div>
            
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;