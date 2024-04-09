import { BackArrow, ForwardArrow } from "@/components/shared/Arrows";
import { SearchBar } from "@/components/shared/SeachBar";
import { TopNewMusicArray } from "@/utils/const";
import React from "react";
import TopNewSampleCard from "./TopNewSampleCard";

const TopNewSample = () => {
  return (
    <div className="bg-[#1C1C1C] pb-24">
      <div className=" relative lg:px-14 px-6">
        <div className=" flex lg:justify-between flex-col gap-6 lg:flex-row  items-center py-10">
          <div className="flex justify-between w-full items-center">
            <div className="font-semibold  sm:text-[42px] text-2xl text-[#fff]  ">
              Top new{" "}
              <span className="font-extrabold sm:text-[42px] text-2xl text-[#E33C12] ">
                Samples
              </span>{" "}
            </div>

            <div className="flex lg:hidden gap-4">
              <BackArrow theme={"dark"} />
              <ForwardArrow theme={"dark"} />
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
      </div>
      {/* cards */}
      <div className="flex w-full md:px-20 justify-center  flex-wrap gap-6">
        {TopNewMusicArray.map((item) => (
          <div key={item.id}>
            <TopNewSampleCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopNewSample;
