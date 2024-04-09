import { BackArrow, ForwardArrow } from "@/components/shared/Arrows";
import NewOnCard from "@/components/shared/NewOnCard";
import { NewOnCardArray } from "@/utils/const";
import React from "react";

const TrendingSample = () => {
  return (
    <>
      <div className=" relative lg:px-14 px-6 ">
        <div className="flex justify-between items-center py-10">
          <div className="font-semibold text-2xl md:text-[42px] text-[#191B22]  ">
            Trending on
            <span className="font-extrabold text-2xl md:text-[42px] text-[#E33C12] ">
              Samplethis
            </span>{" "}
          </div>
          <div>
            <div className="flex gap-7">
              <div className="flex gap-4">
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
};

export default TrendingSample;
