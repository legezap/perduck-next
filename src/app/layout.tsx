import type { Metadata } from "next";
import { DM_Sans, Plus_Jakarta_Sans, Noto_Sans_Arabic } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import MobileCTA from "@/components/MobileCTA";
import Analytics from "@/components/Analytics";
import { I18nProvider } from "@/lib/I18nContext";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["600", "700", "800"],
  display: "swap",
});

const notoArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-arabic",
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Butter Duck — Global Exhibition Design & Event Production | Dubai",
  description:
    "Custom exhibition stand design & build in the UAE. From 25 sqm booths to 1000+ sqm builds. Trusted by Microsoft, Vanderlande & brands across 10 countries.",
  metadataBase: new URL("https://thebutterduck.com"),
  openGraph: {
    title: "The Butter Duck — Exhibition Design & Events — Dubai",
    description:
      "Exhibition design, event production, and immersive brand experiences. From 25 sqm to 700 sqm. UAE-based, globally deployed.",
    url: "https://thebutterduck.com",
    type: "website",
    images: ["/assets/photos/hero-green-corridor.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Butter Duck — Exhibition Design & Events",
    description:
      "Global exhibition design and event production. UAE-based, globally deployed.",
  },
  icons: { icon: "/assets/favicon.svg" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${jakarta.variable} ${notoArabic.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": ["Organization", "LocalBusiness"],
                "@id": "https://thebutterduck.com/#organization",
                name: "The Butter Duck",
                legalName: "The Butter Duck Company FZC LLC",
                url: "https://thebutterduck.com",
                logo: "https://thebutterduck.com/assets/photos/duck-brand.jpg",
                image: "https://thebutterduck.com/assets/photos/hero-microsoft-gitex.jpg",
                description:
                  "UAE-based exhibition stand design, build, and event production company. Custom booths from 25 sqm to 700 sqm deployed across 10 countries.",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Marina Plaza, 29th Floor",
                  addressLocality: "Dubai Marina",
                  addressRegion: "Dubai",
                  addressCountry: "AE",
                },
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: 25.0777,
                  longitude: 55.1378,
                },
                telephone: "+971521477966",
                email: "hello@thebutterduck.com",
                priceRange: "AED 50,000 - 1,000,000+",
                openingHours: "Su-Th 09:00-18:00",
                sameAs: [
                  "https://instagram.com/thebutterduck",
                  "https://linkedin.com/company/thebutterduck",
                ],
                areaServed: [
                  { "@type": "Country", name: "United Arab Emirates" },
                  { "@type": "Country", name: "Saudi Arabia" },
                  { "@type": "Country", name: "Qatar" },
                  { "@type": "Country", name: "Bahrain" },
                  { "@type": "Country", name: "Oman" },
                  { "@type": "Country", name: "Kuwait" },
                  { "@type": "Country", name: "Egypt" },
                  { "@type": "Country", name: "Jordan" },
                  { "@type": "Country", name: "United Kingdom" },
                  { "@type": "Country", name: "Germany" },
                ],
                hasOfferCatalog: {
                  "@type": "OfferCatalog",
                  name: "Exhibition Services",
                  itemListElement: [
                    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Exhibition Stand Design & Build" } },
                    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Project Management" } },
                    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Conceptual Event Design" } },
                    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Content & Media Production" } },
                  ],
                },
                review: [
                  {
                    "@type": "Review",
                    author: { "@type": "Person", name: "Sarah Al-Rashid" },
                    reviewBody: "The Butter Duck doesn't just build stands — they build experiences. Our LEAP stand was the most talked-about presence at the entire show.",
                    reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
                  },
                  {
                    "@type": "Review",
                    author: { "@type": "Person", name: "Marc van den Berg" },
                    reviewBody: "The level of precision in the final build was remarkable — every detail matched the 3D renders. On time, on budget, zero surprises.",
                    reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
                  },
                  {
                    "@type": "Review",
                    author: { "@type": "Person", name: "Ahmed Khalil" },
                    reviewBody: "We've worked with exhibition companies across the region — nobody comes close to the build quality and design thinking these guys bring.",
                    reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
                  },
                ],
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: 5,
                  reviewCount: 3,
                  bestRating: 5,
                },
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                name: "The Butter Duck",
                url: "https://thebutterduck.com",
              },
            ]),
          }}
        />
      </head>
      <body>
        <I18nProvider>
          <a href="#main" className="skip-link">
            Skip to main content
          </a>
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
          <WhatsAppFloat />
          <MobileCTA />
          <Analytics />
        </I18nProvider>
      </body>
    </html>
  );
}
