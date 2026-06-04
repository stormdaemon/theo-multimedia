import ContentPageLayout from '../components/ContentPageLayout';
import { contentPages, getContentPage } from '../lib/services-data';

export default function DynamicContentPage({ page, baseUrl, isCrawler }) {
  return <ContentPageLayout page={page} baseUrl={baseUrl} isCrawler={isCrawler} />;
}

export async function getStaticPaths() {
  return {
    paths: contentPages.map((page) => ({ params: { slug: page.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const page = getContentPage(params.slug);

  if (!page) {
    return { notFound: true };
  }

  return {
    props: {
      page,
      baseUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://theo-multimedia.com',
      isCrawler: false,
    },
  };
}
