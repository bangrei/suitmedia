"use client"

import React from "react";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

interface Props {
  items: any[];
}

function BrandList(props: Props) {
  const brands = props.items;
  return (
    <div className="w-full hidden md:flex flex-col pt-8">
      <div className="flex w-full items-center justify-between pb-8">
        <div className="flex gap-2 items-center">
          <span className="text-[16px] text-primary">Proud to be part of</span>
          <span className="text-[24px] text-primary font-semibold">
            Pet Sellers
          </span>
        </div>
        <button className="flex items-center border gap-2 border-primary px-8 py-2 w-fit rounded-3xl cursor-pointer hover:opacity-60">
          <span>View all our sellers</span>
          <ChevronRightIcon width={18} />
        </button>
      </div>
      <div className="w-full grid grid-cols-7 gap-4 lg:gap-6">
        {brands.map((brand: any) => {
          return (
            <div key={brand} className="flex flex-col gap-2 cursor-pointer">
              <Image
                src={require(`../images/${brand}`)}
                alt={brand}
                width={0}
                height={0}
                style={{
                  width: "100%",
                  aspectRatio: "3/2",
                  objectFit: "contain",
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BrandList;
