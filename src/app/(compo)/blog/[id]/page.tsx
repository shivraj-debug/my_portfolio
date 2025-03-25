"use client";

import { useEffect, useState } from "react";

interface Blog {
  title: string;
  content: string;
  author: string;
  createdAt: string;
}

export default function BlogPage({ params }: { params?: { id: string } }) {
  console.log("Params:", params); // Debugging: Check if params is correct
  if (!params || !params.id) {
    console.error("Params or slug is undefined");
    return <p>Invalid route</p>;
  }
  const { id } = params;
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  console.log("Slug:", id); // Debugging: Check if slug is correct

  useEffect(() => {
    if (!id) return;

    const fetchBlog = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/blog/${id}`, { method: "GET" });
        if (!res.ok) throw new Error("Failed to fetch blog");
        const data = await res.json();
        setBlog(data);
      } catch (error) {
        console.error("Error fetching blog:", error);
        setBlog(null);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!blog) return <p>Blog not found at frontend.</p>;

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold">{blog.title}</h1>
      <span className="mr-2">{blog.author}</span><span className="text-gray-500">{new Date(blog.createdAt).toDateString()}</span>
      <div className="mt-4 text-lg">{blog.content}</div>
    </div>
  );
}