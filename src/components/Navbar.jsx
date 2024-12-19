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

const Navbar = () => {
  const user = true;
  const role = "instructor";
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
                  <AvatarImage src="https://github.com/shadcn.png" />
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
                {role === "instructor" && (
                  <Link to="editProfile">
                    <DropdownMenuItem className="cursor-pointer">
                      Dashboard
                    </DropdownMenuItem>
                  </Link>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex items-center gap-4">
              <Button variant="outline">Login</Button>
              <Button>Signup</Button>
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
        <MobileNavbar />
      </div>
    </div>
  );
};

export default Navbar;

const MobileNavbar = () => {
  const role = "instructor";
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
              <span className="cursor-pointer py-2 px-4 hover:bg-[#F1F5F9] duration-300 rounded-md text-md">
                My Learning
              </span>
              <span className="cursor-pointer py-2 px-4 hover:bg-[#F1F5F9] duration-300 rounded-md text-md">
                Edit Profile
              </span>
              <span className="cursor-pointer py-2 px-4 hover:bg-[#F1F5F9] duration-300 rounded-md text-md flex justify-between text-red-500">
                Logout <LogOut size={20} />
              </span>
            </ul>
          </div>
          {role === "instructor" && <Button>Dashboard</Button>}

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
