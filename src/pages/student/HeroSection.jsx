import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Expand, Search } from "lucide-react";
import React from "react";

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-500 to bg-indigo-600 dark:to-gray-900 py-16 px-6 text-center mt-[4rem]">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-white text-4xl font-bold mb-4">
          Find the
          <span className="bg-white text-gray-800 ml-2 mr-3 italic inline-block leading-[47px]">
            Best Courses
          </span>
          to boost your career.
        </h1>
        <p className="text-gray-200 dark:text-gray-400 mb-8 text-[18px]">
          Discover, Learn and Upskill with our wide range of courses.
        </p>

        <form action="#" className="flex">
          <Input
            type="text"
            className="flex-grow border-none focus-visible:ring-0 px-6 py-6 text-gray-700 rounded-l-full shadow-lg overflow-hidden mb-6 bg-white"
            placeholder="Best web development course..."
          />
          <Button className="dark:bg-gray-700 text-white px-6 py-6 rounded-r-full hover:bg-gray-700 duration-300">
            <Search /> Search
          </Button>
        </form>

        <Button className="bg-white text-blue-600 font-bold absolute bottom-[-7%] left-[50%] -translate-x-1/2 transform z-8 rounded-full shadow-lg py-6 px-10 duration-300 hover:bg-slate-100">
          <Expand /> Explore Courses
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
