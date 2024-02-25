"use client";

import React, { useEffect } from "react";
import { useMainStore } from "@/store/MainStore";
import Banners from "./Banners";
import Collections from './Collections';
import kissDog from "../images/kiss-dog.png";
import hands from "../images/hands.png";
import Image from "next/image";
import BrandList from "./BrandList";
import BoxContent2 from "./BoxContent2";
import KnowledgeList from "./KnowledgeList";
import { PlayCircleIcon } from "@heroicons/react/24/solid";

function Board() {
  const [pets, products, brands, knowledges, retrieveData] = useMainStore(
    (state) => [
      state.pets,
      state.products,
      state.brands,
      state.knowledges,
      state.retrieveData,
    ]
  );

  useEffect(() => {
    retrieveData();
  }, []);

  return (
    <div className="w-full flex flex-col gap-12">
      <Banners />
      <div className="w-full flex flex-col px-4 md:px-10 lg:px-32">
        <Collections
          collections={pets}
          subtitle={"What's new?"}
          title={"Take A Look At Some Of Our Pets"}
        />
        <div className="box-1">
          <div
            className="flex-1 relative
            before:z-1
            before:bg-[#002A48]
            before:w-[500px]
            before:h-[500px]
            md:before:w-[800px]
            md:before:h-[800px]
            before:rounded-[80px]
            before:rotate-28
            md:before:rotate-12
            lg:before:rotate-28
            before:absolute
            before:-bottom-[400px]
            before:-left-[120px]
            md:before:-bottom-[600px]
            md:before:-left-[150px]
            lg:before:top-[50%]
            lg:before:-left-52"
          >
            <div className="relative z-10">
              <Image
                src={kissDog}
                alt={""}
                width={0}
                height={0}
                style={{ zIndex: "20" }}
              />
            </div>
          </div>
          <div
            className="box-1-container
          before:bg-background
            before:-z-2
            before:w-[500px]
            before:h-[500px]
            md:before:w-[800px]
            md:before:h-[800px]
            before:rounded-[100px]
            before:rotate-12
            md:before:rotate-12
            lg:before:rotate-28
            before:absolute
            before:-top-[140px]
            before:right-[-50px]
            md:before:-top-[65%]
            lg:before:-top-[380px]
            lg:before:right-[-20%]
          "
          >
            <div className="box-1-content">
              <h1 className={`box-title`}>One More Friend</h1>
              <h3 className={`box-subtitle`}>Thousands More Fun!</h3>
              <span className={`box-desc`}>
                Having a pet means you have more joy, a new friend, a happy
                person who will always be with you to have fun. We have 200+
                different pets that can meet your needs!
              </span>
              <div className={`btn-group`}>
                <button className="btn-light">
                  <span>View Intro</span>
                  <PlayCircleIcon width={18} />
                </button>
                <button className="btn-primary">
                  <span>Explore Now</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full hidden md:block">
          <Collections
            collections={products}
            subtitle={"Hard to choose right products for your pets?"}
            title={"Our Products"}
          />
        </div>
        <BrandList items={brands} />
        <div className="box-2">
          <div className="box-2-container">
            <div className="p-4 md:p-6 lg:p-8">
              <BoxContent2 />
            </div>
          </div>
          <div className="box-2-content">
            <div className="box-2-image">
              <Image
                src={hands}
                alt={""}
                width={0}
                height={0}
                style={{ zIndex: "20", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
        <KnowledgeList infos={knowledges} />
      </div>
    </div>
  );
}

export default Board;
