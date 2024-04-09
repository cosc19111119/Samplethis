"use client";
import MusicCardDetails from "@/components/shared/MusicCardDeatail";
import React from "react";
import PackCategories from "./PackCategories";
import Breadcrums from "@/components/shared/Breadcrums";
import MusicPlayList from "./MusicPlayList/MusicPlayList";

const PackDeatail = () => {
  return (
    <div className="space-y-6 lg:px-14 px-6 ">
      <div>
        <Breadcrums />
      </div>
      <div className="w-full flex justify-center items-center">
        <MusicCardDetails />
      </div>
      <div>
        <PackCategories />
      </div>
      <div>
        <MusicPlayList />
      </div>
    </div>
  );
};

export default PackDeatail;
