import React from 'react'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const Product = ({item}) => {
  return (
    <div className="styled-container flex-[1] m-[5px] min-w-[280px] h-[350px] p-5  flex items-center justify-center bg-emerald-50 relative">
      <div className="circle w-[250px] h-[250px] rounded-full bg-white absolute">

      </div>
      <img src={item.img} alt="" className=" h-3/4 z-10"/>
      <div className="info-container w-full h-full absolute top-0 left-0 z-10 flex items-center justify-center bg-black opacity-0 hover:opacity-60 transition-all cursor-pointer">
        <div className=" icon w-[40px] h-[40px] rounded-full bg-white flex items-center justify-center m-[10px]
        hover:bg-gray-100 hover:scale-110 
        ">
          <ShoppingCartOutlinedIcon/>
        </div>
        <div className=" icon w-[40px] h-[40px] rounded-full bg-white flex items-center justify-center m-[10px] hover:bg-gray-100 hover:scale-110 transition-all">
          <SearchOutlinedIcon/>
        </div>

        <div className=" icon w-[40px] h-[40px] rounded-full bg-white flex items-center justify-center m-10px] hover:bg-gray-100 hover:scale-110 transition-all">
          <FavoriteBorderOutlinedIcon/>
        </div>
      </div>
    </div>
  )
}

export default Product
