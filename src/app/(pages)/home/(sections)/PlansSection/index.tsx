"use client";
import React, { useState } from "react";
import PlansCard from "./PlansCard";
import { plansCardArray } from "@/utils/const";

const PlansSection = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleSelect = (plan: any) => {
    if (selectedPlan === plan) {
      setSelectedPlan(null);
    } else {
      setSelectedPlan(plan);
    }
  };

  return (
    <div className="flex flex-col gap-4 w-full justify-center items-center">
      <div className="font-semibold text-[#1C1C1C] text-2xl md:text-[42px]">
        Expand Your Creative Arsenal
      </div>
      <div className="font-medium text-sm md:text-base text-[#000]">
        Access a daily selection of free samples, or unlock unlimited
        possibilities with a premium subscription.
      </div>
      <div className="flex gap-10">
        {/* Checkboxes */}
        <div
          className={`flex gap-4 justify-center items-center cursor-pointer `}
          onClick={() => handleSelect("monthly")}
        >
          <div
            className={`w-[16px] h-[16px] rounded-full ${
              selectedPlan === "monthly"
                ? "border-4 border-[#E33C12]"
                : "border-[#D4D4D8] border bg-[#fff]"
            }`}
          ></div>
          <div className="font-medium text-base text-[#18181B]">
            Monthly Plan
          </div>
        </div>
        <div
          className={`flex gap-4 justify-center items-center cursor-pointer `}
          onClick={() => handleSelect("annual")}
        >
          <div
            className={`w-[16px] h-[16px] rounded-full ${
              selectedPlan === "annual"
                ? "border-4 border-[#E33C12]"
                : "border-[#D4D4D8] border bg-[#fff]"
            }`}
          ></div>
          <div className="font-medium text-base text-[#18181B]">
            Annual Plan
          </div>
          <div
            className={` ${
              selectedPlan === "annual" ? "flex" : "hidden"
            } font-medium text-sm text-[#E33C12]`}
          >
            (Save 20%)
          </div>
        </div>
      </div>
      {/* Cards */}

      <div className="flex items-center justify-center gap-6 my-4 md:flex-row flex-col w-full">
        {plansCardArray.map((items, index) => (
          <PlansCard
            key={index}
            items={items}
            index={index}
            setSelectedIndex={setSelectedIndex}
            selectedIndex={selectedIndex}
          />
        ))}
      </div>
    </div>
  );
};

export default PlansSection;
