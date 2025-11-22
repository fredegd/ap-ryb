import { useMemo } from 'react';
import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import BlogPostPage from './components/BlogPostPage';
import ServiceListPage from './components/ServiceListPage';
import ServicePage from './components/ServicePage';
import Services from './components/Services';
import BlogListPage from './components/BlogListPage';
import BlogPreview from './components/BlogPreview';
import BackgroundAnimation from './components/BackgroundAnimation';
import { buildAbsoluteUrl, siteMetadata, toJsonLd } from './utils/seo';

function App() {
  const location = useLocation();
  const canonicalUrl = buildAbsoluteUrl(location.pathname || '/');

  const organizationSchema = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': `${siteMetadata.siteUrl}#organization`,
      name: siteMetadata.organization.name,
      legalName: siteMetadata.organization.legalName,
      url: siteMetadata.siteUrl,
      logo: siteMetadata.organization.logo,
      founder: {
        '@type': 'Person',
        name: siteMetadata.founder,
      },
    }),
    [],
  );

  const websiteSchema = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: siteMetadata.siteName,
      url: siteMetadata.siteUrl,
      inLanguage: siteMetadata.locale,
      publisher: {
        '@id': `${siteMetadata.siteUrl}#organization`,
      },
    }),
    [],
  );

  return (
    <ThemeProvider>
      <Helmet>
        <html lang="it" />
        <title>{siteMetadata.defaultTitle}</title>
        <meta name="description" content={siteMetadata.defaultDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:locale" content={siteMetadata.locale} />
        <meta property="og:title" content={siteMetadata.defaultTitle} />
        <meta property="og:description" content={siteMetadata.defaultDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={siteMetadata.defaultSocialImage} />
        <meta property="og:site_name" content={siteMetadata.siteName} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={siteMetadata.twitterHandle} />
        <meta name="twitter:creator" content={siteMetadata.twitterHandle} />
        <meta name="twitter:title" content={siteMetadata.defaultTitle} />
        <meta name="twitter:description" content={siteMetadata.defaultDescription} />
        <meta name="twitter:image" content={siteMetadata.defaultSocialImage} />
        <script type="application/ld+json">{toJsonLd(organizationSchema)}</script>
        <script type="application/ld+json">{toJsonLd(websiteSchema)}</script>
      </Helmet>
      <div className="font-passion relative min-h-screen overflow-x-hidden transition-all duration-500 ease-in-out">
        <BackgroundAnimation />
        <Navbar />
        <main className='bg-gray-500/10 '>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <About />
                <Services />
                <BlogPreview />
                <Contacts />
              </>
            } />
            <Route path="/services" element={<ServiceListPage />} />
            <Route path="/services/:slug" element={<ServicePage />} />
            <Route path="/blog" element={<BlogListPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
