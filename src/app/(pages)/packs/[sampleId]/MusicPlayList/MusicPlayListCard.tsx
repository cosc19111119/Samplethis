import React from "react";
import Image from "next/image";

const MusicPlayListCard = () => {
  const imageDetails = [
    {
      src: "/icons/heartIconDetailPage.svg",
      alt: "imag",
    },
    {
      src: "/icons/DownloadIconDetailsPage.svg",
      alt: "imag",
    },
    {
      src: "/icons/dotsmusicDetails.svg",
      alt: "imag",
    },
  ];

  return (
    <div className=" px-3 py-2 flex lg:flex-row flex-col lg:justify-between items-center rounded-[20px] ">
      <div className="flex items-center lg:flex-row flex-col gap-[22px]  justify-between w-full mx-5">
        <div className="flex gap-5 items-center">
          <Image
            src={"/imgs/DetailsPagePly.svg"}
            alt={"image"}
            width={85}
            height={85}
          />
          <div className="rounded-full w-[42px] h-[42px] flex justify-center items-center bg-[#E33C12]">
            <Image
              src={"/icons/playIcon.svg"}
              alt={"icon"}
              width={15}
              height={15}
            />
          </div>
          <div className="relative md:w-[413px] w-[185px] h-[48px]">
            <Image
              src={"/icons/musicBeats.svg"}
              alt={"beat"}
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="flex gap-5">
          <div className="text-[16px] font-[500]">
            <div className=" text-[#0C0A09]">
              Using me 135bpm F# minor @rjpasin.wav
            </div>
            <div className="text-[#9CA3AF]">The Weekend</div>
          </div>
          <div className="text-[16px] font-[500] text-[#E33C12]">
            <div className="">135 BPM</div>
            <div className="">F# MINOR</div>
          </div>
        </div>
      </div>
      <div className="flex gap-2">
        {imageDetails.map((detail, index) => (
          <div
            key={index}
            className="w-[45px] h-[45px] rounded-full flex justify-center items-center bg-[#FFF6F6]"
          >
            <Image
              src={detail.src}
              alt={detail.alt}
              width={24}
              height={24}
              className="rounded-full "
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MusicPlayListCard;
