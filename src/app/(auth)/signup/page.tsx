import React from "react";
import Image from "next/image";

const SignUp = () => {
  return (
    <section className="container mt-10 mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        <div className=" text-black">
          <div>
            <Image src="/imgs/logo.svg" alt=" " width={75} height={73} />
          </div>
          <div className="lg:mx-32 mt-10 flex flex-col justify-center">
            <form>
              <div className="text-[25px] font-[600] text-[#090314]">
                Create your free account
              </div>
              <h5 className="text-[14px] mb-3 font-[700] text-[#000000]">
                Name
              </h5>
              <div>
                <input
                  type="text"
                  className="w-full px-4 border py-3 rounded-lg"
                  placeholder="M Umar Farooq"
                />
              </div>
              <h5 className="text-[14px] mb-3 font-[700] text-[#000000]">
                Email
              </h5>
              <div>
                <input
                  type="email"
                  className="w-full px-4 border py-3 rounded-lg"
                  placeholder="umar@example.com"
                />
              </div>
              <h5 className="text-[14px] mb-3 mt-5 font-[700] text-[#000000]">
                Password
              </h5>
              <div>
                <input
                  type="password"
                  className="w-full px-4 border py-3 rounded-lg"
                  placeholder="AbC@123"
                />
              </div>
              <h5 className="text-[14px] mb-3 mt-5 font-[700] text-[#000000]">
                Confirm Password
              </h5>
              <div>
                <input
                  type="password"
                  className="w-full px-4 border py-3 rounded-lg"
                  placeholder="AbC@123"
                />
              </div>
              <div className="flex items-center justify-between mt-5 mb-5">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="h-4 w-4 border-[1.5px] border-[#A1A1A1] text-[#A1A1A1] rounded"
                  />
                  <label className="ml-2 block text-[12px] font-[500] text-[#030712] ">
                    Keep me signed in
                  </label>
                </div>

                <div className="font-[500] text-[12px]">
                  <a href="#">Forgot your password?</a>
                </div>
              </div>
              <div className="mb-4">
                <button
                  className="bg-[#E33C12] text-white py-3 px-4 w-full rounded-[47px]"
                  type="button"
                >
                  Let’s Get Started
                </button>
                <div className="mt-7">
                  <hr className="h-0.5 mt-3" />
                  <div className="relative py-4 flex justify-center">
                    <span className="absolute px-4 text-[#64748B] rounded -top-4 left-30 bg-white">
                      or login with email
                    </span>
                  </div>
                </div>
              </div>
              <div className="border-[#E2E8F0] gap-2 border flex justify-center items-center px-[16px] md:px-[76px] py-[17px] rounded-[30px] text-[14px] font-[400] ">
                <div>
                  <Image
                    src="/icons/googleIcon.svg"
                    alt="google"
                    width={15}
                    height={15}
                  />
                </div>
                <div>
                  Sign in with <span className="font-bold">Google</span>
                </div>
              </div>
              <div className="border-[#E2E8F0] gap-2 mt-4 border flex justify-center items-center px-[16px] md:px-[76px]  py-[17px] rounded-[30px] text-[14px] font-[400] ">
                <div>
                  <Image
                    src="/icons/facebookcn.svg"
                    alt="google"
                    width={20}
                    height={20}
                  />
                </div>
                <div>
                  Sign in with <span className="font-bold">Facebook</span>
                </div>
              </div>

              <p className="mb-2 mt-3 flex justify-center">
                Already have an account?
                <a
                  href="/signup"
                  className="text-blue-800 font-[700] text-[14px]"
                >
                  Login
                </a>
              </p>
            </form>
          </div>
        </div>

        <div className="hidden lg:block">
          <Image
            src="/imgs/loginPagePic.svg"
            alt="login form"
            width={741}
            height={927}
            className="w-full h-full rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default SignUp;
