import React, { useContext, useState } from "react";
import Cart from "../components/Cart";
import Vistor from "./Vistor";
import SearchBox from "../components/SearchBox";
import { Link } from "react-router-dom";
import { StoreContext } from "../Context/StoreContext";

function NavBar() {
  const [showCart, setShowCart] = useState(false);
  const [showVistor, setShowVistor] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const { getTotalCartItems } = useContext(StoreContext);

  return (
    <header className="flex items-center justify-between relative">
      {/*========= part one ==========*/}
      <div className="flex items-center justify-between gap-5 text-[25px] ">
        <div onClick={() => setShowCart(true)} className=" relative">
          <i class="ri-shopping-cart-line hover:cursor-pointer"></i>
          <div className="w-[28px] h-[28px] font-bold text-black bg-mainColor rounded-full absolute top-[2px] left-[16px] content-['3'] text-[22px]  flex items-center justify-center border-[2px] hover:border-mainColor hover:cursor-pointer hover:scale-150 duration-300 hover:bg-[#1877F2] hover:text-white hover:font-bold">
            {getTotalCartItems()}
          </div>
        </div>
        <div>
          <i class="ri-heart-line hover:cursor-pointer"></i>
        </div>
        <div onClick={() => setShowVistor(true)}>
          <i class="ri-user-3-line hover:cursor-pointer"></i>
        </div>
        <div onClick={() => setShowSearch(true)}>
          <i class="ri-search-line hover:cursor-pointer"></i>
        </div>
        {/* show and hide ===============*/}
        {showCart ? <Cart showCart={showCart} setShowCart={setShowCart} /> : ""}
        {showVistor ? (
          <Vistor showVistor={showVistor} setShowVistor={setShowVistor} />
        ) : (
          ""
        )}
        {showSearch ? (
          <SearchBox showSearch={showSearch} setShowSearch={setShowSearch} />
        ) : (
          ""
        )}
        {/* show and hide ===============*/}
      </div>
      {/*========= part one ==========*/}

      {/*========= part two ==========*/}
      <ul className="flex items-center justify-between gap-5 text-[18px] mr-[-140px]">
        <li>اتصل بنا</li>
        <li>المدونة</li>
        <li>الشروط والاحكام</li>
        <li>نبذة عنا</li>
        <li>
          <Link to={"/basket"}>السلة</Link>
        </li>
        <li>
          <Link to={"/products"}>المنتجات</Link>
        </li>
        <li className="text-mainColor font-bold hover:text-[#1877F2] transition-all duration-300 cursor-pointer ">
          <Link to={"/"}>الرئيسية</Link>
        </li>
      </ul>
      {/*========= part two ==========*/}

      {/*========= part three ==========*/}
      <div className="flex items-center justify-between gap-5 text-[20px]">
        <div className="text-[35px] text-mainColor hover:text-[#1877F2] transition-all duration-300 cursor-pointer">
          <i class="ri-store-2-fill"></i>
        </div>
        <p className="leading-6">
          Smart
          <br />
          Shop
        </p>
      </div>
      {/*========= part three ==========*/}
    </header>
  );
}

export default NavBar;
