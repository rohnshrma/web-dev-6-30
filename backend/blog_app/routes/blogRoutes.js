import { Router } from "express";
import {
  GET_BLOGS,
  DELETE_BLOG,
  UPDATE_BLOG,
  POST_BLOG,
} from "../controller/blogController.js";

const router = Router();

router.route("/").get(GET_BLOGS).post(POST_BLOG);
router.route("/:id").delete(DELETE_BLOG).put(UPDATE_BLOG);

export default router;
