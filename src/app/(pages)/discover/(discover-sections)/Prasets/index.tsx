import { BackArrow, ForwardArrow } from "@/components/shared/Arrows";
import { SearchBar } from "@/components/shared/SeachBar";
import SoundCraftCard from "@/components/shared/SoundCraftCard";
import { NewOnCardArray } from "@/utils/const";
import React from "react";

const Prasets = () => {
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
        <div className="w-full pt-14 overflow-hidden">
          <div className="carousel carousel-center w-full p-4 rounded-box flex flex-col gap-y-10">
            <div className="carousel-item carousel-item-animation flex gap-x-4 transition-transform ease-in-out duration-300">
              {NewOnCardArray.map((item) => (
                <SoundCraftCard key={item.id} item={item} />
              ))}
            </div>
            <div className="carousel-item carousel-item-animation2 flex gap-x-4 transition-transform ease-in-out duration-300">
              {NewOnCardArray.map((item) => (
                <SoundCraftCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Prasets;
