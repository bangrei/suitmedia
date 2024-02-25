"use client";

import React from "react";
import Image from "next/image";

interface Props {
  item: any;
}

function ItemCard(props: Props) {
  const currency = (value: any) => {
    if (value != null) {
      value = value.toFixed(2);
      let curr = "";
      let positiveValue = value.toString().split(".")[0];
      let decimalValue =
        value.toString().split(".").length > 1
          ? value.toString().split(".")[1]
          : "00";
      let currRev = positiveValue.toString().split("").reverse().join("");
      for (let i = 0; i < currRev.length; i++) {
        if (i % 3 == 0) {
          curr += currRev.substr(i, 3) + ".";
        }
      }

      let totalString = curr
        .split("", curr.length - 1)
        .reverse()
        .join("");
      return `${totalString} ${decimalValue > 0 ? "," + decimalValue : ""}`;
    }
  };
  return (
    <div className="w-full flex flex-col relative gap-2 rounded-xl bg-white p-4 overflow-hidden shadow-sm">
      <div className="rounded-lg relative w-full overflow-hidden">
        <Image
          src={require(`../images/collections/${props.item.image}`)}
          alt={"collections"}
          width={0}
          height={0}
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <div className="text-title font-semibold">{props.item.type}</div>
      <div className="tags">
        {props.item.tags.map((tag: any, i: any) => {
          return (
            <div className="tag-item" key={i}>
              <span className="font-light">{tag.title}:</span>
              <span className="font-medium">{tag.value}</span>
            </div>
          );
        })}
      </div>
      <div className="font-semibold text-title">
        {currency(props.item.price)} VND
      </div>
      {props.item.promo && (
        <div className="p-2 bg-background flex items-center gap-3 rounded-lg">
          <Image
            src={require("../images/gift.png")}
            alt=""
            width={16}
            height={16}
          />
          <div className="w-1 h-1 rounded-xl bg-primary"></div>
          <div className="text-title text-xs">{props.item.promo}</div>
        </div>
      )}
    </div>
  );
}

export default ItemCard;
