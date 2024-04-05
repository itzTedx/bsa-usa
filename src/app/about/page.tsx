import Image from "next/image";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <h2 className="w-full h-60 bg-blue-950 text-white about-billboard grid place-content-center text-6xl font-bold">
        About Us
      </h2>
      <div className="max-w-5xl mx-auto space-y-4 my-12">
        <p>
          At Builders Solutions Inc., we are driven by a shared passion for
          construction and a deep understanding of the complexities of
          international trade. Our team of experts combines industry knowledge
          with a global perspective, ensuring we can navigate the nuances of
          different markets and regulations with ease.
        </p>
        <p>
          We take pride in fostering long-lasting relationships with our
          clients, built on trust, transparency, and open communication. We
          believe in going the extra mile to understand your specific project
          requirements and develop customized solutions that meet your budget
          and timeline.
        </p>
        <p>
          Our commitment to excellence extends beyond sourcing and procurement.
          We provide comprehensive logistical support, ensuring your materials
          arrive at the right place, at the right time, and in pristine
          condition. Additionally, our dedicated after-sales team is always
          available to address any concerns and provide ongoing support
          throughout your project's life cycle.
        </p>
        <p>
          By partnering with Builders Solutions Inc., you gain access to a
          wealth of experience, a global network of trusted suppliers, and a
          team dedicated to your success. We are not just a trading company; we
          are your reliable partner in building your vision, globally.
        </p>
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-2 my-20 gap-16">
        <div className="relative aspect-square">
          <Image
            fill
            src={"/images/skyscrapper.jpg"}
            alt=""
            className="rounded-xl overflow-hidden object-cover"
          />
        </div>
        <div>
          <h3 className="text-accent font-bold text-4xl">Our Vision</h3>
          <p className="mt-9 text-xl leading-8 font-light">
            To be the leading facilitator of seamless and sustainable
            construction projects across the globe. This vision statement
            emphasizes the company's aspiration to become the go-to choice for
            businesses seeking smooth and efficient international construction
            solutions, while also incorporating the growing importance of
            sustainability in the industry
          </p>
        </div>
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-2 my-20 gap-16">
        <div>
          <h3 className="text-accent font-bold text-4xl">Our Mission</h3>
          <p className="mt-9 text-xl leading-8 font-light">
            To connect businesses with the highest quality building materials
            through reliable and efficient trade while fostering strong
            partnerships built on integrity and excellence.
          </p>
        </div>
        <div className="relative aspect-square">
          <Image
            fill
            src={"/images/arabic-person-desery.jpg"}
            alt=""
            className="rounded-xl overflow-hidden object-cover"
          />
        </div>
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-2 my-20 gap-16">
        <div className="relative aspect-square">
          <Image
            fill
            src={"/images/dubai.jpg"}
            alt=""
            className="rounded-xl overflow-hidden object-cover"
          />
        </div>
        <div>
          <h3 className="text-accent font-bold text-4xl">Our Vision</h3>
          <p className="mt-9 text-xl leading-8 font-light">
            Become the preferred trade partner for construction projects and
            Expand our network of trusted suppliers and partners globally.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
