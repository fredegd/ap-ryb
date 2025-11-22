import { Link } from 'react-router-dom';
import type { Article } from '../blogData';

interface BlogCardProps {
    id: string;
    article: Article;
}

const BlogCard: React.FC<BlogCardProps> = ({ id, article }) => {
    const snippet = article.content.replace(/<[^>]*>/g, '').substring(0, 100);

    return (
        <div
            className="relative group rounded-xl overflow-hidden shadow-xl border-neon-yellow/30 border min-h-[350px] flex flex-col justify-end transition-all duration-300 ease-in-out hover:shadow-[0_0_25px_rgba(226,255,0,0.35)] hover:border-neon-yellow/60 bg-gray-900"
            style={{
                backgroundImage: article.imageUrl ? `url(${article.imageUrl})` : undefined,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-transparent"></div>
            <div className="relative p-6">
                <p className="text-sm text-neon-yellow/80 mb-2">{article.tag} | {article.date}</p>
                <h3 className="text-xl font-bold mb-3 text-white transition-colors duration-300 group-hover:text-neon-yellow">{article.title}</h3>
                <p className="text-gray-300 text-sm mb-4">
                    {snippet}...
                </p>
                <Link to={`/blog/${id}`} className="text-neon-yellow font-semibold text-sm hover:underline">Leggi di più &rarr;</Link>
            </div>
        </div>
    );
};

export default BlogCard;
