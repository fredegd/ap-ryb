import { services } from '../servicesData';
import ServiceCard from './ServiceCard';

const ServiceListPage = () => {
    return (
        <section id="services" className="py-20 bg-dark-bg">
            <div className="container mx-auto px-6">
                <div id="service-index">
                    <h2 className="text-4xl font-bold uppercase text-center mb-4 ">Servizi</h2>

                    <div id="service-list" className="grid md:grid-cols-3 gap-8">
                        {Object.keys(services).map(id => {
                            const service = services[id];
                            return (
                                <ServiceCard key={id} slug={id} service={service} />
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceListPage;
