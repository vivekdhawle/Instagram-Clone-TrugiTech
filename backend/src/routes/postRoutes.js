import express from "express";
import auth from "../middleware/auth.js";
import {
  createPost,
  likePost,
  unlikePost,
  commentPost,
  getFeed
} from "../controllers/postController.js";

const router = express.Router();

router.post("/", auth, createPost);
router.post("/:id/like", auth, likePost);
router.post("/:id/unlike", auth, unlikePost);
router.post("/:id/comment", auth, commentPost);

router.get("/feed", auth, getFeed);

export default router;
