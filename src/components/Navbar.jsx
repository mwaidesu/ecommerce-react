import Badge from '@mui/material/Badge';
// import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React from "react";
import { BsSearch } from "react-icons/bs";

function Navbar() {
  return (
    <nav className="styled-container h-[60px] sticky top-0 z-50 bg-white shadow-md">
      <div className="styled-wrapper py-[10px] px-[20px] flex justify-between">
        <div className="styled-left flex-1 flex items-center">
          {/* <span className="styled-languange text-[14px] cursor-pointer">
            EN
          </span> */}

          <div
            className="styled-search-container border border-gray-300  flex items-center rounded-full px-3 py-1
                
                "
          >
            {/* ml-[25px] p-5 */}
            <input type="text" className="outline-none rounded" />
            <BsSearch/>
          </div>
        </div>
        <div className="styled-center flex-1 text-center">
          <h1 className="styled-logo font-bold text-3xl text-orange-500">UN<span className="text-black">FITTED</span></h1>
        </div>

        <div className="styled-right flex-1 flex  items-center justify-end">
          <div className="styled-menu-item text-[14px] cursor-pointer ml-[25px]">
            REGISTER
          </div>
          <div className="styled-menu-item text-[14px] cursor-pointer ml-[25px]">
            SIGN IN
          </div>
          <div className="styled-menu-item text-[14px] cursor-pointer ml-[25px]">


            {/* <IconButton aria-label="cart"> */}
              <Badge badgeContent={4} color="warning">
                <ShoppingCartIcon />
              </Badge>
            {/* </IconButton> */}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
