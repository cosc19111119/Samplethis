import React from "react";
import CarouselCard from "./CarouselCard";

const CarouselCardSection = () => {
  const images = [
    "/imgs/CarouselCard-Image4.svg",
    "/imgs/CarouselCard-Image2.svg",
    "/imgs/CarouselCard-Image1.svg",
    "/imgs/CarouselCard-Image3.svg",
    "/imgs/CarouselCard-Image2.svg",
    "/imgs/CarouselCard-Image1.svg",
  ];

  return (
    <div className="carousel  w-full  mx-2 my-10 overflow-scroll h-[286px] space-x-4 rounded-box">
      {images.map((image, index) => (
        <div
          key={index}
          className="carousel-item flex gap-x-4 transition-transform ease-in-out duration-300"
        >
          {index === 3 ? (
            <CarouselCard key={index} />
          ) : (
            <img src={image} className="rounded-lg" />
          )}
        </div>
      ))}
    </div>
  );
};

export default CarouselCardSection;
