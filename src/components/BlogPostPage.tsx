import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { blogArticles } from '../blogData';
import type { Article } from '../blogData';
import {
  buildAbsoluteUrl,
  buildMetaDescription,
  parseItalianDateToIso,
  siteMetadata,
  toJsonLd,
} from '../utils/seo';

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const article: Article | undefined = slug ? blogArticles[slug] : undefined;

  if (!article) {
    return (
      <div className="container mx-auto p-8 text-center text-gray-50">
        <Helmet>
          <title>Articolo non trovato | Blog | {siteMetadata.siteName}</title>
          <meta name="robots" content="noindex, nofollow" />
        </Helmet>
        <h1 className="text-3xl font-bold mb-4">Articolo non trovato</h1>
        <p>L'articolo con l'identificativo "{slug}" non esiste.</p>
        <Link to="/blog" className=" hover:underline mt-4 inline-block">Torna al blog</Link>
      </div>
    );
  }

  const canonicalUrl = buildAbsoluteUrl(`/blog/${slug}`);
  const socialImage = buildAbsoluteUrl(article.imageUrl ?? siteMetadata.defaultSocialImage);
  const description = buildMetaDescription(article.content, 160);
  const isoDate = parseItalianDateToIso(article.date);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    image: [socialImage],
    datePublished: isoDate,
    dateModified: isoDate,
    articleSection: article.tag,
    author: {
      '@type': 'Person',
      name: siteMetadata.founder,
    },
    publisher: {
      '@type': 'Organization',
      name: siteMetadata.organization.name,
      logo: {
        '@type': 'ImageObject',
        url: siteMetadata.organization.logo,
      },
    },
    description,
    mainEntityOfPage: canonicalUrl,
  };

  return (
    <div className="container mx-auto p-8 bg-dark-bg min-h-screen pt-24">
      <Helmet>
        <title>{`${article.title} | Blog | ${siteMetadata.siteName}`}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={socialImage} />
        <meta property="article:author" content={siteMetadata.founder} />
        <meta property="article:section" content={article.tag} />
        {isoDate && <meta property="article:published_time" content={isoDate} />}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={article.title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={socialImage} />
        <script type="application/ld+json">{toJsonLd(articleSchema)}</script>
      </Helmet>
      <Link to="/blog" className=" hover:text-gray-100 transition duration-300 flex items-center mb-8 text-lg font-medium">
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
        Torna al Blog
      </Link>

      <div className="max-w-4xl mx-auto p-8 bg-gray-500/50 rounded-xl shadow-2xl border /30">
        {article.imageUrl && (
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full object-cover rounded-lg aspect-square md:aspect-3/2 mb-8"
          />
        )}
        <h1 id="detail-title" className="text-4xl font-bold mb-4 ">{article.title}</h1>
        <p id="detail-meta" className="text-sm mb-6">{article.tag} | {article.date}</p>
        <div id="detail-content" className="text-lg  leading-relaxed space-y-6" dangerouslySetInnerHTML={{ __html: article.content }}>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;
