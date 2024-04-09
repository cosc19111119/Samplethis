"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const NewOnCard = ({ item }: { item: NewOnCard }) => {
  return (
    <Link
      href={`/packs/${item.id}?b=${item.artist}_${item.title}`}
      className="relative h-max transition duration-300 inset-0 md:w-[240px] w-[170px]  pb-4 hover:bg-[black] bg-[#F1F5F9] border border-[#F1F5F9] rounded-[10px] overflow-hidden cursor-pointer group"
    >
      {/* Image */}
      <div className="relative w-[185px] md:w-[240px] h-[233px]">
        <Image
          src={item.image}
          alt={"Image"}
          className="z-10 object-cover"
          fill
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-0 z-30 flex items-center justify-center text-white opacity-0 transition duration-300 group-hover:bg-opacity-50 group-hover:opacity-100">
        <div className="flex h-[50px] w-[50px] rounded-full bg-[#E33C12] absolute bottom-[88px] justify-center items-center right-3">
          <Image
            src={"/icons/whitePlayIcon.svg"}
            alt={"icon"}
            width={30}
            height={30}
          />
        </div>
      </div>

      {/* Text */}
      <div className="pt-3 px-3 flex flex-col gap-1 font-medium ">
        <div className=" text-[22px] text-[#191B22] group-hover:text-white group-hover:z-10">
          {item.title}
        </div>
        <div className="text-base text-[#75767A] group-hover:text-[#E2E8F0] group-hover:z-10">
          {item.artist}
        </div>
        <div className="flex items-center gap-3 text-base text-black group-hover:text-[#FFFFFF] group-hover:z-10">
          <Image
            src={"/imgs/newownicon.svg"}
            alt={"music"}
            width={21}
            height={17}
          />
          <div>{item.likes}</div>
        </div>
      </div>
    </Link>
  );
};

export default NewOnCard;
