import { blogArticles } from '../blogData';
import NeonDivider from './NeonDivider';
import BlogCard from './BlogCard';
import { Link } from 'react-router-dom';

const BlogPreview = () => {
    // Konvertiere blogArticles zu Array und sortiere nach Datum (neueste zuerst)
    const blogEntries = Object.entries(blogArticles)
        .map(([slug, article]) => ({
            slug,
            ...article,
            // Konvertiere Datum für Sortierung
            sortDate: new Date(article.date.split(' ').reverse().join(' '))
        }))
        .sort((a, b) => b.sortDate.getTime() - a.sortDate.getTime())
        .slice(0, 3); // Nur die ersten 3 Artikel

    return (
        <section className="py-20 bg-gray-800/30">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold uppercase text-center mb-4 text-neon-yellow">
                    Dal mio Blog                </h2>
                <NeonDivider className="w-16 mx-auto mb-10" />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {blogEntries.map((article) => (
                        <BlogCard key={article.slug} id={article.slug} article={article} />
                    ))}
                </div>

                <div className="text-center">
                    <Link
                        to="/blog"
                        className="inline-block bg-neon-yellow text-dark-bg font-bold text-lg px-8 py-3 rounded-lg hover:bg-opacity-80 transition duration-300 shadow-lg hover:shadow-neon-yellow/20"
                    >
                        Leggi gli altri Articoli
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default BlogPreview;