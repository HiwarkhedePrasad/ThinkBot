import { Outlet } from "react-router-dom";
import SideBar from "../component/sidebar";

const HomePage = () => {
  return (
    <div className="flex h-screen text-white pt-16">
      {/* Fixed Sidebar */}
      <div className="fixed left-0 top-16 w-[250px] h-full bg-[#1f1f1f] p-5">
        <SideBar />
      </div>

      {/* Right Section (Scrollable Content) */}
      <div className="flex-1 ml-[250px] overflow-y-auto overflow-x-hidden h-full p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default HomePage;
