"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Status = "New" | "Hot" | "Comming soon" | "Ending soon";

const BidsCard = ({ item, status }: { item: any; status: Status }) => {
  const Time = 5235;
  const [time, setTime] = useState(Time);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime === 0) {
          clearInterval(interval);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000); // Update time every second

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, []);

  // Convert seconds to hours, minutes, and seconds
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;

  return (
    <Link
      href={`/packs/${item.id}?b=${item.artist}_${item.title}`}
      className="relative h-max  transition duration-300 inset-0 w-[233px] pb-4 hover:bg-black bg-[#F1F5F9] border border-[#F1F5F9] rounded-[10px] overflow-hidden cursor-pointer group"
    >
      {/* Image */}
      <div className="relative w-[231px] h-[233px]">
        <Image
          src={item.image}
          alt={"Image"}
          className="z-10 object-cover"
          fill
        />

        {/* status */}
        <div className="absolute inset-0 bg-black bg-opacity-50  rounded-[10px] flex items-center justify-center text-white">
          <div className="text-[#FFFFFF] font-medium text-2xl absolute top-1">
            <div className="text-lg text-center">Ending in</div>
            <div>
              <p>{`${hours.toString().padStart(2, "0")}:${minutes
                .toString()
                .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`}</p>
            </div>
          </div>
          <div
            className={`${
              status === "Hot" || status === "Ending soon"
                ? "bg-[#E33C12]"
                : status === "New"
                ? "bg-[#65A30D]"
                : status === "Comming soon"
                ? "bg-[#09090B]"
                : ""
            } flex px-5  rounded-full border border-black  bottom-1  bg-transparent text-[#fff] absolute justify-center items-center right-3`}
          >
            {status}
          </div>
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 z-50 bg-black bg-opacity-0 flex items-center justify-center text-white opacity-0 transition duration-300 group-hover:bg-opacity-50 group-hover:opacity-100">
          <div className="flex h-[50px] w-[50px] rounded-full bg-[#E33C12] absolute bottom-[-25px] justify-center items-center right-3">
            <Image
              src={"/icons/whitePlayIcon.svg"}
              alt={"icon"}
              width={30}
              height={30}
            />
          </div>
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

export default BidsCard;
