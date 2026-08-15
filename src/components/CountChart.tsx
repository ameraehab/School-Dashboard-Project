"use client";
import { RadialBarChart, RadialBar, Legend, Tooltip } from "recharts";
import Image from "next/image";
const data = [
  {
    name: "Total",
    count: 106,
    fill: "white",
  },
  {
    name: "Girls",
    count: 53,
    fill: "#6AC59B",
  },
  {
    name: "Boys",
    count: 53,
    fill: "#B8D6F3",
  },
];

// #endregion
const style = {
  top: "50%",
  right: 0,
  transform: "translate(0, -50%)",
  lineHeight: "24px",
};

const CountChart = () => {
  return (
    <div className="mt-3 bg-white rounded-xl w-full h-full p-4">
      {/*title*/}
      <div className="flex justify-between items-center">
        <h2>Students</h2>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      {/*CHART*/}
      <div className="relative w-full h-[75%] min-h-[250px] flex justify-center items-center">
        <RadialBarChart
          width={300}
          height={300}
          cx="50%"
          cy="50%"
          innerRadius="40%"
          outerRadius="85%"
          barSize={20}
          data={data}
          startAngle={90}
          endAngle={-270}
        >
          <RadialBar
            label={{ position: "insideStart", fill: "#fff" }}
            background
            dataKey="count"
          />
        </RadialBarChart>

        <Image
          src="/maleFemale.png"
          alt=""
          width={65}
          height={65}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      <div className="flex justify-center gap-16 ">
        <div className="flex flex-col gap-1 items-center">
          <div className="w-5 h-5 bg-[#B8D6F3] rounded-full "></div>
          <h1 className="font-bold ">1,234</h1>
          <h2 className="text-sm">Boys (55%)</h2>
        </div>
        <div className="flex flex-col gap-1 items-center">
          <div className="w-5 h-5 bg-[#6AC59B] rounded-full"></div>
          <h1 className="font-bold">1,234</h1>
          <h2 className="text-sm">Girls (45%)</h2>
        </div>
      </div>
    </div>
  );
};

export default CountChart;
