import React from "react";

const SignUpForm = () => {
  return (
    <div className="md:mr-[300px]">
      <div className="text-[16px] font-bold text-[#18181B] ">
        Sign Up in Seconds
      </div>
      <div className="text-[#71717A]  text-[13px] mt-5 font-[400] ">
        Lorem ipsum dolor sit amet, consectetur adipis.
      </div>
      <div className="flex flex-col xl:flex-row mt-5 handlresponsive xl:justify-between xl:items-center items-start ">
        <div className="text-[13px] font-[700]">First & Last Name</div>
        <div className="gap-4 flex">
          <div>
            <input
              type="text"
              placeholder="Martin"
              className="lg:w-[220px] w-[100%]  h-12 text-black rounded-md border border-gray-400 px-4 py-3"
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
      <div className="flex flex-col xl:flex-row mt-5 handlresponsive xl:justify-between xl:items-center items-start">
        <div className="text-[13px] font-[700]">mail Address</div>
        <div>
          <input
            type="text"
            placeholder="umar@gmail.com"
            className="lg:w-[455px] w-[100%] px-4 h-12 text-black rounded-md border border-gray-400 ppy-3"
          />
        </div>
      </div>
      <button className="bg-[#E33C12] hover:bg-red-900 mt-[50px] text-white font-medium py-3 px-5 rounded">
        Update
      </button>
    </div>
  );
};

export default SignUpForm;
