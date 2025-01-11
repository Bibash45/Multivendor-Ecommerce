import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { getNav } from "../navigation";
import { CgLogOut } from "react-icons/cg";

const Sidebar = () => {
  const { pathname } = useLocation();

  const [allNav, setAllNav] = useState([]);
  useEffect(() => {
    const navs = getNav("admin");
    setAllNav(navs);
  }, []);

  return (
    <div>
      <div></div>

      <div
        className={`w-[260px] fixed bg-[#e6e7fb] z-50 top-0 h-screen shadow-[0_0_15px_0_rgb(34_41_47_/_5%)] transition-all`}
      >
        {/* logo */}
        <div className="h-[70px] flex justify-center items-center ">
          <Link to="/" className="w-[180px] h-[50px]">
            <img
              src="http://localhost:3000/images/logo.png"
              alt=""
              className="w-full h-full"
            />
          </Link>
        </div>

        {/* navs list */}
        <div className="px-[16px]">
          <ul>
            {allNav.map((nav, i) => {
              return (
                <li key={i}>
                  <Link
                    to={nav.path}
                    className={`${
                      pathname === nav.path
                        ? "bg-blue-600 shadow-indigo-500/50 text-white duration-500 "
                        : "text-[#030811] font-bold duration-200"
                    } px-[12px] py-[9px] rounded-sm flex justify-start items-center gap-[12px] hover:pl-4 transition-all w-full mb-1 `}
                  >
                    <span>{nav.icon}</span>
                    <span>{nav.title}</span>
                  </Link>
                </li>
              );
            })}
            <li>
              <button className="text-[#030811] font-bold duration-200  px-[12px] py-[9px] rounded-sm flex justify-start items-center gap-[12px] hover:pl-4 transition-all w-full mb-1 ">
                <span><CgLogOut size={20}  /></span>
                <span>Logout</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
