import * as React from 'react';
import { X, ZoomIn } from 'lucide-react';

const Products = () => {
  const [selectedImage, setSelectedImage] = React.useState<number | null>(null);

  const products = [
    {
      image: '/wm/SwivelTrunion.jpg',
      caption: 'Swivel Trunion',
      description: 'High-precision swivel trunion components for industrial applications'
    },
    {
      image: '/wm/Lock_Segment.jpeg',
      caption: 'Lock Segment',
      description: 'Durable lock segment parts engineered for secure mechanical connections'
    },
    {
      image: '/wm/Hammer_Union.jpeg',
      caption: 'Hammer Union',
      description: 'Robust hammer union fittings for high-pressure fluid connections'
    },
    {
      image: '/wm/Flange_Body_6_way.jpeg',
      caption: 'Flange Body 6 way',
      description: 'Multi-directional flange body systems for complex piping configurations'
    },
    {
      image: '/wm/Mud_Pump_Body.jpg',
      caption: 'Mud Pump Body',
      description: 'Heavy-duty mud pump body components for drilling operations'
    },
    {
      image: '/wm/Housing_Actuator_3_7500PSI.jpg',
      caption: 'Housing Actuator 3"7500PSI',
      description: 'High-pressure actuator housing rated for 7500 PSI applications'
    },
    {
      image: '/wm/crossbloc6outlet.jpg',
      caption: 'Cross Block 6 outlet',
      description: 'Multi-outlet cross block manifolds for fluid distribution systems'
    },
    {
      image: '/wm/BracketTrunionAssembly.jpg',
      caption: 'Bracket Trunion Assembly',
      description: 'Complete bracket trunion assembly units for mounting applications'
    },
    {
      image: '/wm/DriveGear.jpg',
      caption: 'Drive Gear',
      description: 'Precision-manufactured drive gear components for mechanical systems'
    },
    {
      image: '/wm/HUB.jpeg',
      caption: 'Hub',
      description: 'Industrial hub components designed for heavy-duty applications'
    }
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    if (direction === 'prev') {
      setSelectedImage(selectedImage === 0 ? products.length - 1 : selectedImage - 1);
    } else {
      setSelectedImage(selectedImage === products.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="heading-secondary">Our Products</h2>
          <p className="text-body text-lg max-w-3xl mx-auto">
            Discover our comprehensive range of precision-manufactured products, 
            each crafted to meet the highest industry standards.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 animate-fade-in cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openLightbox(index)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.caption}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/60 transition-all duration-300 flex items-center justify-center">
                  <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="font-montserrat font-semibold text-lg text-navy-700 mb-2">
                  {product.caption}
                </h3>
                <p className="text-body text-sm">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full">
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors duration-200"
              >
                <X className="w-6 h-6 text-white" />
              </button>
              
              <img
                src={products[selectedImage].image}
                alt={products[selectedImage].caption}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
              
              <div className="absolute bottom-4 left-4 right-4 bg-black/70 text-white p-4 rounded-lg">
                <h3 className="font-montserrat font-semibold text-xl mb-2">
                  {products[selectedImage].caption}
                </h3>
                <p className="text-gray-200">
                  {products[selectedImage].description}
                </p>
              </div>

              {/* Navigation arrows */}
              <button
                onClick={() => navigateImage('prev')}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-3 transition-colors duration-200"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={() => navigateImage('next')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-3 transition-colors duration-200"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;
