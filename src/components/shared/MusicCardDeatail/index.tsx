"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { PrimaryButton } from "../Buttons";
import { useSearchParams } from "next/navigation";

const MusicCardDetails = () => {
  const params = useSearchParams();
  const query = params.get("b");
  const paramsArray = query?.split("_");
  const artistName = paramsArray && paramsArray[0];
  const packName = paramsArray && paramsArray[1];

  return (
    <div className="bg-[#FFF6F6] p-2  gap-10 flex justify-between lg:flex-row flex-col w-[98%]  rounded-[22px] ">
      <div className="relative lg:w-[50%] w-full  object-cover h-[369px]">
        <Image
          src="/imgs/detailsImage1.svg"
          alt=""
          fill
          className="object-cover rounded-[22px]"
        />
      </div>
      <div className="pt-4">
        <div
          className="flex justify-between pb-5 "
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

        <div className="text-[30px] py-8 font-[500] text-[#0C0A09]">
          "{packName}" features 10 <br />
          exclusive guitar loops by RJ
          <br /> Pasin. 
        </div>
        <div className="flex items-center gap-3">
          <PrimaryButton text={"Get pack"} icon={"/imgs/downloadIcon.svg"} />

          <div className="w-[42px] h-[42px] cursor-pointer rounded-full flex justify-center items-center bg-[#0C0A09]">
            <Image
              src="/icons/playIcon.svg"
              alt="imag"
              width={15}
              height={15}
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicCardDetails;
