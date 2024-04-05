import Image from "next/image";
import React from "react";

function Categories() {
  return (
    <section className="container my-9">
      <h5 className="font-light text-2xl mb-6">
        <span className="text-rose-600 font-bold">Product </span>
        Categories
      </h5>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="relative aspect-[4/3] rounded-md overflow-hidden group">
          <Image fill src="/bs.jpg" alt="" className="-z-30" />
          <div className="test-rose-700 absolute bottom-0 p-6 text-background">
            <h6 className="font-bold">Building Solutions</h6>
            <p className="font-light">
              Ensure structural longevity with expansion joints, tile movement
              joints, and trims.
            </p>
          </div>
          <span className="absolute h-2/4 group-hover:h-full transition-all bg-gradient-to-b from-accent/0 via-accent/00 to-accent/70 w-full bottom-0 left-0 select-none -z-20" />
        </div>
      </div>
    </section>
  );
}

export default Categories;
