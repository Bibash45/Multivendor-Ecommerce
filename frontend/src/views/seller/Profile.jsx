import React from "react";
import { IoImageOutline } from "react-icons/io5";
import { FadeLoader } from "react-spinners";
import { FaRegEdit } from "react-icons/fa";

const Profile = () => {
  const image = false;
  const loader = false;
  const status = "active";
  const userInfo = true;
  return (
    <div className="px-2 lg:px-7 py-5 ">
      <div className="w-full flex flex-wrap">
        <div className="w-full md:w-6/12 ">
          <div className="w-full p-4 bg-[#6a5fdf] rounded-md text-[#d0d2d6]">
            <div className="flex justify-center items-center py-3">
              {!image ? (
                <label
                  className="flex justify-center items-center flex-col h-[150px] w-[200px] cursor-pointer border border-dashed hover:border-red-500 border-[#d0d2d6] relative"
                  htmlFor="img"
                >
                  <span>
                    <IoImageOutline size={22} />
                  </span>
                  <span>Select Image</span>
                  {loader && (
                    <div className="bg-slate-600 absolute left-0 top-0 h-full w-full opacity-60 flex justify-center items-center z-20">
                      <span>
                        <FadeLoader />
                      </span>
                    </div>
                  )}
                </label>
              ) : (
                <label
                  htmlFor="img"
                  className="h-[150px] w-[200px] relative p-3 cursor-pointer overflow-hidden"
                >
                  <img
                    src="http://localhost:3000/images/admin.jpg"
                    alt="profile"
                    className="h-full w-full object-contain"
                  />
                  {loader && (
                    <div className="bg-slate-600 absolute left-0 top-0 h-full w-full opacity-60 flex justify-center items-center z-20">
                      <span>
                        <FadeLoader />
                      </span>
                    </div>
                  )}
                </label>
              )}
              <input type="file" className="hidden" id="img" />
            </div>

            <div className="px-0 md:px-5 py-2 ">
              <div className="flex justify-between text-sm flex-col gap-2 p-4 bg-slate-800 rounded-md relative ">
                <span className="p-[6px] bg-yellow-500 rounded hover:shadow-lg hover:shadow-yellow-500/50 absolute right-2 top-2 cursor-pointer">
                  <FaRegEdit />
                </span>
                <div className="flex gap-2">
                  <span>Name:</span>
                  <span>Bibash Chaudhary</span>
                </div>
                <div className="flex gap-2">
                  <span>Email:</span>
                  <span>Bibash Chaudhary</span>
                </div>
                <div className="flex gap-2">
                  <span>Role:</span>
                  <span>Seller</span>
                </div>
                <div className="flex gap-2">
                  <span>Status:</span>
                  <span>Active</span>
                </div>
                <div className="flex gap-2">
                  <span>Payment Account:</span>
                  <p>
                    {status === "active" ? (
                      <span className="bg-green-500 text-white text-xs cursor-pointer font-normal ml-2 px-2 py-0.5 rounded">
                        Pending
                      </span>
                    ) : (
                      <span className="bg-blue-500 text-white text-xs cursor-pointer font-normal ml-2 px-2 py-0.5 rounded">
                        Click Active
                      </span>
                    )}
                  </p>
                </div>
              </div>
            </div>

            <div className="px-0 md:px-5 py-2">
              {!userInfo ? (
                <form>
                  <div className="flex flex-col w-full gap-1 mb-2">
                    <label htmlFor="Shop">Shop Name</label>
                    <input
                      type="text"
                      name="shopName"
                      id="Shop"
                      placeholder="enter your shop name"
                      className="bg-[#6a5fdf] px-4 py-2 focus:border-indigo-500 outline-none  rounded-md border border-slate-700 text-white"
                    />
                  </div>
                  <div className="flex flex-col w-full gap-1 mb-2">
                    <label htmlFor="province">Province Name</label>
                    <input
                      type="text"
                      name="province"
                      id="province"
                      placeholder="province name"
                      className="bg-[#6a5fdf] px-4 py-2 focus:border-indigo-500 outline-none  rounded-md border border-slate-700 text-white"
                    />
                  </div>
                  <div className="flex flex-col w-full gap-1 mb-2">
                    <label htmlFor="name">District Name</label>
                    <input
                      type="text"
                      name="district"
                      id="district"
                      placeholder="enter district name"
                      className="bg-[#6a5fdf] px-4 py-2 focus:border-indigo-500 outline-none  rounded-md border border-slate-700 text-white"
                    />
                  </div>
                  <div className="flex flex-col w-full gap-1 mb-2">
                    <label htmlFor="subdis">Sub District Name</label>
                    <input
                      type="text"
                      name="subdis"
                      id="subdis"
                      placeholder="enter sub-district name"
                      className="bg-[#6a5fdf] px-4 py-2 focus:border-indigo-500 outline-none  rounded-md border border-slate-700 text-white"
                    />
                  </div>
                  <div className="flex">
                    <button
                      className="bg-red-500  hover:shadow-red-500/40 hover:shadow-md text-white rounded-md px-7 py-2 my-2"
                      type="submit"
                    >
                      Save Changes
                    </button>
                  </div>
                </form>
              ) : (
                <div className="flex justify-between text-sm flex-col gap-2 p-4 bg-slate-800 rounded-md relative ">
                  <span className="p-[6px] bg-yellow-500 rounded hover:shadow-lg hover:shadow-yellow-500/50 absolute right-2 top-2 cursor-pointer">
                    <FaRegEdit />
                  </span>
                  <div className="flex gap-2">
                    <span>Shop Name:</span>
                    <span>Bibash pvt.ltd.</span>
                  </div>
                  <div className="flex gap-2">
                    <span>Province:</span>
                    <span>Bagmati</span>
                  </div>
                  <div className="flex gap-2">
                    <span>District:</span>
                    <span>Kathmandu</span>
                  </div>
                  <div className="flex gap-2">
                    <span>Sub-District:</span>
                    <span>Kalanki</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="w-full md:w-6/12 ">
          <div className="w-full pl-0 md:pl-7 mt-6 md:mt-0 ">
            <div className="bg-[#6a5fdf] rounded-md text-[#d0d2d6] p-4">
              <h1 className="text-[#d0d2d6] text-lg mb-3 font-semibold">Change Password</h1>
              <form>
                <div className="flex flex-col w-full gap-1 mb-2">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="email"
                    className="bg-[#6a5fdf] px-4 py-2 focus:border-indigo-500 outline-none  rounded-md border border-slate-700 text-white"
                  />
                </div>
                <div className="flex flex-col w-full gap-1 mb-2">
                  <label htmlFor="o_password">Old Password</label>
                  <input
                    type="password"
                    name="o_password"
                    id="o_password"
                    placeholder="Old Password"
                    className="bg-[#6a5fdf] px-4 py-2 focus:border-indigo-500 outline-none  rounded-md border border-slate-700 text-white"
                  />
                </div>
                <div className="flex flex-col w-full gap-1 mb-2">
                  <label htmlFor="n_password">New Password</label>
                  <input
                    type="password"
                    name="n_password"
                    id="n_password"
                    placeholder="New Password"
                    className="bg-[#6a5fdf] px-4 py-2 focus:border-indigo-500 outline-none  rounded-md border border-slate-700 text-white"
                  />
                </div>

                <div className="flex">
                  <button
                    className="bg-red-500  hover:shadow-red-500/40 hover:shadow-md text-white rounded-md px-7 py-2 my-2"
                    type="submit"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
