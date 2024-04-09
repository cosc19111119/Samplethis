import Image from "next/image";
import React from "react";
import {
  DiscoverCarouselbtn,
  PrimaryButton,
} from "@/components/shared/Buttons";

const DiscoverCarouselCard = () => {
  return (
    <div className="relative rounded-[13px] bg-[black] w-[99%] mx-auto">
      <Image
        src={"/imgs/DiscoverCarouselmg.svg"}
        alt={""}
        fill
        className="object-cover rounded-[13px] lg:"
      />
      <div className="absolute lg:bottom-10   top-32 left-10 text-[#fff] w-[20rem] sm:w-[30rem] lg:w-[40rem] flex flex-col gap-5">
        <div className="font-medium text-3xl">Connections</div>
        <div className="flex gap-3 items-center">
          <div className="relative w-[35px] h-[35px] rounded-full">
            <Image
              src={"/imgs/discovermen.svg"}
              alt={""}
              fill
              className="object-cover"
            />
          </div>
          <div className="font-bold text-base text-primary">The weekend</div>
        </div>
        <div className="font-normal lg:text-lg text-sm ">
          Jacinth by UNKWN contains 10 original gospel compositions. UNKWN,
          along with a team of session players, has recorded a majority of each
          composition using live instruments such as the upright piano, bass
          guitar, and original vocals.
        </div>
      </div>
      <div className="absolute lg:bottom-14 bottom-10 lg:right-[5rem] left-10   flex justify-center items-center gap-44">
        <div>
          <DiscoverCarouselbtn text={"Browse Pack"} />
        </div>
        <div className="mt-10">
          <PrimaryButton text={"Play Demo"} icon={"/icons/whitePlayIcon.svg"} />
        </div>
      </div>
    </div>
  );
};

export default DiscoverCarouselCard;
