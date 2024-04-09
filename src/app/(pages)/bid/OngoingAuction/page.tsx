"use client";
import React, { useState, useEffect } from "react";
import OngoingAcution from "./OngoingAcution";

const OngoingAcutionCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 4); // Assuming there are 4 cards in the carousel
    }, 5000); // Change card every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index: any) => {
    setActiveIndex(index);
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="relative w-full overflow-hidden">
        <div
          className="flex items-center h-[75vh] transition-transform duration-500"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {[0, 1, 2, 3].map((index) => (
            <div key={index} className="w-full flex-shrink-0">
              <OngoingAcution />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center   w-full">
        {[0, 1, 2, 3].map((index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full mx-1 cursor-pointer ${
              activeIndex === index ? "bg-primary" : "bg-[#FED7AA]"
            }`}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default OngoingAcutionCarousel;
