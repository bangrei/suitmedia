"use client";

import React from "react";
import Image from "next/image";

interface Props {
  item: any;
}

function KnowledgeCard(props: Props) {
    return (
      <div className="w-full flex flex-col relative gap-2 rounded-xl bg-white p-4 overflow-hidden shadow-sm">
        <div className="rounded-lg relative w-full overflow-hidden">
          <Image
            src={require(`../images/knowledges/${props.item.image}`)}
            alt={"knowledge"}
            width={0}
            height={0}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div className="mt-1 px-3 py-1 text-[10px] bg-[#00A7E7] text-white rounded-lg w-fit">
          {props.item.tag}
        </div>
        <div className="text-title font-semibold">{props.item.title}</div>
        <div className="text-xs text-slate-400">{props.item.desc}</div>
      </div>
    );
}

export default KnowledgeCard;
