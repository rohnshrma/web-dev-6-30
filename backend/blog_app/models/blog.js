import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
    minlength: [50, "a minimum of 50 character are required in title"],
    unique: true,
  },
  description: {
    type: String,
    required: [true, "Description is required"],
    minlength: [200, "a minimum of 200 character are required in title"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  // userId: {
  //   type: mongoose.Types.ObjectId,
  //   ref: "User",
  //   required: true,
  // },
});

const Blog = new mongoose.model("blogs", blogSchema);

export default Blog;
