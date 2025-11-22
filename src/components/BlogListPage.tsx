import { blogArticles } from '../blogData';
import NeonDivider from './NeonDivider';
import BlogCard from './BlogCard';

const BlogListPage = () => {
    return (
        <section id="blog" className="py-20 bg-dark-bg">
            <div className="container mx-auto px-6">
                <div id="blog-index">
                    <h2 className="text-4xl font-bold uppercase text-center mb-4 text-neon-yellow">Dal Blog: Terapia e Movimento</h2>
                    <NeonDivider className="w-16 mx-auto mb-10" />

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
