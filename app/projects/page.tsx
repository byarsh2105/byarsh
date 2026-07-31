import Header from '@/components/layout/Header';
import ProjectsHero from '@/components/projects/ProjectsHero';
import ProjectsCategories from '@/components/projects/ProjectsCategories';
import FeaturedProject from '@/components/projects/FeaturedProject';
import AllProjects from '@/components/projects/AllProjects';
import ProjectsCTA from '@/components/projects/ProjectsCTA';
import QuoteDivider from '@/components/shared/QuoteDivider';
import Footer from '@/components/layout/Footer';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'A collection of ideas, experiments, and products I have built.',
};

export default async function ProjectsPage({
  searchParams,
}: {
  searchParams: Promise<{ filter?: string }>;
}) {
  const { filter } = await searchParams;
  const activeFilter = filter || 'All';

  return (
    <>
      <Header />

      <main>
        <ProjectsHero />
        <ProjectsCategories activeFilter={activeFilter} />
        <FeaturedProject />
        <AllProjects activeFilter={activeFilter} />
        <ProjectsCTA />
      </main>

      <QuoteDivider quote="every project is a step towards becoming better" />
      <Footer />
    </>
  );
}
