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
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://theo-multimedia.com').replace(/\/$/, '')
  const fullCanonical = canonical && canonical.startsWith('http') ? canonical : (canonical ? `${siteUrl}${canonical}` : undefined)
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content="Théo LAFONT" />
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow"} />
      
      {/* Canonical link without superfluous attributes */}
      {fullCanonical && (
        <link rel="canonical" href={fullCanonical} />
      )}
      
      {/* Open Graph tags */}
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:image" content={ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`} />
      <meta property="og:type" content="website" />
      {fullCanonical && <meta property="og:url" content={fullCanonical} />}
      
      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle || title} />
      <meta name="twitter:description" content={ogDescription || description} />
      <meta name="twitter:image" content={ogImage} />
    </Head>
  );
};

export default SEOHead;
