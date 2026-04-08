import React from 'react';
import { Metadata } from 'next';
import { CASE_STUDIES } from '../../../constants';
import { notFound } from 'next/navigation';
import { CaseStudyClient } from '../../../components/CaseStudyClient';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const study = CASE_STUDIES.find((c) => c.slug === resolvedParams.slug);

  if (!study) {
    return { title: 'Case Study Not Found' };
  }

  const SITE_URL = 'https://www.shriyandentalclinic.com';
  const canonicalUrl = `${SITE_URL}/case-study/${resolvedParams.slug}`;
  const ogImage = study.image?.startsWith('http') ? study.image : `${SITE_URL}${study.image}`;
  const metaDescription = `Case study: ${study.details.challenge} See the transformation achieved by Dr. Viddulata Jagtap.`;

  return {
    title: `${study.title} Case Study - Shriyan Dental Clinic`,
    description: metaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: 'article',
      url: canonicalUrl,
      title: `${study.title} Case Study - Shriyan Dental Clinic`,
      description: metaDescription,
      images: [{ url: ogImage }],
      siteName: 'Shriyan Dental Clinic',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${study.title} Case Study - Shriyan Dental Clinic`,
      description: metaDescription,
      images: [ogImage],
    },
  };
}

export async function generateStaticParams() {
  return CASE_STUDIES.map((study) => ({
    slug: study.slug,
  }));
}

export default async function CaseStudyPage({ params }: Props) {
  const resolvedParams = await params;
  const study = CASE_STUDIES.find((c) => c.slug === resolvedParams.slug);

  if (!study) {
    notFound();
  }

  return <CaseStudyClient slug={resolvedParams.slug} />;
}
