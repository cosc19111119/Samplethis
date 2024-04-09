import React from "react";
import Image from "next/image";
import { SectionOneBtn } from "@/components/shared/Buttons";
const SectionOne = () => {
  return (
    <div className="w-[90%] m-auto">
      <div className="flex flex-col justify-center items-center text-center w-[90%] lg:w-[50%] m-auto ">
        <div className="text-primary py-1 px-3 mb-4  rounded-full font-semibold text-sm border border-primary  ">
          Welcome to the Samplethis
        </div>
        <div className=" text-2xl md:text-4xl sm:text-3xl lg:text-5xl text-[#1C1C1C] font-extrabold ">
          Ready to fuel your inspiration?
        </div>
        <div className="py-4">
          <Image
            src="/imgs/SectionOneLineImg.svg"
            height={20}
            width={246}
            alt="Line"
          />
        </div>
        <div className="flex justify-center items-center text-center">
          Connect with a global network of creators. Discover samples that set
          you apart.
        </div>
        <div className="flex md:gap-52 gap-44  justify-center items-center">
          <div>
            <SectionOneBtn text={"Start for Free"} />
          </div>
          <div className="flex items-center mt-10 md:gap-3 gap-[2px]">
            <div className="relative md:h-[28px] md:w-[28px] h-[20px] w-[20px] cursor-pointer ">
              <Image src="/imgs/SectionOnePlayIcon.svg" fill alt="playIcon" />
            </div>
            <div className="font-normal sm:text-sm text-xs text-[#000]">
              Discover How It Works
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
