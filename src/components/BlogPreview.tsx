import { Link } from 'react-router-dom';
import { blogArticles } from '../blogData';
import NeonDivider from './NeonDivider';

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

    // Funktion um HTML-Content zu bereinigen und Vorschau zu erstellen
    const createPreview = (content: string): string => {
        // Entferne HTML-Tags und kürze auf 120 Zeichen
        const textOnly = content.replace(/<[^>]*>/g, '').trim();
        return textOnly.length > 120 ? textOnly.substring(0, 120) + '...' : textOnly;
    };

    return (
        <section className="py-20 bg-gray-800/30">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold uppercase text-center mb-4 text-neon-yellow">
                    Ultimi Articoli del Blog
                </h2>
                <NeonDivider className="w-16 mx-auto mb-10" />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {blogEntries.map((article) => (
                        <div
                            key={article.slug}
                            className="bg-dark-bg rounded-xl shadow-2xl border border-gray-700 hover:border-neon-yellow/50 transition-all duration-300 transform hover:scale-[1.02] overflow-hidden"
                        >
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-xs font-semibold text-neon-yellow bg-neon-yellow/10 px-3 py-1 rounded-full border border-neon-yellow/30">
                                        {article.tag}
                                    </span>
                                    <span className="text-sm text-gray-400">
                                        {article.date}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 hover:text-neon-yellow transition-colors duration-300">
                                    {article.title}
                                </h3>

                                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                                    {createPreview(article.content)}
                                </p>

                                <Link
                                    to={`/blog/${article.slug}`}
                                    className="inline-flex items-center text-neon-yellow hover:text-white transition-colors duration-300 font-medium"
                                >
                                    Leggi di più
                                    <svg
                                        className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <Link
                        to="/blog"
                        className="inline-block bg-neon-yellow text-dark-bg font-bold text-lg px-8 py-3 rounded-lg hover:bg-opacity-80 transition duration-300 shadow-lg hover:shadow-neon-yellow/20"
                    >
                        Vedi Tutti gli Articoli
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default BlogPreview;