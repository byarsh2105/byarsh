import { allProjects } from 'content-collections';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { Suspense } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Container from '@/components/layout/Container';
import Image from 'next/image';
import Link from 'next/link';
import { MDXContent } from '@content-collections/mdx/react';
import StayConnected from '@/components/contact/StayConnected';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = allProjects.find((p) => p.slug === slug);

  if (!project) {
    return { title: 'Project Not Found' };
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      type: 'article',
      url: `https://byarsh.com/projects/${project.slug}`,
      images: [
        {
          url: project.image || '/images/home/editorial-workspace.png',
        },
      ],
    },
  };
}

export async function generateStaticParams() {
  return allProjects.map((post) => ({
    slug: post.slug,
  }));
}

async function ProjectContent({ params }: PageProps) {
  const { slug } = await params;
  const project = allProjects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="pt-12 pb-24">
        {/* Technical Header with Blueprint Grid Background */}
        <div className="border-border/40 relative mb-16 overflow-hidden border-b bg-[#FAFAFA] pt-16 pb-16">
          {/* Subtle Grid Background */}
          <div
            className="absolute inset-0 z-0 opacity-[0.03]"
            style={{
              backgroundImage:
                'radial-gradient(circle at 2px 2px, #000 1px, transparent 0)',
              backgroundSize: '24px 24px',
            }}
          />
          <Container className="relative z-10">
            <div className="mx-auto max-w-[1100px]">
              <div className="mb-8">
                <Link
                  href="/projects"
                  className="hover:text-primary inline-flex items-center text-[15px] font-medium text-[#4B5563] transition-colors"
                >
                  <span className="mr-2">←</span> Back to Projects
                </Link>
              </div>

              <div className="mb-6 flex items-center gap-3">
                <span className="bg-primary h-2 w-2 animate-pulse rounded-full" />
                <p className="text-primary font-mono text-[13px] font-bold tracking-[0.2em] uppercase">
                  SYS.DOC // {project.category}
                </p>
              </div>
              <h1 className="mb-8 font-sans text-[48px] leading-[1.05] font-bold tracking-tight text-[#111827] sm:text-[64px]">
                {project.title}
              </h1>
              <p className="border-primary/30 max-w-[800px] border-l-2 pl-4 text-[19px] leading-[1.6] font-medium text-[#4B5563]">
                {project.description}
              </p>
            </div>
          </Container>
        </div>

        <Container>
          <div className="mx-auto grid max-w-[1100px] gap-16 lg:grid-cols-[1fr_300px]">
            {/* Left: Main Technical Content */}
            <article className="w-full">
              {/* Cover Image */}
              {project.image && (
                <div className="border-border/80 relative mb-16 aspect-[16/9] w-full overflow-hidden rounded-xl border bg-[#111827] shadow-md">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover opacity-90"
                    priority
                  />
                </div>
              )}

              {/* MDX Content with Technical Prose */}
              <div className="project-prose">
                <MDXContent code={project.body} />
              </div>
            </article>

            {/* Right: Technical Brief Sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-32 space-y-8 rounded-xl border-2 border-dashed border-[#E5E7EB] bg-[#F9FAFB] p-6 shadow-sm">
                <div>
                  <h4 className="mb-4 flex items-center gap-2 font-mono text-[12px] font-bold tracking-widest text-[#6B7280] uppercase">
                    <span className="text-primary">{'>'}</span> Tech_Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded border border-[#D1D5DB] bg-white px-2.5 py-1 font-mono text-[12px] font-semibold text-[#374151] shadow-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <hr className="border-t-2 border-dashed border-[#E5E7EB]" />

                <div>
                  <h4 className="mb-4 flex items-center gap-2 font-mono text-[12px] font-bold tracking-widest text-[#6B7280] uppercase">
                    <span className="text-primary">{'>'}</span> Meta_Data
                  </h4>
                  <dl className="space-y-4 font-mono text-[13px]">
                    <div className="flex flex-col">
                      <dt className="mb-1 text-[11px] font-semibold tracking-wider text-[#9CA3AF] uppercase">
                        DOMAIN:
                      </dt>
                      <dd className="font-bold text-[#111827]">
                        {project.category}
                      </dd>
                    </div>
                    {project.year && (
                      <div className="flex flex-col">
                        <dt className="mb-1 text-[11px] font-semibold tracking-wider text-[#9CA3AF] uppercase">
                          DEPLOYED:
                        </dt>
                        <dd className="font-bold text-[#111827]">
                          {project.year}
                        </dd>
                      </div>
                    )}
                  </dl>
                </div>
              </div>
            </aside>
          </div>
        </Container>

        {/* CTA */}
        <div className="mt-32">
          <Container>
            <StayConnected />
          </Container>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default function Page({ params }: PageProps) {
  return (
    <Suspense fallback={null}>
      <ProjectContent params={params} />
    </Suspense>
  );
}
