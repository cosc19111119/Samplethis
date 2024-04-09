import React from "react";
import Image from "next/image";

import { SimpleCardArray } from "@/utils/const";
import { MusicSimpleCard } from "@/components/shared/MusicSampleCard";
const MusicSample = () => {
  return (
    <div className="bg-[#1C1C1C] w-full pl-6">
      <div className="flex justify-between items-end">
        <div className="flex flex-col gap-4 font-semibold md:text-[42px] text-2xl text-white pl-10 pt-10 pb-4">
          <div>
            <div className="">Step into a world-class</div>
            <div>music sample marketplace.</div>
          </div>
          <div className="text-base font-medium text-[#F1F5F9]">
            Begin with our curated free samples, and find your unique sound.
          </div>
          <div className="w-full flex flex-col md:grid md:grid-cols-2  gap-x-6 gap-y-4 mt-3 pb-10 pr-10">
            {SimpleCardArray.map((card) => (
              <MusicSimpleCard key={card.title} item={card} />
            ))}
          </div>
        </div>
        <div className="w-full lg:flex hidden relative h-full self-end">
          <Image
            className="w-full h-full"
            src="/imgs/musicSimpleImage.svg"
            alt={""}
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </div>
  );
};

export default MusicSample;
