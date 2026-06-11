import ContentPageLayout from '../components/ContentPageLayout';
import { contentPages, getContentPage } from '../lib/services-data';

export default function DynamicContentPage({ page }) {
  return <ContentPageLayout page={page} />;
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

  return { props: { page } };
}
