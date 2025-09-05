
import React from 'react';
import { ArrowRight, Award, Users, Wrench } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
      style={{
        backgroundImage: 'url(/cnc-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-slate-900/80"></div>
      
      <div className="relative z-10 container-max section-padding text-center">
        <div className="animate-fade-in max-w-5xl mx-auto">
          {/* Company Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-400/30 rounded-full px-6 py-2 mb-8">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <span className="text-blue-200 text-sm font-medium">Since 1998 • ISO 9001:2015 Certified</span>
          </div>

          <h1 className="font-montserrat font-bold text-4xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight mt-24 md:mt-32">
            WM Industries India
            <span className="block text-2xl md:text-4xl lg:text-5xl text-blue-300 font-normal mt-4">
              Precision Manufacturing Solutions
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-slate-200 mb-12 max-w-4xl mx-auto leading-relaxed">
            Leading manufacturer in Pune delivering excellence in CNC machining, casting, 
            forging, and heat treatment with cutting-edge technology and uncompromising quality.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <button 
              onClick={scrollToContact}
              className="group bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl inline-flex items-center justify-center gap-3 text-lg"
            >
              Get Quote Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={scrollToAbout}
              className="group bg-transparent border-2 border-white/30 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:bg-white/10 hover:border-white/50 inline-flex items-center justify-center gap-3 text-lg"
            >
              Learn More
            </button>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center animate-slide-in-right bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10" style={{ animationDelay: '0.2s' }}>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/20 rounded-full mb-4">
                <Award className="w-8 h-8 text-blue-300" />
              </div>
              <h3 className="font-montserrat font-bold text-3xl text-white mb-2">25+</h3>
              <p className="text-slate-300 font-medium">Years Experience</p>
            </div>
            
            <div className="text-center animate-slide-in-right bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10" style={{ animationDelay: '0.4s' }}>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/20 rounded-full mb-4">
                <Users className="w-8 h-8 text-blue-300" />
              </div>
              <h3 className="font-montserrat font-bold text-3xl text-white mb-2">500+</h3>
              <p className="text-slate-300 font-medium">Satisfied Clients</p>
            </div>
            
            <div className="text-center animate-slide-in-right bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10" style={{ animationDelay: '0.6s' }}>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/20 rounded-full mb-4">
                <Wrench className="w-8 h-8 text-blue-300" />
              </div>
              <h3 className="font-montserrat font-bold text-3xl text-white mb-2">99.5%</h3>
              <p className="text-slate-300 font-medium">Quality Precision</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
