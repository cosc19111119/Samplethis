import VideoCard from "@/components/shared/VideoCard";
import { VideoCardArray } from "@/utils/const";
import React from "react";

const OurCollection = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="font-semibold text-[#191B22] text-[42px]">
        Explore Our Curated Video Collection
      </div>
      <div className="flex items-center justify-center flex-wrap gap-3 mb-20">
        {VideoCardArray.map((item) => (
          <div key={item.id} className="">
            <VideoCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurCollection;
