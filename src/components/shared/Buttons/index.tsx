"use client";
import React from "react";
import Image from "next/image";

type Props = {
  onClick?: () => void;
  text: string;
  icon?: any;
};

export const NavbarButton = ({ text, onClick }: Props) => {
  return (
    <button
      className="text-white bg-primary rounded-full py-1 px-3 transition-all hover:bg-white hover:text-primary border border-primary font-[MonaSans] font-medium text-base"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export const PrimaryButton = ({ text, onClick, icon }: Props) => {
  return (
    <div className="text-white flex gap-2 bg-primary rounded-full py-3 px-5 transition-all  border border-primary font-medium text-sm">
      <Image src={icon} alt={"icon"} width={18} height={18} />
      <button onClick={onClick}>{text}</button>
    </div>
  );
};

export const SectionOneBtn = ({ onClick, text }: Props) => {
  return (
    <div role="button" className="relative">
      <div className="group">
        <div className="border flex flex-row hover:text-[#E33C12] bg-white absolute border-black hover:border-[#E33C12] w-max p-2 gap-x-2 z-20 cursor-pointer">
          <div className="font-[900] text-base">{text}</div>
          <div className="flex bottom-0 text-end justify-end hover:transform hover:-translate-y-1 duration-300">
            <Image
              src="/imgs/btn-arrow.svg"
              width={20}
              height={20}
              alt="arrow"
              className="hover:filter-none filter group-hover:filter-hue-rotate-primary"
            />
          </div>
        </div>
        <div className="ml-[2px] mt-[3px] border border-black group-hover:border-primary w-[155px] h-[42px] absolute z-0"></div>
      </div>
    </div>
  );
};
export const DiscoverCarouselbtn = ({ onClick, text }: Props) => {
  return (
    <div role="button" className="relative">
      <div className="group">
        <div className="border flex flex-row hover:text-[#E33C12] text-white bg-transparent absolute border-white hover:border-[#E33C12] w-max p-2 gap-x-2 z-20 cursor-pointer">
          <div className="font-[900] text-base">{text}</div>
          <div className="flex bottom-0 text-end justify-end hover:transform hover:-translate-y-1 duration-300">
            <Image
              src="/icons/white-arrow.svg"
              width={20}
              height={20}
              alt="arrow"
              className="hover:filter-none filter group-hover:filter-hue-rotate-primary"
            />
          </div>
        </div>
        <div className="ml-[2px] mt-[3px] border border-white group-hover:border-primary w-[150px] h-[42px] absolute z-0"></div>
      </div>
    </div>
  );
};

export const ArtistBtn = ({ onClick, text }: Props) => {
  return (
    <div className="relative">
      <div className="group">
        <div className="border flex flex-row hover:text-[#E33C12] bg-white absolute border-black hover:border-[#E33C12] w-max p-2 gap-x-2 z-20 cursor-pointer">
          <div className="font-[900] text-base">{text}</div>
          <div className="flex bottom-0 text-end justify-end hover:transform hover:-translate-y-1 duration-300">
            <Image
              src="/imgs/btn-arrow.svg"
              width={20}
              height={20}
              alt="arrow"
              className="hover:filter-none filter group-hover:filter-hue-rotate-primary"
            />
          </div>
        </div>
        <div className="ml-[4px] mt-[3px] border border-black w-[180px] h-[42px] absolute z-0 group-hover:border-primary"></div>
      </div>
    </div>
  );
};

export const SoundCarftBtn = ({ onClick, text }: Props) => {
  return (
    <div className="relative">
      <div className="group">
        <div className="border flex flex-row hover:text-[#E33C12] bg-white absolute border-black hover:border-[#E33C12] w-max p-2 gap-x-2 z-20 cursor-pointer">
          <div className="font-[900] text-base">{text}</div>
          <div className="flex bottom-0 text-end justify-end hover:transform hover:-translate-y-1 duration-300">
            <Image
              src="/imgs/btn-arrow.svg"
              width={20}
              height={20}
              alt="arrow"
              className="hover:filter-none filter group-hover:filter-hue-rotate-primary"
            />
          </div>
        </div>
        <div className="ml-[4px] mt-[3px] border border-black w-[238px] h-[42px] absolute z-0 group-hover:border-primary"></div>
      </div>
    </div>
  );
};
