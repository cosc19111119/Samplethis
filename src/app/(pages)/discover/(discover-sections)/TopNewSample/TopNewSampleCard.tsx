"use client";
import React, { useState } from "react";
import Image from "next/image";

const TopNewSampleCard = ({ item }: { item: TopNewCard }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="flex gap-4 md:w-max w-[390px] h-[112px] bg-[black] rounded-[10px] cursor-pointer"
    >
      <div className="relative h-[112px] w-[84px]">
        <Image
          src={item.image}
          alt={"img"}
          fill
          className="object-cover rounded-lg"
        />
        {isHovered && (
          <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-[#000000B2] ">
            <Image
              src={"/icons/cardPlayIcon.svg"}
              alt={"icon"}
              width={32}
              height={32}
            />
          </div>
        )}
      </div>

      <div className="py-3 pr-5 flex flex-col gap-1">
        <div className="font-medium text-[#fff] text-[22px]">{item.music}</div>
        <div className="font-medium text-[#75767A] text-base">
          {item.artist}
        </div>
        <div className="">
          <Image
            src={"/imgs/newownicon.svg"}
            alt={"musicIcon"}
            width={24}
            height={24}
          />
        </div>
      </div>
    </div>
  );
};

export default TopNewSampleCard;
