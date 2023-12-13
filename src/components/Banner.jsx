import React from "react";

function Banner() {
  return (
    <section className="w-full absolute top-[220px] left-0">
      <div className="relative text-white">
        <img src="../assets/products-1.png" alt="" className="w-full" />
        <div className="text-center absolute top-[50%] translate-y-[-50%] left-[45%] translate-x-[-50%]">
          <h1 className="text-[45px] font-[900]">تسوق احدث المنتجات العصرية</h1>
          <p className="font-bold  mt-[50px]">
            الرئيسية{" "}
            <span className="text-red-700 text-[30px] mx-[50px] ">/</span>{" "}
            المنتجات
          </p>
        </div>
      </div>
    </section>
  );
}

export default Banner;
