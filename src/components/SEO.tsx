import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
}

const SEO = ({ 
  title = "OFBYTE - AI-Powered Digital Solutions | Web, Mobile & Game Development",
  description = "Leading tech startup specializing in AI-powered web applications, mobile apps, and game development. Serving global clients with cutting-edge digital solutions.",
  keywords = "web development, mobile app development, game development, AI solutions, startup, digital agency, React, Node.js, Unity, Python",
  image = "/og-image.png"
}: SEOProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="OFBYTE" />
      <link rel="canonical" href="https://ofbyte.com" />
    </Helmet>
  );
};

export default SEO;