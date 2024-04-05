"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export function Example() {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      // ...
    </Carousel>
  );
}

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";

const Products = () => {
  return (
    <section className="container mt-20">
      <h5 className="text-2xl text-accent font-bold">Products</h5>
      <Carousel
        opts={{
          align: "start",
        }}
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        className="w-full mx-auto mt-6"
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
              <Card>
                <CardContent>
                  <AspectRatio ratio={5 / 3.5}>
                    <Image
                      src="/movement-joints 1.png"
                      alt="Image"
                      fill
                      className="rounded-md object-cover border border-black"
                    />
                  </AspectRatio>
                </CardContent>
                <CardFooter>
                  <p>Movement Joints</p>
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default Products;
