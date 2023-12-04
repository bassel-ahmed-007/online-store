import React from "react";
import NavBar from "../components/NavBar";
import Banner from "../components/Banner";
import Card from "../components/Card";
import Footer from "../components/Footer";
import { useSelector, useDispatch } from "react-redux";
import { decrease, increase } from "../store/counterSlice";
import data from "../data";

function Product() {
  const counterValue = useSelector((state) => state.counter.countValue);
  const dispatch = useDispatch();
  return (
    <section className="relative">
      <Banner />
      <div className="container">
        <NavBar />
        {/*========== section  ==========*/}
        <div className="w-full h-[702px] mt-[500px] flex  justify-end">
          <div className="text-right pr-[20px] font-semibold flex flex-col gap-5">
            <h2 className="text-[40px] font-bold">فستان ازرق عصري</h2>
            <p>
              <span className="line-through">200 EGP</span> 1500 EGP
            </p>
            <div className="text-[#FFC107] flex justify-end gap-4">
              <p className="text-black">(50)</p>
              <div>
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i>
              </div>
            </div>
            <p className="">
              مثل هذا النص او العديد من النصوص الاخري اضافة الي زيادة عدد الحروف
              التي يولدها التطبيق
            </p>
            <h3 className="text-[30px] font-bold">اللون</h3>
            <div className="flex items-center justify-end gap-3  font-bold text-[20px]">
              <div className="w-[20px] h-[20px] rounded-full bg-[#FF0000] cursor-pointer"></div>
              <div className="w-[20px] h-[20px] rounded-full bg-[#FFC107] cursor-pointer"></div>
              <div className="w-[20px] h-[20px] rounded-full bg-[#1877F2] cursor-pointer"></div>
              <div className="w-[20px] h-[20px] rounded-full bg-[#9747FF] cursor-pointer"></div>
              <div className="w-[20px] h-[20px] rounded-full bg-[#25D366] cursor-pointer"></div>
            </div>
            <h3 className="text-[30px] font-bold">الوزن</h3>
            <div className="flex justify-end w-full h-[52px] gap-4">
              <div className="h-[49px] w-[80px] border-[2px] rounded-lg flex items-center justify-center hover:bg-mainColor hover:cursor-pointer">
                كيلو
              </div>
              <div className="h-[49px] w-[80px] border-[2px] rounded-lg flex items-center justify-center hover:bg-mainColor hover:cursor-pointer">
                كيلو
              </div>
              <div className="h-[49px] w-[80px] border-[2px] rounded-lg flex items-center justify-center hover:bg-mainColor hover:cursor-pointer">
                كيلو
              </div>
            </div>
            <div>
              <div className="flex items-center justify-end gap-8">
                <button className="w-[180px] h-[61px] rounded-[30px]  p-[16px] text-[16px] text-white bg-mainColor mb-[10px] font-bold flex items-center justify-center hover:bg-[#1877F2] transition-all duration-300">
                  اضف الي السلة
                </button>
                <div className="flex items-center justify-center gap-4 text-[20px] border-[1px] rounded-[20px]">
                  <button
                    onClick={() => dispatch(decrease(1))}
                    className="w-[40px] h-[40px] text-[35px] border-[2px] rounded-bl-[20px] rounded-tl-[20px] flex items-center justify-center hover:bg-mainColor"
                  >
                    -
                  </button>
                  <p>{counterValue}</p>
                  <button
                    onClick={() => dispatch(increase(1))}
                    className="w-[40px] h-[40px] text-[35px] border-[2px] rounded-tr-[20px]  rounded-br-[20px] flex items-center justify-center hover:bg-mainColor"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-end gap-6 text-[18px] my-[20px]">
                اضف الي المفضلة{" "}
                <i class="ri-heart-3-fill text-gray-400 hover:text-red-600 hover:cursor-pointer"></i>
              </div>
              <button className="w-full h-[61px] rounded-[30px]  p-[16px] text-[16px] text-white bg-mainColor mb-[10px] font-bold flex items-center justify-center hover:bg-[#1877F2] transition-all duration-300">
                اشتري الان
              </button>
              <p className="text-[20px] font-bold">شارك عبر مواقع التواصل</p>
              <div className="flex items-center justify-end gap-7">
                <div className="text-[55px] text-[#0A66C2]">
                  <i class="ri-linkedin-box-fill"></i>
                </div>
                <div className="text-[55px] text-[#CB1F27]">
                  <i class="ri-instagram-fill"></i>
                </div>
                <div className="text-[55px] text-[#1877F2]">
                  <i class="ri-facebook-box-fill"></i>
                </div>
                <div className="text-[55px] text-[#55ACEE]">
                  <i class="ri-twitter-fill"></i>
                </div>
              </div>
            </div>
          </div>

          <div>
            <img src="assets/single-1.png" alt="" />
          </div>
        </div>

        <div className="h-[135px] w-[715px] flex items-center justify-between ml-[637px]">
          <div className="w-[134px] h-full">
            <img src="assets/single-2.png" alt="" />
          </div>
          <div className="w-[134px] h-full">
            <img src="assets/single-2.png" alt="" />
          </div>
          <div className="w-[134px] h-full">
            <img src="assets/single-2.png" alt="" />
          </div>
          <div className="w-[134px] h-full">
            <img src="assets/single-2.png" alt="" />
          </div>
          <div className="w-[134px] h-full">
            <img src="assets/single-2.png" alt="" />
          </div>
        </div>
        {/*========== section  ==========*/}

        {/*========== buttons   ==========*/}
        <div className="w-full h-[80px] border-b-[2px] my-[75px] flex items-center justify-center gap-28 font-bold text-[20px]">
          <button>تقيمات المنتج</button>
          <button>معلومات اضافيه</button>
          <button>الوصف</button>
        </div>
        <p className="text-right font-semibold my-[80px]">(10) تقيمات</p>
        {/*========== buttons   ==========*/}

        {/*========== section  ==========*/}
        <div className="w-full flex justify-between gap-9 text-right">
          <div className="w-[48%] flex flex-col justify-end text-right gap-10">
            <p className="font-semibold">اضف تقييم</p>
            <div className="text-[#FFC107] flex justify-end gap-4">
              <div>
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i>
              </div>
              <p className="text-black">تقييمك</p>
            </div>
            <form className="w-full flex flex-col gap-5">
              <input
                type="text"
                placeholder="عنوان التقييم"
                className="w-full h-[50px] text-right border-[2px] rounded-lg pr-[20px]"
              />
              <textarea
                placeholder="اكتب تقييمك هنا"
                id=""
                cols="30"
                rows="10"
                className="text-right border-[2px] rounded-lg pr-[20px]"
              ></textarea>
              <div>
                <input
                  type="text"
                  placeholder="اسمك"
                  className="w-[48%] text-right border-[2px] rounded-lg pr-[20px] h-[50px] mr-[25px]"
                />
                <input
                  type="text"
                  placeholder="بريدك الالكتروني"
                  className="w-[48%] text-right border-[2px] rounded-lg pr-[20px] h-[50px]"
                />
              </div>
            </form>
            <div className="flex items-center justify-end">
              <button className="w-[180px] h-[61px] rounded-[30px]  text-[16px] text-white bg-mainColor mb-[10px] font-bold flex items-center justify-center hover:bg-[#1877F2] transition-all duration-300">
                اضف الان
              </button>
            </div>
          </div>

          <div className="w-[48%] flex flex-col items-center justify-between gap-4">
            <div className="flex gap-6">
              <div className="flex flex-col gap-2">
                <p className="font-bold">
                  منتج رائع التعبئه والتعغليف كان جيد جدا
                </p>
                <p>
                  منتج رائع التعبئه والتعغليف كان جيد جدمنتج رائع التعبئه
                  والتعغليف كان جيد جدمنتج رائع التعبئه والتعغليف كان جيد جد
                </p>
                <div className="text-[#FFC107] flex justify-end gap-4">
                  <div>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                  </div>
                </div>
                <p>
                  <span className="ml-[50px]">احمد محمد</span>
                  التاريخ هنا
                </p>
              </div>
              <div className="flex flex-col">
                <div>
                  <img src="assets/single-5.png" alt="" />
                </div>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex flex-col gap-2">
                <p className="font-bold">
                  منتج رائع التعبئه والتعغليف كان جيد جدا
                </p>
                <p>
                  منتج رائع التعبئه والتعغليف كان جيد جدمنتج رائع التعبئه
                  والتعغليف كان جيد جدمنتج رائع التعبئه والتعغليف كان جيد جد
                </p>
                <div className="text-[#FFC107] flex justify-end gap-4">
                  <div>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                  </div>
                </div>
                <p>
                  <span className="ml-[50px]">احمد محمد</span>
                  التاريخ هنا
                </p>
              </div>
              <div className="flex flex-col">
                <div>
                  <img src="assets/single-5.png" alt="" />
                </div>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex flex-col gap-2">
                <p className="font-bold">
                  منتج رائع التعبئه والتعغليف كان جيد جدا
                </p>
                <p>
                  منتج رائع التعبئه والتعغليف كان جيد جدمنتج رائع التعبئه
                  والتعغليف كان جيد جدمنتج رائع التعبئه والتعغليف كان جيد جد
                </p>
                <div className="text-[#FFC107] flex justify-end gap-4">
                  <div>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                  </div>
                </div>
                <p>
                  <span className="ml-[50px]">احمد محمد</span>
                  التاريخ هنا
                </p>
              </div>
              <div className="flex flex-col">
                <div>
                  <img src="assets/single-5.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*========== section  ==========*/}
      </div>

      {/*================= section ===============*/}
      <div className="relative mt-[100px]">
        <h1 className="mb-[100px] text-center text-[35px] font-[700] after:w-[200px] after:h-[6px] after:rounded-lg after:bg-mainColor after:absolute after:top-[70px] after:left-[50%] after:translate-x-[-50%]">
          منتجات مشابهة
        </h1>
      </div>
      <div className="w-full grid grid-cols-5 pl-[60px] mb-[200px]">
        {data.slice(0, 5).map((item, index) => (
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

export default Product;
