import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../api/api";
import Navbar from "../components/Navbar";

export default function UserProfile() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const loadUser = async () => {
      const res = await API.get(`/users/${id}`); // API should return user info
      setUser(res.data);
    };

    const loadPosts = async () => {
      const res = await API.get(`/posts/user/${id}`); // posts by this user
      setPosts(res.data);
    };

    loadUser();
    loadPosts();
  }, [id]);

  if (!user) return <div>Loading...</div>;

  return (
    <>
      <Navbar />

      <div className="pt-20 flex justify-center bg-gray-100 min-h-screen">
        <div className="w-full max-w-xl space-y-6">

          <div className="bg-white p-4 rounded-xl shadow">
            <h1 className="text-2xl font-bold">{user.username}</h1>
            <p>{user.bio}</p>
            <p>{user.followers.length} followers • {user.following.length} following</p>
          </div>


          {posts.map((p) => (
            <div key={p._id} className="bg-white shadow rounded-xl">
              <img src={p.imageUrl} className="w-full rounded" />
              <div className="p-4">
                <p className="font-bold mt-2">{p.likes.length} likes</p>
                <p>
                  <span className="font-bold">{user.username}</span> {p.caption}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </>
  );
}
