import Image from 'next/image';
import { MDXContent } from '@content-collections/mdx/react';

interface ArticleContentProps {
  post: any;
}

export default function ArticleContent({ post }: ArticleContentProps) {
  return (
    <div className="w-full">
      {/* Cover Image */}
      {post.image && (
        <div className="bg-muted relative mb-12 aspect-[16/9] w-full overflow-hidden rounded-2xl">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      {/* MDX Content */}
      <div className="article-prose mx-auto max-w-[680px]">
        <MDXContent code={post.body} />
      </div>
    </div>
  );
}
