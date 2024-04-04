import Image from "next/image";
import React from "react";

function Billboard() {
  return (
    <div className="bg-rose-600 text-background grid grid-cols-2 h-[92dvh] overflow-hidden">
      <div className="grid place-content-center container">
        <h1 className="text-5xl leading-normal font-light tracking-wide">
          Your
          <span className="font-bold tracking-wider"> One-Stop Shop </span>
          for <span className="font-bold tracking-wider">
            {" "}
            Construction{" "}
          </span>{" "}
          Solutions,
          <br />
          Explore BSI
        </h1>
        <p className="text-2xl font-thin text-justify leading-normal mt-9 tracking-wide">
          Builders Solutions Inc. is a leading international trading company
          specializing in the construction industry. We bridge the gap between
          businesses across the globe, facilitating seamless trade of
          high-quality building materials.
        </p>
      </div>
      <div className="aspect-square relative">
        <Image src="/hero-billboard.jpg" fill alt="Billboard" />
      </div>
    </div>
  );
}

export default Billboard;
