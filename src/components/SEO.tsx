import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, canonical, ogImage }) => {
  const siteTitle = `${title} | Han Game Center`;
  const fullCanonical = canonical ? `https://hangamecenter.com${canonical}` : 'https://hangamecenter.com';

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Han Game Center",
    "image": ogImage || "https://hangamecenter.com/logo.png",
    "@id": "https://hangamecenter.com",
    "url": "https://hangamecenter.com",
    "telephone": "+905555555555",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Merkez Yenice Mah. Yol Üstü, Bina No: 72, AYBÜ giriş kapısı, A101 yanı",
      "addressLocality": "Esenboğa",
      "addressRegion": "Ankara",
      "postalCode": "06760",
      "addressCountry": "TR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 40.22,
      "longitude": 32.99
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "09:00",
      "closes": "23:59"
    },
    "sameAs": [
      "https://instagram.com/han.game.center"
    ]
  };

  return (
    <Helmet>
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullCanonical} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage || "https://hangamecenter.com/og-image.jpg"} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullCanonical} />
      <meta property="twitter:title" content={siteTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage || "https://hangamecenter.com/og-image.jpg"} />

      {/* JSON-LD Schema */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
};

export default SEO;
