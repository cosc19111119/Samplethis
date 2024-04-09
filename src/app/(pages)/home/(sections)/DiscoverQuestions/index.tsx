"use client";
import { questionArray } from "@/utils/const";
import React from "react";
import QuestionCard from "./QuestionCard";

const DiscoverQuestions = () => {
  const handleCommonQuestion = () => {
    console.log("handle click.");
  };
  return (
    <div className="flex md:justify-between flex-col md:flex-row py-20 px-20 lg:px-32 bg-[#1C1C1C] w-full gap-10">
      <div className="flex flex-col gap-y-6 w-full md:w-[50%]">
        <div className="text-[#FFF] font-bold md:[30px] lg:text-[42px] text-2xl">
          Discover the most common questions
          <span className="font-semibold text-[#E33C12]">.</span>
        </div>
        <div className="font-medium text-[#F1F5F9] md:text-base text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit ornare
          adipiscing nunc, est nec, neque aliquet maecenas mi. Lacus, pharetra
          aliquam.
        </div>
      </div>
      <div className="md:w-[60%] w-full flex flex-col gap-10">
        {/* Question Card */}
        {questionArray.map((item) => (
          <QuestionCard key={item.id} item={item} />
        ))}
        <div
          onClick={handleCommonQuestion}
          className="font-bold cursor-pointer text-base text-[#fff]"
        >
          Check all common questions
        </div>
      </div>
    </div>
  );
};

export default DiscoverQuestions;
