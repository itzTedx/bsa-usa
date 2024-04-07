import Image from "next/image";
import React from "react";
import Experience from "../_components/experience";

const WhyPage = () => {
  return (
    <>
      <h2 className="w-full h-60 bg-blue-950 text-white about-billboard grid place-content-center text-6xl font-bold uppercase">
        Why Us
      </h2>
      <div className="max-w-6xl mx-auto space-y-4 my-12">
        <h2>
          Why Choose <span className="font-bold">Builders Solutions Inc.?</span>
        </h2>
        <p>
          Building success, globally, requires a reliable partner who
          understands your vision and the complexities of international
          construction. At Builders Solutions Inc., we offer more than just
          trading services; we provide a comprehensive solution that empowers
          you to achieve your goals.
        </p>
      </div>
      <section className="mb-9 max-w-5xl mx-auto">
        <Experience />
      </section>
    </>
  );
};

export default WhyPage;
