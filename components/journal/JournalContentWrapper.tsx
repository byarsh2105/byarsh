'use client';

import { useState } from 'react';
import CategoriesNav from './CategoriesNav';
import FeaturedArticle from './FeaturedArticle';
import LatestArticles from './LatestArticles';
import { journalCategories, journalPosts } from '@/src/content/journal';

export default function JournalContentWrapper() {
  const [activeCategory, setActiveCategory] = useState('All');

  // Filter posts based on selected category
  const filteredPosts =
    activeCategory === 'All'
      ? journalPosts
      : journalPosts.filter(
          (post) =>
            post.category.toLowerCase() === activeCategory.toLowerCase(),
        );

  return (
    <>
      <CategoriesNav
        categories={journalCategories}
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
      />
      <FeaturedArticle />
      <LatestArticles articles={filteredPosts} />
    </>
  );
}
