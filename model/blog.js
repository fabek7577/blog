import mongoose, { Schema, models } from "mongoose";
import { Users } from "@/model/users";
const blogSchema = new mongoose.Schema(
  {
    title: String,
    catName: String,
    postImg: String,
    postText: String,
    conclusion: String,
    creator: {
      type: Schema.Types.ObjectId,
      ref: "Users",
    },
  },
  { timestamps: true }
);

export const Blog = models.BlogItem || mongoose.model("BlogItem", blogSchema);
