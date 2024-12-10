import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import React from "react";

function Productcard() {
  return (
    

    <div className="w-full bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
      <div className="relative h-48">
        <Image
          src="/images/product2.png"
          alt="product image"
          layout="fill"
          objectFit="cover"
          // className="w-full"
        />
      </div>
      <div className="p-4">
      <div className="flex justify-between">
        <p className="text-2xl">Title</p>
           <p className="text-2xl">0 <sup>€</sup></p>
         </div>
         <div className="flex justify-between">
           <p className="text-gray-800 text-opacity-50 ">0,35€/Piece</p>
           <Badge variant="outline">20 pieces</Badge>
         </div>
      </div>
    </div>




    // <div className="my-8 w-full max-w-md mx-auto shadow-custom-light">
    //   <Image
    //     src="/images/product2.png"
    //     alt="Logo"
    //     width={200}
    //     height={200}
    //     className="cursor-pointer"
    //   />
    //   <div className="flex items-center justify-between my-2">
    //     <div className="flex items-center justify-evenly">
    //       <p>Title</p>
    //       <p>0 €</p>
    //     </div>
    //     <div>
    //       <p>0,35€/Piece</p>
    //       <Badge variant="outline">2o pieces</Badge>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Productcard;
