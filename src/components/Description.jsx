import Image from "next/image";
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Description() {
  return (
    <div className=" m-2  my-4">
      <div>
        <Image
          src="/images/about.png"
          alt="Logo"
          layout="responsive" // Makes the image responsive
          width={1920} // Set a default width (e.g., 1920px)
          height={500} // Set a default height (e.g., 500px) to maintain the aspect ratio
          className="cursor-pointer"
        />
      </div>
      <div className="flex">
        <div className="p-2">
          <Image
            src="/images/image1.png"
            alt="Logo"
            layout="responsive" // Makes the image responsive
            width={1920} // Set a default width (e.g., 1920px)
            height={500} // Set a default height (e.g., 500px) to maintain the aspect ratio
            className="cursor-pointer"
          />
        </div>
        <div className="bg-customPink w-1/2 rounded-md p-2 mx-1 my-3">
            <h1 className="p-4 text-4xl">S'inscrire & economiser <span className="text-customBlue">10%</span></h1>
            <p className="p-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste optio sit quaerat illum fugiat perferendis, nobis ipsam numquam adipisci blanditiis in laboriosam quibusdam dolore perspiciatis quis provident iusto, natus sed.</p>
            <div className="p-4 flex">
            <Input placeholder="john@doe.com" />
            <Button
            className="mx-3 bg-customBlue text-white text-lg font-medium"
            variant="outline"
          >S'INSCRIRE <ArrowRight color="#ffffff" /></Button>
            </div>
        </div>
      </div>
     
    </div>
  );
}
