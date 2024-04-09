"use client";
import React, { useState } from "react";
import Image from "next/image";

const ArtistCard = ({ item }: { item: ArtistCard }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div
      className="w-[316px] h-[568px] relative cursor-pointer"
      onMouseEnter={() => setShowDetails(true)}
      onMouseLeave={() => setShowDetails(false)}
    >
      {/* Image */}
      <Image src={item.image} alt={"Artist"} fill className="object-cover" />

      {/* Details */}
      <div
        className={`opacity-0 flex ${
          showDetails ? "opacity-100" : "opacity-0"
        } flex-col gap-3 absolute rounded-[20px] w-full h-full bg-[#E33C12B2]`}
      >
        <div className="absolute bottom-10 pl-3 flex flex-col gap-3 ">
          <div className="font-semibold text-lg text-[#FFFFFF]">
            {item.name}
          </div>{" "}
          <div className="font-normal text-sm text-[#D4D4D8] ">
            {item.award} time award winner
          </div>
          <div className="flex items-center gap-3 ">
            <div className="flex h-[50px] w-[50px] rounded-full bg-[#E33C12] justify-center items-center">
              <Image
                src={"/icons/whitePlayIcon.svg"}
                alt={"icon"}
                width={30}
                height={30}
              />
            </div>
            <div className="font-normal text-sm text-[#D4D4D8]">
              {item.samples} Samples Available
            </div>
          </div>
        </div>
      </div>

      {/* Artist background */}
      <div
        className={`flex flex-col gap-3 absolute ${
          showDetails ? "opacity-0" : "opacity-100"
        } rounded-[20px] w-full h-full artistBg`}
      >
        <div className="absolute bottom-10 pl-3 flex flex-col gap-3">
          <div className="font-semibold text-lg text-[#fff]">{item.name}</div>{" "}
          <div className="font-normal text-sm text-[#D4D4D8]">
            {item.award} time award winner
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistCard;
