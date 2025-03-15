
'use client'

import Link from "next/link";
import { useEffect, useState } from "react";

interface Blog {
  _id: string;
  title: string;
  content: string;
  author: string;
  createdAt: Date;
}

export default function Blog() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("/api/blog", { method: "GET" });
        const data = await res.json();
        console.log("Fetched Blogs:", data); // Debugging Output
        setBlogs(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);
  
  // console.log(blogs[0]._id)
  
  if (loading) return <div className="flex justify-center items-center">
    <p>blog loading....</p>
  </div>

  return (
    <div>
      {blogs.length > 0 ? (
        blogs.map((blog,index) => (
          <div  key={blog._id ? blog._id.toString() : `fallback-key-${index}`} className=" px-4  py-2 my-1.5 shadow-sm shadow-gray-500/50 rounded-lg">
           <Link href={`/blog/${blog._id}`}>
           
           <h2 className="text-xl font-bold">{blog.title}</h2>
           </Link>
           <p className="text-sm text-gray-500">
  By {blog.author} on{" "}
  {blog.createdAt ? new Date(blog.createdAt).toLocaleDateString() : "Unknown"}
</p>

            <p className="mt-2">{blog.content}</p>
          </div>
        ))
      ) : (
        <p>No blogs available.</p>
      )}
      </div>
    )
}


{/* <div className={`${theme=="dark"?"bg-black":"bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300"} h-screen mt-20`}></div> */}