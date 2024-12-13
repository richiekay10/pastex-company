import React from 'react';
import { Printer, BookOpen, Package, Image, FileText, Layout } from 'lucide-react';

const services = [
  {
    icon: <Printer className="h-8 w-8" />,
    title: 'Commercial Printing',
    description: 'High-quality printing for business cards, brochures, and marketing materials.'
  },
  {
    icon: <BookOpen className="h-8 w-8" />,
    title: 'Book Publishing',
    description: 'Complete book printing and binding services for authors and publishers.'
  },
  {
    icon: <Package className="h-8 w-8" />,
    title: 'Packaging Solutions',
    description: 'Custom packaging design and printing for products and merchandise.'
  },
  {
    icon: <Image className="h-8 w-8" />,
    title: 'Large Format',
    description: 'Banners, posters, and signage for indoor and outdoor display.'
  },
  {
    icon: <FileText className="h-8 w-8" />,
    title: 'Document Services',
    description: 'Professional document printing and finishing services.'
  },
  {
    icon: <Layout className="h-8 w-8" />,
    title: 'Design Services',
    description: 'Expert graphic design and layout services for all your needs.'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of printing services to meet all your needs,
            from digital printing to large format solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-blue-600 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}