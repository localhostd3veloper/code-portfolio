import BlogCards from './blog-cards';

export default function BlogsPage() {
  return (
    <div className="flex h-full flex-col gap-2 p-4">
      <h1 className="text-2xl font-semibold">Blogs</h1>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
        <BlogCards />
      </div>
    </div>
  );
}
