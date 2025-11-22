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
            className="relative group rounded-xl overflow-hidden shadow-xl  border min-h-[350px] flex flex-col justify-end transition-all duration-300 ease-in-out  bg-gray-900"
            style={{
                backgroundImage: article.imageUrl ? `url(${article.imageUrl})` : undefined,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-transparent"></div>
            <div className="relative p-6">
                <p className="text-sm  mb-2">{article.tag} | {article.date}</p>
                <h3 className="text-xl font-bold mb-3 text-white transition-colors duration-300 ">{article.title}</h3>
                <p className="text-gray-300 text-sm mb-4">
                    {snippet}...
                </p>
                <Link to={`/blog/${id}`} className="font-semibold text-sm hover:underline">Leggi di più &rarr;</Link>
            </div>
        </div>
    );
};

export default BlogCard;
