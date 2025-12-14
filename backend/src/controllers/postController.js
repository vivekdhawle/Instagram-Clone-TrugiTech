import Post from "../models/Post.js";
import Comment from "../models/Comment.js";
import User from "../models/User.js";

export const createPost = async (req, res) => {
  try {
    const { imageUrl, caption } = req.body;

    const post = await Post.create({
      user: req.userId,
      imageUrl,
      caption
    });

    res.json(post);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const likePost = async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (!post) return res.status(404).json({ message: "Post not found" });

  if (post.likes.includes(req.userId))
    return res.status(400).json({ message: "Already liked" });

  post.likes.push(req.userId);
  await post.save();

  res.json({ message: "Post liked" });
};

export const unlikePost = async (req, res) => {
  const post = await Post.findById(req.params.id);

  post.likes = post.likes.filter(
    (id) => id.toString() !== req.userId.toString()
  );

  await post.save();

  res.json({ message: "Post unliked" });
};

export const commentPost = async (req, res) => {
  const { text } = req.body;

  const comment = await Comment.create({
    user: req.userId,
    post: req.params.id,
    text
  });

  res.json(comment);
};

export const getFeed = async (req, res) => {
  

  const posts = await Post.find()
    .populate("user", "username")
    .sort({ createdAt: -1 });
  console.log(posts);
  res.json(posts);
};
