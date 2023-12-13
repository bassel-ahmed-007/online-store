import React, { useContext } from "react";
import { StoreContext } from "../Context/StoreContext";

function Cart({ showCart, setShowCart }) {
  const { data, cartItems, removeFromCart, getTotalCartItems } =
    useContext(StoreContext);
  return (
    <section className="w-[410px]  rounded-lg flex flex-col items-center justify-center gap-7 shadow-[0_0_80px_0_gray] mb-[200px] bg-white absolute top-[60px] left-[-220px] z-20">
      <div className="w-full h-[50px] text-[35px] flex items-center justify-end pt-[20px] pr-[20px] hover:cursor-pointer">
        <i onClick={() => setShowCart(false)} class="ri-close-circle-fill"></i>
      </div>

      {data.map((item) => {
        if (cartItems[item.id] > 0) {
          return (
            <div className="w-full flex items-center justify-between px-[30px] text-right">
              <div>
                <div
                  onClick={() => removeFromCart(item.id)}
                  className="font-bold hover:cursor-pointer"
                >
                  X
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <p
                  className="font-bold
          "
                >
                  {item.name}
                </p>
                <span>
                  {item.price * cartItems[item.id]}
                  <span className="ml-[20px]">{cartItems[item.id]}</span>
                </span>
              </div>
              <div className="w-[80px] h-[80px]">
                <img src={item.img} alt="" />
              </div>
            </div>
          );
        }
      })}

      <div className="w-full h-[100px] bg-mainColor flex items-center justify-between px-[30px] font-bold rounded-br-lg rounded-bl-lg">
        <button className="w-[140px] h-[61px] rounded-xl  p-[16px] text-[16px] text-black bg-white mb-[10px] font-bold flex items-center justify-center hover:bg-[#1877F2] transition-all duration-300">
          ادفع
        </button>
        <p className="text-[20px]">العدد: {getTotalCartItems()}</p>
      </div>
    </section>
  );
}

export default Cart;
