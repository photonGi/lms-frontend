import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import Course from "./Course";

const MyLearning = () => {
  const isloading = false;
  const myLearning = [1, 2];
  return (
    <div className="max-w-7xl mx-auto pt-[6rem]">
      <h1 className="font-bold text-2xl">My Learnings</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-3">
        {isloading ? (
          Array.from({ length: 2 }).map((_, index) => (
            <LearningSkeleton Key={index} />
          ))
        ) : myLearning.length == 0 ? (
          <p className="text-sm text-slate-400">No courses enrolled yet.</p>
        ) : (
          myLearning.map((course, index) => <Course key={index} />)
        )}
      </div>
    </div>
  );
};

export default MyLearning;

const LearningSkeleton = () => {
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
