"use client";
import {
  BarChart as RechartsBar,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Cell,
} from "recharts";

interface BarChartProps {
  data: { label: string; value: number }[];
}

export default function BarChart({ data }: BarChartProps) {
  return (
    <div className="w-full h-64">
      <ResponsiveContainer width="100%" height="100%" minHeight={256}>
        <RechartsBar
          data={data}
          margin={{ top: 20, right: 0, left: 20, bottom: 0 }}
        >
          <CartesianGrid
            strokeDasharray="10 10"
            vertical={false}
            stroke="#E0E0E0"
          />
          <XAxis
            dataKey="label"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#969696", fontSize: 16 }}
            dy={10}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#969696", fontSize: 16 }}
            domain={[0, 200000]}
            ticks={[50000, 100000, 150000, 200000]}
            tickFormatter={(value) => value.toLocaleString()}
          />
          <Bar dataKey="value" radius={[15, 15, 0, 0]} maxBarSize={79}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill="#ECCCFF" />
            ))}
          </Bar>
        </RechartsBar>
      </ResponsiveContainer>
    </div>
  );
}
