import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";

const Course = () => {
  return (
    <Card className="overflow-hidden rounded-lg dark:bg-gray-800 bg-white shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
      <div className="relative">
        <img
          src="https://www.alarictechgenius.com/_next/image?url=https%3A%2F%2Fmedia-object.blr1.digitaloceanspaces.com%2Falarictechgenius%2Fcourse%2Fcourse%2Fnextjs.jpg&w=2048&q=75"
          className="w-full h-48 object-cover rounded-t-lg"
          alt="course"
        />
      </div>
      <CardContent className="pt-3">
        <h1 className="hover:underline font-bold truncate text-lg">
          Nextjs Compelte Course in English 2024
        </h1>
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center gap-3">
            <Avatar className="cursor-pointer h-9 w-9">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <div>
              <h1 className="font-bold text-sm">Junaid Bhatti</h1>
              <p className="text-slate-500 text-[12px]">Instructor</p>
            </div>
          </div>

          <div className="rounded-full leading-3 text-[11px] bg-gradient-to-r from-blue-500 to bg-indigo-600 text-white px-4 h-5 flex items-center">
            Advance
          </div>
        </div>

        <h3 className="font-bold text-[22px] text-blue-600 pt-4">Rs. 5000</h3>
      </CardContent>
    </Card>
  );
};

export default Course;
