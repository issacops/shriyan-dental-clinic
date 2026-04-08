import React from 'react';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Shriyan Dental Clinic | Trusted Dental Care in Pune - Dr. Viddulata Jagtap',
  description: 'Experience trusted dental care at Shriyan Dental Clinic in Koregaon Park, Mundhwa, Pune. Expert implants, root canals, and family dentistry by Dr. Viddulata Jagtap. Rated 4.9/5 stars.',
  keywords: 'dentist pune, dental clinic mundhwa, dental clinic koregaon park, best dentist koregaon park, dr viddulata jagtap, shriyan dental clinic, dental implants pune, root canal pune, tooth extraction mundhwa, braces pune, pediatric dentist mundhwa',
  authors: [{ name: 'Shriyan Dental Clinic - Dr. Viddulata Jagtap' }],
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.shriyandentalclinic.com/',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.shriyandentalclinic.com/',
    title: 'Shriyan Dental Clinic | Your Smile, Our Expertise',
    description: 'Trusted dental care in Koregaon Park, Mundhwa, Pune. 20+ years of experience in implants, cosmetic dentistry, and family care.',
    siteName: 'Shriyan Dental Clinic',
    images: [{ url: 'https://www.shriyandentalclinic.com/og-image.png' }],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shriyan Dental Clinic | Trusted Dental Care in Pune',
    description: 'Your Smile, Our Expertise. Trusted dental care by Dr. Viddulata Jagtap.',
    images: ['https://www.shriyandentalclinic.com/og-image.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
       <head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link
            href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Outfit:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <meta name="geo.region" content="IN-MH" />
          <meta name="geo.placename" content="Pune" />
          <meta name="geo.position" content="18.5300;73.9300" />
          <meta name="ICBM" content="18.5300, 73.9300" />
          {/* LocalBusiness Schema (JSON-LD) */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Dentist",
                "name": "Shriyan Dental Clinic",
                "image": "https://www.shriyandentalclinic.com/og-image.png",
                "@id": "https://www.shriyandentalclinic.com",
                "url": "https://www.shriyandentalclinic.com",
                "telephone": "+919860512004",
                "priceRange": "₹₹",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Shop Number 8, Vanshaj Building, Pingale Wasti, Ganesh Baug, Near Koregaon Park, Mundhwa",
                  "addressLocality": "Pune",
                  "addressRegion": "MH",
                  "postalCode": "411036",
                  "addressCountry": "IN"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 18.5300,
                  "longitude": 73.9300
                },
                "openingHoursSpecification": [
                  {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                    "opens": "10:00",
                    "closes": "20:00"
                  }
                ],
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.9",
                  "reviewCount": "120"
                },
                "sameAs": [
                  "https://www.facebook.com/shriyandental",
                  "https://www.instagram.com/shriyandental"
                ]
              })
            }}
          />
       </head>
      <body className="bg-[#FDFCFB] text-teal-950 overflow-y-auto overflow-x-hidden min-h-screen relative font-sans antialiased selection:bg-terracotta-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
