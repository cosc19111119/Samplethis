// DiscoverCarousel.tsx
"use client";
import React, { useState, useEffect } from "react";
import DiscoverCarouselCard from "./DiscoverCarouselCard";
const DiscoverCarousel = () => {
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
    <div className="flex gap-4 md:mx-14 mx-2 relative w-[90%]">
      <div className="h-[446px] w-full carousel carousel-vertical space-y-1  border border-black rounded-[13px]">
        {[0, 1, 2, 3].map((index) => (
          <div
            key={index}
            className="carousel-item h-full"
            style={{
              transform: `translateY(-${activeIndex * 100}%)`, // Adjust position based on active index
            }}
          >
            <DiscoverCarouselCard />
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center justify-center gap-2 absolute top-1/2 transform -translate-y-1/2 -right-5">
        {[0, 1, 2, 3].map((index) => (
          <div
            key={index}
            className={`w-[11px] h-[11px]  rounded-full ${
              activeIndex === index ? "bg-primary" : "bg-[#FED7AA]"
            }`}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default DiscoverCarousel;
