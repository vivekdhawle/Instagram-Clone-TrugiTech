import express from "express";
import auth from "../middleware/auth.js";
import { getMyProfile, getMyPosts } from "../controllers/userProfileController.js";

const router = express.Router();

router.get("/me", auth, getMyProfile);
router.get("/me/posts", auth, getMyPosts);

export default router;
