import React, { useState, useEffect } from "react";

// Mock SideBar component for demonstration
const SideBar = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const [activeItem, setActiveItem] = useState("Home");

  const navigationItems = [
    { name: "Home", path: "/", icon: "🏠" },
    { name: "Explore ThinkBot", path: "/chat", icon: "💬" },
    { name: "Team", path: "/team", icon: "👥" },
    { name: "Enterprise", path: "/enterprise", icon: "🏢" },
    { name: "Privacy", path: "/privacy", icon: "🔒" },
    { name: "Pricing", path: "/pricing", icon: "💰" },
    { name: "Download", path: "/download", icon: "⬇️" },
  ];

  const handleItemClick = (item) => {
    setActiveItem(item.name);
    setIsMobileMenuOpen(false);
    console.log(`Navigating to: ${item.path}`);
  };

  const isActivePath = (name) => activeItem === name;

  return (
    <nav className="h-full">
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
  );
};

// Mock Outlet component for demonstration
const Outlet = () => {
  return (
    <div className="space-y-6">
      <div className="bg-[#2a2a2a] rounded-lg p-6 border border-gray-700">
        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4">Welcome to ThinkBot</h1>
        <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
          This is your main content area. The layout automatically adapts to different screen sizes,
          providing an optimal experience across all devices.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="bg-[#2a2a2a] rounded-lg p-4 border border-gray-700 hover:border-gray-600 transition-colors">
            <h3 className="text-lg font-semibold text-white mb-2">Card {item}</h3>
            <p className="text-gray-400 text-sm">Sample content for demonstration purposes.</p>
          </div>
        ))}
      </div>
      
      <div className="bg-[#2a2a2a] rounded-lg p-6 border border-gray-700">
        <h2 className="text-xl font-semibold text-white mb-4">Features</h2>
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span className="text-gray-300">Mobile-first responsive design</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-gray-300">Sliding mobile navigation</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <span className="text-gray-300">Smooth animations and transitions</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const HomePage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('.mobile-sidebar') && !event.target.closest('.hamburger-btn')) {
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

  return (
    <div className="flex h-screen text-white">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="hamburger-btn fixed top-20 left-4 z-50 lg:hidden bg-[#2a2a2a] text-white p-2 rounded-lg shadow-lg border border-gray-700 transition-all duration-200 hover:bg-[#333] focus:outline-none focus:ring-2 focus:ring-blue-500"
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
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300">
          <div className="absolute inset-0" onClick={() => setIsMobileMenuOpen(false)} />
        </div>
      )}

      {/* Mobile Sliding Sidebar */}
      <div
        className={`mobile-sidebar fixed top-16 left-0 h-[calc(100vh-4rem)] w-72 bg-[#1f1f1f] border-r border-gray-800 z-50 transform transition-transform duration-300 ease-in-out lg:hidden overflow-y-auto ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-5 h-full">
          <SideBar isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
        </div>
      </div>

      {/* Desktop Fixed Sidebar */}
      <div className="fixed left-0 top-16 w-[280px] h-[calc(100vh-4rem)] bg-[#1f1f1f] border-r border-gray-800 p-5 hidden lg:block overflow-y-auto">
        <SideBar isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 lg:ml-[280px] overflow-y-auto overflow-x-hidden h-[calc(100vh-4rem)] mt-16">
        {/* Content Container with responsive padding */}
        <div className="p-4 sm:p-6 lg:p-8">
          <Outlet />
        </div>
        
        {/* Mobile spacing to account for hamburger button */}
        <div className="h-16 lg:hidden"></div>
      </div>

      {/* Custom scrollbar styles */}
      <style jsx>{`
        .overflow-y-auto {
          scrollbar-width: thin;
          scrollbar-color: #374151 #1f1f1f;
        }
        
        .overflow-y-auto::-webkit-scrollbar {
          width: 6px;
        }
        
        .overflow-y-auto::-webkit-scrollbar-track {
          background: #1f1f1f;
        }
        
        .overflow-y-auto::-webkit-scrollbar-thumb {
          background: #374151;
          border-radius: 3px;
        }
        
        .overflow-y-auto::-webkit-scrollbar-thumb:hover {
          background: #4B5563;
        }

        @media (max-width: 1024px) {
          .overflow-y-auto::-webkit-scrollbar {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default HomePage;
