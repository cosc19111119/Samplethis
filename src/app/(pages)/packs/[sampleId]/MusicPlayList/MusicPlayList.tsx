import React from "react";
import MusicPlayListCard from "./MusicPlayListCard";

const MusicPlayList = () => {
  return (
    <div
      className="rounded-[20px] bg-[#FFFFFF] "
      style={{ boxShadow: "rgb(239 231 231 / 50%) 0px 0px 20px 0px" }}
    >
      {[1, 2, 3, 4, 5].map((index) => (
        <div key={index} className={`hover:bg-[#FFF6F6] rounded-lg border-b`}>
          <MusicPlayListCard />
        </div>
      ))}
    </div>
  );
};

export default MusicPlayList;
