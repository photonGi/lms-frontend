import React from "react";
import Course from "./Course";
import { Skeleton } from "@/components/ui/skeleton";

const Courses = () => {
  const courses = [1, 2, 3, 4, 5, 6, 7, 8];

  const isloading = false;
  return (
    <div className="max-w-7xl mx-auto pt-[4rem]">
      <div className="mb-10">
        <h2 className="font-bold text-2xl text-left mb-2">Our Courses</h2>
        <p className="text-slate-400 text-md">
          Explore best course to boost your career.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {isloading
          ? Array.from({ length: 8 }).map((_, index) => (
              <CourseSkeleton key={index} />
            ))
          : courses.map((course, index) => <Course key={index} />)}
      </div>
    </div>
  );
};

export default Courses;

const CourseSkeleton = () => {
  return (
    <div className="bg-white shadow-md hover:shadow-lg transistion-shadow overflow-hidden rounded-md">
      <Skeleton className="w-full h-48" />
      <div className="px-5 py-4 space-y-3">
        <Skeleton className="h-6 w-3/4" />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Skeleton className="h-6 w-6 rounded-full" />
            <Skeleton className="h-4 w-16" />
          </div>
          <div>
            <Skeleton className="h-4 w-20" />
          </div>
        </div>
      </div>
      <div className="px-5 py-4 space-y-3">
        <Skeleton className="h-4 w-1/4" />
      </div>
    </div>
  );
};
