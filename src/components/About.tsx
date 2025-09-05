
import React from 'react';
import { CheckCircle, Target, Eye, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="animate-fade-in">
            <div className="mb-6">
              <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-2 rounded-full mb-4">
                About WM Industries India
              </span>
              <h2 className="font-montserrat font-bold text-4xl lg:text-5xl text-slate-800 leading-tight">
                You Design It, We Machine It
              </h2>
            </div>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              WM-Ind. is a leading company with a 20,000 sq. ft facility housing 20 advanced machines and supported by a skilled team of 35 professionals. Our ISO 9001:2015 certifications attest to our commitment to quality. With over 15 years of industrial experience, our leadership excels in Supply Chain, Sourcing, Production, Forging, Casting, and Machining. We offer efficient Raw Material Stocking, FG Stocking, and Inventory Programs to reduce lead time to just 1 week. Additionally, we invest in cutting-edge Tooling, Machines, and Special Processes tailored to meet customer requirements. Partner with us for reliable and professional manufacturing solutions.
            </p>

            {/* Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                'ISO 9001:2015 Certified',
                'Advanced CNC Machining',
                'Experienced Team',
                'On-time Delivery'
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm border border-slate-200">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">25+</div>
                <div className="text-sm text-slate-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">500+</div>
                <div className="text-sm text-slate-600">Projects Completed</div>
              </div>
            </div>

            {/* Mission & Vision */}
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Target className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="font-montserrat font-bold text-lg text-slate-800">Our Mission</h3>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  To deliver precision manufacturing solutions that empower our clients' success 
                  through innovation and excellence.
                </p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="animate-slide-in-right">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl transform rotate-3"></div>
              <img
                src="https://www.rapiddirect.com/wp-content/uploads/2022/01/what-is-cnc-machining.webp"
                alt="WM Industries Manufacturing Facility"
                className="relative rounded-2xl shadow-2xl w-full h-[600px] object-cover"
              />
              
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-slate-200">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-800">ISO Certified</div>
                    <div className="text-sm text-slate-600">Quality Assured</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
