import Breadcrums from "@/components/shared/Breadcrums";
import React from "react";

const VideoLecture = () => {
  return (
    <div className="px-14 w-full">
      <Breadcrums />
      {/* video part */}
      <div className="flex flex-col gap-5">
        <div className="font-semibold text-[42px] text-[#191B22]">
          Know how <span className="text-[#E33C12]">Samplethis</span> works
        </div>
        <div className="text-base text-[#000] font-normal w-[60%]">
          Get a front-row seat to our platform's capabilities. This short video
          will guide you through our features, tools, and the vibrant community
          that makes Sample this stand out. Play the video and start your
          journey into seamless beat-making.
        </div>
        {/* Video */}
        <div className="w-full">
          <iframe
            className="rounded-lg"
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/VmEU22NYkEs?si=XPH46laHdexy98lR"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default VideoLecture;
