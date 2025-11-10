import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import BarChart from "./components/BarChart";
import StatCards from "./components/StatCards";
import RightPanel from "./components/RightPanel";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("dashboard");

  const chartData = [
    { label: "Mar 1 - 7", value: 50000 },
    { label: "Mar 8 - 14", value: 120000 },
    { label: "Mar 15 - 21", value: 120000 },
    { label: "Mar 22 - 28", value: 120000 },
    { label: "Final Wk", value: 180000 },
  ];

  return (
    <div className="flex h-screen bg-white font-sans overflow-hidden">
      <Sidebar />
      <div className="flex flex-col flex-1 min-w-0">
        <Topbar />
        <div className="flex flex-1 overflow-hidden">
          <main className="flex-1 overflow-y-auto hide-scrollbar px-6 pr-[90px] py-[21px]">
            <h2 className="text-lg font-bold text-[#FFA14E] mb-[21px]">
              {t("greeting")}
            </h2>
            <h1 className="text-2xl font-bold text-[#1F1F1F] mb-[41px]">
              {t("earnings")}
            </h1>
            <div className="flex gap-[18px]  w-max items-center justify-between">
              <span className="text-base font-semibold text-ash">
                {t("lastDays")}
              </span>
              <button className="rounded-[10px] bg-[#FAF2FF] flex items-center justify-center w-9 h-9 ">
                <Image
                  src={"/icons/purple_polygon.svg"}
                  width={12}
                  height={8}
                  alt="arrow"
                />
              </button>
            </div>
            <div className="rounded-[40px] border border-[#F2F2F2] bg-white p-8 my-14">
              <BarChart data={chartData} />
            </div>
            <StatCards />
          </main>
          <RightPanel />
        </div>
      </div>
    </div>
  );
}
