import { Link } from 'react-router-dom';
import type { Service } from '../servicesData';

interface ServiceCardProps {
    slug: string;
    service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ slug, service }) => {
    const snippet = service.description.substring(0, 100);

    return (
        <div
            className="relative group rounded-xl overflow-hidden shadow-xl border-neon-yellow/30 border min-h-[350px] flex flex-col justify-end transition-all duration-300 ease-in-out hover:shadow-[0_0_25px_rgba(226,255,0,0.35)] hover:border-neon-yellow/60 bg-gray-900"
            style={{
                backgroundImage: service.imageUrl ? `url(${service.imageUrl})` : undefined,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-transparent"></div>
            <div className="relative p-6 flex flex-col justify-end flex-grow">
                <h3 className="text-xl font-bold mb-3 text-white transition-colors duration-300 group-hover:text-neon-yellow">{service.title}</h3>
                <p className="text-gray-300 text-sm mb-4">
                    {snippet}...
                </p>
                <Link to={`/services/${slug}`} className="text-neon-yellow font-semibold text-sm hover:underline mt-auto">Leggi di più &rarr;</Link>
            </div>
        </div>
    );
};

export default ServiceCard;
