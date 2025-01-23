import React, { useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "../Pagination";
import { FaEye } from "react-icons/fa";

const SellerRequest = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState();
  const [perPage, setPerpage] = useState(5);
  const [show, setShow] = useState(false);
  return (
    <div className="px-2 lg:px-7 pt-5">
      <h1 className="text-[20px] font-bold mb-3 ml-1">Deactivate Seller</h1>

      <div className="w-full p-4 bg-[#6a5fdf] rounded-md">
        {/* Header */}
        <div className="flex justify-between items-center">
          <select
            onChange={(e) => setPerpage(e.target.value)}
            className="px-4 py-2 focus:border-indigo-500 outline-none bg-[#6a5fdf] border border-slate-700 rounded-md text-white"
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
          </select>
          <input
            className="bg-[#6a5fdf] px-4 py-2 focus:border-indigo-500 outline-none  rounded-md border border-slate-700 text-white"
            type="text"
            placeholder="search"
          />
        </div>

        {/* table */}
        <div className="relative overflow-x-auto">
          <table className="table-auto w-full text-sm text-[#d0d2d6] text-left">
            <thead className="text-sm text-[#d0d2d6] uppercase border-b border-slate-700">
              <tr>
                <th scope="col" className="py-3 px-4">
                  No
                </th>
                <th scope="col" className="py-3 px-4">
                  Name
                </th>
                <th scope="col" className="py-3 px-4">
                  Email
                </th>

                <th scope="col" className="py-3 px-4">
                  Payment status
                </th>
                <th scope="col" className="py-3 px-4">
                  Status
                </th>
                <th scope="col" className="py-3 px-4">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5].map((item, i) => (
                <tr className="border-b border-slate-600">
                  <td
                    key={i}
                    className="py-2 px-4 font-medium whitespace-nowrap "
                  >
                    {item}
                  </td>
                
                  <td className="py-2 px-4 font-medium whitespace-nowrap">
                    Bibash
                  </td>
                  <td className="py-2 px-4 font-medium whitespace-nowrap">
                    bibashcdry46@gmail.com
                  </td>

                  <td className="py-2 px-4 font-medium whitespace-nowrap">
                    Inactive
                  </td>

                  <td className="py-2 px-4 font-medium whitespace-nowrap">
                    Pending
                  </td>

                  <td className="py-2 px-4 font-medium ewhitespace-nowrap">
                    <div className="flex justify-start items-center gap-4">
                      <Link className="p-[6px]  bg-yellow-500 rounded hover:shadow-lg hover:shadow-yellow-500/50 text-white">
                        <FaEye />
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="w-full flex justify-end mt-4 bottom-4 right-4 ">
          <Pagination
            pageNumber={currentPage}
            setPageNumber={setCurrentPage}
            totalItem={50}
            perPage={perPage}
            showItem={3}
          />
        </div>
      </div>
    </div>
  );
};

export default SellerRequest;
