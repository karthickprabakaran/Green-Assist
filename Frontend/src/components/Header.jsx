import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const isAuthenticated = Boolean(localStorage.getItem("token"));

  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <header className="w-full flex items-center justify-between px-6 py-4 bg-white/10 backdrop-blur border-b border-white/20 shadow-sm fixed top-0 left-0 z-50">
      <div className="text-xl font-bold text-blue-200 tracking-tight select-none cursor-pointer" onClick={() => navigate("/")}>Green Assist</div>
      <div>
        {isAuthenticated ? (
          <button
            onClick={handleLogout}
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold shadow hover:from-red-600 hover:to-pink-600 transition-all"
          >
            Logout
          </button>
        ) : (
          <button
            onClick={handleLogin}
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow hover:from-blue-600 hover:to-purple-700 transition-all"
          >
            Login
          </button>
        )}
      </div>
    </header>
  );
};

export default Header; 