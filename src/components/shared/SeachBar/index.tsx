"use client";
import React from "react";
import Image from "next/image";

type SearchProps = {
  theme: "white" | "dark";
};
export const SearchBar = ({ theme }: SearchProps) => {
  return (
    <div className="border w-full border-[#D0D5DD] py-[10px] px-2 rounded-lg flex items-center gap-2 ">
      <div className={`relative cursor-pointer`}>
        {theme === "white" ? (
          <Image
            src="/icons/searchIcon.svg"
            alt="searchIcon"
            height={20}
            width={20}
          />
        ) : (
          <Image
            src="/icons/search-white.svg"
            alt="searchIcon"
            height={20}
            width={20}
          />
        )}
      </div>
      <div className="w-full">
        <input
          className={`outline-none bg-transparent w-full ${
            theme === "white" ? "text-[#667085]" : "text-[#fff]"
          }  font-normal text-base`}
          placeholder="Search for samples, presets..."
          type="text"
        />
      </div>
    </div>
  );
};
