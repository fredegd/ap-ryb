import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { services } from '../servicesData';
import type { Service } from '../servicesData';

const ServicePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const service: Service | undefined = slug ? services[slug] : undefined;

  if (!service) {
    return (
      <div className="container mx-auto p-8 text-center">
        <h1 className="text-3xl font-bold mb-4">Servizio non trovato</h1>
        <p>Il servizio con l'identificativo "{slug}" non esiste.</p>
        <Link to="/services" className=" hover:underline mt-4 inline-block">Torna ai servizi</Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-8 bg-dark-bg  min-h-screen pt-24 ">
      <Link to="/services" className=" hover:text-gray-100 transition duration-300 flex items-center mb-8 text-lg font-medium">
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
        Torna ai Servizi
      </Link>

      <div className="max-w-4xl mx-auto p-8 bg-gray-500/50 rounded-xl shadow-2xl border /30">
        {service.imageUrl && (
          <img
            src={service.imageUrl}
            alt={service.title}
            className="w-full object-cover rounded-lg aspect-[1/1] md:aspect-[3/2] mb-8"
          />
        )}
        <h1 id="detail-title" className="text-4xl font-bold mb-4 ">{service.title}</h1>
        <p id="detail-meta" className="text-sm text-gray-400 mb-6">{service.category}</p>
        <div id="detail-content" className="text-lg text-gray-300 leading-relaxed space-y-6">
          <p>{service.description}</p>
          <h3 className="text-2xl font-semibold  mt-6 mb-3">Benefits:</h3>
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
