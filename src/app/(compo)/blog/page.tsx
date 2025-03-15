"use client";

import BlogForm from "@/app/components/BlogForm";
import BlogList from "@/app/components/BlogList";
import Navbar from "@/app/components/Navbar";
import { useTheme } from "next-themes";

export default function BlogPage() {
  const { theme } = useTheme();
  return (
    <div className="">
      <div
        className={`fixed top-0 right-0 w-full h-20  ${
          theme == "dark" ? "bg-blue-950" : "bg-white"
        }`}
      >
        <Navbar />
      </div>
      <div className="pt-20 mt-10 mx-20 md:mx-10 ">
        <div className="md:grid grid-cols-5 ">
          <div className= "max-w-sm md:col-span-2">
            <BlogForm />
          </div>
          <div className="md:col-span-3">
            <h2 className="text-xl font-bold text-center
            mt-6">All posted Blogs</h2>
            <div className="mt-4">
              <BlogList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
