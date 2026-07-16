import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { ProductDetailPage } from "@/components/ProductDetailPage";
import { getProduct } from "@/data/products";
import { SITE_URL, OG_IMAGE } from "@/data/site";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Product not found — SecureTech" }, { name: "robots", content: "noindex" }] };
    }
    const p = loaderData.product;
    return {
      meta: [
        { title: `${p.name} — SecureTech` },
        { name: "description", content: p.tagline },
        { property: "og:title", content: `${p.name} — SecureTech` },
        { property: "og:description", content: p.tagline },
        { property: "og:type", content: "product" },
        { property: "og:url", content: `${SITE_URL}/products/${params.slug}` },
        { property: "og:image", content: OG_IMAGE },
      ],
      links: [{ rel: "canonical", href: `${SITE_URL}/products/${params.slug}` }],
      scripts: [{
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: p.name,
          description: p.description,
          category: p.category,
          brand: { "@type": "Brand", name: "SecureTech Consultancy" },
        }),
      }],
    };
  },
  component: () => {
    const { product } = Route.useLoaderData();
    return <Layout><ProductDetailPage product={product} /></Layout>;
  },
  notFoundComponent: () => (
    <Layout>
      <div className="container-page py-24 text-center">
        <h1 className="font-display text-4xl font-bold">Product not found</h1>
        <p className="mt-4 text-muted-foreground">The product you're looking for doesn't exist or has been renamed.</p>
        <Link to="/products" className="inline-block mt-6 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
          Back to products
        </Link>
      </div>
    </Layout>
  ),
  errorComponent: ({ reset }) => (
    <Layout>
      <div className="container-page py-24 text-center">
        <h1 className="font-display text-2xl font-bold">This product didn't load</h1>
        <button onClick={reset} className="mt-6 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">Try again</button>
      </div>
    </Layout>
  ),
});
