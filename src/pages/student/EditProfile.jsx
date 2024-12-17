import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import React from "react";
import Course from "./Course";
import { useGetProfileQuery } from "@/features/api/authApi";
import { Skeleton } from "@/components/ui/skeleton";

const EditProfile = () => {
  const { data, isLoading } = useGetProfileQuery();

  const isloading = false;

  return (
    <div className="max-w-7xl mx-auto pt-[6rem]">
      <h1 className="font-bold text-2xl mb-10">My Profile</h1>
      {isLoading ? (
        <SkeletonProfile />
      ) : (
        <div className="flex gap-10">
          <div className="profile-image">
            <Avatar className="cursor-pointer h-24 w-24">
              <AvatarImage
                src={
                  data?.user?.profilePicture || "https://github.com/shadcn.png"
                }
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>

          <div className="profile-info">
            <p className="text-md mb-2">
              <b>Name:</b> {data?.user?.name}
            </p>
            <p className="text-md mb-2">
              <b>Email:</b> {data?.user?.email}
            </p>
            <p className="text-md mb-2">
              <b>Role:</b> {data?.user?.role.toUpperCase()}
            </p>

            <Dialog>
              <DialogTrigger asChild>
                <Button className="mt-4">Edit profile</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Edit profile</DialogTitle>
                  <DialogDescription>
                    Make changes to your profile here. Click save when you're
                    done.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label>Name</Label>
                    <Input
                      id="name"
                      value="Junaid Sadiq"
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label>Email</Label>
                    <Input
                      id="email"
                      value="junaid@gmail.com"
                      className="col-span-3"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit" disabled={isloading}>
                    {isloading ? (
                      <>
                        <Loader2 className="animate-spin" /> Please wait
                      </>
                    ) : (
                      "Save changes"
                    )}
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      )}

      <h1 className="font-bold text-lg mt-10">My enrolled courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-3">
        {data?.user?.enrolledCourses.length === 0 ? (
          <p className="text-sm text-slate-400">No courses enrolled yet.</p>
        ) : (
          data?.user?.enrolledCourses.map((course) => (
            <Course course={course} key={course._id} />
          ))
        )}
      </div>
    </div>
  );
};

export default EditProfile;

const SkeletonProfile = () => {
  return (
    <div className="flex gap-10">
      <div className="profile-image">
        <Skeleton className="h-24 w-24" />
      </div>
      <div className="profile-info">
        <p className="text-md mb-2">
          <Skeleton className="w-28 h-10 rounded-md" />
        </p>
        <p className="text-md mb-2">
          <Skeleton className="w-28 h-10 rounded-md" />
        </p>
        <p className="text-md mb-2">
          <Skeleton className="w-28 h-10 rounded-md" />
        </p>
      </div>
    </div>
  );
};
