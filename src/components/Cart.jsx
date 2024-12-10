import { Dot, Heart, CircleOff, Scale, Search } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Input } from "./ui/input";
import Addingincart from "./Addingincart";
import { Button } from "./ui/button";

function Cart() {
  return (
    <div className="m-5">
      {/* navigation */}
      <div className="flex">
        <p>Home</p>
        <p className="text-gray-800 text-opacity-50 flex">
          <Dot color="#c2c2c2" /> Art de la table
        </p>
      </div>
      {/* cart */}
      <div className="flex">
        <div className="w-1/2">
          <Image
            src="/images/product.png"
            alt="Logo"
            width={800}
            height={200}
            className="cursor-pointer"
          />
        </div>
        <div className="w-1/2 m-3">
          <div className="flex m-5 ">
            <div>
              <h1 className="font-semibold">
                Cheese - appareik a reclette 1/2 route
              </h1>
              <p>
                39€{" "}
                <span className="text-gray-800 text-opacity-50">/piece</span>
              </p>
            </div>
            <Heart
              color="#bfbfbf"
              className="absolute right-5 cursor-pointer"
            />
          </div>
          <hr className="border-t-2 border-gray-200 my-4 w-full"></hr>
          <div className="flex">
            <div className="flex items-center gap-5">
              <p className="flex items-center gap-1">
                <Scale color="#d1d1d1" />
                20<sup>cm</sup>
              </p>{" "}
              {/*here i'am using different scale icon.*/}
              <p className="flex items-center gap-1">
                <CircleOff color="#bfbfbf" /> 50<sup>cm</sup>
              </p>
            </div>
          </div>
          <hr className="border-t-2 border-gray-200 my-4 w-full"></hr>
          <div className="mb-48">
            <p className="text-gray-800 text-opacity-50">
              Location appareil a raclette - Raclette traditionnwllw 1/2route
            </p>
            <p className="text-gray-800 text-opacity-50">Reglable en hauteur</p>
            <p className="text-gray-800 text-opacity-50">
              Appareil a raclette rofessionnel
            </p>
            <p className="text-gray-800 text-opacity-50">
              Boitier de chauffe horizontal reglable en hauteur
            </p>
            <div className="mt-5">
              <p className="text-gray-800 text-opacity-50">220V</p>
              <p className="text-gray-800 text-opacity-50">900W</p>
            </div>
          </div>
          <hr className="border-t-2 border-gray-200 my-4 w-full "></hr>
          <div className="flex gap-1 mt-auto ">
          <Addingincart />
          <Button className="bg-customBlue w-4/5 hover:bg-white hover:text-black">AJOUTER AU PANIER</Button>
          </div>

        </div>
      </div>
      <div>
      </div>
    </div>
  );
}

export default Cart;
