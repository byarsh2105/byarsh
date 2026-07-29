import { allJournals } from 'content-collections';
import { notFound } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Container from '@/components/layout/Container';
import ArticleHero from '@/components/journal/article/ArticleHero';
import ShareSidebar from '@/components/journal/article/ShareSidebar';
import ArticleContent from '@/components/journal/article/ArticleContent';
import ArticleTags from '@/components/journal/article/ArticleTags';
import ArticleNavigation from '@/components/journal/article/ArticleNavigation';
import RelatedArticles from '@/components/journal/article/RelatedArticles';
import StayInTouch from '@/components/journal/StayInTouch';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return allJournals.map((post) => ({
    slug: post.slug,
  }));
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const post = allJournals.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Calculate prev/next/related logic here (simplified for scaffold)
  const currentIndex = allJournals.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex > 0 ? allJournals[currentIndex - 1] : null;
  const nextPost =
    currentIndex < allJournals.length - 1
      ? allJournals[currentIndex + 1]
      : null;
  const relatedPosts = allJournals.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <>
      <Header />
      <main className="pt-12 pb-16">
        <ArticleHero post={post} />

        <Container>
          <div className="mx-auto mt-12 grid max-w-[1000px] gap-12 lg:grid-cols-[200px_1fr]">
            <aside className="hidden lg:block">
              <ShareSidebar title={post.title} />
            </aside>
            <article>
              <ArticleContent post={post} />
              <ArticleTags tags={post.tags} />
              <ArticleNavigation prev={prevPost} next={nextPost} />
            </article>
          </div>
        </Container>

        <RelatedArticles articles={relatedPosts} />
        <StayInTouch />
      </main>
      <Footer />
    </>
  );
}
