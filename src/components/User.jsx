import React from "react";

function User() {
  return (
    <section className="w-[260px] h-[275px]  rounded-lg flex flex-col items-center justify-center gap-7 shadow-[0_0_80px_0_gray] mt-[100px]">
      <div className="flex items-center gap-3">
        <div>
          <p className="text-right font-[600]">مرحبا ايها المستخدم</p>
          <p>email34534534@email.com</p>
        </div>
        <div className="text-[35px]">
          <i class="ri-user-fill"></i>
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-end gap-5">
        <div className="w-full pr-[30px] flex  items-center justify-between text-right text-[20px] font-semibold text-mainColor">
          <div className="w-[80%]">
            <p>لوحة التحكم</p>
          </div>
          <div className="w-[20%]">
            <i class="ri-dashboard-fill"></i>
          </div>
        </div>
        <div className="w-full pr-[30px] flex  items-center justify-between text-right text-[20px] font-semibold ">
          <div className="w-[80%]">
            <p>تفاصيل الحساب</p>
          </div>
          <div className="w-[20%]">
            <i class="ri-account-box-line"></i>
          </div>
        </div>
        <div className="w-full pr-[30px] flex  items-center justify-between text-right text-[20px] font-semibold ">
          <div className="w-[80%]">
            <p>تسجيل الخروج</p>
          </div>
          <div className="w-[20%]">
            <i class="ri-logout-box-fill"></i>
          </div>
        </div>
      </div>
    </section>
  );
}

export default User;
