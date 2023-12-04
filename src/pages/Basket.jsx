import React from "react";
import NavBar from "../components/NavBar";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Card from "../components/Card";
import data from "../data";

function Basket() {
  return (
    <section>
      <Banner />
      <div className="container relative">
        <NavBar />

        {/*=============== section ================*/}
        <div className="w-[928px] h-[860px] mt-[600px] ml-[600px] mb-[160px]  text-right pr-[20px] flex flex-col justify-between">
          <div>
            <p className="text-[40px] font-bold">سلة التسوق</p>
          </div>
          <div className="text-[25px] font-semibold flex items-center justify-between border-b-[2px] pb-[20px] px-[20px]">
            <div className="w-[57%] flex justify-between">
              <p>المجموع</p>
              <p>الكمية</p>
              <p>السعر</p>
            </div>
            <div className="w-[43%] ">المنتج</div>
          </div>
          <div>
            <div className="flex items-center justify-between px-[20px] font-[600] border-b-[2px] pb-[20px] mt-[10px]">
              <div>2500 EGP</div>
              <div>
                <div className="flex items-center justify-center gap-4 text-[20px] border-[1px] rounded-[20px]">
                  <button className="w-[40px] h-[40px] text-[35px] border-[2px] rounded-bl-[20px] rounded-tl-[20px] flex items-center justify-center hover:bg-mainColor">
                    -
                  </button>
                  <p>1</p>
                  <button className="w-[40px] h-[40px] text-[35px] border-[2px] rounded-tr-[20px]  rounded-br-[20px] flex items-center justify-center hover:bg-mainColor">
                    +
                  </button>
                </div>
              </div>
              <div>2500 EGP</div>
              <div className="flex items-center gap-5">
                <div>
                  <p>فستان ابيض عصري</p>
                  <p>اللون : ابيض</p>
                  <p>الوزن : 2 كيلو</p>
                </div>
                <div>
                  <img src="assets/cart-1.png" alt="" />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between px-[20px] font-[600] border-b-[2px] pb-[20px] mt-[10px]">
              <div>2500 EGP</div>
              <div>
                <div className="flex items-center justify-center gap-4 text-[20px] border-[1px] rounded-[20px]">
                  <button className="w-[40px] h-[40px] text-[35px] border-[2px] rounded-bl-[20px] rounded-tl-[20px] flex items-center justify-center hover:bg-mainColor">
                    -
                  </button>
                  <p>1</p>
                  <button className="w-[40px] h-[40px] text-[35px] border-[2px] rounded-tr-[20px]  rounded-br-[20px] flex items-center justify-center hover:bg-mainColor">
                    +
                  </button>
                </div>
              </div>
              <div>2500 EGP</div>
              <div className="flex items-center gap-5">
                <div>
                  <p>فستان ابيض عصري</p>
                  <p>اللون : ابيض</p>
                  <p>الوزن : 2 كيلو</p>
                </div>
                <div>
                  <img src="assets/cart-1.png" alt="" />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between px-[20px] font-[600] border-b-[2px] pb-[20px] mt-[10px]">
              <div>2500 EGP</div>
              <div>
                <div className="flex items-center justify-center gap-4 text-[20px] border-[1px] rounded-[20px]">
                  <button className="w-[40px] h-[40px] text-[35px] border-[2px] rounded-bl-[20px] rounded-tl-[20px] flex items-center justify-center hover:bg-mainColor">
                    -
                  </button>
                  <p>1</p>
                  <button className="w-[40px] h-[40px] text-[35px] border-[2px] rounded-tr-[20px]  rounded-br-[20px] flex items-center justify-center hover:bg-mainColor">
                    +
                  </button>
                </div>
              </div>
              <div>2500 EGP</div>
              <div className="flex items-center gap-5">
                <div>
                  <p>فستان ابيض عصري</p>
                  <p>اللون : ابيض</p>
                  <p>الوزن : 2 كيلو</p>
                </div>
                <div>
                  <img src="assets/cart-1.png" alt="" />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between px-[20px] font-[600] border-b-[2px] pb-[20px] mt-[10px]">
              <div>2500 EGP</div>
              <div>
                <div className="flex items-center justify-center gap-4 text-[20px] border-[1px] rounded-[20px]">
                  <button className="w-[40px] h-[40px] text-[35px] border-[2px] rounded-bl-[20px] rounded-tl-[20px] flex items-center justify-center hover:bg-mainColor">
                    -
                  </button>
                  <p>1</p>
                  <button className="w-[40px] h-[40px] text-[35px] border-[2px] rounded-tr-[20px]  rounded-br-[20px] flex items-center justify-center hover:bg-mainColor">
                    +
                  </button>
                </div>
              </div>
              <div>2500 EGP</div>
              <div className="flex items-center gap-5">
                <div>
                  <p>فستان ابيض عصري</p>
                  <p>اللون : ابيض</p>
                  <p>الوزن : 2 كيلو</p>
                </div>
                <div>
                  <img src="assets/cart-1.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex items-center justify-between px-[20px] text-mainColor text-[25px] font-semibold">
            <button>مسح السلة</button>
            <button>واصل التسوق</button>
          </div>
        </div>
        {/*=============== section ================*/}

        {/*=============== section ================*/}
        <div className="w-[580px] h-[630px]  absolute top-[860px] left-[-100px] text-right pr-[20px] flex flex-col gap-5 rounded-lg shadow-[0_0_80px_0_gray]">
          <div>
            <p className="text-[20px] font-bold my-[10px]">الكوبون</p>
            <p>ادخل رمز الكوبون الخاص بك اذا كان لديك واحد</p>
          </div>
          <div className="flex justify-end gap-8">
            <button className="w-[150px] h-[45px] rounded-[10px]  p-[16px] text-[16px] text-white bg-mainColor mb-[10px] font-bold flex items-center justify-center hover:bg-[#1877F2] transition-all duration-300">
              تأكيد الكوبون
            </button>
            <input
              type="text"
              placeholder="رمز الكوبون"
              className="w-[150px] h-[45px] rounded-[10px] text-right pr-[20px]"
            />
          </div>
          <div>
            <p className="text-[20px] font-bold">ملحوظة</p>
            <p className="my-[12px]">اضافة ملحوظة للبائع</p>
            <textarea
              placeholder="اكتب ملحوظتك هنا"
              className="w-[90%] h-[160px] text-right pt-[20px] pr-[20px] rounded-[10px]"
            ></textarea>
          </div>
          <div className="flex items-center justify-between font-[600] pl-[30px]">
            <p>600 EGP</p>
            <p>المجموع الفرعي</p>
          </div>
          <div className="flex items-center justify-between font-[600] pl-[30px]">
            <p>600 EGP</p>
            <p>المجموع الاجمالي</p>
          </div>
          <p>الشحن والضرائب محسوبة عند الدفع</p>
          <div className="flex items-center justify-between pl-[20px]">
            <button className="w-[150px] h-[45px] rounded-[10px]  p-[16px] text-[16px] text-white bg-mainColor mb-[10px] font-bold flex items-center justify-center hover:bg-[#1877F2] transition-all duration-300">
              الدفع
            </button>
            <button className="w-[150px] h-[45px] rounded-[10px]  p-[16px] text-[16px] text-white bg-mainColor mb-[10px] font-bold flex items-center justify-center hover:bg-[#1877F2] transition-all duration-300">
              تحديث السلة
            </button>
          </div>
        </div>
        {/*=============== section ================*/}
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

export default Basket;
