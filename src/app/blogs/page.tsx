import Reveal from '@/components/motion/reveal';
import Stagger from '@/components/motion/stagger';

import BlogCards from './blog-cards';

export default function BlogsPage() {
  return (
    <Stagger startDelay={0.12} className="flex h-full flex-col gap-2 p-4">
      <Reveal>
        <h1 className="text-2xl font-semibold">Blogs</h1>
      </Reveal>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
        <BlogCards />
      </div>
    </Stagger>
  );
}
