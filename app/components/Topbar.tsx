"use client";
import Image from "next/image";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { useChangeLocale } from "../hooks/useChangeLocale";

export default function Topbar() {
  const [isLive, setIsLive] = useState(true);
  const [openLang, setOpenLang] = useState(false);
  const [openUser, setOpenUser] = useState(false);
  const t = useTranslations("common");
  const { changeLocale, currentLocale } = useChangeLocale();

  const languages = [
    { code: "en", label: "English" },
    { code: "fr", label: "Français" },
    { code: "es", label: "Español" },
    { code: "tr", label: "Türkçe" },
  ];
  return (
    <header className="relative my-2 z-40 flex mr-[58px] ml-[35px] items-center justify-between h-[94px] bg-white/70 backdrop-blur-sm">
      <div className="flex w-full items-center gap-3">
        <div className="relative mr-[30px] w-full h-14">
          <input
            placeholder="Search"
            className="w-full h-full pl-14 pr-4 rounded-[50px]   text-ash bg-[#FCFCFC] text-sm focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-[#BBBBBB]"
          />
          <div className="pointer-events-none absolute left-6 top-1/2 -translate-y-1/2 flex items-center">
            <Image
              src="/icons/search.svg"
              width={24}
              height={24}
              alt="search icon"
              className="h-6 w-6"
            />
          </div>
        </div>
      </div>
      <div className="flex  items-center gap-[30px]">
        <div className="flex min-w-[130px] items-center gap-3">
          <button
            type="button"
            aria-pressed={isLive}
            onClick={() => setIsLive((v) => !v)}
            className={`relative  inline-flex h-[22px]  w-[39px] shrink-0 cursor-pointer items-center rounded-full transition-colors duration-200 focus:outline-none  ${
              isLive ? "bg-[#6FCF97]/20" : "bg-zinc-300"
            }`}
          >
            <span
              className={`absolute left-0 top-0  inline-block h-[22px] w-[22px] rounded-full bg-[#6FCF97] shadow-sm ring-1 ring-black/5 transition-transform duration-200 ${
                isLive ? "translate-x-4" : "translate-x-0"
              }`}
            />
            <span className="sr-only">Toggle live mode</span>
          </button>
          <span className="text-ash">{isLive ? t("live") : "Offline"}</span>
        </div>
        <div className="relative ">
          <button
            type="button"
            onClick={() => setOpenLang((o) => !o)}
            className="w-[166px] h-14 rounded-[50px] border border-[#BDBDBD]/20 flex items-center justify-center bg-white gap-[13px] focus:outline-none focus:ring-2 focus:ring-primary"
            aria-haspopup="listbox"
            aria-expanded={openLang}
          >
            <span className="text-ash text-base">
              {languages.find((l) => l.code === currentLocale)?.label}
            </span>
            <Image
              src={"/icons/down.svg"}
              width={24}
              height={24}
              alt="arrow"
              className={`transition-transform ${
                openLang ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>
          {openLang && (
            <ul
              role="listbox"
              className="absolute z-50 mt-2 w-[166px] rounded-2xl border border-[#E0E0E0] bg-white shadow-md overflow-hidden"
            >
              {languages.map((l) => (
                <li key={l.code}>
                  <button
                    type="button"
                    onClick={() => {
                      changeLocale(l.code);
                      setOpenLang(false);
                    }}
                    className={`flex w-full items-center justify-between px-4 py-2 text-sm text-ash hover:bg-zinc-50 ${
                      l.code === currentLocale ? "font-medium" : ""
                    }`}
                    role="option"
                    aria-selected={l.code === currentLocale}
                  >
                    {l.label}
                    {l.code === currentLocale && (
                      <span className="text-primary text-xs">●</span>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
        <button
          className="relative flex items-center justify-center w-14 h-14 rounded-[10px] bg-[#E0E0E0]/20"
          aria-label="notifications"
        >
          <Image
            src={"/icons/notification.svg"}
            width={32}
            height={32}
            alt="notifications"
          />
          <span className="absolute -top-1 -right-1 h-[15px] w-[15px] rounded-md bg-[#E5A0FF]" />
        </button>
        <div className="relative">
          <button
            type="button"
            onClick={() => setOpenUser((o) => !o)}
            className="flex w-[235px] h-14 items-center focus:outline-none"
            aria-haspopup="menu"
            aria-expanded={openUser}
          >
            <Image
              src="/images/martins.png"
              width={56}
              height={56}
              alt="avatar"
              className="rounded-tl-lg rounded-bl-lg object-cover"
            />
            <div className="flex h-full flex-1 rounded-tr-[10px] rounded-br-[10px] pl-4 border-[#E0E0E0]/20 border items-center gap-[25px] bg-white">
              <div className="flex flex-col gap-[7px] text-left">
                <div className="font-medium text-xs text-ash">
                  Marlins Chidume
                </div>
                <div className="text-[#BDBDBD] text-xs ">ID: 1234567</div>
              </div>
              <Image
                src={"/icons/down.svg"}
                width={24}
                height={24}
                alt="arrow"
                className={`transition-transform ${
                  openUser ? "rotate-180" : "rotate-0"
                }`}
              />
            </div>
          </button>
          {openUser && (
            <ul
              className="absolute z-50 right-0 mt-2 w-56 rounded-2xl border border-[#E0E0E0] bg-white shadow-md overflow-hidden"
              role="menu"
            >
              <li>
                <button
                  className="w-full text-left px-4 py-2 text-sm text-ash hover:bg-zinc-50"
                  role="menuitem"
                >
                  {t("profile")}
                </button>
              </li>
              <li>
                <button
                  className="w-full text-left px-4 py-2 text-sm text-ash hover:bg-zinc-50"
                  role="menuitem"
                >
                  {t("settings")}
                </button>
              </li>
              <li>
                <button
                  className="w-full text-left px-4 py-2 text-sm text-ash hover:bg-zinc-50"
                  role="menuitem"
                >
                  {t("logout")}
                </button>
              </li>
            </ul>
          )}
        </div>
      </div>
    </header>
  );
}
