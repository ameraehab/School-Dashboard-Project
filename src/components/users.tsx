import React from "react";
import Image from "next/image";
const Users = ({ type }: { type: string }) => {
  return (
    <div
      className="odd:bg-[#B8D6F3] even:bg-[#6AC59B]
   rounded-2xl p-4 flex-1 min-w-[130px]"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-[12px] bg-white rounded-full px-2 py-1 text-gray-500">
          2024/25
        </span>
        <Image src="/more.png" alt="More" width={20} height={20} />
      </div>
      <h1 className="text-3xl font-bold mb-1">1,234</h1>
      <h2 className="text-gray-600">{type}</h2>
    </div>
  );
};

export default Users;
