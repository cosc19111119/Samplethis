"use client";
import React, { useState } from "react";
import Image from "next/image";

const ProfileSidebar = () => {
  const [notificationOn, setNotificationOn] = useState<boolean>(false);

  const toggleNotification = () => {
    setNotificationOn((prevState) => !prevState);
  };
  return (
    <>
      <div className="bg-[#FFF6F6] w-[267px] p-4 rounded-lg">
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3">
            <Image
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              src="/icons/searchIconProfile.svg"
              alt=""
              width={20}
              height={20}
            />
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full text-sm py-3 ps-10  text-black border border-gray-300 rounded-lg "
            placeholder="Search"
            required
          />
        </div>

        <div className="mt-4">
          <div className="gap-2 flex px-3 mt-4 py-[10px] bg-[#E33C12] rounded ">
            <Image
              className=""
              src="/icons/userProfileIcon.svg"
              alt="profile"
              width={20}
              height={20}
            />
            <div className="text-">Account Settings</div>
          </div>
          <div className="gap-2 flex px-3 mt-2 py-[10px]">
            <Image
              className=""
              src="/icons/profileDownlod.svg"
              alt="profile"
              width={20}
              height={20}
            />
            <div>My Downloads</div>
          </div>
          <div className="mt-2 px-3 flex justify-between items-center py-[10px]">
            <div className="gap-2 flex">
              <Image
                className=""
                src="/icons/notificationProfile.svg"
                alt="profile"
                width={20}
                height={20}
              />
              <div>Notifications</div>
            </div>
            <button
              className={`relative inline-flex items-end justify-end h-[16px] w-[28px] bg-gray-300 rounded-full focus:outline-none ${
                notificationOn ? "bg-green-500" : "bg-red-500"
              }`}
              onClick={toggleNotification}
            >
              <span
                className={`absolute left-0 inline-block h-4 w-4 rounded-full bg-white shadow transform transition-transform ease-in-out duration-300 ${
                  notificationOn ? "translate-x-full" : ""
                }`}
              />
            </button>
          </div>
          <div className="gap-2 mt-2 pb-4 flex px-3 py-[10px]">
            <Image
              className=""
              src="/icons/profilelock.svg"
              alt="profile"
              width={13}
              height={16}
            />
            <div>Privacy</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileSidebar;
//
