interface ArticleTagsProps {
  tags?: string[];
}

export default function ArticleTags({ tags }: ArticleTagsProps) {
  if (!tags || tags.length === 0) return null;

  return (
    <div className="mx-auto mt-16 flex max-w-[680px] flex-wrap items-center gap-4">
      <span className="text-foreground text-[15px] font-medium">Tags</span>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="border-border text-muted-foreground hover:border-primary hover:text-primary cursor-pointer rounded-full border px-4 py-1.5 text-[13px] transition-colors"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
