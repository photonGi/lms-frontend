import { ChevronRight, LogOut, Menu, School } from "lucide-react";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Darkmode from "@/Darkmode";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Link, useNavigate } from "react-router-dom";
import { useLogoutUserMutation } from "@/features/api/authApi";
import { toast } from "sonner";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { user } = useSelector((store) => store.auth);
  const [logoutUser, { data, isSuccess }] = useLogoutUserMutation();
  const navigate = useNavigate();

  const handlLogout = async () => {
    await logoutUser();
    navigate("/");
  };
  React.useEffect(() => {
    if (isSuccess) {
      toast.success(data.message || "Logout.");
    }
  }, [isSuccess]);
  return (
    <div className="h-16 dark:bg-[#0A0A0A] bg-white border-b border-b-gray-200 dark:border-b-gray-800 fixed top-0 left-0 right-0 duration-300 z-10">
      {/* Desktop */}
      <div className="max-w-7xl mx-auto hidden md:flex justify-between items-center gap-10 h-16">
        <div className="flex items-center gap-3">
          <School size={"30"} />
          <h1 className="hidden md:block font-extrabold text-2xl">
            E-Learning
          </h1>
        </div>

        <div className="flex items-center gap-5">
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage
                    src={
                      user?.profilePicture || "https://github.com/shadcn.png"
                    }
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <Link to="myLearning">
                  <DropdownMenuItem className="cursor-pointer">
                    My Learning
                  </DropdownMenuItem>
                </Link>
                <Link to="editProfile">
                  <DropdownMenuItem className="cursor-pointer">
                    Edit Profile
                  </DropdownMenuItem>
                </Link>
                <DropdownMenuItem
                  className="text-red-600 flex justify-between"
                  onClick={handlLogout}
                >
                  <span>Logout</span>
                  <LogOut size={20} />
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                {user?.role === "instructor" && (
                  <Link to="/admin/dashboard">
                    <DropdownMenuItem className="cursor-pointer">
                      Dashboard
                    </DropdownMenuItem>
                  </Link>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex items-center gap-4">
              <Link to="login">
                <Button variant="outline">Login</Button>
              </Link>
              <Link to="login">
                <Button>Signup</Button>
              </Link>
            </div>
          )}
          <Darkmode />
        </div>
      </div>

      {/* Mobile */}
      <div className="flex md:hidden items-center justify-between px-4 h-full">
        <div className="flex items-center gap-3">
          <School size={"30"} />
          <h1 className="font-extrabold text-2xl">E-Learning</h1>
        </div>
        <MobileNavbar user={user} />
      </div>
    </div>
  );
};

export default Navbar;

const MobileNavbar = ({ user }) => {
  const [logoutUser, { data, isSuccess }] = useLogoutUserMutation();
  const navigate = useNavigate();

  const handlLogout = async () => {
    await logoutUser();
    navigate("/");
  };
  React.useEffect(() => {
    if (isSuccess) {
      toast.success(data.message || "Logout.");
    }
  }, [isSuccess]);
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          size="icon"
          className="rounded-full bg-gray-200 hover-bg-gray-400"
          variant="outline"
        >
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="font-extrabold text-2xl text-left mt-3">
            E-Learning
          </SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-5 mt-5">
          <div className="">
            <ul className="flex flex-col">
              {user?.role == "instructor" && (
                <Link
                  to="/admin/dashboard"
                  className="cursor-pointer py-2 px-4 hover:bg-[#F1F5F9] duration-300 rounded-md text-md"
                >
                  <span>Dashboard</span>
                </Link>
              )}
              <Link
                to="myLearning"
                className="cursor-pointer py-2 px-4 hover:bg-[#F1F5F9] duration-300 rounded-md text-md"
              >
                <span>My Learning</span>
              </Link>
              <Link
                to="editProfile"
                className="cursor-pointer py-2 px-4 hover:bg-[#F1F5F9] duration-300 rounded-md text-md"
              >
                <span>Edit Profile</span>
              </Link>
              <span
                className="cursor-pointer py-2 px-4 hover:bg-[#F1F5F9] duration-300 rounded-md text-md flex justify-between text-red-500"
                onClick={handlLogout}
              >
                Logout <LogOut size={20} />
              </span>
            </ul>
          </div>

          <div className="flex gap-3 items-center border-t pt-4">
            <span className="font-bold text-md">Theme Mode</span>
            <span>
              <ChevronRight size={15} />
            </span>
            <Darkmode />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
