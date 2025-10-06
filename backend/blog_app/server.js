import express from "express";
import { config } from "dotenv";
import connectDB from "./config/db.js";
import blogRoutes from "./routes/blogRoutes.js";
import cors from "cors";
const app = express();

console.log(blogRoutes);

config();

connectDB();

const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log("App RUnning");
  console.log(req.url);
  next();
});
app.use("/api/blogs", blogRoutes);

app.listen(PORT || 8000, () => {
  console.log("Server started on port : ", PORT || 8000);
});
