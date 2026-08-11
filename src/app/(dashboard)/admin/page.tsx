import CountChart from "@/components/CountChart";
import Users from "@/components/users";
import React from "react";

const AdminPage = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 p-4">
      {/*left side*/}
      <div className="w-full lg:w-2/3 ">
        {/*user cards*/}
        <div className="flex gap-2 justify-between flex-wrap ">
          <Users type="Student" />
          <Users type="Teacher" />
          <Users type="Parent" />
          <Users type="Staff" />
        </div>
        <div className="flex gap-4 flex-col lg:flex-row">
          <div className="w-full lg:w-1/3h-[450px]">
            <CountChart />
          </div>

          <div className="w-full lg:w-2/3h-[450px]"></div>
        </div>
        <div className=""></div>
      </div>
      {/*right side*/}
      <div className="w-full lg:w-1/3">r</div>
    </div>
  );
};

export default AdminPage;
