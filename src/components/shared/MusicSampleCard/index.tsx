// CardComponent.tsx
import React from "react";
import Image from "next/image";

export const MusicSimpleCard = ({ item }: { item: MusicSimpleCard }) => {
  return (
    <div className="bg-[#000000] rounded-md w-full">
      <div className="w-[90%] m-auto py-4 grid grid-flow-col gap-4 ">
        <div className="  bg-primary h-[46px] w-[46px] rounded-full flex justify-center items-center">
          <Image src={item.icon} alt={"icon"} width={24} height={24} />
        </div>

        <div className="flex flex-col my-2 gap-3">
          <div className="text-lg">{item.title}</div>
          <div className="text-sm ">{item.description}</div>
        </div>
      </div>
    </div>
  );
};
