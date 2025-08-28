import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
const SideBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");
   const navigate = useNavigate();
  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('.mobile-menu') && !event.target.closest('.hamburger-btn')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navigationItems = [
    { name: "Home", path: "/", icon: "🏠" },
    { name: "Explore ThinkBot", path: "/chat", icon: "💬" },
    { name: "Team", path: "/team", icon: "👥" },
    { name: "Enterprise", path: "/enterprise", icon: "🏢" },
    { name: "Privacy", path: "/privacy", icon: "🔒" },
    { name: "Pricing", path: "/pricing", icon: "💰" },
    { name: "Download", path: "/download", icon: "⬇️" },
  ];

  const isActivePath = (name) => {
    return activeItem === name;
  };

  const handleItemClick = (item) => {
  setActiveItem(item.name);
  setIsMobileMenuOpen(false);
  
  // Replace the console.log with this line
  navigate(item.path); 
};

  return (
    <>
      {/* Mobile Menu Button - Fixed position */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="hamburger-btn fixed top-20 left-4 z-50 md:hidden bg-[#2a2a2a] text-white p-2 rounded-lg shadow-lg border border-gray-700 transition-all duration-200 hover:bg-[#333] focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Toggle mobile menu"
      >
        <svg
          className={`w-6 h-6 transition-transform duration-200 ${
            isMobileMenuOpen ? 'rotate-90' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isMobileMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300">
          <div className="absolute inset-0" onClick={() => setIsMobileMenuOpen(false)} />
        </div>
      )}

      {/* Mobile Sliding Menu */}
      <nav
        className={`mobile-menu fixed top-0 left-0 h-full w-72 bg-[#1f1f1f] border-r border-gray-800 z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="pt-20 pb-6 px-4 h-full overflow-y-auto">
          <div className="mb-6">
            <h2 className="text-white text-lg font-semibold px-4 mb-2">Navigation</h2>
            <div className="h-px bg-gray-700"></div>
          </div>
          
          <ul className="space-y-2">
            {navigationItems.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => handleItemClick(item)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 w-full text-left ${
                    isActivePath(item.name)
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'text-gray-300 hover:text-white hover:bg-[#2a2a2a]'
                  }`}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span className="font-medium">{item.name}</span>
                  {isActivePath(item.name) && (
                    <div className="ml-auto w-2 h-2 bg-white rounded-full"></div>
                  )}
                </button>
              </li>
            ))}
          </ul>
          
          <div className="mt-8 pt-6 border-t border-gray-700">
            <div className="px-4 text-xs text-gray-500">
              <p>ThinkBot © 2024</p>
              <p className="mt-1">Version 1.0.0</p>
            </div>
          </div>
        </div>
      </nav>

      {/* Desktop Sidebar - Original design enhanced */}
      <div className="flex flex-1 h-screen">
        <nav className="w-60 bg-[#1f1f1f] border-r border-gray-800 p-6 hidden md:block">
          <div className="mb-6">
            <h2 className="text-white text-lg font-semibold mb-3">Navigation</h2>
            <div className="h-px bg-gray-700"></div>
          </div>
          
          <ul className="space-y-2">
            {navigationItems.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => handleItemClick(item)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 group w-full text-left ${
                    isActivePath(item.name)
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'text-gray-300 hover:text-white hover:bg-[#2a2a2a]'
                  }`}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span className="font-medium">{item.name}</span>
                  {isActivePath(item.name) && (
                    <div className="ml-auto w-2 h-2 bg-white rounded-full"></div>
                  )}
                  <div
                    className={`ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200 ${
                      isActivePath(item.name) ? 'hidden' : ''
                    }`}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </button>
              </li>
            ))}
          </ul>
          
          <div className="mt-8 pt-6 border-t border-gray-700">
            <div className="px-4 text-xs text-gray-500">
              <p>ThinkBot © 2024</p>
              <p className="mt-1">Version 1.0.0</p>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default SideBar;

