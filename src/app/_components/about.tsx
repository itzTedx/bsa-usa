import { Button } from "@/components/ui/button";
import Image from "next/image";

function About() {
  return (
    <section className="grid sm:grid-cols-2 gap-14 items-center my-9 max-w-6xl mx-auto p-6">
      <div className="aspect-square flex-shrink-0 relative">
        <Image src="/about-rec.png" fill alt="" />
      </div>
      <div className="">
        <h5 className="text-3xl font-bold text-rose-600">About Us</h5>
        <p className="text-balance mt-3 leading-7">
          At Builders Solutions Inc, we hold a profound belief: the pursuit of
          &apos;better&apos; is not a solitary endeavor, but a collaborative journey
          fueled by shared opportunities. With a steadfast commitment to
          understanding and addressing our customers&apos; diverse and intricate
          challenges, Builders Solutions Inc. emerges as a pioneering force in
          architectural product problem-solving. Our approach is simple yet
          trans-formative: we listen, we learn, and we innovate. This unwavering
          dedication to our customers&apos; needs has propelled many of our solutions
          to the forefront of industry standards. Innovation isn&apos;t just a
          buzzword for us; it&apos;s a way of life. By embracing complexity and
          fostering collaboration, we continuously push the boundaries of what&apos;s
          possible, setting new benchmarks for excellence in the process. Join
          us at Builders Solutions Inc as we pave the way for a future where
          people and buildings thrive together, united by the pursuit of
          &apos;better.
        </p>
        <div className="flex gap-6 mt-3">
          <Button variant="primary">More</Button>
          <Button variant="outline">Contact us</Button>
        </div>
      </div>
    </section>
  );
}

export default About;
