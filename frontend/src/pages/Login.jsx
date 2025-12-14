

import { useState } from "react";
import API from "../api/api";
import { useAuthStore } from "../store/authStore";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const login = useAuthStore((x) => x.login);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await API.post("/auth/login", form);
      login(res.data.token);
      navigate("/feed");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen bg-[#fafafa] flex items-center justify-center">
      <div className="flex flex-col items-center">

        <div className="bg-white border border-gray-300 w-[350px] px-10 pt-10 pb-6">
          <h1 className="text-[42px] font-semibold text-center mb-8 tracking-tight">
            Instagram
          </h1>

          <input
            className="w-full bg-[#fafafa] border border-gray-300 text-xs px-2.5 py-2 mb-2 rounded focus:outline-none focus:border-gray-400"
            placeholder="Phone number, username, or email"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <input
            className="w-full bg-[#fafafa] border border-gray-300 text-xs px-2.5 py-2 mb-3 rounded focus:outline-none focus:border-gray-400"
            placeholder="Password"
            type="password"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />

          <button
            onClick={handleLogin}
            className="w-full bg-[#0095f6] hover:bg-[#1877f2] text-white py-1.5 rounded font-semibold text-sm transition"
          >
            Log in
          </button>
        </div>

        <div className="bg-white border border-gray-300 w-[350px] py-4 mt-3 text-center text-sm">
          Don&apos;t have an account?
          <Link to="/signup" className="text-[#0095f6] font-semibold ml-1">
            Sign up
          </Link>
        </div>

      </div>
    </div>
  );
}
