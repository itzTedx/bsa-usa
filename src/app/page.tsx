import Image from "next/image";
import Billboard from "./_components/billboard";
import About from "./_components/about";
import Explore from "@/components/HeadAnim";
import Products from "./_components/products";
import Experience from "./_components/experience";

export default function Home() {
  return (
    <main>
      <Billboard />
      <About />
      <Explore head="EXPLORE OUR" text="Products" />
      <Products />
      <Experience />
    </main>
  );
}
