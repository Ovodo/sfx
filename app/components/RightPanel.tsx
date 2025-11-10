"use client";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";

export default function RightPanel() {
  const [activeTab, setActiveTab] = useState<"stats" | "messages">("messages");
  const t = useTranslations("rightPanel");

  const messages = [
    {
      name: "Peter Japhet",
      snippet: "I need some maintenanc...",
      time: "Jun 2, 12:15pm",
      color: "bg-teal-400",
    },
    {
      name: "Leo Arome",
      snippet: "I got your email and...",
      time: "Wed, 06:05pm",
      color: "bg-rose-400",
    },
    {
      name: "James Robinson",
      snippet: "I need some maintenanc...",
      time: "Jun 2, 12:15pm",
      color: "bg-sky-400",
    },
    {
      name: "Lupita Jonah",
      snippet: "Thank you so much for...",
      time: "Feb 10, 08:05pm",
      color: "bg-amber-300",
    },
  ];

  const stats = [
    { label: t("totalRevenue"), value: "₦3,000,000", change: "+12%" },
    { label: t("activeUsers"), value: "1,234", change: "+5%" },
    { label: t("transactions"), value: "567", change: "+18%" },
    { label: t("successRate"), value: "98%", change: "+2%" },
  ];

  return (
    <aside className="hidden xl:flex w-80 flex-col bg-[#F9F9F9] mt-[11px] items-center rounded-tl-[75px] pt-[75px] z-10">
      <div className="flex border-b pb-[17px] border-[#E0E0E0] gap-20 mb-6">
        <button
          onClick={() => setActiveTab("stats")}
          className={`cursor-pointer font-semibold transition-colors ${
            activeTab === "stats" ? "text-[#333333] font-bold" : "text-ash/50"
          }`}
        >
          Stats
        </button>
        <button
          onClick={() => setActiveTab("messages")}
          className={`cursor-pointer font-semibold transition-colors ${
            activeTab === "messages"
              ? "text-[#333333] font-bold"
              : "text-ash/50"
          }`}
        >
          Messages
        </button>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === "messages" && (
          <motion.ul
            key="messages"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            {messages.map((m) => (
              <li
                key={m.name}
                className="rounded-2xl bg-white w-[218px] h-[126px] px-4 py-4"
              >
                <div className="flex flex-col items-start gap-3">
                  <div className="flex w-full justify-between items-center">
                    <div
                      className={`h-[35px] uppercase text-white flex items-center justify-center w-[35px] text-xs font-semibold rounded-[10.77px] ${m.color} shrink-0`}
                    >
                      {m.name.charAt(0)}
                    </div>
                    <div className="text-[8px] text-[#BDBDBD] font-semibold">
                      {m.time}
                    </div>
                  </div>
                  <div className="flex-1 flex justify-between items-center min-w-0 w-full">
                    <div className="flex flex-col gap-[7px] items-start justify-between mb-1">
                      <div className="text-xs font-semibold text-[#333333]">
                        {m.name}
                      </div>
                      <div className="text-[10px] font-semibold text-[#BDBDBD]">
                        {m.snippet}
                      </div>
                    </div>
                    <Image
                      src="/icons/right_arrow.svg"
                      width={20}
                      height={20}
                      alt="arrow"
                      className=""
                    />
                  </div>
                </div>
              </li>
            ))}
          </motion.ul>
        )}

        {activeTab === "stats" && (
          <motion.div
            key="stats"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl bg-white w-[218px] px-6 py-5"
              >
                <div className="flex flex-col gap-2">
                  <div className="text-[10px] font-semibold text-[#BDBDBD] uppercase">
                    {stat.label}
                  </div>
                  <div className="flex items-end justify-between">
                    <div className="text-xl font-bold text-[#333333]">
                      {stat.value}
                    </div>
                    <div className="text-xs font-semibold text-[#6FCF97]">
                      {stat.change}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </aside>
  );
}
