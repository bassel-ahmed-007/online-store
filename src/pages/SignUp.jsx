import React from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  return (
    <section className="w-[1920px] h-[931px] flex">
      <div className="w-[50%] h-full flex items-center justify-center text-right ">
        <div className="w-[533px] h-[603px]">
          <div className="mb-[70px]">
            <h1 className="text-[45px] font-bold ">Smart Shop</h1>
          </div>
          <div>
            <h2 className="text-[22px] font-bold my-[20px]">تسجيل الدخول</h2>
            <p className="font-semibold my-[10px]">
              تسجيل الدخول للمتابعه في موقعنا
            </p>
          </div>
          <form className="flex flex-col relative">
            <div>
              <input
                type="text"
                placeholder="الاسم"
                className="text-right w-full h-[50px] border-b-2 my-[10px]"
              />
            </div>
            <div className="absolute top-[20px] left-[20px] text-[25px] text-gray-400">
              <i class="ri-user-fill"></i>
            </div>
            <div>
              <input
                type="email"
                placeholder="البريد الالكتروني"
                className="text-right w-full h-[50px] border-b-2 my-[10px]"
              />
            </div>
            <div className="absolute top-[90px] left-[20px] text-[25px] text-gray-400">
              <i class="ri-mail-fill"></i>
            </div>

            <div>
              <input
                type="password"
                placeholder="كلمة المرور"
                className="text-right w-full h-[50px] border-b-2 my-[10px]"
              />
            </div>
            <div className="absolute top-[160px] left-[20px] text-[25px] text-gray-400">
              <i class="ri-lock-2-fill"></i>
            </div>
          </form>
          <div className="flex items-center justify-between my-[20px]">
            <a href="#" className="text-mainColor">
              هل نسيت كلمة المرور ؟
            </a>
            <button
              onClick={() => navigate("/login")}
              className="w-[131px] h-[51px] p-[16px] text-[16px] text-white bg-mainColor mb-[10px] font-bold flex items-center justify-center rounded-lg hover:bg-[#1877F2] transition-all duration-300"
            >
              انشاء حساب
            </button>
          </div>
          <div>
            <h2 className="text-[22px] font-bold my-[10px]">سجل الدخول عبر</h2>
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
      </div>
      <div className="w-[50%] h-full relative">
        <img src="assets/signup.jpg" alt="login" className="w-full h-full" />
        <div className="flex flex-col absolute top-[50%] translate-y-[-50%] left-0">
          <button className="w-[140px] h-[51px] mb-[10px] rounded-tr-[30px] rounded-br-[30px] p-[16px] text-[16px] text-black bg-white font-bold flex items-center hover:bg-[#1877F2] hover:text-white transition-all duration-300">
            انشاء حساب
          </button>
          <button className="w-[140px] h-[51px] rounded-tr-[30px] rounded-br-[30px] p-[16px] text-[16px] text-white bg-mainColor  font-bold flex items-center hover:bg-[#1877F2] transition-all duration-300">
            تسجيل الدخول
          </button>
        </div>
      </div>{" "}
    </section>
  );
}

export default SignUp;
