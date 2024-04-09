import React from "react";
import ArtistCard from "./ArtistCard";
import { artistCardArray } from "@/utils/const";
import { ArtistBtn } from "@/components/shared/Buttons";

const ArtistSection = () => {
  return (
    <div className="my-12 w-full ">
      <div className="flex items-center flex-col gap-[14px] font-semibold">
        <div className="border border-[#E33C12]  rounded-[50px] text-sm py-[10px] px-[18px] text-[#E33C12]">
          RENOWNED ARTISTS
        </div>
        <div className="text-[42px] text-[#1C1C1C]">Meet the Creators</div>
        <div className="font-medium text-base md:px-[15rem] xl:px-[26rem] text-center">
          Explore distinctive samples curated by innovative producers. Find
          inspiration for your next track.
        </div>
      </div>
      <div className="w-full pt-14 overflow-hidden">
        <div className="carousel carousel-center w-full p-4 rounded-box">
          <div className="carousel-item carousel-item-animation flex gap-x-4 transition-transform ease-in-out duration-300">
            {artistCardArray.map((item) => (
              <ArtistCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
      <div className="flex w-full  h-16 justify-center pr-[12rem] mt-10">
        <ArtistBtn text={"Preview Samples"} />
      </div>
    </div>
  );
};

export default ArtistSection;
