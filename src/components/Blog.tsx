import { Link } from 'react-router-dom';
import { blogArticles } from '../blogData';
import NeonDivider from './NeonDivider';

const Blog = () => {
    return (
        <section id="blog" className="py-20 bg-dark-bg">
            <div className="container mx-auto px-6">
                <div id="blog-index">
                    <h2 className="text-4xl font-bold uppercase text-center mb-4 text-neon-yellow">Dal Blog: Terapia e Movimento</h2>
                    <NeonDivider className="w-16 mx-auto mb-10" />

                    <div id="article-list" className="grid md:grid-cols-3 gap-8">
                        {Object.keys(blogArticles).map(id => {
                            const article = blogArticles[id];
                            const snippet = article.content.replace(/<[^>]*>/g, '').substring(0, 100);
                            return (
                                <div key={id} className="bg-gray-900/50 rounded-xl overflow-hidden shadow-xl border-t-2 border-neon-yellow/50 hover:shadow-[0_0_20px_rgba(226,255,0,0.3)] transition duration-300">
                                    <div className="p-6">
                                        <p className="text-sm text-neon-yellow/80 mb-2">{article.tag} | {article.date}</p>
                                        <h3 className="text-xl font-semibold mb-3 text-gray-100">{article.title}</h3>
                                        <p className="text-gray-400 text-sm mb-4">
                                            {snippet}...
                                        </p>
                                        <Link to={`/blog/${id}`} className="text-neon-yellow text-sm font-medium hover:underline">Leggi di più &rarr;</Link>
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

export default Blog;
