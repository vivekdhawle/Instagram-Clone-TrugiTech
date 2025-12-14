import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Layout() {
  return (
    <>
      <Navbar />
      <main className="pt-14 md:pb-0 pb-16 max-w-5xl mx-auto">
        <Outlet />
      </main>
    </>
  );
}
