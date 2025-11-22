import { Helmet } from 'react-helmet-async';
import { blogArticles } from '../blogData';
import BlogCard from './BlogCard';
import { buildAbsoluteUrl, siteMetadata, toJsonLd } from '../utils/seo';

const BlogListPage = () => {
    const canonicalUrl = buildAbsoluteUrl('/blog');
    const description = 'Approfondimenti su massoterapia, chinesiologia e benessere firmati Reset Your Body.';
    const itemList = Object.keys(blogArticles).map((id, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: buildAbsoluteUrl(`/blog/${id}`),
        name: blogArticles[id].title,
    }));

    return (
        <section id="blog" className="py-20 bg-dark-bg">
            <Helmet>
                <title>{`Blog | ${siteMetadata.siteName}`}</title>
                <meta name="description" content={description} />
                <link rel="canonical" href={canonicalUrl} />
                <meta property="og:title" content={`Blog | ${siteMetadata.siteName}`} />
                <meta property="og:description" content={description} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={canonicalUrl} />
                <meta property="og:image" content={siteMetadata.defaultSocialImage} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={`Blog | ${siteMetadata.siteName}`} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content={siteMetadata.defaultSocialImage} />
                <script type="application/ld+json">{toJsonLd({
                    '@context': 'https://schema.org',
                    '@type': 'CollectionPage',
                    name: `Blog | ${siteMetadata.siteName}`,
                    description,
                    url: canonicalUrl,
                    mainEntity: {
                        '@type': 'ItemList',
                        itemListElement: itemList,
                    },
                })}</script>
            </Helmet>
            <div className="container mx-auto px-6">
                <div id="blog-index">
                    <h2 className="text-4xl font-bold uppercase text-center mb-4 ">Dal Blog: Terapia e Movimento</h2>

                    <div id="article-list" className="grid md:grid-cols-3 gap-8">
                        {Object.keys(blogArticles).map(id => {
                            const article = blogArticles[id];
                            return (
                                <BlogCard key={id} id={id} article={article} />
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogListPage;
