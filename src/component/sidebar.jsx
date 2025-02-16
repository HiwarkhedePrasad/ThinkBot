import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="flex flex-1 h-screen">
      {/* Sidebar */}
      <nav className="w-60 bg-[#1f1f1f]  p-6 hidden md:block">
        <ul className="space-y-4">
          {[
            { name: "Home", path: "/" },
            { name: "Explore ThinkBot", path: "/chat" },
            { name: "Team", path: "/team" },
            { name: "Enterprise", path: "/enterprise" },
            { name: "Privacy", path: "/privacy" },
            { name: "Pricing", path: "/pricing" },
            { name: "Download", path: "/download" },
          ].map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className="block text-gray-300 hover:text-white px-4 py-2 rounded"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
export default SideBar;
