"use client";
import {
  footerExplore,
  footerLegal,
  footerResources,
  footerSounds,
} from "@/utils/const";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const Footer = () => {
  return (
    <div>
      <footer className="text-gray-600 body-font">
        <div className="container px-10 py-10 md:px-8 md:py-24 md:mx-auto flex md:items-center lg:items-start md:flex-row  flex-col">
          <div className="md:w-[40%] w-full ">
            <Link className="flex mb-5" href={"/"}>
              <Image src="/imgs/logo.svg" width={60} height={60} alt={"logo"} />
            </Link>
            <div className="font-normal text-base text-[#000] md:pr-32">
              Lorem Ipsum is simply dummy industry's standard dummy text of the
              printing.
            </div>
            <div className="flex gap-4 my-6">
              {/* icons */}
              <Link
                href={"#"}
                className="w-[50px] h-[50px] rounded-full bg-[#FFE1CF] flex justify-center items-center"
              >
                <Image
                  src={"/icons/instagramIcon.svg"}
                  alt={""}
                  width={24}
                  height={24}
                />
              </Link>
              <Link
                href={"#"}
                className="w-[50px] h-[50px] rounded-full bg-[#FFE1CF] flex justify-center items-center"
              >
                <Image
                  src={"/icons/twitterIcon.svg"}
                  alt={""}
                  width={24}
                  height={24}
                />
              </Link>
              <Link
                href={"#"}
                className="w-[50px] h-[50px] rounded-full bg-[#FFE1CF] flex justify-center items-center"
              >
                <Image
                  src={"/icons/facebookIcon.svg"}
                  alt={""}
                  width={24}
                  height={24}
                />
              </Link>
            </div>
          </div>

          <div className="flex sm:flex-row flex-col gap-10 text-center md:w-[60%] ">
            <div className="flex ">
              <div className="w-full px-4 flex flex-col">
                <div className="footerHeader">Explore</div>
                <ul className="flex flex-col gap-7">
                  {footerExplore.map((item, index) => (
                    <Link key={index} href={"#"} className="footerLi">
                      {item.text}
                    </Link>
                  ))}
                </ul>
              </div>

              <div className=" w-full px-4 flex flex-col">
                <div className=" footerHeader">Sounds</div>
                <ul className="flex flex-col gap-7">
                  {footerSounds.map((item, index) => (
                    <Link href={"#"} key={index} className="footerLi">
                      {item.text}
                    </Link>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex">
              <div className=" w-full px-4 flex flex-col">
                <div className=" footerHeader">Resources</div>
                <ul className="flex flex-col gap-7">
                  {footerResources.map((item, index) => (
                    <Link href={"#"} key={index} className="footerLi">
                      {item.text}
                    </Link>
                  ))}
                </ul>
              </div>
              <div className=" w-full px-4 flex flex-col">
                <div className="footerHeader">Legal</div>
                <ul className="flex flex-col gap-7">
                  {footerLegal.map((item, index) => (
                    <Link href={"#"} key={index} className="footerLi">
                      {item.text}
                    </Link>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white border-t-2 w-[90%] m-auto">
          <div className=" flex flex-col flex-wrap justify-center items-center text-center py-4 ">
            <p className="text-primary font-[Onest]  text-base">
              &copy; 2024 Samplethis, Inc. All rights reserved.{" "}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
