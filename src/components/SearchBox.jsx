import React from "react";

function SearchBox({ showSearch, setShowSearch }) {
  return (
    <section className="z-20 w-[2137px] h-[1080px] bg-black/60 absolute top-[-100px] left-[-330px] fixed">
      <div className="w-full h-[400px] bg-[#93CADE] mt-[300px]  flex flex-col items-center justify-center gap-7 relative">
        <div className="absolute top-[30px] right-[480px]">
          <i
            onClick={() => setShowSearch(false)}
            class="ri-close-circle-fill text-[40px] hover:cursor-pointer "
          ></i>
        </div>
        <div className="flex flex-col gap-5 text-right">
          <div>
            <p className="text-[25px] font-bold">عن ماذا تبحث</p>
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="اكتب كلمة البحث هنا"
              className="w-[1000px] h-[60px] text-right pr-[20px] font-semibold bg-transparent border-b-4 text-white focus:outline-none"
            />
            <i class="ri-search-line text-[20px] absolute top-[25px] text-white left-0"></i>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SearchBox;
