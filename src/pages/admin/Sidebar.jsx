import { ChartNoAxesColumn, SquareLibrary } from "lucide-react";
import React from "react";
import { Link, Outlet } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex">
      <div className="hidden lg:block w-[20%] space-y-8 border-r-gray dark:border-gray-700 bg-[#FAFAFA] p-5 sticky top-0 h-screen">
        <div className="mt-[4rem]">
          <Link
            to="/admin/dashboard"
            className="p-3 flex items-center gap-3 hover:bg-[#f5f5f5] rounded-md transition-all"
          >
            <ChartNoAxesColumn size={20} />
            <span className="text-md">Dashboard</span>
          </Link>
          <Link
            to="/admin/cousres"
            className="p-3 flex items-center gap-3 hover:bg-[#f5f5f5] rounded-md transition-all"
          >
            <SquareLibrary size={20} />
            <span className="text-md">Courses</span>
          </Link>
        </div>
      </div>
      <div className="admin-layout w-[80%]  mt-[4rem] p-[2rem]">
        <Outlet />
      </div>
    </div>
  );
};

export default Sidebar;
