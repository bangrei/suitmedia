"use client"

import React from "react";
import logo from "../images/monito-logo.png";
import fb from "../images/social/fb.png";
import twitter from "../images/social/twitter.png";
import instagram from "../images/social/instagram.png";
import youtube from "../images/social/youtube.png";
import Image from "next/image";

const date = new Date();
const year = date.getFullYear();

function Footer() {
    return (
      <div
        className="flex flex-col bg-background
            w-full
            items-center
            justify-between
            py-12 px-4 md:px-10 lg:px-32
            rounded-t-3xl"
      >
        <div className="w-full flex flex-col md:flex-row gap-4 rounded-2xl p-6 bg-primary">
          <span className="text-xl font-semibold">{`Register Now So You Don't Miss Our Programs`}</span>
          <div className="w-full flex flex-col md:flex-row gap-4 rounded-xl p-2 bg-white">
            <input
              type="email"
              placeholder="Enter your Email"
              className="flex-1  rounded-xl px-6 py-4 font-light text-sm outline-none border border-slate-300 text-primary"
            />
            <button className="flex items-center justify-center border gap-2 bg-primary px-8 py-3 w-full md:w-fit rounded-xl font-light cursor-pointer hover:opacity-60">
              Subscribe Now
            </button>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row gap-4 items-center justify-between py-8 border-b border-slate-300">
          <div className="flex items-center justify-between w-full md:w-fit gap-8">
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
          <div className="flex items-center gap-6">
            <Image
              src={fb}
              alt={"FB"}
              width={20}
              className="cursor-pointer hover:opacity-60"
            />
            <Image
              src={twitter}
              alt={"Twitter"}
              width={20}
              className="cursor-pointer hover:opacity-60"
            />
            <Image
              src={instagram}
              alt={"Instagram"}
              width={20}
              className="cursor-pointer hover:opacity-60"
            />
            <Image
              src={youtube}
              alt={"Youtube"}
              width={20}
              className="cursor-pointer hover:opacity-60"
            />
          </div>
        </div>
        <Image
          src={logo}
          alt={"logo"}
          width={100}
          className="flex md:hidden pt-10"
        />
        <div className="w-full flex flex-col-reverse md:flex-row gap-4 items-center justify-between pt-8">
          <span className="text-[13px]  font-[300] text-primary">
            @{year} Monito. All rights reserved.
          </span>
          <Image
            src={logo}
            alt={"logo"}
            width={100}
            className="hidden md:flex"
          />
          <div className="flex items-center gap-8">
            <span className="text-[13px] font-[300] text-primary whitespace-nowrap cursor-pointer hover:opacity-60">
              Terms Of Service
            </span>
            <span className="text-[13px] font-[300] text-primary whitespace-nowrap cursor-pointer hover:opacity-60">
              Privacy Policy
            </span>
          </div>
        </div>
      </div>
    );
}

export default Footer;
