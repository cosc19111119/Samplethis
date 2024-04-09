import Image from "next/image";
import React from "react";

type ListProps = {
  num: number;
  image: string;
  artist: string;
  price: string;
};
const AuctionList = ({ item }: { item: ListProps }) => {
  return (
    <div className="flex justify-between px-4 items-center text-[#000] text-2xl font-medium border-b py-2">
      <div className="flex gap-3 items-center">
        {item.num}.
        <span>
          <Image
            src={item.image}
            alt=""
            width={50}
            height={50}
            className="rounded-full"
          />
        </span>{" "}
        <span>{item.artist}</span>
      </div>
      <div>${item.price}</div>
    </div>
  );
};

export default AuctionList;
