import React from "react";
import Image from "next/image";
import Link from "next/link";
const VideoCard = ({ item }: { item: VideoCard }) => {
  const time = item.seconds;
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;
  return (
    <div className="border h-max w-[293px] rounded-[10px] bg-[#F1F5F9] cursor-pointer">
      <Link href={`/video-lecture/${item.id}?b=test`}>
        <div className="relative w-[293px] h-[233px] rounded-[10px]">
          <Image
            src={item.image}
            alt={""}
            fill
            className="object-cover rounded-[10px]"
          />
          {/* Play icon container */}
          <div className="absolute inset-0 flex justify-center items-center bg-[#00000033] rounded-[10px]">
            <div className="h-[50px] w-[50px] rounded-full bg-[#E33C12] flex justify-center items-center">
              <Image
                src={"/icons/whitePlayIcon.svg"}
                alt={"icon"}
                width={30}
                height={30}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 p-3">
          <div className="text-[#191B22] font-medium text-[22px] ">
            {item.videoTitle}
          </div>
          <div className="font-medium text-base text-[#75767A]">
            <p>{`${minutes.toString().padStart(2, "0")}:${seconds
              .toString()
              .padStart(2, "0")}`}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default VideoCard;
