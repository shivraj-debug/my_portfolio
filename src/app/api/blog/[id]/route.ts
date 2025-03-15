import { NextResponse } from "next/server";
import dbConnect from "@/app/lib/mongodb";
import Blog from "@/app/model/blog";

export async function GET(req: Request, { params }: { params:Promise< { id: string } >}) {
  try {
    await dbConnect();
    const { id } = await params
    const blog = await Blog.findById(id);

    if (!blog) {
      return NextResponse.json({ message: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json(blog);
  } catch (error) {
    return NextResponse.json({ message: "Error fetching blog" }, { status: 500 });
  }
}
