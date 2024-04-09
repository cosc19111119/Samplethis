import ProfileSidebar from "@/components/profileSidebar";
import Breadcrums from "@/components/shared/Breadcrums";
import React from "react";
import DownloadsSimple from "./DownloadsSimple";

const DiscoverPage = () => {
  return (
    <div className="px-14 mb-10">
      <div>
        <Breadcrums />
      </div>
      <div className="flex lg:flex-row flex-col gap-10">
        <div className="flex justify-center md:h-[340px]">
          <ProfileSidebar />
        </div>

        <div className="w-full">
          <DownloadsSimple />
        </div>
      </div>
    </div>
  );
};

export default DiscoverPage;
