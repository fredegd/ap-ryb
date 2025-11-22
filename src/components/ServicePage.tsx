import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { services } from '../servicesData';
import type { Service } from '../servicesData';
import {
  buildAbsoluteUrl,
  buildMetaDescription,
  siteMetadata,
  toJsonLd,
} from '../utils/seo';

const ServicePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const service: Service | undefined = slug ? services[slug] : undefined;

  if (!service) {
    return (
      <div className="container mx-auto p-8 text-center">
        <Helmet>
          <title>Servizio non trovato | Servizi | {siteMetadata.siteName}</title>
          <meta name="robots" content="noindex, nofollow" />
        </Helmet>
        <h1 className="text-3xl font-bold mb-4">Servizio non trovato</h1>
        <p>Il servizio con l'identificativo "{slug}" non esiste.</p>
        <Link to="/services" className=" hover:underline mt-4 inline-block">Torna ai servizi</Link>
      </div>
    );
  }

  const canonicalUrl = buildAbsoluteUrl(`/services/${slug}`);
  const socialImage = buildAbsoluteUrl(service.imageUrl ?? siteMetadata.defaultSocialImage);
  const description = buildMetaDescription(service.description, 160);

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description,
    serviceType: service.category,
    url: canonicalUrl,
    image: socialImage,
    provider: {
      '@type': 'Organization',
      name: siteMetadata.organization.name,
      url: siteMetadata.siteUrl,
      logo: siteMetadata.organization.logo,
    },
  };

  return (
    <div className="container mx-auto p-8 bg-dark-bg  min-h-screen pt-24 ">
      <Helmet>
        <title>{`${service.title} | Servizi | ${siteMetadata.siteName}`}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={service.title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="service" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={socialImage} />
        <meta property="og:site_name" content={siteMetadata.siteName} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={service.title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={socialImage} />
        <script type="application/ld+json">{toJsonLd(serviceSchema)}</script>
      </Helmet>
      <Link to="/services" className=" hover:text-gray-100 transition duration-300 flex items-center mb-8 text-lg font-medium">
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
        Torna ai Servizi
      </Link>

      <div className="max-w-4xl mx-auto p-8 bg-gray-500/50 rounded-xl shadow-2xl border /30">
        {service.imageUrl && (
          <img
            src={service.imageUrl}
            alt={service.title}
            className="w-full object-cover rounded-lg aspect-square md:aspect-3/2 mb-8"
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
