import React from "react";
import Product from "../pages/Product";
import { useNavigate } from "react-router-dom";

function Card({ item }) {
  const navigate = useNavigate();

  return (
    <>
      <div className="w-[300px] h-[480px] flex flex-col justify-center items-center ">
        <div className="w-full h-[365px] bg-[#D9D9D9] rounded-tr-[25px] rounded-tl-[25px] relative">
          <img src={item.img} alt="" className="w-full h-full" />
          <div className="absolute top-[10px] right-[20px]">
            <i class="ri-heart-fill text-[25px] text-gray-400 hover:text-red-600 cursor-pointer"></i>
          </div>
        </div>
        <div className="w-full flex items-center justify-between px-[10px] pt-[10px]">
          <div className="mt-[-35px]">
            <p className="text-mainColor font-bold text-[18px]">{item.price}</p>
            <p className="text-mainColor font-bold line-through"></p>
          </div>
          <div className="flex flex-col gap-[5px] text-right ">
            <div>
              <i class="ri-star-fill text-gray-500 hover:text-[#FFB800] hover:cursor-pointer"></i>
              <i class="ri-star-fill text-[#FFB800]"></i>
              <i class="ri-star-fill text-[#FFB800]"></i>
              <i class="ri-star-fill text-[#FFB800]"></i>
              <i class="ri-star-fill text-[#FFB800]"></i>
            </div>
            <p className="font-semibold">
              <p
                onClick={() => navigate("/product")}
                className="hover:cursor-pointer hover:bg-mainColor"
              >
                {item.name}
              </p>
            </p>
            <div className="flex items-center justify-center gap-1">
              <div className="w-[32px] h-[32px] flex items-center justify-center border-[2px] border-gray-400 hover:bg-mainColor hover:text-white cursor-pointer">
                XL
              </div>
              <div className="w-[32px] h-[32px] flex items-center justify-center border-[2px] border-gray-400 hover:bg-mainColor hover:text-white cursor-pointer">
                2XL
              </div>
              <div className="w-[32px] h-[32px] flex items-center justify-center border-[2px] border-gray-400 hover:bg-mainColor hover:text-white cursor-pointer">
                3XL
              </div>
              <div className="w-[32px] h-[32px] flex items-center justify-center border-[2px] border-gray-400 hover:bg-mainColor hover:text-white cursor-pointer">
                SM
              </div>
              <div className="w-[32px] h-[32px] flex items-center justify-center border-[2px] border-gray-400 bg-mainColor text-white cursor-pointer">
                LG
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
