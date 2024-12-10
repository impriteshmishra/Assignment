import * as React from "react";

import { Card, CardContent } from "./ui/Card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Productcard from "./Productcard";

export default function Carousel2() {
  return (
    <div>
      <div className="flex items-center m-5">
        <h1 className="font-normal text-3xl">Articles similaires</h1>
         <h1 className="underline absolute right-3 cursor-pointer">VOIR TOUTE LA COLLECTION</h1>
        </div>
        <div className="py-10 flex justify-center items-center">
      <Carousel className=" w-full max-w-[20.7rem] md:max-w-[90vw] lg:max-w-[90vw]">
        <CarouselContent className="-ml-1">
          {Array.from({ length: 10 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/2 lg:basis-1/5"
            >
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <Productcard />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
    </div>
    
  );
}
