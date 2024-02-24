"use client";

import React from "react";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import KnowledgeCard from "./KnowledgeCard";

interface Props {
  infos: any[];
}

function KnowledgeList(props: Props) {
  const infos = props.infos;
  return (
    <div className="w-full flex flex-col pt-8">
      <div className="flex w-full items-center justify-between pb-8">
        <div className="flex flex-col flex-1">
          <span className="text-[16px]">You already know?</span>
          <div className="text-xl text-primary font-semibold pt-1">
            Useful Pet Knowledge
          </div>
        </div>
        <button className="hidden md:flex items-center border gap-2 border-primary px-8 py-2 w-fit rounded-3xl cursor-pointer hover:opacity-60">
          <span>View more</span>
          <ChevronRightIcon width={18} />
        </button>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
        {infos.map((info: any, i) => {
          return <KnowledgeCard item={info} key={i} />;
        })}
      </div>
      <button className="flex w-full justify-center md:w-fit md:hidden mt-10 px-8 py-2 items-center border gap-2 border-primary rounded-3xl cursor-pointer hover:opacity-60">
        <span>View more</span>
        <ChevronRightIcon width={18} />
      </button>
    </div>
  );
}

export default KnowledgeList;
