import React from 'react'
import penthouse from "./assets/penthouse.png"
function PropertyModal() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="h-[20rem] w-[40rem] bg-white shadow-[0_4px_40px_rgba(0,0,0,0.25)] rounded-[50px] p-[10px_10px_40px_10px]">
        <div className=''>
          <img src={penthouse} alt="" className='' />
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default PropertyModal