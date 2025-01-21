import React, { useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "../Pagination";
import { FaEdit, FaTrash } from "react-icons/fa";
import { BsFillImageFill } from "react-icons/bs";
import { IoClose } from "react-icons/io5";

const Category = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState();
  const [perPage, setPerpage] = useState(5);
  const [show, setShow] = useState(false);

  return (
    <div className="px-2 lg:px-7 pt-5">
      <div className="flex lg:hidden justify-between items-center mb-5 p-4 bg-[#6a5fdf] rounded-md">
        <h1 className="text-[#d0d2d6] font-semibold text-lg">Category</h1>
        <button
          onClick={() => setShow(true)}
          className="bg-red-500 shadow-lg hover:shadow-red-500/40 px-4 py-2 cursor-pointer text-white rounded-sm text-sm"
        >
          Add
        </button>
      </div>

      <div className="flex flex-wrap w-full ">
        <div className="w-full lg:w-7/12">
          {/* First column */}
          <div className="w-full p-4 bg-[#6a5fdf] rounded-md">
            {/* header */}
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
              <table className="w-full text-sm text-[#d0d2d6] text-left">
                <thead className="text-sm text-[#d0d2d6] uppercase border-b border-slate-700">
                  <tr>
                    <th scope="col" className="py-3 px-4">
                      No
                    </th>
                    <th scope="col" className="py-3 px-4">
                      Image
                    </th>
                    <th scope="col" className="py-3 px-4">
                      Name
                    </th>
                    <th scope="col" className="py-3 px-4">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 3, 4, 5].map((item, i) => (
                    <tr>
                      <td
                        key={i}
                        className="py-1 px-4 font-medium whitespace-nowrap "
                      >
                        {item}
                      </td>
                      <td className="py-1 px-4 font-medium whitespace-nowrap">
                        <img
                          className="w-[45px] h-[45px]"
                          src={`http://localhost:3000/images/category/${item}.jpg`}
                          alt=""
                        />
                      </td>
                      <td className="py-1 px-4 font-medium whitespace-nowrap">
                        Tshirt
                      </td>
                      <td className="py-1 px-4 font-medium whitespace-nowrap">
                        <div className="flex justify-start items-center gap-4">
                          <Link className="p-[6px]  bg-yellow-500 rounded hover:shadow-lg hover:shadow-yellow-500/50 text-white">
                            <FaEdit />
                          </Link>
                          <Link className="p-[6px]  bg-red-500 rounded hover:shadow-lg hover:shadow-red-500/50 text-white">
                            <FaTrash />
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
        {/* Second column */}
        <div
          className={` w-[320px]  lg:w-5/12 translate-x-100 lg:relative lg:right-0 fixed ${
            show ? "right-0" : "-right-[340px]"
          } z-[888] top-0 transition-all duration-500`}
        >
          <div className="w-full pl-5 ">
            <div className="bg-[#6a5fdf] h-screen lg:h-auto px-3 py-2 lg:rounded-md text-[#d0d2d6]">
              <div className="flex justify-between items-center mb-4">
                <h1 className="text-center text-[#d0d2d6] font-semibold text-xl mb-4 w-full">
                  Add Category
                </h1>

                <div
                  className="block lg:hidden bg-slate-400 rounded-full text-white p-1 mb-2 hover:bg-[#6a5fdf]"
                  onClick={() => setShow(false)}
                >
                  <IoClose />
                </div>
              </div>
              <form>
                <div className="flex flex-col w-full gap-1 mb-3">
                  <label htmlFor="name">Category Name</label>
                  <input
                    className="bg-white px-4 py-2 focus:border-indigo-500 outline-none  rounded-md border border-slate-700 text-white"
                    type="text"
                    id="name"
                    name="category_name"
                    placeholder="Category Name"
                  />
                </div>
                <div>
                  <label
                    className="flex justify-center items-center flex-col h-[238px] cursor-pointer border border-dashed hover:border-red-500 w-full border-[#d0d2d6]"
                    htmlFor="image"
                  >
                    <span>
                      <BsFillImageFill />
                    </span>
                    <span>Select Image</span>
                  </label>
                  <input
                    type="file"
                    name="image"
                    id="image"
                    className="hidden"
                  />
                  <div>
                    <button
                      className="bg-red-500 w-full hover:shadow-red-500/40 hover:shadow-md text-white rounded-md px-7 py-2 my-2"
                      type="submit"
                    >
                      Add Category
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
