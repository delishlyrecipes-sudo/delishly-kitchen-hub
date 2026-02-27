import { useParams, Link } from "react-router-dom";
import { getBlogPostBySlug } from "@/data/blog-posts";
import { Clock, User, Calendar, ArrowLeft } from "lucide-react";

const BlogArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = getBlogPostBySlug(slug || "");

  if (!post) {
    return (
      <main className="min-h-screen bg-background pt-24 pb-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-3xl font-bold text-foreground mb-4">Article Not Found</h1>
          <Link to="/blog" className="text-primary hover:underline">← Back to Blog</Link>
        </div>
      </main>
    );
  }

  // Convert markdown-style content to HTML sections
  const renderContent = (content: string) => {
    return content.split("\n\n").map((block, i) => {
      if (block.startsWith("### ")) {
        return <h3 key={i} className="font-display text-xl font-bold text-foreground mt-8 mb-3">{block.replace("### ", "")}</h3>;
      }
      if (block.startsWith("## ")) {
        return <h2 key={i} className="font-display text-2xl font-bold text-foreground mt-10 mb-4">{block.replace("## ", "")}</h2>;
      }
      return <p key={i} className="text-foreground/80 leading-relaxed mb-4">{block}</p>;
    });
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.featuredImage,
    author: { "@type": "Person", name: post.author },
    datePublished: post.publishedAt,
    keywords: post.tags.join(", "),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="min-h-screen bg-background pt-24 pb-16">
        <article className="container mx-auto px-4 max-w-3xl">
          <Link to="/blog" className="inline-flex items-center gap-1 text-primary hover:underline text-sm mb-6">
            <ArrowLeft size={16} /> Back to Blog
          </Link>

          <span className="text-xs font-semibold uppercase tracking-wider text-primary">{post.category}</span>
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
            <span className="flex items-center gap-1"><User size={16} /> {post.author}</span>
            <span className="flex items-center gap-1"><Clock size={16} /> {post.readingTime} min read</span>
            <span className="flex items-center gap-1"><Calendar size={16} /> {new Date(post.publishedAt).toLocaleDateString()}</span>
          </div>

          <img
            src={post.featuredImage}
            alt={post.title}
            className="w-full h-64 md:h-96 object-cover rounded-2xl mb-10"
          />

          <div className="prose prose-lg max-w-none">
            {renderContent(post.content)}
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="bg-secondary text-secondary-foreground text-xs px-3 py-1 rounded-full">{tag}</span>
              ))}
            </div>
          </div>
        </article>
      </main>
    </>
  );
};

export default BlogArticle;
