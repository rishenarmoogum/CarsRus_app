
import React from 'react';
import { Shield, Users, Award, Clock } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: 'Verified Dealers',
      description: 'All our dealers are thoroughly vetted and verified for your safety and peace of mind.'
    },
    {
      icon: Award,
      title: 'Quality Guarantee',
      description: 'Every vehicle undergoes comprehensive inspection to ensure top quality standards.'
    },
    {
      icon: Users,
      title: '24/7 Support',
      description: 'Our dedicated team is available round the clock to assist with your car journey.'
    },
    {
      icon: Clock,
      title: 'Quick Process',
      description: 'Streamlined buying and selling process that saves you time and hassle.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Why Choose <span className="gradient-text">CarsRus</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the difference with Mauritius' most trusted automotive marketplace
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group text-center p-8 glass-effect rounded-3xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
