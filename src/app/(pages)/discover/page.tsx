import React from "react";
import DiscoverCarousel from "./(discover-sections)/DiscoverCarousel";
import DiscoverNewOn from "./(discover-sections)/DiscoverNewOn";
import TrendingSample from "./(discover-sections)/TrendingSample";
import Prasets from "./(discover-sections)/Prasets";
import TopNewSample from "./(discover-sections)/TopNewSample";

const Discover = () => {
  return (
    <div className="flex flex-col gap-10">
      <div>
        <DiscoverCarousel />
      </div>
      <div className="lg:px-14 px-6">
        <DiscoverNewOn />
      </div>
      <div>
        <TopNewSample />
      </div>
      <div>
        <Prasets />
      </div>
      <div>
        <TrendingSample />
      </div>
    </div>
  );
};

export default Discover;
