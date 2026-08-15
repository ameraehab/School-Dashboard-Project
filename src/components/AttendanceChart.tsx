"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import Image from "next/image";

const data = [
  {
    name: "Mon",
    present: 60,
    absent: 40,
  },
  {
    name: "Wed",
    present: 90,
    absent: 75,
  },
  {
    name: "Thu",
    present: 90,
    absent: 75,
  },
  {
    name: "Fri",
    present: 70,
    absent: 60,
  },
  {
    name: "Sat",
    present: 65,
    absent: 55,
  },
];

const AttendanceChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4 mt-3">
      <div className="flex justify-between items-center mb-4">
        <h1>Attendance Chart</h1>

        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>

      <div className="w-[100%] h-[90%] flex justify-center items-center">
        <BarChart
          style={{
            width: "500px",
            height: "300px",
          }}
          responsive
          data={data}
          barSize={20}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd" />

          <XAxis dataKey="name" axisLine={false} />

          <YAxis axisLine={false} />

          <Tooltip />
          <Legend />
          <Bar dataKey="present" fill="#8884d8" radius={[10, 10, 0, 0]} />

          <Bar dataKey="absent" fill="#82ca9d" radius={[10, 10, 0, 0]} />
        </BarChart>
      </div>
    </div>
  );
};

export default AttendanceChart;
