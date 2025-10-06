import Blog from "../models/blog.js";

export const GET_BLOGS = async (req, res) => {
  try {
    const blogs = await Blog.find({});
    return res.json({ blogs }).status(200);
  } catch (err) {
    return res.json({ error: err || "Failed to fetch blogs" }).status(500);
  }
};
export const POST_BLOG = async (req, res) => {
  try {
    const { title, description } = req.body;
    if (!title || !description) {
      return res.json({ error: "Title or Description Missing" }).status(400);
    }

    const newBlog = new Blog({
      title,
      description,
    });

    await newBlog.save();

    return res.json({ message: "New Blog Added", blog: newBlog }).status(201);
  } catch (err) {
    return res.json({ error: err || "Failed to add blog" }).status(500);
  }
};
export const DELETE_BLOG = async (req, res) => {
  try {
    const { id } = req.params;

    const existingBlog = await Blog.findOne({ _id: id });

    if (!existingBlog) {
      return res.json({ error: "No Blog Found" }).status(404);
    }

    await Blog.findByIdAndDelete(id);
    return res
      .json({ message: "Blog Deleted", blog: existingBlog })
      .status(200);
  } catch (err) {
    return res.json({ error: err || "Failed to Delete blog" }).status(500);
  }
};
export const UPDATE_BLOG = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;
    const existingBlog = await Blog.findOne({ _id: id });

    if (!existingBlog) {
      return res.json({ error: "No Blog Found" }).status(404);
    }

    const blog = await Blog.findByIdAndUpdate(
      id,
      {
        title,
        description,
        updatedAt: Date.now(),
      },
      { new: true }
    );

    return res.status(200).json({ message: "Blog Updated", blog });
  } catch (err) {
    return res.json({ error: err || "Failed to Update blog" }).status(500);
  }
};
