"use client";

import {
  MagnifyingGlassIcon,
  ChevronDownIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import logo from "../images/monito-logo.png";
import Image from "next/image";

function Header() {
  const [focused, setFocused] = useState(false);
  return (
    <div className="flex items-center justify-between gap-2 w-full p-4 md:px-10 lg:px-32 bg-background">
      <Bars3Icon
        width={30}
        height={30}
        className="text-primary lg:hidden cursor-pointer z-20"
      />
      <div className="text-sm font-light flex items-center gap-3 justify-between relative lg:flex-1">
        <div className="w-[300px] h-[200px] bg-secondary absolute rounded-[50px] rotate-25 -top-[160px] -left-[150px]"></div>
        <div className="text-sm font-light flex items-center lg:gap-8 xl:gap-12 pl-4 md:pl-0 z-20">
          <Image src={logo} alt={"logo"} width={100} />
          <div className="hidden items-center gap-8 lg:flex">
            <span className="text-sm font-[500] text-primary whitespace-nowrap cursor-pointer hover:opacity-60">
              Home
            </span>
            <span className="text-sm font-[500] text-primary whitespace-nowrap cursor-pointer hover:opacity-60">
              Category
            </span>
            <span className="text-sm font-[500] text-primary whitespace-nowrap cursor-pointer hover:opacity-60">
              About
            </span>
            <span className="text-sm font-[500] text-primary whitespace-nowrap cursor-pointer hover:opacity-60">
              Contact
            </span>
          </div>
        </div>

        <div className="items-center hidden lg:flex gap-4">
          <div
            className={`px-6 py-3 flex items-center gap-2 rounded-3xl bg-white ml-6 relative border ${
              focused ? "border-primary" : "border-white"
            }`}
          >
            <MagnifyingGlassIcon
              width={20}
              height={20}
              className="cursor-pointer"
            />
            <input
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              type="search"
              placeholder="Search something here!"
              className="font-light text-sm outline-none border-none min-w-[200px]"
            />

            {/* <div
                className={`absolute left-0 right-0 z-10 mt-[8.5rem] rounded-md bg-white shadow-lg ${
                  focused ? "" : "hidden"
                }`}
              >
                <div className="py-1">
                  <div className="text-gray-700 block px-4 py-2 text-sm cursor-pointer bg-white hover:opacity-80">
                    최근 검색어
                  </div>
                  <div className="text-gray-700 block px-4 py-2 text-sm cursor-pointer bg-white hover:opacity-80">
                    최근 검색 내용이 없어요
                  </div>
                </div>
              </div> */}
          </div>
          <button className="bg-primary text-white font-bold text-xs px-6 py-3 rounded-3xl whitespace-nowrap">
            Join the community
          </button>
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="flex items-center justify-center p-[6px] bg-red-600 rounded-full">
              <StarIcon width={8} height={8} className="text-background" />
            </div>
            <span className="text-sm text-primary">VND</span>
            <ChevronDownIcon width={16} height={16} className="text-primary" />
          </div>
        </div>
      </div>
      <MagnifyingGlassIcon
        width={30}
        height={30}
        className="text-primary lg:hidden cursor-pointer z-20"
      />
    </div>
  );
}

export default Header;
