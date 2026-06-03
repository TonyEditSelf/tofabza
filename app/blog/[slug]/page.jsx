import { notFound } from "next/navigation";
import Link from "next/link";
import { format } from "date-fns";
import {
  Clock,
  ArrowLeft,
  Calendar as CalendarIcon,
  User as UserIcon,
} from "lucide-react";
import { getPostBySlug, getRelatedPosts } from "@/lib/blog-utils";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import ShareButtons from "@/components/blog/ShareButtons";

export async function generateMetadata({ params }) {
  const post = await getPostBySlug(params.slug);
  if (!post) return { title: "Post Not Found | Tofabza" };

  return {
    title: post.seoTitle || `${post.title} | Tofabza Journal`,
    description: post.seoDescription || post.excerpt,
    openGraph: {
      title: post.seoTitle || post.title,
      description: post.seoDescription || post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.authorDetails?.name || "Tofabza Team"],
      images: post.featuredImage
        ? [
            {
              url: post.featuredImage,
              alt: post.featuredImageAlt || post.title,
            },
          ]
        : [],
    },
  };
}

export default async function BlogPostPage({ params }) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  // Get related posts from the primary category
  const primaryCategoryId = post.categories?.[0];
  const relatedPosts = primaryCategoryId
    ? await getRelatedPosts(primaryCategoryId, post.slug)
    : [];

  return (
    <div className="min-h-screen bg-background">
      {/* Article Header */}
      <div className="bg-navy-gradient pt-24 pb-16 px-4 md:px-8 border-b border-border">
        <div className="max-w-4xl mx-auto space-y-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-accent hover:text-brand-500 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Journal
          </Link>

          <div className="flex flex-wrap gap-2">
            {post.categoryDetails?.map((cat) => (
              <Badge
                key={cat._id}
                variant="secondary"
                className="bg-accent/20 text-accent border-none"
              >
                {cat.name}
              </Badge>
            ))}
          </div>

          <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground leading-tight">
            {post.title}
          </h1>

          <p className="text-xl text-muted-foreground leading-relaxed">
            {post.excerpt}
          </p>

          <div className="flex flex-wrap items-center gap-6 text-muted-foreground pt-4 border-t border-border/50">
            <div className="flex items-center gap-2">
              {post.authorDetails?.image ? (
                <img
                  src={post.authorDetails.image}
                  alt="Author"
                  className="w-8 h-8 rounded-full"
                />
              ) : (
                <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                  <UserIcon className="w-4 h-4" />
                </div>
              )}
              <span className="font-medium text-foreground">
                {post.authorDetails?.name || "Tofabza Team"}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <CalendarIcon className="w-4 h-4" />
              {format(new Date(post.publishedAt), "MMMM d, yyyy")}
            </div>

            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {post.readingTime} min read
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 md:px-8 py-12">
        {/* Featured Image */}
        {post.featuredImage && (
          <div className="mb-12 rounded-2xl overflow-hidden glass-card border border-border shadow-2xl">
            <img
              src={post.featuredImage}
              alt={post.featuredImageAlt || post.title}
              className="w-full h-auto max-h-[600px] object-contain"
            />
          </div>
        )}

        {/* Content Area */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="lg:w-3/4">
            <article
              className="prose prose-invert prose-lg max-w-none 
                prose-headings:font-display prose-headings:text-brand-gradient 
                prose-a:text-accent hover:prose-a:text-brand-400 prose-a:transition-colors
                prose-blockquote:border-l-accent prose-blockquote:bg-accent/5 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:not-italic prose-blockquote:font-normal prose-blockquote:text-foreground
                prose-pre:bg-navy-900 prose-pre:border prose-pre:border-border
                prose-img:rounded-xl prose-img:shadow-lg"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="mt-12 pt-8 border-t border-border flex flex-wrap gap-2 items-center">
                <span className="text-sm font-medium text-muted-foreground mr-2">
                  Tags:
                </span>
                {post.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="text-muted-foreground"
                  >
                    #{tag}
                  </Badge>
                ))}
              </div>
            )}
          </div>

          {/* Sticky Sidebar */}
          <div className="lg:w-1/4">
            <div className="sticky top-24 space-y-8">
              <div className="glass-card p-6 rounded-xl space-y-4">
                <ShareButtons title={post.title} slug={post.slug} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <div className="bg-navy-gradient border-t border-border py-16">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <h2 className="text-3xl font-display font-bold text-brand-gradient mb-8">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost._id}
                  href={`/blog/${relatedPost.slug}`}
                  className="group block h-full"
                >
                  <Card className="h-full flex flex-col bg-card border-border hover:border-accent/50 transition-colors duration-300">
                    <div className="h-40 overflow-hidden rounded-t-lg bg-muted relative">
                      {relatedPost.featuredImage ? (
                        <img
                          src={relatedPost.featuredImage}
                          alt={
                            relatedPost.featuredImageAlt || relatedPost.title
                          }
                          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="w-full h-full bg-accent/10" />
                      )}
                    </div>
                    <CardContent className="flex-1 p-6 space-y-4">
                      <h3 className="text-xl font-bold font-display group-hover:text-brand-gradient line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <div className="flex items-center text-sm text-muted-foreground mt-auto pt-4">
                        <Clock className="w-3 h-3 mr-1" />{" "}
                        {relatedPost.readingTime} min read
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
