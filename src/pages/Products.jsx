import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import data from "../data";

function Products() {
  const [products, setProuducts] = useState(data);

  const fillterCat = (type) => {
    setProuducts(
      data.filter((item) => {
        return item.type === type;
      })
    );
  };

  return (
    <section className="relative">
      {/*================= section ===============*/}
      <Banner />
      {/*================= section ===============*/}

      <div className="container">
        {/*================= nav bar ===============*/}
        <NavBar />
        {/*================= nav bar ===============*/}

        {/*================= section ===============*/}
        <div className="w-full  mt-[500px] flex items-start justify-between">
          <div className="w-[70%]">
            <div className="w-full h-[70px] px-[10px] flex items-center justify-between border-[2px] rounded-lg">
              <div className="flex items-center justify-between gap-6">
                <button className="w-[220px] h-[55px] rounded-lg  p-[16px] text-[16px] text-white bg-mainColor  font-bold flex items-center justify-center hover:bg-[#1877F2] transition-all duration-300">
                  <span className="mr-[40px]">&#9662;</span> الاقل سعرا
                </button>
                <p className="font-semibold">ترتيب حسب</p>
              </div>
              <div className="flex items-center justify-between gap-7 font-semibold">
                <p>12</p>
                <p className="text-mainColor">34</p>
                <p>54</p>
                <p>12</p>
                <p>مشاهدة</p>
              </div>
              <div className="flex items-center justify-between gap-8">
                <div className="text-[24px]">
                  <i class="ri-menu-line"></i>
                </div>
                <div className="text-[26px] text-mainColor">
                  <i class="ri-apps-2-fill"></i>
                </div>
                <p className="font-semibold">عرض</p>
              </div>
            </div>
            <div className="w-full h-[1700px] mt-[30px]">
              <div className="grid grid-cols-3 gap-x-3 gap-y-5">
                {products.slice(0, 9).map((item, index) => (
                  <Card key={index} item={item} />
                ))}
              </div>
              <div className="w-full h-[70] flex items-center justify-center gap-8 font-bold text-[25px]">
                <div className="w-[53px] h-[53px]  flex items-center justify-center mt-[50px]  cursor-pointer">
                  <i class="ri-arrow-left-fill"></i>
                </div>
                <div className="w-[53px] h-[53px] border-[2px] rounded-full flex items-center justify-center mt-[50px] bg-mainColor text-white">
                  1
                </div>
                <div className="w-[53px] h-[53px] border-[2px] rounded-full flex items-center justify-center mt-[50px]  hover:bg-mainColor hover:text-white cursor-pointer">
                  2
                </div>
                <div className="w-[53px] h-[53px] border-[2px] rounded-full flex items-center justify-center mt-[50px]  hover:bg-mainColor hover:text-white cursor-pointer">
                  3
                </div>
                <div className="w-[53px] h-[53px] border-[2px] rounded-full flex items-center justify-center mt-[50px]  hover:bg-mainColor hover:text-white cursor-pointer">
                  4
                </div>
                <div className="w-[53px] h-[53px] flex items-center justify-center mt-[50px]   cursor-pointer">
                  <i class="ri-arrow-right-fill"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[28%] h-[1400px] flex flex-col items-end">
            <div className="w-full h-[280px] flex flex-col justify-center items-end gap-2 font-semibold mt-[50px]">
              <p className="text-[30px] font-bold">
                الفئات <i class="ri-arrow-left-double-line"></i>
              </p>
              <p
                onClick={() => fillterCat("accss")}
                className="pr-[30px] mt-[10px] hover:cursor-pointer"
              >
                الاكسسوارات
              </p>
              <p className="pr-[30px] mt-[10px]">ملابس</p>
              <p
                onClick={() => fillterCat("elct")}
                className="pr-[30px] mt-[10px] hover:cursor-pointer"
              >
                الالكترونيات
              </p>
              <p
                onClick={() => fillterCat("furn")}
                className="pr-[30px] mt-[10px] hover:cursor-pointer"
              >
                الاثاث
              </p>
              <p
                onClick={() => fillterCat("shoes")}
                className="pr-[30px] mt-[10px] hover:cursor-pointer"
              >
                الاحذية
              </p>
              <p
                onClick={() => fillterCat("jew")}
                className="pr-[30px] mt-[10px] hover:cursor-pointer"
              >
                المجوهرات
              </p>
              <p className="pr-[30px] mt-[10px]">اخري</p>
            </div>
            <p className="text-[30px] font-bold mt-[60px]">
              السعر <i class="ri-arrow-left-double-line"></i>
            </p>
            <p className="text-[30px] font-bold mt-[60px]">
              المقاس <i class="ri-arrow-left-double-line"></i>
            </p>
            <div className="flex items-center justify-center gap-3 mt-6 pr-8 font-bold text-[20px]">
              <div className="w-[47px] h-[47px] flex items-center justify-center border-[2px] border-gray-400 hover:bg-mainColor hover:text-white cursor-pointer">
                XL
              </div>
              <div className="w-[47px] h-[47px] flex items-center justify-center border-[2px] border-gray-400 hover:bg-mainColor hover:text-white cursor-pointer">
                Lg
              </div>
              <div className="w-[47px] h-[47px] flex items-center justify-center border-[2px] border-gray-400 hover:bg-mainColor hover:text-white cursor-pointer">
                SM
              </div>
              <div className="w-[47px] h-[47px] flex items-center justify-center border-[2px] border-gray-400 hover:bg-mainColor hover:text-white cursor-pointer">
                2Xl
              </div>
              <div className="w-[47px] h-[47px] flex items-center justify-center border-[2px] border-gray-400 bg-mainColor text-white cursor-pointer">
                3XL
              </div>
            </div>
            <p className="text-[30px] font-bold mt-[60px]">
              اللون <i class="ri-arrow-left-double-line"></i>
            </p>
            <div className="flex items-center justify-center gap-3 mt-6 pr-8 font-bold text-[20px]">
              <div className="w-[47px] h-[47px] rounded-full bg-[#FF0000] cursor-pointer"></div>
              <div className="w-[47px] h-[47px] rounded-full bg-[#FFC107] cursor-pointer"></div>
              <div className="w-[47px] h-[47px] rounded-full bg-[#1877F2] cursor-pointer"></div>
              <div className="w-[47px] h-[47px] rounded-full bg-[#9747FF] cursor-pointer"></div>
              <div className="w-[47px] h-[47px] rounded-full bg-[#25D366] cursor-pointer"></div>
            </div>
            <p className="text-[30px] font-bold mt-[60px]">
              العلامة التجارية <i class="ri-arrow-left-double-line"></i>
            </p>
            <p className="pr-[30px] mt-[10px] font-semibold">سوني</p>
            <p className="pr-[30px] mt-[10px] font-semibold">لينوفو</p>
            <p className="pr-[30px] mt-[10px] font-semibold">سامسونج</p>
            <p className="pr-[30px] mt-[10px] font-semibold">ابل</p>
            <p className="pr-[30px] mt-[10px] font-semibold">جوجل</p>
            <p className="pr-[30px] mt-[10px] font-semibold">جونسون</p>
            <p className="pr-[30px] mt-[10px] font-semibold">اخري</p>
            <p className="text-[30px] font-bold mt-[60px]">
              عناصر مميزة <i class="ri-arrow-left-double-line"></i>
            </p>
            <div className="w-full h-[116px] flex items-center justify-end pr-[30px] my-[15px]">
              <div className="text-right pr-[20px]">
                <p className="font-bold my-[10px]">فستان ازرق عصري للسيدات</p>
                <p className="font-semibold my-4">800 EGP</p>
              </div>
              <div>
                <img src="assets/products-3.png" alt="" />
              </div>
            </div>
            <div className="w-full h-[116px] flex items-center justify-end pr-[30px] my-[15px]">
              <div className="text-right pr-[20px]">
                <p className="font-bold my-[10px]">فستان ازرق عصري للسيدات</p>
                <p className="font-semibold my-4">800 EGP</p>
              </div>
              <div>
                <img src="assets/products-3.png" alt="" />
              </div>
            </div>
            <div className="w-full h-[116px] flex items-center justify-end pr-[30px] my-[15px]">
              <div className="text-right pr-[20px]">
                <p className="font-bold my-[10px]">فستان ازرق عصري للسيدات</p>
                <p className="font-semibold my-4">800 EGP</p>
              </div>
              <div>
                <img src="assets/products-3.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        {/*================= section ===============*/}
      </div>
      {/*================= section ===============*/}
      <div className="relative mt-[100px]">
        <h1 className="mb-[100px] text-center text-[35px] font-[700] after:w-[200px] after:h-[6px] after:rounded-lg after:bg-mainColor after:absolute after:top-[70px] after:left-[50%] after:translate-x-[-50%]">
          منتجات مشابهة
        </h1>
      </div>
      <div className="w-full grid grid-cols-5 pl-[60px] mb-[200px]">
        {products.slice(0, 5).map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
      {/*================= section ===============*/}

      {/*================= footer ===============*/}
      <Footer />
      {/*================= footer ===============*/}
    </section>
  );
}

export default Products;
