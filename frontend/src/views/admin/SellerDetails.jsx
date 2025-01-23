import React from "react";
import { Link } from "react-router-dom";

const SellerDetails = () => {
  return (
    <div className="px-2 lg:px-7 pt-5">
      <h1 className="text-[20px] font-bold mb-3 ml-1">Seller Details</h1>
      <div className="w-full p-4 bg-[#6a5fdf] rounded-md">
        <div className="w-full flex flex-wrap text-[#d0d2d6] ">
          <div className="w-3/12 flex justify-center items-center py-3">
            <div>
              <img
                className="w-full h-[230px]"
                src="http://localhost:3000/images/demo.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="w-4/12 ">
            <div className="px-0 md:px-5 py-2">
              <div className="py-2 text-lg">
                <h2>Information</h2>
              </div>
              <div className="flex justify-between text-sm flex-col gap-2 p-4 bg-violet-300 rounded-md">
                <div className="flex gap-2 text-black font-semibold">
                  <span>Name: </span>
                  <span>Bibash Chaudhary</span>
                </div>
                <div className="flex gap-2 text-black font-semibold">
                  <span>Email: </span>
                  <span className="underline">
                    <Link to="mailto:bibashcdry46@gmail.com">
                      bibashchaudhary@gmail.com
                    </Link>
                  </span>
                </div>
                <div className="flex gap-2 text-black font-semibold">
                  <span>Role: </span>
                  <span>Seller</span>
                </div>
                <div className="flex gap-2 text-black font-semibold">
                  <span>Status: </span>
                  <span>Active</span>
                </div>
                <div className="flex gap-2 text-black font-semibold">
                  <span>Payment Status: </span>
                  <span>Active</span>
                </div>
              </div>
            </div>
          </div>

          <div className="w-4/12 ">
            <div className="px-0 md:px-5 py-2">
              <div className="py-2 text-lg">
                <h2>Address</h2>
              </div>
              <div className="flex justify-between text-sm flex-col gap-2 p-4 bg-violet-300 rounded-md">
                <div className="flex gap-2 text-black font-semibold">
                  <span>Shop Name: </span>
                  <span>Market Nepal</span>
                </div>
                <div className="flex gap-2 text-black font-semibold">
                  <span>Division: </span>
                  <span className="underline">
                    <Link to="mailto:bibashcdry46@gmail.com">Bagmati</Link>
                  </span>
                </div>
                <div className="flex gap-2 text-black font-semibold">
                  <span>District: </span>
                  <span>Kathamndu</span>
                </div>
                <div className="flex gap-2 text-black font-semibold">
                  <span>State: </span>
                  <span>Bagmati</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <form>
            <div className="flex gap-4 py-3">
              <select className="px-4 py-2 focus:border-indigo-500 outline-none bg-[#6a5fdf] border border-slate-700 rounded-md text-white">
                <option value="">Select Status</option>
                <option value="active">Active</option>
                <option value="deactive">Deactive</option>
              </select>
              <button className="bg-red-500 shadow-lg hover:shadow-red-500/40 px-4 py-2 cursor-pointer text-white rounded-md text-sm w-[141.1px]">
                Add Category
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SellerDetails;
