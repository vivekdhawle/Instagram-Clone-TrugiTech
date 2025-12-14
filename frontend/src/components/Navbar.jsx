import { Link, useNavigate, useLocation } from "react-router-dom";
import { Home, PlusSquare, User, LogOut } from "lucide-react";
import { useAuthStore } from "../store/authStore";

export default function Navbar() {
  const logout = useAuthStore((x) => x.logout);
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const iconStyle = (path) =>
    `transition ${
      isActive(path)
        ? "text-black"
        : "text-gray-500 hover:text-black"
    }`;

  return (
    <>
      <nav className="hidden md:flex fixed top-0 left-0 w-full bg-white border-b z-50">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between w-full">
          
          {/* Logo */}
          <Link to="/" className="text-xl font-semibold tracking-tight">
            Instagram
          </Link>

          <div className="flex items-center gap-6">
            <Link to="/" className={iconStyle("/")}>
              <Home size={26} />
            </Link>

            <Link to="/create" className={iconStyle("/create")}>
              <PlusSquare size={26} />
            </Link>

            <Link to="/me" className={iconStyle("/me")}>
              <User size={26} />
            </Link>

            <button
              onClick={() => {
                logout();
                navigate("/login");
              }}
              className="text-gray-500 hover:text-red-500 transition"
              title="Logout"
            >
              <LogOut size={24} />
            </button>
          </div>
        </div>
      </nav>


      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t z-50">
        <div className="h-14 flex justify-around items-center">
          
          <Link to="/" className={iconStyle("/")}>
            <Home size={26} />
          </Link>

          <Link to="/create" className={iconStyle("/create")}>
            <PlusSquare size={26} />
          </Link>

          <Link to="/me" className={iconStyle("/me")}>
            <User size={26} />
          </Link>

          <button
            onClick={() => {
              logout();
              navigate("/login");
            }}
            className="text-gray-500 hover:text-red-500 transition"
          >
            <LogOut size={24} />
          </button>
        </div>
      </nav>
    </>
  );
}
