import React, { forwardRef } from "react";
import { FixedSizeList as List } from "react-window";

function handleOnWheel({ deltaY }) {
  console.log("handleOnWheel", deltaY);
}
const outerElementType = forwardRef((props, ref) => {
  return <div ref={ref} onWheel={handleOnWheel} {...props} />;
});

const PaymentRequest = () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const Row = ({ index, style }) => {
    return (
      <div style={style} className="flex text-sm text-white font-medium">
        <div className="w-[25%] p-2 whitespace-nowrap ">{index + 1}</div>
        <div className="w-[25%] p-2 whitespace-nowrap ">$200</div>
        <div className="w-[25%] p-2 whitespace-nowrap ">
          <span className="bg-violet-500 px-[5px] py-[1px] rounded-md text-xm">
            Pending
          </span>
        </div>
        <div className="w-[25%] p-2 whitespace-nowrap ">10 Nov 2025</div>
        <div className="w-[25%] p-2 whitespace-nowrap ">
          <button className="bg-indigo-500 shadow-lg hover:shadow-indigo-500/50 px-3 py-[2px] cursor-pointer text-white rounded-sm text-sm">
            Confirm
          </button>
        </div>
      </div>
    );
  };
  return (
    <div className="px-2 lg:px-7 pt-5">
      <div className="w-full p-4 bg-[#6a5fdf] rounded-md">
        <h2 className="text-xl font-medium pb-5 text-[#d0d2d6]">
          Withdrawal Request
        </h2>
        <div className="w-full ">
          <div className="w-full overflow-x-auto">
            <div className="flex bg-[#a7a3de] uppercase text-xs font-bold min-w-[340px] rounded-md ">
              <div className="w-[25%] p-2 ">No</div>
              <div className="w-[25%] p-2 ">amount</div>
              <div className="w-[25%] p-2">status</div>
              <div className="w-[25%] p-2 ">date</div>
              <div className="w-[25%] p-2 ">action</div>
            </div>
            {
              <List
                style={{ minWidth: "340px" }}
                className="List"
                height={700}
                itemCount={900}
                itemSize={35}
                outerElementType={outerElementType}
              >
                {Row}
              </List>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentRequest;
