
import { Helmet } from "react-helmet-async";

interface SeoProps {
  title: string;
  description: string;
  url?: string;
  image?: string;
}

const SITE_NAME = "LifeBox NextGen Pvt. Ltd.";

const Seo = ({ title, description, url, image }: SeoProps) => {
  const fullTitle = `${title} | ${SITE_NAME}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url || "https://lifeboxnextgen.com"} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image || "https://i.ibb.co/k6P7hnvb/Whats-App-Image-2026-01-09-at-13-40-57.jpg"} />
      <meta property="og:site_name" content={SITE_NAME} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url || "https://lifeboxnextgen.com"} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image || "https://i.ibb.co/k6P7hnvb/Whats-App-Image-2026-01-09-at-13-40-57.jpg"} />

      {/* Structural Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Corporation",
          "name": SITE_NAME,
          "url": "https://lifeboxnextgen.com",
          "logo": "https://i.ibb.co/k6P7hnvb/Whats-App-Image-2026-01-09-at-13-40-57.jpg",
          "description": description,
          "founders": [
            { "@type": "Person", "name": "Bhanu Prakash Syagam Reddy" }
          ],
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "8-252, Dasaripalem village, post, Rompicherlla Mandal",
            "addressLocality": "Narasaraopet",
            "addressRegion": "Andhra Pradesh",
            "postalCode": "522615",
            "addressCountry": "IN"
          }
        })}
      </script>
    </Helmet>
  );
};

export default Seo;
