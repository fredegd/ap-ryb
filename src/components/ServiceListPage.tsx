import { Helmet } from 'react-helmet-async';
import { services } from '../servicesData';
import ServiceCard from './ServiceCard';
import { buildAbsoluteUrl, siteMetadata, toJsonLd } from '../utils/seo';

const ServiceListPage = () => {
    const canonicalUrl = buildAbsoluteUrl('/services');
    const description = 'Scopri i servizi di massoterapia e chinesiologia personalizzati offerti da Reset Your Body.';
    const itemList = Object.keys(services).map((id, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: buildAbsoluteUrl(`/services/${id}`),
        name: services[id].title,
    }));

    return (
        <section id="services" className="py-20 bg-dark-bg">
            <Helmet>
                <title>{`Servizi | ${siteMetadata.siteName}`}</title>
                <meta name="description" content={description} />
                <link rel="canonical" href={canonicalUrl} />
                <meta property="og:title" content={`Servizi | ${siteMetadata.siteName}`} />
                <meta property="og:description" content={description} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={canonicalUrl} />
                <meta property="og:image" content={siteMetadata.defaultSocialImage} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={`Servizi | ${siteMetadata.siteName}`} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content={siteMetadata.defaultSocialImage} />
                <script type="application/ld+json">{toJsonLd({
                    '@context': 'https://schema.org',
                    '@type': 'CollectionPage',
                    name: `Servizi | ${siteMetadata.siteName}`,
                    description,
                    url: canonicalUrl,
                    mainEntity: {
                        '@type': 'ItemList',
                        itemListElement: itemList,
                    },
                })}</script>
            </Helmet>
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
