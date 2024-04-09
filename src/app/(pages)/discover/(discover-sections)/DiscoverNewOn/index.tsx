"use client";
import { BackArrow, ForwardArrow } from "@/components/shared/Arrows";
import NewOnCard from "@/components/shared/NewOnCard";
import { SearchBar } from "@/components/shared/SeachBar";
import { NewOnCardArray } from "@/utils/const";
import React, { useState } from "react";

const DiscoverNewOn = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  // Function to handle category click
  const handleCategoryClick = (index: any) => {
    setActiveCategory(index);
  };
  const categories = ["Top picks", "Hip-Hop", "Pop", "R&B", "Afrobeat"];
  return (
    <>
      <div className=" relative">
        <div className=" flex lg:justify-between flex-col gap-6 lg:flex-row  items-center py-10">
          <div className="flex justify-between w-full items-center">
            <div className="font-semibold  sm:text-[42px] text-2xl text-[#191B22]  ">
              New On{" "}
              <span className="font-extrabold sm:text-[42px] text-2xl text-[#E33C12] ">
                Samplethis
              </span>{" "}
            </div>

            <div className="flex lg:hidden gap-4">
              <BackArrow theme={"white"} />
              <ForwardArrow theme={"white"} />
            </div>
          </div>
          <div className="">
            <div className="flex gap-7">
              <div className="flex w-[320px]">
                <SearchBar theme={"white"} />
              </div>
              <div className="lg:flex hidden gap-4">
                <BackArrow theme={"white"} />
                <ForwardArrow theme={"white"} />
              </div>
            </div>
          </div>
        </div>
        <div className="mb-5">
          {/* categories */}
          <div className="flex gap-2 w-full flex-wrap">
            {categories.map((category, index) => (
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
        <div className="overflow-hidden flex flex-wrap items-center justify-center gap-3 mb-20">
          {NewOnCardArray.map((item) => (
            <NewOnCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default DiscoverNewOn;
