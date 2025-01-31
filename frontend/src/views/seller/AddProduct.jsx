import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaImages } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const AddProduct = () => {
  const categorys = [
    {
      id: 1,
      name: "Sports",
    },
    {
      id: 2,
      name: "Tshirt",
    },
    {
      id: 3,
      name: "Mobile",
    },
    {
      id: 4,
      name: "Computer",
    },
    {
      id: 5,
      name: "Mobile",
    },
    {
      id: 6,
      name: "Pant",
    },
  ];

  const [state, setState] = useState({
    name: "",
    description: "",
    discount: "",
    price: "",
    brand: "",
    stock: "",
  });
  const inputHandle = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const [cateShow, setCateShow] = useState(false);
  const [category, setCategory] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [allCategory, setAllCategory] = useState(categorys);

  const categorySearch = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    if (value) {
      let srcValue = allCategory.filter(
        (c) => c.name.toLowerCase().indexOf(value.toLowerCase()) > -1
      );
      setAllCategory(srcValue);
    } else {
      setAllCategory(categorys);
    }
  };

  const [images, setImages] = useState([]);
  const [imageShow, setImageShow] = useState([]);
  const imageHandle = (e) => {
    const files = e.target.files;
    const length = files.length;
    if (length > 0) {
      setImages([...images, ...files]);
      let imageUrl = [];
      for (let i = 0; i < length; i++) {
        imageUrl.push({ url: URL.createObjectURL(files[i]) });
      }
      setImageShow([...imageShow, ...imageUrl]);
    }
  };

  const changeImage = (img, index) => {
    if (img) {
      let tempUrl = imageShow;
      let tempImages = images;

      tempImages[index] = img;
      tempUrl[index] = { url: URL.createObjectURL(img) };

      setImageShow([...tempUrl]);
      setImages([...tempImages]);
    }
  };

  const removeImage = (index) => {
    const filterImage = images.filter((img, i) => {
      return i !== index;
    });
    const filterImageUrl = imageShow.filter((img, i) => {
      return i !== index;
    });
    setImages(filterImage);
    setImageShow(filterImageUrl);
  };

  return (
    <div className="px-2 lg:px-7 pt-5">
      <div className="w-full p-4 bg-[#6a5fdf] rounded-md ">
        <div className="flex justify-between items-center pb-4">
          <h1 className="text-[#d0d2d6] text-xl font-semibold ">Add Product</h1>
          <Link to={`/seller/dashboard/all-product`} className="bg-blue-500 hover:shadow-blue-500/50 hover:shadow-lg text-white rounded-md px-7 py-2 my-2">
            All Product
          </Link>
        </div>
        {/* Form  */}
        <div>
          <form>
            <div className="flex flex-col mb-3 md:flex-row gap-4 w-full text-[#d0d2d6] ">
              <div className="flex flex-col w-full gap-1">
                <label htmlFor="name">Product Name</label>
                <input
                  onChange={inputHandle}
                  value={state.name}
                  type="text"
                  name="name"
                  id="name"
                  placeholder="enter product"
                  className="bg-[#6a5fdf] px-4 py-2 focus:border-indigo-500 outline-none  rounded-md border border-slate-700 text-white"
                />
              </div>
              <div className="flex flex-col w-full gap-1">
                <label htmlFor="brand">Brand Name</label>
                <input
                  onChange={inputHandle}
                  value={state.brand}
                  type="text"
                  name="brand"
                  id="brand"
                  placeholder="enter brand"
                  className="bg-[#6a5fdf] px-4 py-2 focus:border-indigo-500 outline-none  rounded-md border border-slate-700 text-white"
                />
              </div>
            </div>
            <div className="flex flex-col mb-3 md:flex-row gap-4 w-full text-[#d0d2d6] ">
              <div className="flex flex-col w-full gap-1 relative">
                <label htmlFor="category">Product Category </label>
                <input
                  readOnly
                  onClick={() => setCateShow(!cateShow)}
                  value={category}
                  type="text"
                  name="category"
                  id="category"
                  placeholder="enter category"
                  className="bg-[#6a5fdf] px-4 py-2 focus:border-indigo-500 outline-none  rounded-md border border-slate-700 text-white"
                />
                <div
                  className={`absolute top-[101%] bg-slate-500 w-full transition-all ${
                    cateShow ? "scale-100" : "scale-0"
                  } shadow-sm shadow-slate-600 rounded-md`}
                >
                  <div className="w-full px-4 py-2 fixed">
                    <input
                      value={searchValue}
                      onChange={categorySearch}
                      type="text"
                      placeholder="search"
                      className="px-3 py-1 w-full focus:border-indigo-500 outline-none bg-transparent border border-slate-700 rounded-md text-[#d0d2d6] overflow-hidden "
                    />
                  </div>
                  <div className="pt-14">
                    <div className="flex justify-start items-start flex-col h-[200px] overflow-x-scroll ">
                      {allCategory.map((c, i) => (
                        <span
                          key={i}
                          className={`px-4 py-1 my-[1px] hover:bg-indigo-500 hover:text-white hover:shadow-lg w-full cursor-pointer ${
                            category === c.name && "bg-indigo-500"
                          }`}
                          onClick={() => {
                            setCateShow(false);
                            setCategory(c.name);
                            setSearchValue("");
                            setAllCategory(categorys);
                          }}
                        >
                          {c.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-full gap-1">
                <label htmlFor="stock">Product Stock</label>
                <input
                  onChange={inputHandle}
                  value={state.stock}
                  type="text"
                  name="stock"
                  id="stock"
                  placeholder="enter stock"
                  className="bg-[#6a5fdf] px-4 py-2 focus:border-indigo-500 outline-none  rounded-md border border-slate-700 text-white"
                />
              </div>
            </div>
            <div className="flex flex-col mb-3 md:flex-row gap-4 w-full text-[#d0d2d6] ">
              <div className="flex flex-col w-full gap-1">
                <label htmlFor="price">Product Price</label>
                <input
                  onChange={inputHandle}
                  value={state.price}
                  type="number"
                  name="price"
                  id="price"
                  placeholder="enter price"
                  className="bg-[#6a5fdf] px-4 py-2 focus:border-indigo-500 outline-none  rounded-md border border-slate-700 text-white"
                />
              </div>
              <div className="flex flex-col w-full gap-1">
                <label htmlFor="discount">Discount</label>
                <input
                  onChange={inputHandle}
                  value={state.brand}
                  type="number"
                  name="discount"
                  id="discount"
                  placeholder="enter discount by %"
                  className="bg-[#6a5fdf] px-4 py-2 focus:border-indigo-500 outline-none  rounded-md border border-slate-700 text-white"
                />
              </div>
            </div>
            <div className="flex flex-col w-full gap-1 mb-5">
              <label htmlFor="description">Description</label>
              <textarea
                onChange={inputHandle}
                value={state.description}
                name="description"
                id="description"
                cols="10"
                rows="5"
                placeholder="enter description"
                className="bg-[#6a5fdf] px-4 py-2 focus:border-indigo-500 outline-none  rounded-md border border-slate-700 text-white"
              ></textarea>
            </div>

            <div className="grid lg:grid-cols-4 grid:cols-1 md:grid-cols-3 sm:grid-cols-2 sm:gap-4 md:gap-4 gap-3 w-full text-[#d0d2d6] mb-4">
              {imageShow.map((image, i) => (
                <div className="h-[180px] relative ">
                  <label htmlFor={i}>
                    <img
                      className="w-full h-full rounded-sm"
                      src={image.url}
                      alt=""
                    />
                  </label>
                  <input
                    type="file"
                    id={i}
                    className="hidden"
                    onChange={(e) => changeImage(e.target.files[0], i)}
                  />
                  <span
                    onClick={() => removeImage(i)}
                    className="p-2 z-10 cursor-pointer bg-slate-700 hover:shadow-lg hover:shadow-slate-400/50 text-white absolute top-1 right-1 rounded-full"
                  >
                    <RxCross2 />
                  </span>
                </div>
              ))}
              <label
                htmlFor="image"
                className="flex justify-center items-center flex-col h-[180px] cursor-pointer border border-dashed hover:border-red-500 w-full text-[#d0d2d6]"
              >
                <span>
                  <FaImages />
                </span>
                <span>Select Image</span>
              </label>
              <input
                onChange={imageHandle}
                className="hidden"
                type="file"
                id="image"
                multiple
              />
            </div>
            <div className="flex">
              <button
                className="bg-red-500  hover:shadow-red-500/40 hover:shadow-md text-white rounded-md px-7 py-2 my-2"
                type="submit"
              >
                Add Category
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
