// import React from "react";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import Autoplay from "embla-carousel-autoplay";
// import { Card, CardContent } from "./ui/Card";
// import Productcard from "./Productcard";

// function Cards() {
//   return (
  
//       <Carousel className="w-full max-w-xl p-2 ">
//         <CarouselContent className="-ml-1">
//           {Array.from({ length: 17 }).map((_, index) => (
//             <CarouselItem
//               key={index}
//               className="pl-1 md:basis-1/2 lg:basis-1/5"
//             >
//               <div className="p-1">
//                 <Card>
//                   <CardContent className="flex aspect-square items-center justify-center p-6">
//                     <Productcard />
//                   </CardContent>
//                 </Card>
//               </div>
//             </CarouselItem>
//           ))}
//         </CarouselContent>
//         <CarouselPrevious />
//         <CarouselNext />
//       </Carousel>
  
//   );
// }

// export default Cards;

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "./ui/Card";
import Productcard from "./Productcard";

function Cards() {
  return (
    <div className="w-full h-70 overflow-hidde">
      <Carousel className="w-full h-full max-w-sm p-2">
        <CarouselContent className="flex -ml-1">
          {Array.from({ length: 17 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="pl-1 flex-shrink-0 w-1/5  bg-gray-100 border" // Ensure 5 items fit on the screen
            >
              <div className="p-2 h-full">
                <Card className="h-full">
                  <CardContent className="flex aspect-square items-center justify-center p-4 ">
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
  );
}

export default Cards;
