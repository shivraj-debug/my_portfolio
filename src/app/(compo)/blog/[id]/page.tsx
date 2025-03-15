import { notFound } from "next/navigation";

async function fetchBlog(id: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/blog/${id}`, { cache: "no-store" });

  if (!res.ok) return null;
  return res.json();
}

export default async function BlogPage({ params }: { params: { id: string } }) {
  const { id } = await params
  const blog = await fetchBlog(id);

  if (!blog) {
    return notFound();
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold">{blog.title}</h1>
      <p className="text-gray-500">{new Date(blog.createdAt).toDateString()}</p>
      <div className="mt-4 text-lg">{blog.content}</div>
    </div>
  );
}
