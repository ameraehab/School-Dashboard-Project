"use client";
import Image from "next/image";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

// #region Sample data
const data = [
  {
    name: "jan",
    income: 4000,
    expense: 2400,
  },
  {
    name: "feb",
    income: 3000,
    expense: 1398,
  },
  {
    name: "mar",
    income: 2000,
    expense: 9800,
  },
  {
    name: "apr",
    income: 2780,
    expense: 3908,
  },
  {
    name: "may",
    income: 1890,
    expense: 4800,
  },
  {
    name: "jun",
    income: 2390,
    expense: 3800,
  },
  {
    name: "jul",
    income: 3490,
    expense: 4300,
  },
  {
    name: "aug",
    income: 3490,
    expense: 4300,
  },
  {
    name: "sep",
    income: 3490,
    expense: 4300,
  },
  {
    name: "oct",
    income: 3490,
    expense: 4300,
  },
  {
    name: "nov",
    income: 3490,
    expense: 4300,
  },
  {
    name: "dec",
    income: 3490,
    expense: 4300,
  },
];
// #endregion

const FinanceChart = () => {
  return (
    <div className="mt-3 bg-white rounded-xl w-full h-full p-4">
      <div className="flex justify-between items-center">
        <h2>Finance</h2>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>

      <LineChart
        style={{
          width: "100%",
          height: "90%",
          aspectRatio: 1.618,
        }}
        responsive
        data={data}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" stroke="var(--color-text-3)" />
        <YAxis width="auto" stroke="var(--color-text-3)" />
        <Tooltip
          cursor={{
            stroke: "var(--color-border-2)",
          }}
          contentStyle={{
            backgroundColor: "var(--color-surface-raised)",
            borderColor: "var(--color-border-2)",
          }}
        />
        <Legend />
        <Line
          type="monotone"
          dataKey="income"
          stroke="#B8D6F3"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="expense" stroke="#6AC59B" />
      </LineChart>
    </div>
  );
};

export default FinanceChart;
