import React from "react";

const AccountSignUpForm = () => {
  return (
    <div className="md:mr-[300px]">
      <div className="flex flex-col xl:flex-row mt-5 handlresponsive xl:justify-between xl:items-center items-start ">
        <div className="text-[13px] font-[700]">First & Last Name</div>
        <div className="gap-4 flex">
          <div>
            <input
              type="text"
              placeholder="Martin"
              className="lg:w-[220px] w-[100%] h-12 text-black rounded-md border border-gray-400 px-4 py-3"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Martin"
              className="lg:w-[220px] w-[100%]  h-12 text-black rounded-md border border-gray-400 px-4 py-3"
            />
          </div>
        </div>
      </div>
      <div className="flex mt-5  xl:justify-end items-center ">
        <div>
          <input
            type="text"
            placeholder="umar@gmail.com"
            className="md:w-[455px] w-[100%] px-4 h-12 text-black rounded-md border border-gray-400 py-3"
          />
        </div>
      </div>
      <div className="flex items-center md:justify-end mt-5 gap-[10px] lg:pr-14">
        <div>
          <input
            type="checkbox"
            className="styled-checkbox w-5 h-5 border border-[#D4D4D4] rounded-md"
          />
        </div>
        <div className="text-[13px] font-[400] text-[#18181B]">
          I have read and agree to the website
          <span className="text-[#E33C12] font-bold">Terms and Conditions</span>
        </div>
      </div>
      <div className="flex md:justify-end mt-4 mb-3">
        <div className="border-b w-[455px] border-[#E4E4E7] text-[#E4E4E7] justify-end"></div>
      </div>
      <div className="flex justify-between flex-col-reverse gap-y-3  md:flex-row md:pr-14">
        <div>
          <button className="bg-[#E33C12] hover:bg-red-900  text-white font-medium py-3 px-5 rounded">
            Update
          </button>
        </div>
        <div className="text-[13px] flex flex-row items-end  gap-1 text-gray-500 font-[400] lg:mr-40">
          Already have an account?
          <span className="font-bold text-black">Login here</span>
        </div>
      </div>
    </div>
  );
};

export default AccountSignUpForm;
