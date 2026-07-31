import { MetadataRoute } from 'next';
import { allJournals, allProjects } from 'content-collections';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://byarsh.com';

  const staticRoutes = [
    '',
    '/about',
    '/contact',
    '/journal',
    '/projects',
    '/library',
    '/journey',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const journalRoutes = allJournals.map((post) => ({
    url: `${baseUrl}/journal/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  const projectRoutes = allProjects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...journalRoutes, ...projectRoutes];
}
