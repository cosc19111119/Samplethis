import { BackArrow, ForwardArrow } from "@/components/shared/Arrows";
import BidsCard from "@/components/shared/BidsCard";
import { BidsCardArray } from "@/utils/const";
import React from "react";

const PremiumBeats = () => {
  return (
    <>
      <div className=" relative px-14 ">
        <div className="flex justify-between items-center py-10">
          <div className="font-semibold text-[42px] text-[#191B22]  ">
            Bid Now on Premium{" "}
            <span className="font-extrabold text-[42px] text-[#E33C12] ">
              Beats!
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
        <div className="overflow-hidden flex items-center justify-center gap-3 mb-20">
          {BidsCardArray.map((item) => (
            <BidsCard key={item.id} item={item} status={"Hot"} />
          ))}
        </div>
      </div>
    </>
  );
};

export default PremiumBeats;
