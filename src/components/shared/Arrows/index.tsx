import React from "react";
import Image from "next/image";

type Props = {
  theme: "dark" | "white";
};
export const BackArrow = ({ theme }: Props) => {
  return (
    <div
      className={`h-[50px] cursor-pointer w-[50px] relative flex justify-center items-center rounded-full border-2 ${
        theme === "white" ? "border-black" : "border-white"
      } `}
    >
      {theme === "white" ? (
        <Image
          src="/icons/backIcon.svg"
          alt="backkIcon"
          height={20}
          width={20}
        />
      ) : (
        <Image
          src="/icons/BackArrow-white.svg"
          alt="backkIcon"
          height={20}
          width={20}
        />
      )}
    </div>
  );
};

export const ForwardArrow = ({ theme }: Props) => {
  return (
    <div
      className={`h-[50px] cursor-pointer w-[50px] relative flex justify-center items-center rounded-full border-2 ${
        theme === "white" ? "border-black" : "border-white"
      } `}
    >
      {" "}
      {theme === "white" ? (
        <Image
          src="/icons/farwardIcon.svg"
          alt="forwardIcon"
          height={20}
          width={20}
        />
      ) : (
        <Image
          src="/icons/forwardArrow-white.svg"
          alt="forwardIcon"
          height={20}
          width={20}
        />
      )}
    </div>
  );
};
