"use client";

import { PlayCircleIcon } from "@heroicons/react/24/solid";
import React from "react";

interface Props {
  alignTo: string;
}
function BoxContent(props: Props) {
    return (
      <div className="plate">
        <h1
          className={`plate-title
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
        <h3 className={`plate-subtitle`}>Thousands More Fun!</h3>
        <span className={`text-sm lg:text-lg`}>
          Having a pet means you have more joy, a new friend, a happy person who
          will always be with you to have fun. We have 200+ different pets that
          can meet your needs!
        </span>
        <div
          className={`plate-btn-group ${
            props.alignTo == "md:right" ? "md:justify-end" : ""
          }`}
        >
          <button className="btn-light">
            <span>View Intro</span>
            <PlayCircleIcon width={18} />
          </button>
          <button className="btn-primary">
            <span>Explore Now</span>
          </button>
        </div>
      </div>
    );
}
export default BoxContent;