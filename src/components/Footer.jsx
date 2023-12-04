import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="w-full h-[360px] bg-[#54A4AF] flex flex-col items-center justify-center gap-7 text-white">
      <ul className="flex items-center justify-between gap-5 text-[18px]">
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
      <div className="flex items-center justify-end gap-7">
        <div className="text-[55px] text-[#26609b] hover:text-[#1877F2] hover:cursor-pointer">
          <i class="ri-linkedin-box-fill"></i>
        </div>
        <div className="text-[55px] text-[#CB1F27] hover:text-[#1877F2] hover:cursor-pointer">
          <i class="ri-instagram-fill"></i>
        </div>
        <div className="text-[55px] text-[#44f218] hover:text-[#1877F2] hover:cursor-pointer">
          <i class="ri-facebook-box-fill"></i>
        </div>
        <div className="text-[55px] text-[#CB1F27] hover:text-[#1877F2] hover:cursor-pointer">
          <i class="ri-twitter-fill"></i>
        </div>
      </div>
      <p className="text-[30px] font-semibold">ابق علي تواصل</p>
      <p className="font-semibold">جميع الحقوق محفوظة لشركة مش عارف</p>
    </footer>
  );
}

export default Footer;
