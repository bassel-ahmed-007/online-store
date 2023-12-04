import React from "react";

function Cart({ showCart, setShowCart }) {
  return (
    <section className="w-[410px]  rounded-lg flex flex-col items-center justify-center gap-7 shadow-[0_0_80px_0_gray] mb-[200px] bg-white absolute top-[60px] left-[-220px] z-20">
      <div className="w-full h-[50px] text-[35px] flex items-center justify-end pt-[20px] pr-[20px] hover:cursor-pointer">
        <i onClick={() => setShowCart(false)} class="ri-close-circle-fill"></i>
      </div>

      <div className="w-full flex items-center justify-between px-[30px] text-right">
        <div>
          <div className="font-bold hover:cursor-pointer">X</div>
        </div>
        <div className="flex flex-col gap-1">
          <p
            className="font-bold
      "
          >
            جاكت اسود
          </p>
          <span>
            500 <span className="ml-[20px]">X1</span>
          </span>

          <div className="flex items-center justify-center gap-4 text-[20px] bg-[#7FD3DF] ">
            <button className="w-[30px] h-[30px] text-[35px] pb-[4px]  flex items-center justify-center hover:bg-mainColor">
              -
            </button>
            <p>1</p>
            <button className="w-[30px] h-[30px] text-[35px] pb-[4px]  flex items-center justify-center hover:bg-mainColor">
              +
            </button>
          </div>
        </div>
        <div>
          <img src="assets/cart-5.png" alt="" />
        </div>
      </div>

      <div className="w-full flex items-center justify-between px-[30px] text-right">
        <div>
          <div className="font-bold hover:cursor-pointer">X</div>
        </div>
        <div className="flex flex-col gap-1">
          <p
            className="font-bold
      "
          >
            جاكت اسود
          </p>
          <span>
            500 <span className="ml-[20px]">X1</span>
          </span>

          <div className="flex items-center justify-center gap-4 text-[20px] bg-[#7FD3DF] ">
            <button className="w-[30px] h-[30px] text-[35px] pb-[4px]  flex items-center justify-center hover:bg-mainColor">
              -
            </button>
            <p>1</p>
            <button className="w-[30px] h-[30px] text-[35px] pb-[4px]  flex items-center justify-center hover:bg-mainColor">
              +
            </button>
          </div>
        </div>
        <div>
          <img src="assets/cart-5.png" alt="" />
        </div>
      </div>

      <div className="w-full flex items-center justify-between px-[30px] text-right">
        <div>
          <div className="font-bold hover:cursor-pointer">X</div>
        </div>
        <div className="flex flex-col gap-1">
          <p
            className="font-bold
      "
          >
            جاكت اسود
          </p>
          <span>
            500 <span className="ml-[20px]">X1</span>
          </span>

          <div className="flex items-center justify-center gap-4 text-[20px] bg-[#7FD3DF] ">
            <button className="w-[30px] h-[30px] text-[35px] pb-[4px]  flex items-center justify-center hover:bg-mainColor">
              -
            </button>
            <p>1</p>
            <button className="w-[30px] h-[30px] text-[35px] pb-[4px]  flex items-center justify-center hover:bg-mainColor">
              +
            </button>
          </div>
        </div>
        <div>
          <img src="assets/cart-5.png" alt="" />
        </div>
      </div>

      <div className="w-full h-[100px] bg-mainColor flex items-center justify-between px-[30px] font-bold rounded-br-lg rounded-bl-lg">
        <button className="w-[140px] h-[61px] rounded-xl  p-[16px] text-[16px] text-black bg-white mb-[10px] font-bold flex items-center justify-center hover:bg-[#1877F2] transition-all duration-300">
          ادفع
        </button>
        <p className="text-[20px]">المجموع: 1500</p>
      </div>
    </section>
  );
}

export default Cart;
