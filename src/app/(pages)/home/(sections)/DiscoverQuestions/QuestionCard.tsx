import React from "react";

const QuestionCard = ({ item }: { item: QuestionCard }) => {
  return (
    <div className="border cursor-pointer flex flex-col gap-y-5 border-[#E33C12] bg-[#000] py-4 px-5 questionShadow rounded-[10px]">
      <div className="font-bold text-[#fff] text-[21px] ">{item.question}</div>
      <div className="font-normal text-[#fff] text-base">{item.answer}</div>
    </div>
  );
};

export default QuestionCard;
