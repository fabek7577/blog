export const dynamic = "force-dynamic";

import { NextRequest } from "next/server";
import connectToDb from "./../../../utils/database";
import { Blog } from "./../../../model/blog";

export async function POST(req: NextRequest) {
  const { title, postImg, postText, creator, catName, conclusion } =
    await req.json();
  try {
    await connectToDb();

    const blog = new Blog({
      title,
      postImg,
      postText,
      creator,
      catName,
      conclusion,
    });

    await blog.save();
  } catch (error) {
    return Response.json({ status: 500, message: "Something went wrong" });
  }
  return Response.json({ status: 200, message: "New User created" });
}

export async function GET() {
  try {
    console.log("here");
    await connectToDb();
    const res = await Blog.find().populate("creator");
    console.log("here",res);
    return Response.json({ status: 200, message: res });
  } catch (error) {
    return Response.json({ status: 500, message: "Something went wrong" });
  }
}
