import { useState } from "react";
import API from "../api/api";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const navigate = useNavigate();

  const submit = async () => {
    try {
      await API.post("/auth/signup", form);
      navigate("/login");
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 w-96 rounded-xl shadow">
        <h1 className="text-3xl text-center font-bold mb-6">Instagram</h1>

        <input
          className="w-full border p-3 mb-3 rounded"
          placeholder="Username"
          onChange={(e) => setForm({ ...form, username: e.target.value })}
        />

        <input
          className="w-full border p-3 mb-3 rounded"
          placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          className="w-full border p-3 mb-3 rounded"
          placeholder="Password"
          type="password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button
          onClick={submit}
          className="w-full bg-blue-500 text-white py-2 rounded font-semibold"
        >
          Sign up
        </button>

        <p className="mt-4 text-center">
          Already have an account?
          <Link to="/login" className="text-blue-600 font-semibold"> Login</Link>
        </p>
      </div>
    </div>
  );
}
