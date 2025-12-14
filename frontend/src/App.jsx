import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Feed from "./pages/Feed";
import CreatePost from "./pages/CreatePost";
import Profile from "./pages/Profile";
import Layout from "./pages/Layout";
import UserProfile from "./pages/UserProfile";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route element={<Layout />}>
          <Route path="/feed" element={<Feed />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/me" element={<Profile />} />
           <Route path="/user/:id" element={<UserProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

