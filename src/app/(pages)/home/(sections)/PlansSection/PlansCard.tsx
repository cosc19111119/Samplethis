import React from "react";

const PlansCard = ({
  items,
  index,
  setSelectedIndex,
  selectedIndex,
}: {
  items: PlanCard;
  index: number;
  setSelectedIndex: (index: number) => void;
  selectedIndex: number;
}) => {
  const handleClick = () => {
    setSelectedIndex(index);
  };

  return (
    <div
      className={`border border-[#E4E4E7] h-max md:w-[30vw] w-full p-5 pb-20 rounded-[15px] flex flex-col gap-2 cursor-pointer ${
        selectedIndex === index ? "bg-black" : "bg-[#fff]"
      }`}
      onClick={handleClick}
    >
      <div
        className={`font-bold text-lg  ${
          selectedIndex === index ? "text-[#fff]" : "text-[#18181B]"
        }`}
      >
        {items.title}
      </div>
      <div
        className={`font-bold text-lg  ${
          selectedIndex === index ? "text-[#fff]" : "text-[#18181B]"
        }`}
      >
        ${items.price}
      </div>
      <div
        className={`font-normal text-base ${
          selectedIndex === index ? "text-[#A1A1AA]" : "text-[#52525B]"
        } `}
      >
        {items.description}
      </div>
      <div
        className={`${
          selectedIndex === index
            ? "bg-[#fff] text-[#18181B] "
            : "text-[#18181B]"
        } font-bold text-base  p-[16px] border border-[#A1A1AA] flex justify-center items-center my-4 rounded-[10px] cursor-pointer`}
      >
        Get Started
      </div>
      <ul className=" flex flex-col gap-3 ">
        <div
          className={`${
            selectedIndex === index ? "text-[#fff]" : "text-[#18181B]"
          } font-bold  text-base`}
        >
          What’s included:
        </div>
        <div
          className={`font-medium ${
            selectedIndex === index ? "text-[#E4E4E7]" : "text-[#52525B]"
          } text-base flex flex-col gap-4`}
        >
          <li>Lorem ipsum dolor sit amet</li>
          <li>Lorem ipsum dolor sit amet</li>{" "}
          <li>Lorem ipsum dolor sit amet</li>{" "}
          <li>Lorem ipsum dolor sit amet</li>{" "}
          <li>Lorem ipsum dolor sit amet</li>
        </div>
      </ul>
    </div>
  );
};

export default PlansCard;
