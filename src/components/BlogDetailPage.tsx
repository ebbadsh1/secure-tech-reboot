import { Link } from "@tanstack/react-router";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "./Breadcrumbs";
import { POSTS, type Post } from "@/data/posts";

export function BlogDetailPage({ post }: { post: Post }) {
  const related = POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);
  return (
    <>
      <section className="bg-surface border-b border-border">
        <div className="container-page py-6">
          <Breadcrumbs items={[{ label: "Blog", to: "/blog" }, { label: post.title }]} />
        </div>
      </section>

      <article className="container-page py-16 md:py-20 max-w-3xl">
        <span className="inline-block rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent-dark uppercase tracking-wider">{post.tag}</span>
        <h1 className="mt-4 font-display text-3xl md:text-5xl font-bold leading-tight">{post.title}</h1>
        <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-1.5"><User className="h-4 w-4" /> {post.author}</span>
          <span className="inline-flex items-center gap-1.5"><Calendar className="h-4 w-4" /> {post.date}</span>
          <span className="inline-flex items-center gap-1.5"><Clock className="h-4 w-4" /> {post.readMinutes} min read</span>
        </div>
        <img src={post.img} alt={post.title} width={1200} height={630} className="mt-8 aspect-video w-full object-cover rounded-2xl shadow-lg" />
        <div className="mt-10 prose prose-lg max-w-none">
          {post.body.map((p, i) => (
            <p key={i} className="mt-6 text-foreground/90 leading-relaxed text-lg">{p}</p>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-border">
          <Button asChild variant="outline">
            <Link to="/blog"><ArrowLeft className="mr-2 h-4 w-4" /> Back to all posts</Link>
          </Button>
        </div>
      </article>

      <section className="bg-surface py-16">
        <div className="container-page">
          <h2 className="font-display text-2xl font-bold">More insights</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {related.map((p) => (
              <Link to="/blog/$slug" params={{ slug: p.slug }} key={p.slug} className="group rounded-2xl overflow-hidden border border-border bg-card hover:shadow-xl transition-all">
                <div className="aspect-video overflow-hidden">
                  <img src={p.img} alt={p.title} loading="lazy" width={400} height={225} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-accent-dark">{p.tag}</span>
                  <h3 className="mt-2 font-display font-semibold group-hover:text-primary transition-colors">{p.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
