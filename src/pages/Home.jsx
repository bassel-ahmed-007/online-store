import React from "react";
import NavBar from "../components/NavBar";
import Card from "../components/Card";
import Footer from "../components/Footer";
import data from "../data";

function Home() {
  return (
    <section className="w-[1728]">
      <div className="container">
        <NavBar />

        {/*============= hero section =========*/}
        <div className="w-full h-[600px] my-[30px] flex items-center">
          <div className="w-[55%]">
            <img src="assets/home-hero.jpg" alt="" />
          </div>
          <div className="w-[45%] flex flex-col items-center gap-7">
            <p className="text-[25px]">براندات نسائي عالمية</p>
            <h1 className="text-[48px] font-semibold">احدث ادوات الجمال</h1>
            <p className="text-[25px]">براندات نسائي عالمية</p>
            <button className="w-[180px] h-[61px] rounded-[30px]  p-[16px] text-[16px] text-white bg-mainColor mb-[10px] font-bold flex items-center justify-center hover:bg-[#1877F2] transition-all duration-300">
              اكتشف الان
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center my-[80px]">
          <div className="w-[50px] h-[50px] border-[2px] rounded-full flex items-center justify-center bg-mainColor text-white text-[25px] cursor-pointer">
            <i class="ri-arrow-left-s-line "></i>
          </div>
          <div className="w-[80px] h-[40px] border-[2px] rounded-full flex items-center justify-center">
            <i class="ri-checkbox-blank-circle-fill text-mainColor cursor-pointer"></i>
            <i class="ri-checkbox-blank-circle-fill text-gray-300 cursor-pointer"></i>
            <i class="ri-checkbox-blank-circle-fill text-gray-300 cursor-pointer"></i>
          </div>
          <div className="w-[50px] h-[50px] border-[2px] border-mainColor rounded-full flex items-center justify-center text-mainColor text-[25px] cursor-pointer">
            <i class="ri-arrow-right-s-line"></i>
          </div>
        </div>
        {/*============= hero section =========*/}

        {/*================ section=========== */}
        <div className="w-full flex items-center justify-between border-b-2 pb-[20px] mt-[200px] mb-[200px] px-[10px]">
          <div className="flex items-center justify-center gap-3">
            <div className="text-right">
              <p className="font-bold">عروض حصرية</p>
              <p>خصومات كبيره علي منتجاتنا</p>
            </div>
            <div className="w-[50px] h-[50px] border-2 flex items-center justify-center rounded-lg text-mainColor text-[33px]">
              <i class="ri-gift-fill"></i>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3">
            <div className="text-right">
              <p className="font-bold">استرجاع الاموال</p>
              <p>استرداد ام لاموالك والاستبدال</p>
            </div>
            <div className="w-[50px] h-[50px] border-2 flex items-center justify-center rounded-lg text-mainColor text-[33px]">
              <i class="ri-wallet-3-fill"></i>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3">
            <div className="text-right">
              <p className="font-bold">دعم فني</p>
              <p>دعم علي مدار الساعة</p>
            </div>
            <div className="w-[50px] h-[50px] border-2 flex items-center justify-center rounded-lg text-mainColor text-[33px]">
              <i class="ri-cellphone-fill"></i>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3">
            <div className="text-right">
              <p className="font-bold">توصيل مجاني</p>
              <p>للطلبات اعلي من 200 جنية</p>
            </div>
            <div className="w-[50px] h-[50px] border-2 flex items-center justify-center rounded-lg text-mainColor text-[33px]">
              <i class="ri-truck-fill "></i>
            </div>
          </div>
        </div>
        {/*================ section=========== */}

        {/*================ section=========== */}
        <div className="w-full h-[325px] flex items-center justify-center gap-[33px] mb-[170px]">
          <div className="w-[47%] h-full bg-[#FFDBDF] flex items-center justify-between relative">
            <div className="absolute top-[50%] translate-y-[-50%] right-[300px] text-right">
              <p className="font-semibold text-[20px]">خصم كبير</p>
              <p className="font-bold text-[35px]">فساتين بناتي</p>
              <p className="font-semibold text-[20px]">تسوق الان</p>
            </div>
            <div className="absolute top-[-2px] right-[-50px]">
              <img src="assets/home-female.png" alt="" />
            </div>
          </div>
          <div className="w-[47%] h-full bg-[#D6F7FE] flex items-center justify-between relative">
            <div className="absolute top-[50%] translate-y-[-50%] right-[300px] text-right">
              <p className="font-bold text-[35px]">ملابس الأطفال</p>
              <p className="font-semibold text-[20px]">خصم %50</p>
              <p className="font-semibold text-[20px]">تسوق الان</p>
            </div>
            <div className="absolute top-[8px] right-[-50px]">
              <img src="assets/home-child.png" alt="" />
            </div>
          </div>
        </div>
        {/*================ section=========== */}

        {/*================ products section=========== */}
        <div className="relative">
          <h1 className="mb-[100px] text-center text-[35px] font-[700] after:w-[200px] after:h-[6px] after:rounded-lg after:bg-mainColor after:absolute after:top-[70px] after:left-[50%] after:translate-x-[-50%]">
            احدث المنتجات
          </h1>
        </div>

        <div className="w-full mb-[105px] grid grid-cols-4 gap-5">
          {/*========product ======*/}
          {data.slice(0, 8).map((item, index) => (
            <Card key={index} item={item} />
          ))}
          {/*========product ======*/}
        </div>
        {/*================ products section=========== */}

        {/*================ section=========== */}
        <div className="w-full h-[723px] bg-[#BDE6FC] mb-[175px] relative flex items-center justify-center">
          <div className="absolute bottom-0 left-0 ">
            <img src="assets/home-child-3.png" alt="" />
          </div>
          <div className="absolute top-0 right-0 ">
            <img src="assets/home-child-2.png" alt="" />
          </div>
          <div className="flex flex-col items-center gap-7">
            <p className="text-[25px] font-semibold">اكبر خصم علي الاطلاق</p>
            <p className="text-[70px] font-[900] text-[#9363B5]">
              احدث ملابس الاطفال
            </p>
            <div className="flex items-center justify-center gap-8 text-[60px] font-[800]">
              <p className="text-center leading-[70px]">
                00
                <br />
                يوم
              </p>
              <p className="text-center leading-[70px]">
                00
                <br />
                ساعة
              </p>
              <p className="text-center leading-[70px]">
                00
                <br />
                دقيقة
              </p>
              <p className="text-center leading-[70px] text-[#9363B5]">
                00
                <br />
                ثانية
              </p>
            </div>
            <button className="w-[131px] h-[51px] rounded-[30px]  p-[16px] text-[16px] text-white bg-[#9363B5] font-bold flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-all duration-300">
              تسوق الان
            </button>
          </div>
        </div>
        {/*================ section=========== */}

        {/*================ section=========== */}
        <div className="w-full h-[525px] flex items-center justify-between gap-[40px] mb-[121px]">
          <div className="w-[69%] flex items-center justify-between">
            {data.slice(0, 3).map((item, index) => (
              <Card key={index} item={item} />
            ))}
          </div>
          <div className="w-[29%] h-[500px] border-[4px] rounded-3xl flex flex-col items-end ">
            <div className="w-full h-[85px] flex items-center justify-end pr-[20px] text-[23px] font-[400] text-white bg-mainColor rounded-tr-2xl rounded-tl-2xl  border-b-[2px]">
              تسوق عبر الفئات
            </div>
            <div className="w-full h-[85px] flex items-center justify-end pr-[20px] text-[23px] font-[400]  border-b-[2px] hover:text-white hover:bg-mainColor cursor-pointer">
              رجالي
            </div>
            <div className="w-full h-[85px] flex items-center justify-end pr-[20px] text-[23px] font-[400]  border-b-[2px] hover:text-white hover:bg-mainColor cursor-pointer">
              حريمي
            </div>
            <div className="w-full h-[85px] flex items-center justify-end pr-[20px] text-[23px] font-[400]  border-b-[2px] hover:text-white hover:bg-mainColor cursor-pointer">
              اطفال
            </div>
            <div className="w-full h-[85px] flex items-center justify-end pr-[20px] text-[23px] font-[400]  border-b-[2px] hover:text-white hover:bg-mainColor cursor-pointer">
              اكسسوارات
            </div>
            <div className="w-full h-[85px] flex items-center justify-end pr-[20px] text-[23px] font-[400]  hover:text-white hover:bg-mainColor cursor-pointer rounded-br-2xl rounded-bl-2xl">
              العاب
            </div>
          </div>
        </div>
        {/*================ section=========== */}

        {/*================ section=========== */}
        <div className="relative">
          <h1 className="mb-[100px] text-center text-[35px] font-[700] after:w-[100px] after:h-[6px] after:rounded-lg after:bg-mainColor after:absolute after:top-[70px] after:left-[50%] after:translate-x-[-50%]">
            البراندات
          </h1>
        </div>

        <div className="flex items-center justify-between mb-[140px]">
          <div className="w-[141px]">
            <img src="assets/brand-1.png" alt="" />
          </div>
          <div className="w-[141px]">
            <img src="assets/brand-2.png" alt="" />
          </div>
          <div className="w-[141px]">
            <img src="assets/brand-3.png" alt="" />
          </div>
          <div className="w-[141px]">
            <img src="assets/brand-4.png" alt="" />
          </div>
          <div className="w-[141px]">
            <img src="assets/brand-5.png" alt="" />
          </div>
          <div className="w-[141px]">
            <img src="assets/brand-3.png" alt="" />
          </div>
          <div className="w-[141px]">
            <img src="assets/brand-2.png" alt="" />
          </div>
        </div>
        {/*================ section=========== */}

        {/*================last section=========== */}
        <div className="h-[403px] w-full flex items-center justify-between mb-[190px] ">
          <div className="w-[28%] h-full flex flex-col gap-4">
            <img src="assets/last-1.png" alt="" />
            <p className="text-[20px] font-bold">
              اجمل صيحات الموضة والفاشن حصريا
            </p>
            <p>مع باقة من اجمل الملابس الكاجوال البناتي المودرن</p>
          </div>
          <div className="w-[28%] h-full flex flex-col gap-4">
            <p className="text-[20px] font-bold">
              اجمل صيحات الموضة والفاشن حصريا
            </p>
            <p>مع باقة من اجمل الملابس الكاجوال البناتي المودرن</p>
            <img src="assets/last-2.png" alt="" />
          </div>
          <div className="w-[28%] h-full flex flex-col gap-4">
            <img src="assets/last-3.png" alt="" />
            <p className="text-[20px] font-bold">
              اجمل صيحات الموضة والفاشن حصريا
            </p>
            <p>مع باقة من اجمل الملابس الكاجوال البناتي المودرن</p>
          </div>
        </div>
        {/*================last section=========== */}
      </div>
      {/*================footer=========== */}

      <Footer />
      {/*================footer=========== */}
    </section>
  );
}

export default Home;
