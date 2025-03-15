import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/app/lib/mongodb";
import Blog from "@/app/model/blog";

export async function GET() {
  await dbConnect();
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 }).lean();

    // Limit content preview to 100 characters
    const blogsWithPreview = blogs.map((blog) => ({
      title:blog.title,
      author:blog.author,
      _id:blog._id,
      createdAt:blog.createdAt,
      content: blog.content && blog.content.length > 100 
        ? blog.content.substring(0, 100) + "..." 
        : blog.content || "",
    }));

    return NextResponse.json(blogsWithPreview);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch blogs" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  await dbConnect();
  try {
    const { title, content, author } = await req.json();

    if (!title || !content || !author) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    const newBlog = new Blog({ title, content, author });
    await newBlog.save();
    // const newBlog = await Blog.create({ title, content, author });

    return NextResponse.json({ success: true, message: "Blog added successfully!" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
