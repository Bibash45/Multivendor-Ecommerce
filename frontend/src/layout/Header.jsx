import React from "react";
import { GrMenu } from "react-icons/gr";
const Header = ({ showSidebar, setShowSidebar }) => {
  return (
    <div className="fixed top-0 left-0 w-full py-5 px-2 lg:px-7 z-40 ">
      <div className="ml-0 lg:ml-[260px] rounded-md h-[65px] flex justify-between items-center bg-[#b1addf] px-5 transition-all ">
        <div
          onClick={() => setShowSidebar(!showSidebar)}
          className="w-[35px] flex lg:hidden h-[35px] rounded-sm bg-indigo-500 shadow-lg hover:shadow-indigo-500/50 justify-center items-center cursor-pointer"
        >
          <span>
            <GrMenu fill="black" />
          </span>
        </div>
        <div className="hidden md:block ">
          <input
            type="text"
            className="px-3 py-2 outline-none border bg-transparent border-slate-700 rounded-md text-white focus:border-indigo-500 overflow-hidden "
            name="search"
            placeholder="search"
          />
        </div>
        <div className="flex justify-center items-center gap-8 relative ">
          <div className="flex justify-center items-center ">
            <div className="flex justify-center items-center gap-3">
              <div className="flex justify-center items-center flex-col text-end">
                <h2 className="text-md font-bold ">Bibash Chaudahry</h2>
                <span className="text-[14px] w-full font-normal">Admin</span>
              </div>
              <img
                className="w-[45px] h-[45px] rounded-full overflow-hidden"
                src="https://media.istockphoto.com/id/1341046662/vector/picture-profile-icon-human-or-people-sign-and-symbol-for-template-design.jpg?s=612x612&w=0&k=20&c=A7z3OK0fElK3tFntKObma-3a7PyO8_2xxW0jtmjzT78="
                alt="admin img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
