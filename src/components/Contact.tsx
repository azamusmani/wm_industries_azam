
import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for contacting us. We'll get back to you within 24 hours.",
      });
      
      // Reset form
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      content: 'WM Industries, Gat no. 74, 75, Jyotiba Nagar, Talwade, Pimpri-Chinchwad, Maharashtra 411062'
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+91 98904 14719'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'marketing@wmindustriesinida.co.in'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      content: 'Mon-Sun: 9:00 AM - 6:00 PM'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="heading-secondary">Contact Us</h2>
          <p className="text-body text-lg max-w-3xl mx-auto">
            Ready to start your project? Get in touch with our team for a consultation 
            and personalized quote for your manufacturing needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-fade-in">
            <h3 className="font-montserrat font-semibold text-2xl text-navy-700 mb-8">
              Get In Touch
            </h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-navy-100 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-navy-600" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-montserrat font-semibold text-lg text-navy-700 mb-1">
                        {info.title}
                      </h4>
                      <p className="text-body">
                        {info.content}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Interactive Map */}
            <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center overflow-hidden">
              <iframe
                title="WM Industries Location"
                src="https://www.google.com/maps?q=WM+Industries,+Gat+no.+74,+75,+Jyotiba+Nagar,+Talwade,+Pimpri-Chinchwad,+Maharashtra+411062&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="font-montserrat font-semibold text-2xl text-navy-700 mb-6">
                Send us a Message
              </h3>
              
              <form
                action="https://formspree.io/f/mldnkapn"
                method="POST"
                className="space-y-6"
              >
                <input type="hidden" name="_replyto" value="marketing@wmindustriesinida.co.in" />
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent transition-colors duration-200`}
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent transition-colors duration-200`}
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent transition-colors duration-200 resize-none`}
                    placeholder="Tell us about your project requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className={`w-full btn-primary inline-flex items-center justify-center gap-2`}
                >
                  Send Message
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
