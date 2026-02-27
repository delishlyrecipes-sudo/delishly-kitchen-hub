import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blog-posts";
import { Clock, User, Calendar } from "lucide-react";

const Blog = () => {
  return (
    <main className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">Blog</h1>
        <p className="text-muted-foreground text-lg mb-12">Tips, guides, and stories from the Delishly Recipes kitchen.</p>

        <div className="space-y-8">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.slug}`}
              className="group block bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-border"
            >
              <div className="md:flex">
                <div className="md:w-2/5">
                  <img
                    src={post.featuredImage}
                    alt={post.title}
                    className="w-full h-56 md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 md:w-3/5 flex flex-col justify-center">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">{post.category}</span>
                  <h2 className="font-display text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors mb-3">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><User size={14} /> {post.author}</span>
                    <span className="flex items-center gap-1"><Clock size={14} /> {post.readingTime} min read</span>
                    <span className="flex items-center gap-1"><Calendar size={14} /> {new Date(post.publishedAt).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Blog;
