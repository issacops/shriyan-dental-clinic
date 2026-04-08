import React from 'react';
import { ARTICLES } from '../../../constants';
import { Navbar } from '../../../components/Navbar';
import { Footer } from '../../../components/Footer';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const article = ARTICLES.find((a) => a.slug === resolvedParams.slug);

  if (!article) {
    return { title: 'Article Not Found' };
  }

  const SITE_URL = 'https://www.shriyandentalclinic.com';
  const canonicalUrl = `${SITE_URL}/article/${resolvedParams.slug}`;

  return {
    title: `${article.title} | Dr. Viddulata's Journal`,
    description: article.excerpt,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: 'article',
      url: canonicalUrl,
      title: article.title,
      description: article.excerpt,
      images: [{ url: `${SITE_URL}${article.image}` }],
      siteName: 'Shriyan Dental Clinic',
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
      images: [`${SITE_URL}${article.image}`],
    },
  };
}

// Generate static params so the pages are pre-rendered at build time
export async function generateStaticParams() {
  return ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

export default async function ArticlePage({ params }: Props) {
  const resolvedParams = await params;
  const article = ARTICLES.find((a) => a.slug === resolvedParams.slug);

  if (!article) {
    notFound();
  }

  const SITE_URL = 'https://www.shriyandentalclinic.com';

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": article.title,
    "image": [`${SITE_URL}${article.image}`],
    "datePublished": new Date(article.date).toISOString().split('T')[0],
    "dateModified": new Date(article.date).toISOString().split('T')[0],
    "author": [{
      "@type": "Person",
      "name": article.author,
      "url": `${SITE_URL}/#doctor`
    }]
  };

  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col pt-[var(--navbar-height,80px)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Navbar />

      <main className="flex-grow pt-24 pb-24">
        {/* Hero Image Section */}
        <div className="relative h-[40vh] md:h-[50vh] w-full overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-teal-900/50 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-50 to-transparent" />

          <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 max-w-screen-xl mx-auto">
            <Link href="/#articles" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors">
              <ArrowLeft size={20} />
              <span className="text-sm font-bold tracking-widest uppercase">Back to Journal</span>
            </Link>

            <span className="inline-block px-3 py-1 bg-terracotta-500 text-white text-[10px] uppercase tracking-widest font-bold rounded-full mb-4">
              {article.category}
            </span>

            <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-white leading-tight mb-4 drop-shadow-lg">
              {article.title}
            </h1>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-screen-lg mx-auto px-6 md:px-12 -mt-10 relative z-10">
          <div className="bg-white rounded-3xl p-8 md:p-16 shadow-xl shadow-teal-900/5">
            {/* Meta Header */}
            <div className="flex flex-wrap items-center justify-between gap-6 pb-10 border-b border-neutral-100 mb-10">
              <div className="flex items-center gap-4">
                <img src="/images/dr-viddulata.jpg" alt={article.author} className="w-12 h-12 rounded-full object-cover ring-2 ring-terracotta-500/20" />
                <div>
                  <p className="font-serif text-teal-900 font-bold">{article.author}</p>
                  <p className="text-xs text-neutral-500 uppercase tracking-widest">Senior Dentist</p>
                </div>
              </div>
              <div className="flex items-center gap-6 text-sm text-neutral-500 font-medium">
                <span className="flex items-center gap-2">
                  <Calendar size={16} className="text-terracotta-500" />
                  {article.date}
                </span>
              </div>
            </div>

            {/* Article Body */}
            <div
              className="prose prose-lg prose-teal max-w-none font-sans text-neutral-600 leading-relaxed
                        prose-headings:font-serif prose-headings:text-teal-900 prose-headings:font-bold
                        prose-a:text-terracotta-600 prose-strong:text-teal-800
                        prose-blockquote:border-l-terracotta-500 prose-blockquote:bg-neutral-50 prose-blockquote:p-6 prose-blockquote:rounded-r-lg prose-blockquote:not-italic"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
