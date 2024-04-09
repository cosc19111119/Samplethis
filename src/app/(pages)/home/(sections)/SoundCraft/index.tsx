import { SoundCarftBtn } from "@/components/shared/Buttons";
import React from "react";

import { NewOnCardArray } from "@/utils/const";
import SoundCraftCard from "@/components/shared/SoundCraftCard";

const SoundCraft = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-y-10 w-full pt-10 pb-32 ">
      <div className="flex flex-col gap-y-5 items-center">
        <div className="font-semibold text-[#1C1C1C] text-[42px]">
          Craft your sound<span className="text-[#E33C12]">.</span>
        </div>

        <div className="font-medium text-[#000] text-base  text-center">
          Dive into our library with free weekly downloads.
          <div> Expand your reach with full access.</div>
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
      <div className="mr-64">
        <SoundCarftBtn text="Start your free trial now" />
      </div>
    </div>
  );
};

export default SoundCraft;
