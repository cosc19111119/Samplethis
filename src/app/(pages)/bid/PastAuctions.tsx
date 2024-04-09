import BidsCard from "@/components/shared/BidsCard";
import { BidsCardArray } from "@/utils/const";
import React from "react";

const PastAuction = () => {
  return (
    <>
      <div className=" relative px-14 ">
        <div className="flex justify-between items-center py-10">
          <div className="font-semibold text-[42px] text-[#191B22]  ">
            Past{" "}
            <span className="font-extrabold text-[42px] text-[#E33C12] ">
              Auctions
            </span>{" "}
          </div>
        </div>
        <div className="overflow-hidden flex items-center justify-center gap-3 mb-20">
          {BidsCardArray.map((item) => (
            <BidsCard key={item.id} item={item} status={"New"} />
          ))}
        </div>
      </div>
    </>
  );
};

export default PastAuction;
