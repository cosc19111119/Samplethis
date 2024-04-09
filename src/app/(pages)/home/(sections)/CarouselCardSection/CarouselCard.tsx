import React from "react";
import Image from "next/image";

const CarouselCard = () => {
  const positions = ["0", "-10", "-20", "-31", "-41"];

  return (
    <div className="flex flex-col  justify-between">
      <div className="bg-[#E33C12] py-4 flex flex-col justify-center pl-4 rounded-lg">
        <h1 className="text-[40px] text-white">40k+</h1>
        <p className="text-[14px] text-white">
          Samples available from
          <br /> all over the world
        </p>
        <div className="flex gap-0 pt-2">
          {positions.map((position, index) => (
            <span className={`relative left-[${position}px]`} key={index}>
              <Image
                src="/icons/Ellipse1.svg"
                alt="image"
                width={40}
                height={40}
              />
            </span>
          ))}
        </div>
      </div>

      <div className="bg-[#000000] flex p-3 gap-3 items-center justify-center rounded-full">
        <Image src="/icons/hand.svg" alt="image" width={30} height={30} />
        <p className="text-[16px] text-white">License Terms</p>
      </div>
    </div>
  );
};

export default CarouselCard;
