import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import API from "../api/api";
import { Heart } from "lucide-react";

export default function Feed() {
  const [posts, setPosts] = useState([]);

  const loadFeed = async () => {
    const res = await API.get("/posts/feed");
    setPosts(res.data);
  };

  useEffect(() => {
    loadFeed();
  }, []);

  return (
    <>
      <Navbar />

      <div className="pt-20 flex justify-center bg-gray-100 min-h-screen">
        <div className="w-full max-w-xl space-y-6">
          {posts.map((p) => (
            <div key={p._id} className="bg-white shadow rounded-xl">

              <div className="p-4 font-bold">{p.user.username}</div>

              <img src={p.imageUrl} className="w-full rounded" />

              <div className="p-4">
                <button
                  className="text-red-500"
                  onClick={() => API.post(`/posts/${p._id}/like`).then(loadFeed)}
                >
                  <Heart />
                </button>

                <p className="font-bold mt-2">{p.likes.length} likes</p>

                <p>
                  <span className="font-bold">{p.user.username}</span> {p.caption}
                </p>

                <input
                  placeholder="Add a comment..."
                  className="border w-full rounded p-2 mt-3"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      API.post(`/posts/${p._id}/comment`, { text: e.target.value })
                        .then(loadFeed);
                      e.target.value = "";
                    }
                  }}
                />
              </div>

            </div>
          ))}
        </div>
      </div>
    </>
  );
}
