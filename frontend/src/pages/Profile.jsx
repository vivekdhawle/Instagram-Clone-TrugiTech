import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import API from "../api/api";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    API.get("/profile/me").then((res) => setUser(res.data));
    API.get("/profile/me/posts").then((res) => setPosts(res.data));
  }, []);

  if (!user) return <h2>Loading...</h2>;

  return (
    <>
      <Navbar />

      <div className="pt-24 max-w-3xl mx-auto">

        <div className="flex gap-10 items-center">
          <div className="w-24 h-24 bg-gray-300 rounded-full"></div>

          <div>
            <h2 className="text-3xl font-bold">{user.username}</h2>

            <div className="flex gap-6 mt-3">
              <p><b>{posts.length}</b> posts</p>
              <p><b>{user.followers.length}</b> followers</p>
              <p><b>{user.following.length}</b> following</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-1 mt-10">
          {posts.map((p) => (
            <img key={p._id} src={p.imageUrl} className="h-40 w-full object-cover" />
          ))}
        </div>
      </div>
    </>
  );
}
