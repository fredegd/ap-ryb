import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { services } from '../servicesData';
import type { Service } from '../servicesData';

const ServicePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const service: Service | undefined = slug ? services[slug] : undefined;

  if (!service) {
    return (
      <div className="container mx-auto p-8 text-center text-gray-50">
        <h1 className="text-3xl font-bold mb-4">Servizio non trovato</h1>
        <p>Il servizio con l'identificativo "{slug}" non esiste.</p>
        <Link to="/services" className="text-neon-yellow hover:underline mt-4 inline-block">Torna ai servizi</Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-8 bg-dark-bg text-gray-50 min-h-screen">
      <Link to="/services" className="text-neon-yellow hover:text-gray-100 transition duration-300 flex items-center mb-8 text-lg font-medium">
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
        Torna ai Servizi
      </Link>

      <div className="max-w-4xl mx-auto p-8 bg-gray-900/50 rounded-xl shadow-2xl border border-neon-yellow/30">
        <h1 id="detail-title" className="text-4xl font-bold mb-4 text-neon-yellow">{service.title}</h1>
        <p id="detail-meta" className="text-sm text-gray-400 mb-6">{service.category}</p>
        <div id="detail-content" className="text-lg text-gray-300 leading-relaxed space-y-6">
            <p>{service.description}</p>
            <h3 className="text-2xl font-semibold text-neon-yellow mt-6 mb-3">Benefits:</h3>
            <ul className="list-disc list-inside">
                {service.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                ))}
            </ul>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
