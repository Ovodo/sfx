"use client";
import Donut from "./Donut";
import {
  BarChart,
  Bar,
  XAxis,
  ResponsiveContainer,
  Cell,
  LabelList,
} from "recharts";
import { useTranslations } from "next-intl";

export default function StatCards() {
  const t = useTranslations("charts");
  const tErrors = useTranslations("paymentErrors");

  const paymentIssues = [
    {
      label: tErrors("customerErrors"),
      count: 1,
      color: "#F2994A",
      bgColor: "bg-[#F2994A]",
      shortName: "a",
    },
    {
      label: tErrors("fraudBlocks"),
      count: 5,
      color: "#F2C94C",
      bgColor: "bg-[#F2C94C]",
      shortName: "x",
    },
    {
      label: tErrors("bankErrors"),
      count: 3,
      color: "#EB5757",
      bgColor: "bg-[#EB5757]",
      shortName: "o",
    },
    {
      label: tErrors("systemErrors"),
      count: 10,
      color: "#56CCF2",
      bgColor: "bg-[#56CCF2]",
      shortName: "n",
    },
  ];

  const chartData = paymentIssues.map((item) => ({
    name: item.shortName,
    value: item.count,
  }));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="rounded-[40px] border border-[#F2F2F2] bg-white p-8">
        <div className="text-base font-bold text-[#333333] mb-6">
          {t("successRate")}
        </div>
        <div className="flex flex-col items-center justify-between">
          <Donut value={65} />
          <div className="flex mt-10  items-start gap-[86px]">
            <div className="flex flex-col items-start  gap-1">
              <div className="flex items-center gap-4">
                <span className="h-[22px] w-[22px] rounded-lg bg-[#DFEEDB]"></span>
                <span className="text-[32px] font-semibold text-[#333333]">
                  1
                </span>
              </div>
              <span className="text-xs text-ash font-semibold">
                {t("unsuccessful")}
              </span>
            </div>
            <div className="flex flex-col items-start  gap-1">
              <div className="flex items-center gap-4">
                <span className="h-[22px] w-[22px] rounded-lg bg-[#A6D997]"></span>
                <span className="text-[32px] font-semibold text-[#333333]">
                  150
                </span>
              </div>
              <span className="text-xs text-ash font-semibold">
                {t("successful")}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-[40px] border border-[#F2F2F2] bg-white p-8">
        <div className="text-base font-bold text-[#333333] mb-6">
          {t("paymentIssues")}
        </div>
        <div className="h-48 mb-6">
          <ResponsiveContainer width="100%" height="100%" minHeight={192}>
            <BarChart
              data={chartData}
              margin={{ top: 20, right: 0, left: 0, bottom: 5 }}
            >
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#BDBDBD", fontSize: 14 }}
              />
              <Bar dataKey="value" radius={[8, 8, 0, 0]} maxBarSize={60}>
                {chartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={paymentIssues[index].color}
                  />
                ))}
                <LabelList
                  dataKey="value"
                  position="top"
                  fill="#828282"
                  fontSize={12}
                  fontWeight={600}
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="mb-4">
          <div className="text-sm text-[#FFA14E] font-semibold mb-4">
            Total number of errors:{" "}
            <span className="font-bold text-lg">19</span>
          </div>
        </div>
        <div className="space-y-3">
          {paymentIssues.map((r) => (
            <div key={r.label} className="flex items-center gap-3">
              <span
                className={`h-6 w-6 rounded-lg ${r.bgColor} flex items-center justify-center text-white text-xs font-semibold`}
              >
                {r.shortName}
              </span>
              <span className="text-xs text-ash font-semibold">{r.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
