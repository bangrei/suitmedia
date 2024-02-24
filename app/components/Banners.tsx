"use client";

import React, { useEffect, useState } from "react";
import banner from "../images/main-banner.png";
import Image from "next/image";
import BoxContent from "./BoxContent";

function Banners() {
  return (
    <div className="banner">
      <div className="banner-wrapper">
        <div className="w-full pt-8 md:pb-8">
          <BoxContent alignTo="left" />
        </div>
        <div className="banner-image-container">
          <Image src={banner} alt={"banner"} priority />
        </div>
      </div>
    </div>
  );
}

export default Banners;
