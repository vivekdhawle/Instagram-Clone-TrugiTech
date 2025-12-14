import express from "express";
import auth from "../middleware/auth.js";
import { followUser, unfollowUser } from "../controllers/userController.js";

const router = express.Router();

router.post("/:id/follow", auth, followUser);
router.post("/:id/unfollow", auth, unfollowUser);

export default router;
