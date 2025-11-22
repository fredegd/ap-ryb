import { useParams, Link } from 'react-router-dom';
import { blogArticles } from '../blogData';
import type { Article } from '../blogData';

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const article: Article | undefined = slug ? blogArticles[slug] : undefined;

  if (!article) {
    return (
      <div className="container mx-auto p-8 text-center text-gray-50">
        <h1 className="text-3xl font-bold mb-4">Articolo non trovato</h1>
        <p>L'articolo con l'identificativo "{slug}" non esiste.</p>
        <Link to="/blog" className="text-neon-yellow hover:underline mt-4 inline-block">Torna al blog</Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-8 bg-dark-bg text-gray-50 min-h-screen">
      <Link to="/blog" className="text-neon-yellow hover:text-gray-100 transition duration-300 flex items-center mb-8 text-lg font-medium">
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
        Torna al Blog
      </Link>

      <div className="max-w-4xl mx-auto p-8 bg-gray-900/50 rounded-xl shadow-2xl border border-neon-yellow/30">
        <h1 id="detail-title" className="text-4xl font-bold mb-4 text-neon-yellow">{article.title}</h1>
        <p id="detail-meta" className="text-sm text-gray-400 mb-6">{article.tag} | {article.date}</p>
        <div id="detail-content" className="text-lg text-gray-300 leading-relaxed space-y-6" dangerouslySetInnerHTML={{ __html: article.content }}>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;
