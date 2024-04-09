"use client";
import React from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { BidArray } from "@/utils/const";
import AuctionList from "./AuctionList";

const OngoingAcution = () => {
  const params = useSearchParams();
  const query = params.get("b");
  const paramsArray = query?.split("_");
  const artistName = paramsArray && paramsArray[0];
  const packName = paramsArray && paramsArray[1];

  const handleCardClick = () => {};

  return (
    <div
      className="bg-[#FFF6F6] p-2 h-[75vh] flex justify-between w-full rounded-[22px] "
      onClick={handleCardClick}
    >
      <div className="relative w-[30%] object-cover h-[98%]">
        <Image
          src="/imgs/detailsImage1.svg"
          alt=""
          fill
          className="object-cover rounded-[22px]"
        />
        <div className="w-[42px] h-[42px] absolute bottom-0 right-0 cursor-pointer rounded-full flex justify-center items-center bg-[#0C0A09]">
          <Image
            src="/icons/playIcon.svg"
            alt="imag"
            width={15}
            height={15}
            className="rounded-full"
          />
        </div>
      </div>

      <div className=" w-[30%] flex flex-col">
        <div
          className="flex justify-between pb-3 "
          style={{ borderBottom: "1px solid rgba(0, 0, 0, 0.1)" }}
        >
          <div className="flex gap-5 items-center ">
            <Image
              src="/imgs/detailsSingerImg.svg"
              alt=""
              width={50}
              height={50}
              className="rounded-full"
            />
            <div className="flex flex-col">
              <span className="text-sm font-semibold">{artistName}</span>
              <span className="text-base font-bold">{packName}</span>
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

        <div className="text-[30px] py-2 font-[500] text-[#0C0A09]">
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
      <div className="w-[30%]">
        <div className="text-[#000] text-lg font-medium">On going bids</div>
        <div className="h-[90%] overflow-y-scroll">
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

export default OngoingAcution;
