import { useState } from "react";
import API from "../api/api";
import Navbar from "../components/Navbar";

export default function CreatePost() {
  const [data, setData] = useState({ imageUrl: "", caption: "" });

  const submit = async () => {
    await API.post("/posts", data);
    alert("Post created!");
  };

  return (
    <>
      <Navbar />

      <div className="pt-24 flex justify-center">
        <div className="bg-white p-6 rounded-xl shadow w-96">

          <h2 className="text-xl font-bold mb-4">Create a Post</h2>

          <input
            placeholder="Image URL"
            className="border w-full p-2 rounded mb-3"
            onChange={(e) => setData({ ...data, imageUrl: e.target.value })}
          />

          <input
            placeholder="Caption"
            className="border w-full p-2 rounded mb-3"
            onChange={(e) => setData({ ...data, caption: e.target.value })}
          />

          <button
            onClick={submit}
            className="bg-blue-500 text-white w-full py-2 rounded font-semibold"
          >
            Upload
          </button>
        </div>
      </div>
    </>
  );
}
