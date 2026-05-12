import { getPost, getAllPostSlugs, getAllPosts, formatDate } from "@/lib/blog";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);
  if (!post) return { title: "Post not found" };
  return {
    title: `${post.title} | OwenPay`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);
  if (!post) notFound();

  const allPosts = getAllPosts();
  const otherPosts = allPosts.filter((p) => p.slug !== params.slug).slice(0, 3);

  return (
    <main className="overflow-x-hidden">
      <Nav />

      {/* Article header */}
      <article className="pt-36 md:pt-44 pb-16 grain gradient-mesh">
        <div className="container-page">
          <div className="max-w-3xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-plum-900/60 hover:text-plum-900 transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to all posts
            </Link>

            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-sage-700">
                {post.tag}
              </span>
              <span className="text-plum-900/30">·</span>
              <span className="text-xs text-plum-900/50">{post.readTime}</span>
            </div>

            <h1 className="font-serif font-medium text-display-lg text-plum-900 text-balance mb-6">
              {post.title}
            </h1>

            <p className="text-xl text-plum-900/75 leading-relaxed mb-10 text-balance">
              {post.description}
            </p>

            <div className="flex items-center gap-3 pb-10 border-b border-plum-900/10">
              <div className="w-10 h-10 rounded-full bg-plum-900 flex items-center justify-center">
                <span className="text-cream-100 font-serif text-sm">
                  {post.author
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)}
                </span>
              </div>
              <div>
                <div className="text-sm font-medium text-plum-900">{post.author}</div>
                <div className="text-xs text-plum-900/60">
                  {post.authorRole && `${post.authorRole} · `}
                  {formatDate(post.date)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Article body */}
      <section className="pb-24 bg-cream-100">
        <div className="container-page">
          <div
            className="max-w-3xl mx-auto prose-owen"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </section>

      {/* CTA strip */}
      <section className="py-20 bg-plum-900 text-cream-100 grain">
        <div className="container-page">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif font-medium text-3xl md:text-4xl text-cream-100 mb-4 text-balance">
              Ready to <em className="text-sage-300">stop overpaying</em> for cross-border payouts?
            </h2>
            <p className="text-cream-100/70 mb-8 text-lg">
              We're onboarding design partners. See how OwenPay works for your business.
            </p>
            <Link href="/#request" className="btn-sage">
              Request access
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Related posts */}
      {otherPosts.length > 0 && (
        <section className="py-24 bg-cream-100">
          <div className="container-page">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-serif font-medium text-3xl text-plum-900 mb-10">
                Continue reading
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {otherPosts.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className="group block bg-cream-50 rounded-2xl overflow-hidden border border-plum-900/5 hover:border-plum-900/15 hover:shadow-xl hover:shadow-plum-900/5 hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="aspect-[16/9] bg-gradient-to-br from-sage-100 to-plum-100 relative overflow-hidden">
                      <div className="absolute inset-0 grain opacity-30" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="font-serif font-medium text-6xl text-plum-900/10 italic select-none">
                          O
                        </div>
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="text-xs font-semibold uppercase tracking-wider text-sage-700 mb-2">
                        {p.tag}
                      </div>
                      <h3 className="font-serif font-medium text-lg text-plum-900 mb-2 text-balance group-hover:text-sage-700 transition-colors">
                        {p.title}
                      </h3>
                      <div className="text-xs text-plum-900/50">
                        {formatDate(p.date)}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
