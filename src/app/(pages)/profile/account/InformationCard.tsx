import React from "react";

const InformationCard = ({
  icon,
  txt,
  txt1,
}: {
  icon: string;
  txt: string;
  txt1: string;
}) => {
  return (
    <div>
      <div className="bg-[#FFF6F6] p-[20px] rounded-xl">
        <div className="text-[16px] font-[600] text-[rgb(227,60,18)]">
          <span className="text-black ">{icon} </span>
          {txt}
        </div>
        <div className="text-container text-black mt-2 text-[14px] font-[400]">
          {txt1}
        </div>
      </div>
    </div>
  );
};

export default InformationCard;
