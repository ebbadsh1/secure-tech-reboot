import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { BlogDetailPage } from "@/components/BlogDetailPage";
import { getPost } from "@/data/posts";
import { SITE_URL, OG_IMAGE } from "@/data/site";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Post not found — SecureTech" }, { name: "robots", content: "noindex" }] };
    }
    const p = loaderData.post;
    return {
      meta: [
        { title: `${p.title} — SecureTech Blog` },
        { name: "description", content: p.excerpt },
        { property: "og:title", content: p.title },
        { property: "og:description", content: p.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `${SITE_URL}/blog/${params.slug}` },
        { property: "og:image", content: p.img },
        { property: "article:published_time", content: p.dateISO },
      ],
      links: [{ rel: "canonical", href: `${SITE_URL}/blog/${params.slug}` }],
      scripts: [{
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: p.title,
          description: p.excerpt,
          image: p.img,
          datePublished: p.dateISO,
          author: { "@type": "Organization", name: p.author },
          publisher: { "@type": "Organization", name: "SecureTech Consultancy", logo: { "@type": "ImageObject", url: OG_IMAGE } },
        }),
      }],
    };
  },
  component: () => {
    const { post } = Route.useLoaderData();
    return <Layout><BlogDetailPage post={post} /></Layout>;
  },
  notFoundComponent: () => (
    <Layout>
      <div className="container-page py-24 text-center">
        <h1 className="font-display text-4xl font-bold">Post not found</h1>
        <Link to="/blog" className="inline-block mt-6 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
          Back to blog
        </Link>
      </div>
    </Layout>
  ),
  errorComponent: ({ reset }) => (
    <Layout>
      <div className="container-page py-24 text-center">
        <h1 className="font-display text-2xl font-bold">This post didn't load</h1>
        <button onClick={reset} className="mt-6 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">Try again</button>
      </div>
    </Layout>
  ),
});
