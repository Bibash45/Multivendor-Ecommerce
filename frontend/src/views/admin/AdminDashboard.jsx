import React from "react";
import { MdCurrencyExchange } from "react-icons/md";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { FaUsers } from "react-icons/fa6";
import { FaCartArrowDown } from "react-icons/fa6";
import Chart from "react-apexcharts";

const AdminDashboard = () => {
  const state = {
    series: [
      {
        name: "Orders",
        data: [40, 70, 50, 90, 60, 50,89,77,64,11,32],
      },
      {
        name: "Revenue",
        data: [49, 7, 50, 9, 6, 50, 78, 54,12,4,8],
      },
      {
        name: "Sellers",
        data: [34, 76, 50, 45, 6, 57, 36, 14.67,33,89],
      },
    ],
    options: {
      color: ["#181ee8", "#181ee8"],
      plotOptions: {
        radius: 30,
      },
      charts: {
        background: "transparent",
        foreColor: "#d0d2d6",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        curve: ["smooth", "straight", "stepline"],
        lineCap: "butt",
        colors: "#f0f0f0",
        width: 0.5,
        dashArray: 0,
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dev",
        ],
      },
      legend: {
        position: "top",
      },
    },
  };

  return (
    <div className="px-2 md:px-7 py-5">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4  gap-7 ">
        <div className="flex justify-between items-center p-5 bg-[#fae8e8] rounded-md gap-3">
          <div className="flex flex-col justify-start items-start text-[#5c5a5a] ">
            <h2 className="text-3xl font-bold">$3434</h2>
            <span className="text-md font-medium">Total Sales</span>
          </div>
          <div className="w-[40px] h-[47px] rounded-full bg-[#fa0305] flex justify-center items-center text-xl">
            <MdCurrencyExchange color="white" className="shadow-lg" />
          </div>
        </div>

        <div className="flex justify-between items-center p-5 bg-[#fde2ff] rounded-md gap-3">
          <div className="flex flex-col justify-start items-start text-[#5c5a5a] ">
            <h2 className="text-3xl font-bold">50</h2>
            <span className="text-md font-medium">Products</span>
          </div>
          <div className="w-[40px] h-[47px] rounded-full bg-[#760077] flex justify-center items-center text-xl">
            <MdOutlineProductionQuantityLimits
              color="white"
              className="shadow-lg"
            />
          </div>
        </div>

        <div className="flex justify-between items-center p-5 bg-[#e9feea] rounded-md gap-3">
          <div className="flex flex-col justify-start items-start text-[#5c5a5a] ">
            <h2 className="text-3xl font-bold">10</h2>
            <span className="text-md font-medium">Saler</span>
          </div>
          <div className="w-[40px] h-[47px] rounded-full bg-[#038000] flex justify-center items-center text-xl">
            <FaUsers color="white" className="shadow-lg" />
          </div>
        </div>
        <div className="flex justify-between items-center p-5 bg-[#ecebff] rounded-md gap-3">
          <div className="flex flex-col justify-start items-start text-[#5c5a5a] ">
            <h2 className="text-3xl font-bold">54</h2>
            <span className="text-md font-medium">Orders</span>
          </div>
          <div className="w-[40px] h-[47px] rounded-full bg-purple-600 flex justify-center items-center text-xl">
            <FaCartArrowDown color="white" className="shadow-lg" />
          </div>
        </div>
      </div>
      <div className="w-full flex flex-wrap mt-7">
        <div className="w-full lg:w-7/12 lg:pr-3">
          <div className="w-full bg-[#6a5fdf] p-4 rounded-md">
            <Chart
              options={state.options}
              series={state.series}
              type="bar"
              height={350}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
