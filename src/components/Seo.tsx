
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
      <meta property="og:image" content={image || "/og-image.png"} />
      <meta property="og:site_name" content={SITE_NAME} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url || "https://lifeboxnextgen.com"} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image || "/og-image.png"} />

      {/* Structural Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Corporation",
          "name": SITE_NAME,
          "url": "https://lifeboxnextgen.com",
          "logo": "https://lifeboxnextgen.com/logo.png",
          "description": description,
          "founders": [
            { "@type": "Person", "name": "Founder Name" } // Placeholder
          ],
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "India",
            "addressCountry": "IN"
          }
        })}
      </script>
    </Helmet>
  );
};

export default Seo;
