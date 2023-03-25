import React from "react";
// import penthouse from "./assets/penthouse.png";
function Modal({ children, handlemodal, toggleBuyTokens }) {
  // console.log(setIsModal)
  return (
    <>
      <div className="w-screen h-screen fixed z-30 left-0 right-0 top-0 bottom-0 modal-blur" onClick={toggleBuyTokens}/>
      <div className="w-screen h-screen flex items-center justify-center absolute z-40">
        <div className="absolute h-[26rem] w-[42rem] bg-white shadow-[0_4px_40px_rgba(0,0,0,0.25)] rounded-[40px] p-[10px_10px_0px_10px]">
          {/* Cross */}
          <div
            className="h-10 w-10 rounded-full bg-[#E9E9E9] flex items-center justify-center text-l absolute right-4 top-4 cursor-pointer z-10"
            onClick={toggleBuyTokens || handlemodal}
          >
            &#10005;
          </div>
          <div className="">
            {/* <BuyToken /> */}
            {children}
            {/* <Property/> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
