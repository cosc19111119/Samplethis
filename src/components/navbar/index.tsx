"use client";
import Image from "next/image";
import Link from "next/link";
import { NavbarButton } from "../shared/Buttons";
import { useState } from "react";
import { SearchBar } from "../shared/SeachBar";

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };
  return (
    <div className="bg-white w-full  py-3 mb-10 px-10">
      <div className="flex justify-between items-center ">
        <Link className="relative w-[80px] h-[65px]" href={"/"}>
          <Image src="/imgs/logo.svg" alt={"logo"} fill />
        </Link>

        {/* reponsive dropdown */}
        <div className="md:hidden flex h-[44px] w-[44px] text-[#000] border  bg-[#F4F4F5] rounded-[10px] items-center justify-center">
          <Image
            src={"/icons/navdropdownicon.svg"}
            alt={""}
            height={24}
            width={24}
          />
        </div>
        <div className="text-[#000] md:flex hidden gap-5 justify-center items-center">
          <Link href={"/discover"} className="text-base font-medium">
            Discover
          </Link>
          <div className="flex gap-1 justify-center items-center">
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="flex gap-2">
                <div className="text-base font-medium">Sounds</div>
                <Image
                  src={"/imgs/dropdownIcon.svg"}
                  alt={"sound dropdown"}
                  width={17}
                  height={15}
                />
              </div>
              <ul
                tabIndex={0}
                className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="cursor-pointer"
            onClick={() => setIsSearchOpen(false)}
          >
            <Image
              src="/imgs/profileIcon.svg"
              alt={"profile"}
              width={30}
              height={30}
            />
          </div>
          <div
            onClick={toggleSearch}
            className={`${isSearchOpen ? "hidden" : "flex cursor-pointer"}`}
          >
            <Image
              src="/imgs/searchIcon.svg"
              alt={"search"}
              width={30}
              height={30}
            />
          </div>
          {isSearchOpen && (
            <div className={`search-bar `}>
              <SearchBar theme={"white"} />
            </div>
          )}
          <div>
            <NavbarButton text="Get Started" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
