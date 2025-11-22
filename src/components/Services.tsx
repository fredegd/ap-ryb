import React from 'react';
import { Link } from 'react-router-dom';
import NeonDivider from './NeonDivider';
import { services } from '../servicesData';

const featuredServices = ['massaggio-decontratturante', 'linfodrenaggio', 'valutazione-posturale', 'personal-training'];

const Services = () => {
  return (
    <section id="servizi" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold uppercase text-center mb-4 text-neon-yellow">I Nostri Percorsi di Benessere</h2>
        <NeonDivider className="w-16 mx-auto mb-10" />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredServices.map(slug => {
            const service = services[slug];
            if (!service) return null;
            return (
              <div key={slug} className="bg-dark-bg p-8 rounded-xl shadow-2xl border-2 border-neon-yellow/30 transform hover:scale-[1.02] transition duration-500 flex flex-col">
                <h3 className="text-2xl font-bold mb-3 text-neon-yellow">{service.title}</h3>
                <p className="text-gray-400 mb-6 flex-grow">{service.description.substring(0, 100)}...</p>
                <Link to={`/services/${slug}`} className="block w-full text-center py-2 border border-neon-yellow text-neon-yellow rounded-lg hover:bg-neon-yellow hover:text-dark-bg transition duration-300 mt-auto">
                  Scopri di più
                </Link>
              </div>
            );
          })}
        </div>
        <div className="text-center mt-12">
            <Link to="/services" className="inline-block bg-neon-yellow text-dark-bg font-bold text-lg px-8 py-3 rounded-lg hover:bg-opacity-80 transition duration-300">
                Vedi Tutti i Servizi
            </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
