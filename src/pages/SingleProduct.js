import React from "react";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

function SingleProduct() {
  return (
    <div className="styled-container">
      <Navbar />
      <Announcement />
      <div className="styled-wrapper p-[50px] flex">
        <div className="img-container flex-[1] ">
          <img
            src="https://images.pexels.com/photos/9595071/pexels-photo-9595071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="product"
            className="w-full h-[90vh] object-cover"
          />
        </div>
        <div className="info-container flex-[1] py-0 px-[50px]">
          <h1 className="title text-[20px] font-extralight">Th is Bag</h1>

          <p className="description my-[20px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            maiores ea sit officia provident ipsa nesciunt voluptas expedita ad
            possimus?
          </p>

          <span className="price font-thin text-[40px]">$20</span>

          <div className="filter-container flex items-center justify-between">
            {/* <span className="text-[20px] mr-[20px]">Filter Products: </span> */}

            <div className="flex items-center">
              <h1 className="title text-[20px] font-extralight">Color:</h1>
              <div className="w-[20px] h-[20px] rounded-full bg-black my-0 mx-[5px] cursor-pointer"></div>
              <div className="w-[20px] h-[20px] rounded-full bg-blue-900 my-0 mx-[5px] cursor-pointer"></div>
              <div className="w-[20px] h-[20px] rounded-full bg-gray-400 my-0 mx-[5px] cursor-pointer"></div>
            </div>
            {/* <select
              className="p-[10px] mr-[20px] outline-none bg-white border border-black"
              name=""
              id=""
            >
              <option value="" disabled selected>
                Color
              </option>
              <option value="" >Black</option>
              <option value="">Dark Blue</option>
              <option value="">Gray</option>
            </select> */}

            <div className="flex items-center">
              <h1 className="title text-[20px] font-extralight">Size: </h1>
              <select
                className="p-[10px] mx-5 outline-none bg-white border border-black"
                name=""
                id=""
              >
                <option value="">XS</option>
                <option value="">S</option>
                <option value="">M</option>
                <option value="">L</option>
                <option value="">XL</option>
                <option value="">XS</option>
              </select>
            </div>
          </div>
          <div className="add-container flex items-center justify-between mt-4">
            <div className="amount-container flex items-center font-bold">
              <button className="remove w-[30px] h-[30px] border border-teal-400 bg-teal-400 text-white flex items-center justify-center mx-[5px] hover:shadow-md hover:bg-teal-500">
                <RemoveIcon/>
              </button>
              <span className="amount w-[30px] h-[30px] border border-teal-400 flex items-center justify-center mx-[5px]">1</span>
              <button className="add w-[30px] h-[30px] border border-teal-400 bg-teal-400 text-white flex items-center justify-center mx-[5px] hover:shadow-md hover:bg-teal-500">
                <AddIcon/>
              </button>
            </div>
            <button className="p-[15px] border border-teal-400 hover:bg-teal-400 hover:text-white cursor-pointer hover:shadow-md font-medium hover:bg-teal-500">ADD TO CART &nbsp;
            <AddShoppingCartIcon/>
            </button>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default SingleProduct;
