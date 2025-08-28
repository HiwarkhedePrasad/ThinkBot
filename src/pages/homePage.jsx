import { useState } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../component/sidebar";

// A simple hamburger icon component
const HamburgerIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16m-7 6h7"
    />
  </svg>
);

const HomePage = () => {
  // State to manage the sidebar's visibility on mobile
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen text-white pt-16 bg-[#121212]"> {/* Added a default bg for context */}
      {/* --- Sidebar --- */}
      {/* The sidebar now uses conditional classes for positioning */}
      <div
        className={`
          fixed left-0 top-16 w-[250px] h-full bg-[#1f1f1f] p-5 z-20
          transform transition-transform duration-300 ease-in-out
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 
        `}
      >
        <SideBar />
      </div>

      {/* --- Overlay (for mobile view when sidebar is open) --- */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-10 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* --- Main Content Section --- */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden h-full p-6 md:ml-[250px]">
        {/* --- Hamburger Menu Button (visible only on mobile) --- */}
        <button
          className="md:hidden p-2 fixed top-18 left-4 z-30 text-white"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <HamburgerIcon />
        </button>
        
        <Outlet />
      </div>
    </div>
  );
};

export default HomePage;
