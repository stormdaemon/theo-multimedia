import Head from 'next/head';

const SEOHead = ({ 
  title, 
  description, 
  canonical, 
  ogTitle, 
  ogDescription, 
  ogImage = '/og-image.jpg',
  noindex = false 
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content="Théo LAFONT" />
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow"} />
      
      {/* Canonical link without superfluous attributes */}
      {canonical && (
        <link rel="canonical" href={canonical} />
      )}
      
      {/* Open Graph tags */}
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />
      {canonical && <meta property="og:url" content={canonical} />}
      
      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle || title} />
      <meta name="twitter:description" content={ogDescription || description} />
      <meta name="twitter:image" content={ogImage} />
    </Head>
  );
};

export default SEOHead;
