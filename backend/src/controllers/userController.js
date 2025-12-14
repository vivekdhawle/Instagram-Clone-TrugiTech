import User from "../models/User.js";
export const followUser = async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    const target = await User.findById(req.params.id);

    if (!target) return res.status(404).json({ message: "User not found" });

    if (user.following.includes(target._id))
      return res.status(400).json({ message: "Already following" });

    user.following.push(target._id);
    target.followers.push(user._id);

    await user.save();
    await target.save();

    res.json({ message: "Followed successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const unfollowUser = async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    const target = await User.findById(req.params.id);

    user.following = user.following.filter(
      (id) => id.toString() !== target._id.toString()
    );
    target.followers = target.followers.filter(
      (id) => id.toString() !== user._id.toString()
    );

    await user.save();
    await target.save();

    res.json({ message: "Unfollowed successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
