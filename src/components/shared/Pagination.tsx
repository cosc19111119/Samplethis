"use client";
import Image from "next/image";
import React from "react";

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: any;
  totalPages: any;
  onPageChange: any;
}) => {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  return (
    <nav className="flex justify-center my-4">
      <ul className="flex">
        <li
          onClick={goToPreviousPage}
          className={`cursor-pointer flex justify-center items-center mx-1 bg-white text-[#E4E4E7] rounded-[3px] border-[#E4E4E7] border px-3 py-1 text-sm font-bold transition duration-300 ease-in-out ${
            currentPage === 1 ? "bg-[#E33C12] text-white" : ""
          }`}
        >
          <Image
            width={15}
            height={15}
            src={"/icons/cheveron-left.svg"}
            alt={""}
          />
        </li>
        {pages.map((page) => (
          <li
            key={page}
            onClick={() => onPageChange(page)}
            className={`cursor-pointer mx-1 ${
              currentPage === page
                ? "bg-[#E33C12] text-white"
                : "bg-white text-[#E4E4E7]"
            } rounded-[3px] border-[#E4E4E7] border px-3 py-1 text-sm font-bold transition duration-300 ease-in-out`}
          >
            {page}
          </li>
        ))}
        <li
          onClick={goToNextPage}
          className={`cursor-pointer flex justify-center items-center mx-1 bg-white text-[#E4E4E7] rounded-[3px] border-[#E4E4E7] border px-3 py-1 text-sm font-bold transition duration-300 ease-in-out ${
            currentPage === totalPages ? "bg-[#E33C12] text-white" : ""
          }`}
        >
          <Image
            width={15}
            height={15}
            src={"/icons/cheveron-right.svg"}
            alt={""}
          />
        </li>
        <li
          className={`cursor-pointer flex justify-center items-center mx-1 bg-white text-[#E4E4E7] rounded-[3px] border-[#E4E4E7] border px-3 py-1 text-sm font-bold transition duration-300 ease-in-out`}
        >
          <Image
            width={16}
            height={16}
            src={"/icons/dubleForwardArrow.svg"}
            alt={""}
          />
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
