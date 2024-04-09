import React from "react";
import Image from "next/image";

const OtpPage = () => {
  return (
    <section className="container mt-10 mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        <div className=" text-black">
          <div>
            <Image src="/imgs/logo.svg" alt=" " width={75} height={73} />
          </div>
          <div className="mx-32 mt-10">
            <form>
              <div className="text-[25px] font-[600] flex justify-center text-[#090314]">
                Verification
              </div>
              <div className="text-[18px] font-[700] mt-10 flex justify-center text-[#090314]">
                Enter OTP code
              </div>
              <div className="text-[16px] font-[400] mt-3 flex justify-center text-[#090314]">
                Enter the 5-digit code that we have sent
              </div>
              <div className="text-[16px] font-[400] flex justify-center text-[#090314]">
                to +44 123 456 7890.
              </div>
              <div className="flex gap-4 mt-4 mb-4 justify-center">
                {[1, 2, 3, 4, 5].map((_, index) => (
                  <div
                    key={index}
                    className="px-5 py-3 rounded-[9px] text-[24px] font-[700] text-[#E4E4E7] border flex justify-center items-center border-[#E2E8F0]"
                  >
                    1
                  </div>
                ))}
              </div>
              <div className="flex justify-center items-center gap-3 mb-4">
                <div className="text-[#E33C12] text-[14px] font-[700]">
                  Resend in
                </div>
                <div className="px-[21px] rounded-[40px] border border-[#E2E8F0] py-[10px] text-[14px] font-[600] flex justify-center items-center">
                  00:40
                </div>
              </div>
              <div className="mb-4">
                <button
                  className="bg-[#E33C12] text-white py-3 px-4 w-full rounded-[47px]"
                  type="button"
                >
                  continue
                </button>
              </div>
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

export default OtpPage;
