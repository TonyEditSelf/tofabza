import Link from "next/link";
import { format } from "date-fns";
import { Search, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { getPublishedPosts, getCategories } from "@/lib/blog-utils";

export const metadata = {
  title: "Blog | Tofabza Digital Solutions",
  description: "Insights, tutorials, and strategies for modern web development and digital marketing.",
};

export default async function BlogIndexPage({ searchParams }) {
  const page = parseInt(searchParams.page || "1");
  const q = searchParams.q || "";
  const categorySlug = searchParams.category || "";

  const [categories, { posts, totalPages }] = await Promise.all([
    getCategories(),
    getPublishedPosts({ page, search: q, categorySlug, limit: 9 })
  ]);

  const featuredPost = (page === 1 && !q && !categorySlug && posts.length > 0) ? posts[0] : null;
  const gridPosts = featuredPost ? posts.slice(1) : posts;

  return (
    <div className="min-h-screen bg-background pt-40 relative">
      <div className="absolute border-b border-brand-500/30 top-20 left-0 right-0 h-[540px] animated-gradient-bg opacity-40 -z-10" />

      <div className="container px-4 md:px-8">
        <div className="text-center max-w-4xl mx-auto mb-16 animate-fade-up">
          <h1 className="font-display text-4xl md:text-7xl lg:text-[5.5rem] leading-[1.05] font-semibold mb-6">
            Tofabza{" "}
            <span className="text-brand-gradient font-display text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.05] font-semibold">
              Journal
            </span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Deep dives into web development, workflow automation, and digital growth strategies.
          </p>

          {/* Filters & Search */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 pt-12">
            <div className="flex flex-wrap justify-center gap-2">
              <Link href="/blog">
                <Badge variant={!categorySlug ? "default" : "outline"} className="cursor-pointer text-sm px-4 py-1">
                  All Posts
                </Badge>
              </Link>
              {categories.map((cat) => (
                <Link key={cat._id} href={`/blog?category=${cat.slug}`}>
                  <Badge variant={categorySlug === cat.slug ? "default" : "outline"} className="cursor-pointer text-sm px-4 py-1">
                    {cat.name}
                  </Badge>
                </Link>
              ))}
            </div>

            <form action="/blog" method="GET" className="relative w-full md:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                name="q"
                defaultValue={q}
                placeholder="Search articles..."
                className="pl-9 bg-card/50 border-border"
              />
              {categorySlug && <input type="hidden" name="category" value={categorySlug} />}
            </form>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 space-y-16">
        {/* Featured Post (Only on page 1 with no filters) */}
        {featuredPost && (
          <section>
            <Link href={`/blog/${featuredPost.slug}`} className="group block">
              <div className="glass-card rounded-xl overflow-hidden glass-card-hover flex flex-col md:flex-row">
                <div className="md:w-1/2 h-64 md:h-auto overflow-hidden bg-muted">
                  {featuredPost.featuredImage ? (
                    <img
                      src={featuredPost.featuredImage}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full bg-accent/10 flex items-center justify-center text-accent/50">
                      No Image
                    </div>
                  )}
                </div>
                <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center space-y-4">
                  <div className="flex items-center gap-3 text-sm">
                    {featuredPost.categoryDetails?.[0] && (
                      <span className="text-accent font-medium">{featuredPost.categoryDetails[0].name}</span>
                    )}
                    <span className="text-muted-foreground">•</span>
                    <span className="text-muted-foreground flex items-center">
                      <Clock className="w-3 h-3 mr-1" /> {featuredPost.readingTime} min read
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold font-display group-hover:text-brand-gradient transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-muted-foreground line-clamp-3 text-lg">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4">
                    <div className="flex items-center gap-3">
                      {featuredPost.authorDetails?.image ? (
                        <img src={featuredPost.authorDetails.image} alt="Author" className="w-10 h-10 rounded-full" />
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent font-medium">
                          {featuredPost.authorDetails?.name?.[0] || "A"}
                        </div>
                      )}
                      <div>
                        <p className="text-sm font-medium">{featuredPost.authorDetails?.name || "Tofabza Team"}</p>
                        <p className="text-xs text-muted-foreground">
                          {format(new Date(featuredPost.publishedAt), "MMMM d, yyyy")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </section>
        )}

        {/* Post Grid */}
        <section>
          {gridPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {gridPosts.map((post) => (
                <Link key={post._id} href={`/blog/${post.slug}`} className="group block h-full">
                  <Card className="h-full flex flex-col bg-card border-border hover:border-accent/50 transition-colors duration-300">
                    <div className="h-48 overflow-hidden rounded-t-lg bg-muted relative">
                      {post.featuredImage ? (
                        <img
                          src={post.featuredImage}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="w-full h-full bg-accent/10" />
                      )}
                      {post.categoryDetails?.[0] && (
                        <Badge className="absolute top-4 left-4 bg-background/80 backdrop-blur text-foreground border-none">
                          {post.categoryDetails[0].name}
                        </Badge>
                      )}
                    </div>
                    <CardContent className="flex-1 p-6 space-y-4">
                      <h3 className="text-xl font-bold font-display group-hover:text-brand-gradient line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground line-clamp-3 text-sm">
                        {post.excerpt}
                      </p>
                    </CardContent>
                    <CardFooter className="p-6 pt-0 flex items-center justify-between text-sm text-muted-foreground border-t border-border/50 mt-auto">
                      <div className="flex flex-col mt-4">
                        <span className="font-medium text-foreground">{post.authorDetails?.name || "Tofabza"}</span>
                        <span>{format(new Date(post.publishedAt), "MMM d, yyyy")}</span>
                      </div>
                      <div className="flex items-center mt-4">
                        <Clock className="w-3 h-3 mr-1" /> {post.readingTime} min
                      </div>
                    </CardFooter>
                  </Card>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 glass-card rounded-xl">
              <h3 className="text-2xl font-bold text-muted-foreground">No posts found</h3>
              <p className="text-muted-foreground mt-2">Try adjusting your filters or search query.</p>
            </div>
          )}
        </section>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 pt-8 border-t border-border section-divider">
            <Link href={`/blog?page=${Math.max(1, page - 1)}${q ? `&q=${q}` : ""}${categorySlug ? `&category=${categorySlug}` : ""}`}>
              <Button variant="outline" disabled={page === 1}>Previous</Button>
            </Link>
            <div className="text-sm font-medium px-4">
              Page {page} of {totalPages}
            </div>
            <Link href={`/blog?page=${Math.min(totalPages, page + 1)}${q ? `&q=${q}` : ""}${categorySlug ? `&category=${categorySlug}` : ""}`}>
              <Button variant="outline" disabled={page === totalPages}>Next</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
