import { BidArray } from "@/utils/const";
import React from "react";
import AuctionList from "./AuctionList";
import Image from "next/image";

const AcutionModel = () => {
  return (
    <div className="border rounded-[30px] bg-[#fff] w-[60%] h-full overflow-y-auto scrollbar-none">
      <div className="bg-[#FFF6F6] p-2 justify-start gap-10 grid grid-flow-col rounded-[22px] w-full ">
        <div className="relative w-[287px] object-cover h-[409px]">
          <Image
            src="/imgs/detailsImage1.svg"
            alt=""
            fill
            className="object-cover rounded-[22px]"
          />
        </div>
        <div className="pt-4">
          <div
            className="flex justify-between pb-2"
            style={{ borderBottom: "1px solid rgba(0, 0, 0, 0.1)" }}
          >
            <div className="flex gap-3 items-center ">
              <Image
                src="/imgs/detailsSingerImg.svg"
                alt=""
                width={50}
                height={50}
                className="rounded-full"
              />
              <div className="flex flex-col">
                <span className="text-sm font-semibold">Sohail Brohi</span>
                <span className="text-base font-bold">AOA</span>
              </div>
            </div>

            <div className="flex gap-2 items-center">
              <div>
                <Image
                  src="/imgs/newownicon.svg"
                  alt=""
                  width={27}
                  height={27}
                  className="rounded-full"
                />
              </div>
              <div className="text-lg font-[500]">12</div>
            </div>
          </div>

          <div className="text-[30px]  font-[500] text-[#0C0A09]">
            "GAME OVER" features 10 exclusive guitar loops by RJ Pasin. 
          </div>

          <div className="bg-[#fff]  border my-3 flex  flex-col gap-5 py-2 rounded-lg px-5">
            <div className=" flex justify-between font-medium text-lg text-[#000]">
              <div>Auction starts from</div>
              <div>$300</div>
            </div>

            <div className="border rounded-[3px] flex justify-between bg-[#FFF6F6] ">
              {" "}
              <input
                placeholder="Place your bid here"
                type="text"
                className="outline-none px-1 font-normal text-sm text-[#000] w-[70%] bg-[#FFF6F6] "
              />{" "}
              <div>
                {" "}
                <button className="text-[#FFFFFF] font-normal text-xs border px-4 py-4 rounded-[3px] bg-[#E33C12]">
                  Bid Now
                </button>
              </div>
            </div>
          </div>
          <div className="p-3 flex justify-between items-center border bg-[#fff] rounded-lg text-[#000] text-lg font-medium">
            <div className="flex gap-3 items-center">
              <Image
                src="/imgs/detailsSingerImg.svg"
                alt=""
                width={50}
                height={50}
                className="rounded-full"
              />
              Starting Bid
            </div>
            <div>$300</div>
          </div>
        </div>
      </div>

      <div className="w-full  px-4 my-5">
        <div className="text-[#000] text-2xl font-medium">On going bids</div>
        <div className="">
          {BidArray.map((item) => (
            <div className="flex flex-col " key={item.num}>
              <AuctionList item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AcutionModel;
