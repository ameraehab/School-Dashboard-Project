import React from "react";
import Image from "next/image";
const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4">
      {/* SEARCH BAR */}
      <div
        className="hidden md:flex items-center gap-2 ring-[1.5px]
         ring-gray-300 rounded-full p-2 w-[400px]
      "
      >
        <Image src="/search.png" alt="Search" width={20} height={20} />
        <input
          type="text"
          placeholder="Search..."
          className="p-2 outline-none w-[200px] bg-gray-50 "
        />
      </div>
      {/* USER DATA */}
      <div className="flex gap-2 items-center w-full justify-end ">
        <div
          className="bg-white rounded-full w-7 h-7 
        flex items-center justify-center cursor-pointer"
        >
          <Image src="/message.png" alt="Message" width={20} height={20} />
        </div>
        <div
          className="bg-white rounded-full w-7 h-7 
        flex items-center justify-center cursor-pointer relative"
        >
          <Image
            src="/announcement.png"
            alt="Announcement"
            width={20}
            height={20}
          />
          <div
            className="absolute -top-3 -right-2 w-5 h-5 
           bg-red-400 text-white text-xs 
           rounded-full flex items-center justify-center"
          >
            1
          </div>
        </div>
        <div className="flex items-center gap-2 ml-2 mr-3">
          <div className="flex flex-col ">
            <span className="text-xs leading-3 font-medium">
              Amera Abosheta
            </span>
            <span className="text-sm text-gray-600 text-right">Admin</span>
          </div>
        </div>

        <Image
          src="/avatar.png"
          alt="avatar"
          className="rounded-full"
          width={38}
          height={38}
        />
      </div>
    </div>
  );
};

export default Navbar;
