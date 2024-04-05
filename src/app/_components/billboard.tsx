import Image from "next/image";
import React from "react";

function Billboard() {
  return (
    <div className="bg-rose-600 text-background grid sm:grid-cols-2 sm:h-[92dvh] overflow-hidden p-6 sm:p-0">
      <div className="grid grid-cols-2 sm:grid-cols-1 gap-6 place-content-center sm:max-w-2xl mx-auto mt-6">
        <h1 className="text-lg sm:text-5xl font-light tracking-wide text-center sm:text-left bg-rose-800/70 sm:bg-transparent h-fit sm:h-auto p-3 ">
          Your
          <span className="font-bold tracking-wide"> One-Stop Shop </span>
          for <span className="font-bold tracking-wide">
            {" "}
            Construction{" "}
          </span>{" "}
          Solutions,
          <br />
          Explore BSI
        </h1>
        <p className="sm:text-2xl text-balance text-[16px] font-light sm:text-justify leading-normal sm:mt-9 tracking-wide sm:hidden">
          Builders Solutions Inc. is a top trading company in construction,
          facilitating global material trade.
        </p>
        <p className="sm:text-2xl text-balance text-[16px] font-light sm:text-justify leading-normal sm:mt-9 tracking-wide hidden sm:block">
          Builders Solutions Inc. is a leading international trading company
          specializing in the construction industry. We bridge the gap between
          businesses across the globe, facilitating seamless trade of
          high-quality building materials.
        </p>
      </div>
      <div className="aspect-square relative mt-6 sm:mt-0">
        <Image
          src="/hero-billboard.jpg"
          fill
          className="rounded-xl overflow-hidden"
          alt="Billboard"
        />
      </div>
    </div>
  );
}

export default Billboard;
