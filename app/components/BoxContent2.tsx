"use client";

import { PlayCircleIcon } from "@heroicons/react/24/solid";
import React from "react";
import Image from "next/image";

function BoxContent2() {
    return (
      <div className="plate-2">
        <div className="plate-2-title-wrapper">
          <span className="plate-2-title">Adoption</span>
          <Image
            src={require("../images/paw.png")}
            width={52}
            height={52}
            alt="paw"
          />
        </div>
        <h3 className="plate-2-subtitle">We Need Help. So Do They.</h3>
        <span className="text-sm lg:text-lg">
          Adopt a pet and give it a home, it will be love you back
          unconditionally.
        </span>
        <div className="plate-2-btn-group">
          <button className="btn-primary">
            <span>Explore Now</span>
          </button>
          <button className="btn-light">
            <span>View Intro</span>
            <PlayCircleIcon width={18} />
          </button>
        </div>
      </div>
    );
}
export default BoxContent2;