"use client";
import Image from "next/image";
import { useState } from "react";
import { useTranslations } from "next-intl";

export default function Sidebar() {
  const t = useTranslations("sidebar");

  // Static keys for navigation structure
  const navStructure = [
    {
      titleKey: "payments",
      itemKeys: [
        "transactions",
        "customers",
        "payouts",
        "balances",
        "subscriptions",
        "paymentPlans",
      ],
    },
    {
      titleKey: "commerce",
      itemKeys: ["referrals", "auditLogs", "settings"],
    },
  ];

  const iconMap: Record<string, string> = {
    transactions: "transactions.svg",
    customers: "Customers.svg",
    payouts: "Payouts.svg",
    balances: "Balances.svg",
    subscriptions: "Subscriptions.svg",
    paymentPlans: "Payment plans.svg",
    referrals: "Referrals.svg",
    auditLogs: "Audit logs.svg",
    settings: "Settings.svg",
  };

  const [open, setOpen] = useState<Record<string, boolean>>({
    payments: true,
    commerce: true,
  });

  const toggle = (titleKey: string) =>
    setOpen((s) => ({ ...s, [titleKey]: !s[titleKey] }));

  return (
    <aside className="hidden pt-[26px] lg:flex lg:w-64 xl:w-[214px] flex-col bg-white/70 backdrop-blur-sm pl-5">
      <div className="w-full h-[76px]">
        <div className="flex relative  items-center gap-2 w-[87.74px] h-8 px-2">
          <Image src={"/sfx.svg"} fill alt="SFx Logo" />
        </div>
      </div>
      <nav className="flex-1 pr-[22px] space-y-6">
        {navStructure.map((section) => (
          <div key={section.titleKey}>
            <div
              className={`flex  items-center ${
                section.titleKey === "commerce"
                  ? "py-6 border-y border-[#DDE7F1]"
                  : ""
              } justify-between`}
            >
              <h6 className="tracking-wide text-ash font-bold">
                {t(section.titleKey)}
              </h6>
              <button
                type="button"
                aria-expanded={!!open[section.titleKey]}
                onClick={() => toggle(section.titleKey)}
                className="p-1 rounded hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer"
              >
                <Image
                  src={"/icons/polygon.svg"}
                  width={16}
                  height={14}
                  alt="toggle section"
                  className={`transition-transform duration-200 ${
                    open[section.titleKey] ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
            </div>
            {open[section.titleKey] && (
              <ul className="mt-[34px] space-y-1">
                {section.itemKeys.map((itemKey) => (
                  <li key={itemKey}>
                    <a
                      href="#"
                      className="flex items-center gap-3 rounded-md px-1 py-2 text-sm text-ash hover:bg-zinc-100"
                    >
                      {iconMap[itemKey] ? (
                        <Image
                          src={`/icons/${encodeURIComponent(iconMap[itemKey])}`}
                          alt={`${t(itemKey)} icon`}
                          width={24}
                          height={24}
                          className="h-6 w-6"
                        />
                      ) : (
                        <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-zinc-100 text-[10px] text-ash">
                          ?
                        </span>
                      )}
                      {t(itemKey)}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
}
