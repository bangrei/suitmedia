"use client";

import { PlayCircleIcon } from "@heroicons/react/24/solid";
import React from "react";

interface Props {
  alignTo: string;
}
function BoxContent(props: Props) {
    return (
      <div className="flex flex-col relative md:w-full text-primary lg:flex-shrink">
        <h1
          className={`flex items-end md:items-center justify-start
          text-[2.2em] md:text-[4em] font-extrabold leading-tight relative
          before:w-[20px]
          before:h-[20px]
          md:before:w-[65px]
          md:before:h-[65px]
          before:bg-secondary
          before:absolute
          before:-z-2
          before:rounded-xl
          before:rotate-28
          before:hidden
          md:before:block
          md:before:-left-1
          `}
        >
          <span className="relative z-10">One More Friend</span>
        </h1>
        <h3 className={`text-[1.3em] md:text-[2.5em] font-[600] pb-6`}>
          Thousands More Fun!
        </h3>
        <span className={`text-sm lg:text-lg`}>
          Having a pet means you have more joy, a new friend, a happy person who
          will always be with you to have fun. We have 200+ different pets that
          can meet your needs!
        </span>
        <div
          className={`flex items-center gap-3 py-4 mt-4 ${
            props.alignTo == "md:right" ? "md:justify-end" : ""
          }`}
        >
          <button className="flex items-center border gap-2 border-primary px-8 py-2 w-fit rounded-3xl cursor-pointer whitespace-nowrap hover:opacity-60">
            <span>View Intro</span>
            <PlayCircleIcon width={18} />
          </button>
          <button className="flex items-center bg-primary text-white px-8 py-2 w-fit rounded-3xl cursor-pointer whitespace-nowrap hover:opacity-60">
            <span>Explore Now</span>
          </button>
        </div>
      </div>
    );
}
export default BoxContent;