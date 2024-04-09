import React from "react";
import Image from "next/image";
const Testimonials = () => {
  return (
    <>
      <div className="md:mx-32 flex flex-col justify-center items-center  mt-4  ">
        <div className="flex flex-col justify-center md:mx-[8rem] xl:mx-[18rem] text-center items-center text-2xl md:text-[42px] text-[#1C1C1C] font-semibold px-3">
          <div className="">
            Trusted by music makers<span className="text-primary">.</span>
          </div>
        </div>
        <div className="sm:text-[25.22px] text-[19px] px-3 font-normal mt-16 flex flex-col gap-10  text-[#18181B]">
          <div>
            “Simply the best. Better than all the
            <br />
            rest. I’d recommend this product to
            <br />
            beginners and all users.”
          </div>
          <div className="">
            “You made it so simple. My new site is so <br />
            much faster and easier to work with <br />
            than my old site. I just choose the page,
            <br />
            make the change.”
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="bg-[#313030] flex md:flex-row flex-col md:items-center px-6 py-3 md:p-14 md:mt-14 md:gap-10 gap-1 ">
          <h2 className="text-white text-[48px] md:text-[34px] md:ml-14 native">
            Cameron
          </h2>
          <div className="text-white">
            <h3 className="text-[20px]">Leslie Alexander</h3>
            <h4 className="text-[12px]">Musician at Crowny</h4>
          </div>
        </div>
        <Image
          className="z-40 absolute md:flex hidden right-32 bottom-0 "
          src="/imgs/testimonalsImg.svg"
          alt="image"
          width={400}
          height={500}
        />
        <div className="absolute md:flex hidden right-44 bottom-[15px]">
          <Image
            className="z-40 "
            src="/imgs/Shadow.svg"
            alt="image"
            width={330}
            height={200}
          />
        </div>
      </div>
    </>
  );
};
export default Testimonials;
