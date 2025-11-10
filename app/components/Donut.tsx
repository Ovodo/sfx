"use client";
import { PieChart, Pie, ResponsiveContainer } from "recharts";

interface DonutProps {
  value: number; // 0-100
}

export default function Donut({ value }: DonutProps) {
  const successData = [{ name: "Success", value: value }];
  const backgroundData = [{ name: "Total", value: 100 }];

  return (
    <div className="relative h-40 w-40">
      <ResponsiveContainer width="100%" height="100%" minHeight={160}>
        <PieChart>
          {/* Background circle */}
          <Pie
            data={backgroundData}
            cx="50%"
            cy="50%"
            innerRadius={55}
            outerRadius={80}
            startAngle={90}
            endAngle={450}
            dataKey="value"
            fill="#DFEEDB"
            stroke="none"
          />
          {/* Success arc with rounded ends */}
          <Pie
            data={successData}
            cx="50%"
            cy="50%"
            innerRadius={55}
            outerRadius={80}
            startAngle={90}
            endAngle={90 - (value * 360) / 100}
            dataKey="value"
            fill="#A6D997"
            stroke="none"
            cornerRadius={15}
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="absolute inset-0 flex items-center justify-center text-lg font-bold text-[#89B27C]">
        {value}%
      </div>
    </div>
  );
}
