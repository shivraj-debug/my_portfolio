"use client";

import { useState } from "react";

interface BlogData {
  title: string;
  content: string;
  author: string;
}

export default function BlogForm() {
  const [formData, setFormData] = useState<BlogData>({ title: "", content: "", author: "" });
  const [loading, setLoading] = useState<boolean>(false);
  // const [response, setResponse] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // setResponse(null);

    try {
      const res = await fetch("/api/blog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      // setResponse(data.message);
      // if (res.ok) setFormData({ title: "", content: "", author: "" });
      if (!res.ok) throw new Error(data.error || "Failed to post blog");

    alert("Blog posted successfully!");
    setFormData({ title: "", content: "", author: "" });
    
    // fetchBlogs(); // Refresh blog list

    } catch (error) {
      // setResponse("Something went wrong. Try again later.");
      // throw new Error("there is error while submitting the form")
      console.log("there is error while submitting the form")
      setLoading(false);
    }finally{
      setLoading(false)
    }
  };

  return (
 <form onSubmit={handleSubmit} className="space-y-4">
      <div className="max-w-sm w-full">
      <label className="mb-2 text-xl font-medium text-gray-500">Title</label>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Blog Title"
        required
        className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-3 mt-1"
      />
      </div>
        <div className="max-w-sm w-full">
        <label className="mb-2 text-xl font-medium text-gray-500">Author</label>
      <input
        type="text"
        name="author"
        value={formData.author}
        onChange={handleChange}
        placeholder="Author Name"
        required
        className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-3 mt-1"
      />
        </div>
      <div className="max-w-sm w-full">
      <label className="mb-2 text-xl font-medium text-gray-500">Content</label>
      <textarea
  name="content"
  id="content"
  rows={4}
  className="p-2.5 w-full text-sm text-black bg-gray-100 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
  placeholder="Leave a comment..."
  required
  value={formData.content}
  onChange={handleChange}
></textarea>
      </div>
      <button type="submit" disabled={loading} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 text-xl  rounded-md  w-full  px-5 py-2.5 text-center mt-5">
        {loading ? "posting..." : "Post Blog"}
      </button>
      {/* {response && <p>{response}</p>} */}
    </form>
  );
}
