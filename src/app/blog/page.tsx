import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Eyebrow, SectionHeader } from "@/components/ui";
import { BLOG_POSTS } from "@/data/site";

export const metadata: Metadata = { title: "Blog — De Interés" };

export default function BlogPage() {
  return (
    <>
      <section className="pt-[calc(72px+64px)] pb-16 bg-[#F8F5EE]">
        <div className="max-w-[1280px] mx-auto px-12">
          <Eyebrow>De Interés</Eyebrow>
          <h1 className="font-display text-[clamp(32px,5vw,64px)] font-extrabold leading-[1.06] tracking-[-0.03em] text-[#15130F] mb-4">
            Blog técnico y<br /><span className="text-[#1B2C5E]">novedades IMPADOC</span>
          </h1>
          <p className="text-lg font-light text-[#8E867B] max-w-[480px]">Guías técnicas, tutoriales de aplicación, novedades de productos y noticias de la empresa.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BLOG_POSTS.map((post, i) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl overflow-hidden border border-[rgba(15,30,69,0.06)] hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(15,30,69,0.12)] hover:border-transparent transition-all duration-300 card-border-top"
              >
                <div className={`overflow-hidden relative ${i === 0 ? "aspect-video" : "aspect-[3/2]"}`}>
                  <Image src={post.image} alt={post.title} fill className="object-cover transition-transform duration-500 group-hover:scale-[1.05]" />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-[0.08em] uppercase bg-white/90 text-[#1B2C5E]">{post.category}</span>
                </div>
                <div className="p-6 pb-7">
                  <h3 className="font-display font-bold text-[#15130F] leading-snug mb-3">{post.title}</h3>
                  <p className="text-sm text-[#8E867B] leading-relaxed mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[#8E867B]">{post.date} · {post.readTime}</span>
                    <span className="flex items-center gap-1 text-sm font-semibold text-[#1B2C5E] group-hover:gap-2 transition-all">Leer <ArrowRight size={13} /></span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
