import React from "react";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";

function Slider() {

  return (
    <div className="styled-container w-screen h-screen flex relative ">
      <div className="styled-arrow w-[50px] h-[50px] bg-gray-500 rounded-full flex items-center justify-center absolute top-0 bottom-0 m-auto left-[10px] cursor-pointer opacity-50 ml-4">
        <ArrowLeftIcon />
      </div>

      <div className="styled-wrapper h-full w-screen flex">
        <div className="styled-slide flex items-center w-screen h-screen bg-gray-200">
          <div className="styled-image flex-[1] h-full w-screen">
            <img src="https://i.postimg.cc/QtfTsY3q/b-mo2-BEZpskd7-Xrg9-Nw-Cg-transformed.png" alt="" />
            
          </div>

          <div className="styled-info flex-[1] p-[50px]">
            <h1 className="styled-title text-[70px] font-bold">SUMMER SALE</h1>
            <p className="styled-description my-[50px] mx-[0px] text-[20px] tracking-widest">HURRY WHILE STOCKS LAST!!!!</p>
            <button className="styled-button border border-black p-[10px] bg-transparent hover:bg-black hover:text-white">CLICK HERE</button>
          </div>
        </div>

        {/* <div className="styled-slide flex items-center w-screen h-screen bg-gray-200">
          <div className="styled-image flex-[1] h-full w-screen">
            <img src="https://i.postimg.cc/NfjFx0B5/Us-Md-KJQLZc-Xz-NCp9-Q720a-transformed.png" alt=""  className="w-4/5"/>
            
          </div>

          <div className="styled-info flex-[1] p-[50px]">
            <h1 className="styled-title text-[70px] font-bold">SUMMER SALE</h1>
            <p className="styled-description my-[50px] mx-[0px] text-[20px] tracking-widest">HURRY WHILE STOCKS LAST!!!!</p>
            <button className="styled-button border border-black  p-[10px] bg-transparent hover:bg-black hover:text-white">CLICK HERE</button>
          </div>
        </div> */}
      </div>

      <div className="styled-arrow w-[50px] h-[50px] bg-gray-500 rounded-full flex items-center justify-center absolute top-0 bottom-0 m-auto right-[10px] cursor-pointer opacity-50 mr-4">
        <ArrowRightOutlinedIcon />
      </div>
    </div>
  );
}

export default Slider;
