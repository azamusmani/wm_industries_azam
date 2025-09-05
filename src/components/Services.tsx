
import React from 'react';
import { Settings, Hammer, Flame, Wrench, ArrowRight, Zap, Shield, Circle, Cog } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Hammer,
      title: 'Open Die Forging',
      description: 'Traditional forging process using flat dies to shape metal through compressive forces, ideal for large components and custom shapes.',
      features: ['Large Component Capability', 'Custom Shapes', 'Superior Grain Structure', 'Cost Effective for Low Volumes'],
      image: '/wm/Open_Die_Forging.jpeg'
    },
    {
      icon: Settings,
      title: 'Close Die Machining',
      description: 'Precision machining using closed die systems for accurate dimensional control and superior surface finish on complex geometries.',
      features: ['High Precision', 'Complex Geometries', 'Superior Surface Finish', 'Dimensional Accuracy'],
      image: '/wm/Close_Die_Machining.jpeg'
    },
    {
      icon: Circle,
      title: 'Casting',
      description: 'High-quality metal casting solutions including sand casting, investment casting, and die casting for various industrial applications.',
      features: ['Sand Casting', 'Investment Casting', 'Die Casting', 'Quality Assurance'],
      image: '/wm/casting.jpg'
    },
    {
      icon: Cog,
      title: 'Ring Rolling',
      description: 'Specialized manufacturing process for producing seamless rings and circular components with excellent material properties and dimensional accuracy.',
      features: ['Seamless Construction', 'Material Efficiency', 'High Strength', 'Custom Dimensions'],
      image: 'https://tse3.mm.bing.net/th/id/OIP.eLFkqSYrG6nPWbPpYxg31gHaE0?pid=Api&P=0&h=180'
    },
    {
      icon: Shield,
      title: 'Nitriding and Carbonizing',
      description: 'Advanced surface hardening treatments that improve wear resistance, fatigue strength, and corrosion resistance of components.',
      features: ['Surface Hardening', 'Wear Resistance', 'Fatigue Strength', 'Corrosion Protection'],
      image: 'https://www.airproducts.co.uk/-/media/images/1440x810/masthead/185808324-furnace_page_header_16x9.jpg?as=0&w=1439&hash=51CA70A58150E905B260B880C398CE90'
    },
    {
      icon: Zap,
      title: 'Induction Hardening',
      description: 'Precise localized hardening using electromagnetic induction to selectively harden specific areas while maintaining core toughness.',
      features: ['Selective Hardening', 'Precise Control', 'Energy Efficient', 'Minimal Distortion'],
      image: 'https://tse1.mm.bing.net/th/id/OIP.AWi59HhUcbiWCmfjB9J5ewHaFp?pid=Api&P=0&h=180'
    },
    {
      icon: Flame,
      title: 'Heat Treatment',
      description: 'Comprehensive heat treatment services including annealing, normalizing, quenching, and tempering to optimize material properties.',
      features: ['Annealing', 'Normalizing', 'Quenching & Tempering', 'Stress Relieving'],
      image: 'https://tse2.mm.bing.net/th/id/OIP.N8Y8htz4nNIym4jda461RQHaCV?pid=Api&P=0&h=180'
    },
    {
      icon: Wrench,
      title: 'Machining',
      description: 'Precision CNC machining services with advanced multi-axis capabilities for complex components and tight tolerances.',
      features: ['CNC Machining', 'Multi-axis Capability', 'Tight Tolerances', 'Complex Components'],
      image: '/wm/Machining.jpg'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-2 rounded-full mb-4">
            Our Services
          </span>
          <h2 className="font-montserrat font-bold text-4xl lg:text-5xl text-slate-800 mb-6">
            Manufacturing <span className="text-blue-600">Solutions</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Comprehensive manufacturing solutions designed to meet your exact specifications 
            with uncompromising quality and precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                </div>
                
                <div className="p-8">
                  <h3 className="font-montserrat font-bold text-xl text-slate-800 mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0"></div>
                        <span className="text-sm text-slate-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className="group inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
            <div className="relative z-10">
              <h3 className="font-montserrat font-bold text-3xl lg:text-4xl text-white mb-4">
                Need Custom Manufacturing Solutions?
              </h3>
              <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                Our engineering team is ready to discuss your specific requirements and 
                provide tailored solutions for your manufacturing needs.
              </p>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-3"
              >
                Discuss Your Project
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
