import React from "react";
import Breadcrums from "@/components/shared/Breadcrums";
import ProfileSidebar from "@/components/profileSidebar";
import SignUpForm from "./SignUpForm";

const UserProfile = () => {
  return (
    <div className="px-14 mb-10">
      <div>
        <Breadcrums />
      </div>
      <div className="flex lg:flex-row flex-col justify-center items-center gap-10">
        <div className="flex justify-center md:h-[340px]">
          <ProfileSidebar />
        </div>
        <div className="w-full">
          <SignUpForm />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
