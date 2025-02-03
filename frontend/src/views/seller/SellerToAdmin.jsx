import React, { useState } from "react";

const SellerToAdmin = () => {
  return (
    <div className="px-2 lg:px-7 py-5 ">
      <div className="w-full bg-[#111B21] px-4 py-4 rounded-md h-[calc(100vh-140px)] ">
        <div className="flex  w-full h-full relative">
          {/* conversation box */}

          <div className="w-full  md:pl-4">
            <div className="flex justify-between items-center">
              <div className="flex justify-start items-center gap-3">
                <div className="relative">
                  <img
                    className="w-[45px] h-[45px] border-[#005C4B] border-2 max-w-[45px] p-[2px] rounded-full"
                    src="http://localhost:3000/images/demo.jpg"
                    alt=""
                  />
                  <div className="w-[10px] h-[10px] bg-green-500 rounded-full absolute right-0 bottom-0"></div>
                </div>
                <h2 className="text-base text-white font-semibold">Support</h2>
              </div>
            </div>

            <div className="py-4 ">
              <div className="bg-[url('http://localhost:3000/images/chatbg.jpg')] bg-contain bg-center opacity-90 h-[calc(100vh-290px)] rounded-md p-3 overflow-y-auto">
                <div className="w-full flex justify-start items-center">
                  <div className="flex justify-start items-start gap-2 md:px-3 py-2 max-w-full lg:max-w-[85%]">
                    <div>
                      <img
                        src="http://localhost:3000/images/demo.jpg"
                        alt=""
                        className="w-[38px] h-[38px] border-2 border-white rounded-full max-w-[38px] p-[3px]"
                      />
                    </div>
                    <div className="flex justify-center items-start flex-col w-full bg-[#202C33] shadow-lg text-white  px-2 rounded-md">
                      <span className="pt-2 pb-3">How are you ?</span>
                    </div>
                  </div>
                </div>

                <div className="w-full flex justify-end items-center">
                  <div className="flex justify-start items-start gap-2 md:px-3 py-2 max-w-full lg:max-w-[85%]">
                    <div className="flex justify-center items-start flex-col w-full bg-[#005C4B] shadow-sm text-white  px-2 rounded-md">
                      <span className="pb-3 pt-2">How are you ?</span>
                    </div>
                    <div>
                      <img
                        src="http://localhost:3000/images/admin.jpg"
                        alt=""
                        className="w-[38px] h-[38px] border-2 border-white rounded-full max-w-[38px] p-[3px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <form className="flex gap-3 ">
              <input
                type="text"
                className="w-full justify-between px-2 border border-slate-700 items-center py-[5px] focus:border-[#005C4B] rounded-md outline-none bg-transparent text-[#d0d2d6]"
                placeholder="Input you message"
              />
              <button className="shadow-md  shadow-[#005C4B] hover:shadow-black font-semibold w-[75px] h-[35px] rounded-md text-white flex justify-center items-center">
                <svg width="24" height="24" x="0" y="0" viewBox="0 0 24 24">
                  <path
                    className="fill-[#005C4B] "
                    d="M1.101 21.757L23.8 12.028 1.101 2.3l.011 7.912 13.623 1.816-13.623 1.817-.011 7.912z"
                  ></path>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerToAdmin;
