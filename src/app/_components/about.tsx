import { Button } from "@/components/ui/button";
import Image from "next/image";

function About() {
  return (
    <section className="grid grid-cols-3 gap-14 items-center my-9 max-w-6xl mx-auto">
      <div className="aspect-square flex-shrink-0 relative">
        <Image src="/about-rec.png" fill alt="" />
      </div>
      <div className="col-span-2">
        <h5 className="text-3xl font-bold text-rose-600">About Us</h5>
        <p className="text-justify mt-3">
          Builders Solutions Inc. was born from a vision to streamline
          international construction projects and empower businesses to achieve
          their global aspirations. We are a team of passionate and dedicated
          professionals with extensive experience in the construction industry
          and international trade. Our expertise spans from sourcing and
          procurement to logistics and after-sales support, ensuring a smooth
          and successful journey for each project. Our unwavering commitment to
          quality, reliability, and customer satisfaction is the cornerstone of
          everything we do. We believe in building strong partnerships with our
          clients, understanding their unique needs, and exceeding their
          expectations through personalized service and tailored solutions.
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
