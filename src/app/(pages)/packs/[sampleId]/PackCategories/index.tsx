"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface Item {
  label: string;
  items: string[];
}

const PackCategories: React.FC = () => {
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(
    null
  );
  const [sortByDropdownOpen, setSortByDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const items: Item[] = [
    { label: "Tempo 1", items: ["Option 1", "Option 2", "Option 3"] },
    { label: "Key", items: ["Option A", "Option B", "Option C"] },
    { label: "Genre", items: ["Rock", "Pop", "Jazz"] },
    { label: "Instrument", items: ["Guitar", "Piano", "Drums"] },
    { label: "License", items: ["Standard", "Extended", "Premium"] },
  ];

  const Sort = ["name", "type", "test"];

  const toggleDropdown = (index: number) => {
    setOpenDropdownIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const toggleSortByDropdown = () => {
    setSortByDropdownOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpenDropdownIndex(null);
        setSortByDropdownOpen(false);
        // Set name to "use client"
        console.log("Name set to 'use client'");
      }
    };

    document.body.addEventListener("click", handleClickOutside);

    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex justify-between">
      <div className="flex gap-[10px] flex-wrap ">
        {items.map((item, index) => (
          <div key={index} className="relative">
            <div
              className="flex items-center gap-[10px] px-3 py-2 bg-[#FFF6F6] rounded-md text-[#000000] font-medium text-lg cursor-pointer"
              onClick={() => toggleDropdown(index)}
            >
              <div className="text-left">{item.label}</div>
              <div>
                <div>
                  <Image
                    src="/icons/DownArrow.svg"
                    alt="Icon"
                    width={24}
                    height={24}
                  />
                </div>
              </div>
            </div>
            {openDropdownIndex === index && (
              <div
                ref={dropdownRef}
                className="absolute z-30 top-full left-0 mt-1 bg-white w-full rounded-md shadow-lg"
              >
                {item.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="py-2 px-4 cursor-pointer hover:bg-gray-100"
                  >
                    {item}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="relative">
        <div
          className="flex items-center gap-[10px] px-3 py-2 bg-[#FFF6F6] rounded-md text-[#000000] font-[500] text-lg cursor-pointer"
          onClick={toggleSortByDropdown}
        >
          <div className="text-left">
            Sort by: <span className="font-[700]">Popular</span>
          </div>
          <div>
            <div>
              <Image
                src="/icons/DownArrow.svg"
                alt="Icon"
                width={24}
                height={24}
              />
            </div>
          </div>
        </div>
        {sortByDropdownOpen && (
          <div
            ref={dropdownRef}
            className="absolute top-full left-0 w-full mt-1 bg-white rounded-md shadow-lg"
          >
            {/* Add your dropdown items here */}
            {Sort.map((item, index) => (
              <div
                key={index}
                className="py-2 px-4 z-30  cursor-pointer hover:bg-gray-100"
              >
                {item}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PackCategories;
