import React from "react";
import { Link } from "react-router-dom";

function Vistor({ showVistor, setShowVistor }) {
  return (
    <>
      <section className="w-[290px] h-[200px]  rounded-lg flex flex-col items-center justify-center  shadow-[0_0_80px_0_gray] bg-white absolute top-[60px] left-[-100px]">
        <div className="w-full flex flex-col items-center justify-end gap-7">
          <div className="w-full h-[50px] text-[35px] flex items-center justify-end pr-[20px] hover:cursor-pointer">
            <i
              onClick={() => setShowVistor(false)}
              class="ri-close-circle-fill"
            ></i>
          </div>
          <div className="w-full pr-[30px] flex  items-center justify-between text-right text-[20px] font-semibold text-mainColor">
            <div className="w-[80%]">
              <p>
                <Link to={"/login"}>تسجيل الدخول</Link>
              </p>
            </div>
            <div className="w-[20%]">
              <i class="ri-user-fill"></i>
            </div>
          </div>
          <div className="w-full pr-[30px] flex  items-center justify-between text-right text-[20px] font-semibold ">
            <div className="w-[80%]">
              <p>
                <Link to={"/signup"}>تسجيل جديد</Link>
              </p>
            </div>
            <div className="w-[20%]">
              <i class="ri-user-add-fill"></i>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Vistor;
