import React from "react";

import { NewOnCardArray } from "@/utils/const";
import { BackArrow, ForwardArrow } from "@/components/shared/Arrows";
import { SearchBar } from "@/components/shared/SeachBar";
import NewOnCard from "@/components/shared/NewOnCard";
export default function SectionNewOn() {
  return (
    <>
      <div className=" relative ">
        <div className=" flex lg:justify-between flex-col gap-6 lg:flex-row  items-center py-10">
          <div className="flex gap-x-10">
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
        <div className="overflow-hidden flex flex-wrap items-center justify-center gap-3 mb-20">
          {NewOnCardArray.map((item) => (
            <NewOnCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}
