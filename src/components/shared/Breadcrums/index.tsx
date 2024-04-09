"use client";
import { useSearchParams } from "next/navigation";
import React from "react";

const Breadcrums = () => {
  const params = useSearchParams();
  const query = params.get("b");
  const paramsArray = query?.split("_");
  return (
    <div>
      <div className="flex gap-1">
        {paramsArray?.map((item, index) => (
          <div className="text-base font-bold" key={index}>
            <span
              style={{
                color: index === paramsArray.length - 1 ? "#E33C12" : "black",
              }}
            >
              {item}
            </span>
            {index < paramsArray.length - 1 && (
              <span className="text-md font-bold text-[#000]"> {">"} </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Breadcrums;
