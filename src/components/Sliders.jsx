import React from "react";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";

function Slider() {
  return (
    <>
      {/* <div className="styled-container w-full h-screen flex bg-orange-400 relative"> */}
      <div className="styled-arrow w-[50px] h-[50px] bg-red-100 rounded-full flex items-center justify-center absolute top-0 bottom-0 m-auto left-[10px] cursor-pointer opacity-50">
        <ArrowLeftIcon />
      </div>

      {/* <div className="styled-wrapper h-full">
        <div className="styled-slide w-screen h-screen flex items-center">
          <div className="image-container flex-1 h-full">
            <div>
            <section className="relative bg-white">
        <img
          className="absolute inset-0 object-[75%] sm:object-[25%] object-cover w-full h-full opacity-50 sm:opacity-100"
          src="https://images.pexels.com/photos/3760818/pexels-photo-3760818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Model showcasing dress"
        />

        <div className="hidden sm:block sm:inset-0 sm:absolute"></div>

        <div className="relative px-4 py-32 mx-auto max-w-screen-xl lg:h-screen lg:items-center lg:flex">
          <div className="max-w-xl text-center sm:text-left">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              SUMMER{" "}
              <span className="font-extrabold text-orange-500">SALE!</span>
            </h1>

            <p className="max-w-lg mt-4 sm:leading-relaxed sm:text-xl">
              30% OFF FOR ALL NEW ARRIVALS!!
            </p>

            <div className="flex flex-wrap mt-8 text-center gap-4">
              <button className="block w-full px-12 py-3 text-sm font-medium text-white  rounded-full shadow bg-orange-600 sm:w-auto active:bg-orange-400 hover:bg-orange-700 focus:outline-none">
                Get Started
              </button>

              <button className="block w-full px-12 py-3 text-sm font-medium text-white rounded-full shadow bg-orange-600 sm:w-auto active:bg-orange-400 hover:bg-orange-700 focus:outline-none">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

            </div>
          </div>
          <div className="info-container flex-1 p-[50px]">
            <h1 className="text-[70px] font-bold">SUMMER SALE!</h1>
            <p className="my-[50px] text-[20px] font-medium">DON'T COMPROMISE ON STYLE! GET 30% OFF FOR NEW ARRIVALS!
            </p>
            <button className="border p-[10px] text-[20px] bg-transpare nt cursor-pointer"> SHOW NOW</button>
          </div>
        </div>
      </div> */}

      <section className="relative bg-white">
        <img
          className="absolute inset-0 object-[75%] sm:object-[25%] object-cover w-full h-full opacity-50 sm:opacity-100"
          src="https://images.pexels.com/photos/3760818/pexels-photo-3760818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Model showcasing dress"
        />

        <div className="hidden sm:block sm:inset-0 sm:absolute"></div>

        <div className="relative px-4 py-32 mx-auto max-w-screen-xl lg:h-screen lg:items-center lg:flex">
          <div className="max-w-xl text-center sm:text-left">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              SUMMER{" "}
              <span className="font-extrabold text-orange-500">SALE!</span>
            </h1>

            <p className="max-w-lg mt-4 sm:leading-relaxed sm:text-xl">
              30% OFF FOR ALL NEW ARRIVALS!!
            </p>

            <div className="flex flex-wrap mt-8 text-center gap-4">
              <button className="block w-full px-12 py-3 text-sm font-medium text-white  rounded-full shadow bg-orange-600 sm:w-auto active:bg-orange-400 hover:bg-orange-700 focus:outline-none">
                Get Started
              </button>

              <button className="block w-full px-12 py-3 text-sm font-medium text-white rounded-full shadow bg-orange-600 sm:w-auto active:bg-orange-400 hover:bg-orange-700 focus:outline-none">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-white">
        <img
          className="absolute inset-0 object-[75%] sm:object-[25%] object-cover w-full h-full opacity-50 sm:opacity-100"
          src="https://images.unsplash.com/photo-1543087903-1ac2ec7aa8c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1198&q=80"
          alt="Model showcasing dress"
        />

        <div className="hidden sm:block sm:inset-0 sm:absolute"></div>

        <div className="relative px-4 py-32 mx-auto max-w-screen-xl lg:h-screen lg:items-center lg:flex">

          <div className="info-container flex-1 p-[50px]">
            <h1 className="text-[70px] font-bold text-white">SUMMER SALE!</h1>
            <p className="my-[50px] text-[20px] font-medium ">
              DON'T COMPROMISE ON STYLE! GET 30% OFF FOR NEW ARRIVALS!
            </p>
            <button className="border p-[10px] text-[20px] bg-white hover:bg-transparent cursor-pointer">
              {" "}
              SHOW NOW
            </button>
          </div>
        </div>
      </section>

      <div className="styled-arrow w-[50px] h-[50px] bg-red-100 rounded-full flex items-center justify-center absolute top-0 bottom-0 right-[10px] m-auto cursor-pointer opacity-50">
        <ArrowRightOutlinedIcon />
      </div>
      {/* </div> */}
    </>
  );
}

// export default Slider;
