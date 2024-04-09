"use client";
import { BackArrow, ForwardArrow } from "@/components/shared/Arrows";
import { SearchBar } from "@/components/shared/SeachBar";
import VideoCard from "@/components/shared/VideoCard";
import { VideoCardArray } from "@/utils/const";
import React, { useState } from "react";

const LatestVideos = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  // Function to handle category click
  const handleCategoryClick = (index: any) => {
    setActiveCategory(index);
  };
  const VideoCategories = [
    "Getting Started",
    "Masterclasses",
    "Software Guides",
    "Hardware Demos",
    "Artist Interviews",
  ];

  return (
    <>
      <div className=" relative">
        <div className="flex justify-between items-center py-6">
          <div className="font-semibold text-[42px] text-[#191B22]  ">
            Latest{" "}
            <span className="font-extrabold text-[42px] text-[#E33C12] ">
              Videos
            </span>{" "}
          </div>
          <div>
            <div className="flex gap-7">
              <SearchBar theme={"white"} />
              <div className="flex gap-4">
                <BackArrow theme={"white"} />
                <ForwardArrow theme={"white"} />
              </div>
            </div>
          </div>
        </div>
        <div className="mb-5">
          {/* categories */}
          <div className="flex gap-x-4 w-full">
            {VideoCategories.map((category, index) => (
              <div
                key={index}
                className={`flex w-max cursor-pointer p-[10px_20px_10px_20px] border rounded-[25.5px] text-[#E33C12] ${
                  activeCategory === index
                    ? "bg-[#E33C12] text-white"
                    : "border-[#E33C12] hover:bg-[#E33C12] hover:text-white"
                }`}
                onClick={() => handleCategoryClick(index)}
              >
                {category}
              </div>
            ))}
          </div>
        </div>
        <div className=" flex items-center justify-center flex-wrap gap-3 mb-20">
          {VideoCardArray.map((item) => (
            <div key={item.id} className="">
              <VideoCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default LatestVideos;
