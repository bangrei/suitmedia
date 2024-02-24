"use client";

import React, { useEffect, useState } from "react";
import banner from "../images/main-banner.png";
import Image from "next/image";
import BoxContent from "./BoxContent";

function Banners() {
  return (
    <div className="flex w-full bg-background  px-4 md:px-10 lg:px-32 lg:flex-row rounded-b-3xl overflow-hidden">
      <div className="flex w-full gap-6 flex-col lg:flex-row lg:items-center">
        <div className="w-full pt-8">
          <BoxContent alignTo="left" />
        </div>
        <div className="flex w-full justify-between items-end lg:flex-grow">
          <Image src={banner} alt={"banner"} priority />
        </div>
      </div>
    </div>
  );
}

export default Banners;
