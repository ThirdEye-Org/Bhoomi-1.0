import React from "react";
// import penthouse from "./assets/penthouse.png";
import BuyToken from "./BuyToken";
import Property from "./property";
function Modal() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="relative h-[26rem] w-[45rem] bg-white shadow-[0_4px_40px_rgba(0,0,0,0.25)] rounded-[50px] p-[10px_10px_30px_10px]">
        {/* Cross */}
        <div className="h-10 w-10 rounded-full bg-[#E9E9E9] flex items-center justify-center text-l absolute right-4 top-4 cursor-pointer z-10">
          &#10005;
        </div>
        <div>
          {/* <BuyToken /> */}
          <Property/>
        </div>
      </div>
    </div>
  );
}

export default Modal;
