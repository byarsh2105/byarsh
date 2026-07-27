import Header from '@/components/layout/Header';
import ProjectsHero from '@/components/projects/ProjectsHero';
import ProjectsCategories from '@/components/projects/ProjectsCategories';
import FeaturedProject from '@/components/projects/FeaturedProject';
import AllProjects from '@/components/projects/AllProjects';
import ProjectsCTA from '@/components/projects/ProjectsCTA';
import QuoteDivider from '@/components/shared/QuoteDivider';
import Footer from '@/components/layout/Footer';

export default function ProjectsPage() {
  return (
    <>
      <Header />

      <main>
        <ProjectsHero />
        <ProjectsCategories />
        <FeaturedProject />
        <AllProjects />
        <ProjectsCTA />
      </main>

      <QuoteDivider quote="every project is a step towards becoming better" />
      <Footer />
    </>
  );
}
