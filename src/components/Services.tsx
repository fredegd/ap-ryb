import { Link } from 'react-router-dom';
import NeonDivider from './NeonDivider';
import { services } from '../servicesData';
import ServiceCard from './ServiceCard';

const featuredServices = ['massaggio-decontratturante', 'linfodrenaggio', 'valutazione-posturale', 'personal-training'];

const Services = () => {
  return (
    <section id="servizi" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold uppercase text-center mb-4 text-neon-yellow">Percorsi Benessere</h2>
        <NeonDivider className="w-16 mx-auto mb-10" />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredServices.map(slug => {
            const service = services[slug];
            if (!service) return null;
            return (
              <ServiceCard key={slug} slug={slug} service={service} />
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
