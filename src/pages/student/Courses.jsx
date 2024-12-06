import React from "react";
import Course from "./Course";
import { Skeleton } from "@/components/ui/skeleton";

const Courses = () => {
  const isloading = true;
  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto p-6 pt-16">
        <h2 className="font-bold text-3xl text-center mb-16">Our Courses</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {isloading ? (
            Array.from({ length: 8 }).map((_, index) => (
              <CourseSkeleton key={index} />
            ))
          ) : (
            <Course />
          )}
        </div>
      </div>
    </div>
  );
};

export default Courses;

const CourseSkeleton = () => {
  return (
    <div className="bg-white shadow-md hover:shadow-lg transistion-shadow overflow-hidden rounded-md">
      <Skeleton className="w-full h-36" />
      <div className="px-5 py-4 space-y-3">
        <Skeleton className="h-6 w-3/4" />
        <div className="flex items-center justify-between">
          <Skeleton className="h-6 w-6 rounded-full" />
          <Skeleton className="h-4 w-20" />
        </div>
        <Skeleton className="h-4 w-16" />
      </div>
      <div className="px-5 py-4 space-y-3">
        <Skeleton className="h-4 w-1/4" />
      </div>
    </div>
  );
};
