import Image from "next/image";
import React from "react";

const SoundCraftCard = ({ item }: { item: NewOnCard }) => {
  return (
    <div className="flex gap-4  w-max border h-[112px] bg-[#F1F5F9] rounded-[10px] cursor-pointer">
      <div className="relative h-[112px] w-[84px]  ">
        <Image
          src={item.image}
          alt={"img"}
          fill
          className="object-cover rounded-lg"
        />
        <div className="absolute inset-0 flex items-center justify-center  rounded-lg bg-black bg-opacity-50">
          <Image
            src={"/icons/cardPlayIcon.svg"}
            alt={"icon"}
            width={32}
            height={32}
          />
        </div>
      </div>

      <div className="py-3 pr-5 flex flex-col gap-1">
        <div className="font-medium text-[#191B22] text-[22px]">
          {item.title}
        </div>
        <div className="font-medium text-[#75767A] text-base">
          {item.artist}
        </div>
        <div className="font-medium text-[#000] text-base flex gap-4">
          <Image
            src={"/imgs/newownicon.svg"}
            alt={"musicIcon"}
            width={24}
            height={24}
          />
          {item.likes}
        </div>
      </div>
    </div>
  );
};

export default SoundCraftCard;
