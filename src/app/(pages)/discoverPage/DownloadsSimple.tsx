import React from "react";
import DownloadPlayListCard from "./DownloadPlayListCard";

const DownloadsSimple = () => {
  return (
    <div>
      <div className="text-[16px] font-bold text-[#18181B] ">My Downloads</div>
      <div className="text-[#71717A] text-[13px] mt-2 font-[400] ">
        All your acquired samples are here.
      </div>
      <div className="mt-6 rounded-lg">
        {[1, 2, 3, 4, 5, 6].map((_, index) => (
          <div key={index}>
            <DownloadPlayListCard />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DownloadsSimple;
