import React from "react";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";

const ProductList = () => {
  return (
    <div className="styled-container:">
      <Navbar />
      <Announcement />
      <h1 className="title m-[20px] text-2xl font-bold">Dresses</h1>
      <div className="filter-container flex justify-between ">
        <div className="filter m-[20px]">
          <span className="text-[20px] mr-[20px]">Filter Products: </span>
          < select className="p-[10px] mr-[20px] outline-none bg-white border border-black" name="" id="">
            <option value="" disabled  selected>Color</option>
            <option value="">White</option>
            <option value="">Black</option>
            <option value="">Red</option>
            <option value="">Blue</option>
            <option value="">Yellow</option>
            <option value="">Green</option>
          </ select>
          < select className="p-[10px] mr-[20px] outline-none bg-white border border-black"  name="" id="">
            <option value="" disabled  selected>Size</option>
            <option value="">XS</option>
            <option value="">S</option>
            <option value="">M</option>
            <option value="">L</option>
            <option value="">XL</option>
          </ select>
        </div>
        <div className="filter m-[20px]">
          <span className="text-[20px] mr-[20px]">Sort Products:</span>
          < select className="p-[10px] mr-[20px] outline-none bg-white border border-black"  name="" id="">
            <option value=""  selected>Newest</option>
            <option value="">Price (asc)</option>
            <option value="">Price (desc)</option>

          </ select>

        </div>
      </div>

      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ProductList;
