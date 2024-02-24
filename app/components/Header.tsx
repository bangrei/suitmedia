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
    <div className="header-container">
      <Bars3Icon
        width={30}
        height={30}
        className="text-primary lg:hidden cursor-pointer z-20"
      />
      <div className="header-wrapper">
        <div className="header-top-decoration"></div>
        <div className="navs-container">
          <Image src={logo} alt={"logo"} width={100} />
          <div className="navs-wrapper">
            <span className="nav-item">Home</span>
            <span className="nav-item">Category</span>
            <span className="nav-item">About</span>
            <span className="nav-item">Contact</span>
          </div>
        </div>

        <div className="items-center hidden lg:flex gap-4">
          <div
            className={`search-bar ${
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
              className="search-input"
            />
          </div>
          <button className="btn-nowrap">Join the community</button>
          <div className="currency-container">
            <div className="currency-icon-wrapper">
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
