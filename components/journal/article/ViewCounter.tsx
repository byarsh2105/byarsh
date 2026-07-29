'use client';

import { useEffect, useState } from 'react';
import { Eye } from 'lucide-react';

export default function ViewCounter({ slug }: { slug: string }) {
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    // Only fetch/increment on the client side
    let isMounted = true;

    async function trackView() {
      try {
        const res = await fetch(`/api/views/${slug}`, {
          method: 'POST',
        });
        const data = await res.json();

        if (isMounted && data.views !== undefined) {
          setViews(data.views);
        }
      } catch (error) {
        console.error('Failed to track view', error);
      }
    }

    trackView();

    return () => {
      isMounted = false;
    };
  }, [slug]);

  if (views === null) {
    return (
      <div className="flex items-center gap-1.5 opacity-50">
        <Eye size={16} />
        <span>--- views</span>
      </div>
    );
  }

  return (
    <div className="animate-in fade-in flex items-center gap-1.5 duration-500">
      <Eye size={16} />
      <span>{views.toLocaleString()} views</span>
    </div>
  );
}
