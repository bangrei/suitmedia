"use client";

import { PlayCircleIcon } from "@heroicons/react/24/solid";
import React from "react";
import Image from "next/image";

function BoxContent2() {
    return (
      <div className="flex flex-col relative w-full text-primary lg:flex-shrink">
        <div className="flex items-center gap-4">
          <span className="text-[2.5em] md:text-[3.5em] font-extrabold leading-tight">
            Adoption
          </span>
          <Image
            src={require("../images/paw.png")}
            width={52}
            height={52}
            alt="paw"
          />
        </div>
        <h3 className="text-[1.3em] md:text-[2em] font-[600] pb-6">
          We Need Help. So Do They.
        </h3>
        <span className="text-sm lg:text-lg">
          Adopt a pet and give it a home, it will be love you back
          unconditionally.
        </span>
        <div className="flex items-center gap-3 py-4 mt-4">
          <button className="flex items-center bg-primary text-white px-8 py-2 w-fit rounded-3xl cursor-pointer hover:opacity-60">
            <span>Explore Now</span>
          </button>
          <button className="flex items-center border gap-2 border-primary px-8 py-2 w-fit rounded-3xl cursor-pointer hover:opacity-60">
            <span>View Intro</span>
            <PlayCircleIcon width={18} />
          </button>
        </div>
      </div>
    );
}
export default BoxContent2;