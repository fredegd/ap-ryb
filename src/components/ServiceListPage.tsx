import React from 'react';
import { Link } from 'react-router-dom';
import { services } from '../servicesData';
import NeonDivider from './NeonDivider';

const ServiceListPage = () => {
    return (
        <section id="services" className="py-20 bg-dark-bg">
            <div className="container mx-auto px-6">
                <div id="service-index">
                    <h2 className="text-4xl font-bold uppercase text-center mb-4 text-neon-yellow">Servizi</h2>
                    <NeonDivider className="w-16 mx-auto mb-10" />

                    <div id="service-list" className="grid md:grid-cols-3 gap-8">
                        {Object.keys(services).map(id => {
                            const service = services[id];
                            return (
                                <div key={id} className="bg-gray-900/50 rounded-xl overflow-hidden shadow-xl border-t-2 border-neon-yellow/50 hover:shadow-[0_0_20px_rgba(226,255,0,0.3)] transition duration-300">
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold mb-3 text-gray-100">{service.title}</h3>
                                        <p className="text-gray-400 text-sm mb-4">
                                            {service.description.substring(0, 100)}...
                                        </p>
                                        <Link to={`/services/${id}`} className="text-neon-yellow text-sm font-medium hover:underline">Scopri di più &rarr;</Link>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceListPage;
