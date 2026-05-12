import { getAllPosts, formatDate } from "@/lib/blog";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Blog | OwenPay",
  description:
    "Insights on cross-border payments, stablecoin infrastructure, and building a modern payouts platform.",
};

export default function BlogIndex() {
  const posts = getAllPosts();
  const [featured, ...rest] = posts;

  return (
    <main className="overflow-x-hidden">
      <Nav />

      {/* Header */}
      <section className="pt-36 md:pt-44 pb-16 md:pb-24 grain gradient-mesh">
        <div className="container-page">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-sage-700 mb-5">
              The OwenPay journal
            </div>
            <h1 className="font-serif font-medium text-display-xl text-plum-900 text-balance mb-6">
              Notes on payments,
              <br />
              <em className="text-sage-700">borders, and building.</em>
            </h1>
            <p className="text-lg text-plum-900/75 max-w-2xl leading-relaxed">
              Deep dives on cross-border payment infrastructure, stablecoin economics,
              and what we're learning while building OwenPay.
            </p>
          </div>
        </div>
      </section>

      {posts.length === 0 ? (
        <section className="py-24 bg-cream-100">
          <div className="container-page text-center">
            <p className="text-plum-900/60">No posts yet. Check back soon.</p>
          </div>
        </section>
      ) : (
        <>
          {/* Featured post */}
          {featured && (
            <section className="pb-16 md:pb-24 bg-cream-100">
              <div className="container-page">
                <Link
                  href={`/blog/${featured.slug}`}
                  className="block group rounded-3xl overflow-hidden bg-plum-900 hover:shadow-2xl hover:shadow-plum-900/20 transition-all duration-300"
                >
                  <div className="grid md:grid-cols-2">
                    <div className="aspect-[4/3] md:aspect-auto bg-gradient-to-br from-plum-700 to-plum-900 relative overflow-hidden">
                      <div className="absolute inset-0 grain opacity-30" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="font-serif font-medium text-9xl text-cream-100/10 italic select-none">
                          O
                        </div>
                      </div>
                      <div className="absolute top-6 left-6">
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-cream-100 text-plum-900 text-xs font-semibold uppercase tracking-wider">
                          Featured
                        </div>
                      </div>
                    </div>
                    <div className="p-8 md:p-12 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-xs font-semibold uppercase tracking-wider text-sage-300">
                          {featured.tag}
                        </span>
                        <span className="text-cream-100/30">·</span>
                        <span className="text-xs text-cream-100/60">
                          {featured.readTime}
                        </span>
                      </div>
                      <h2 className="font-serif font-medium text-3xl md:text-4xl text-cream-100 mb-4 text-balance group-hover:text-sage-300 transition-colors">
                        {featured.title}
                      </h2>
                      <p className="text-cream-100/70 leading-relaxed mb-6">
                        {featured.description}
                      </p>
                      <div className="flex items-center justify-between mt-auto">
                        <div className="text-sm text-cream-100/60">
                          {featured.author}
                          <span className="mx-2">·</span>
                          {formatDate(featured.date)}
                        </div>
                        <ArrowRight className="w-5 h-5 text-cream-100 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </section>
          )}

          {/* Rest of posts grid */}
          {rest.length > 0 && (
            <section className="pb-24 md:pb-32 bg-cream-100">
              <div className="container-page">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {rest.map((post) => (
                    <Link
                      key={post.slug}
                      href={`/blog/${post.slug}`}
                      className="group block bg-cream-50 rounded-2xl overflow-hidden border border-plum-900/5 hover:border-plum-900/15 hover:shadow-xl hover:shadow-plum-900/5 hover:-translate-y-1 transition-all duration-300"
                    >
                      <div className="aspect-[16/9] bg-gradient-to-br from-sage-100 to-plum-100 relative overflow-hidden">
                        <div className="absolute inset-0 grain opacity-30" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="font-serif font-medium text-7xl text-plum-900/10 italic select-none">
                            O
                          </div>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-xs font-semibold uppercase tracking-wider text-sage-700">
                            {post.tag}
                          </span>
                          <span className="text-plum-900/30">·</span>
                          <span className="text-xs text-plum-900/50">
                            {post.readTime}
                          </span>
                        </div>
                        <h3 className="font-serif font-medium text-xl text-plum-900 mb-3 text-balance group-hover:text-sage-700 transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-sm text-plum-900/65 leading-relaxed mb-4 line-clamp-3">
                          {post.description}
                        </p>
                        <div className="text-xs text-plum-900/50">
                          {post.author} · {formatDate(post.date)}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          )}
        </>
      )}

      <Footer />
    </main>
  );
}
