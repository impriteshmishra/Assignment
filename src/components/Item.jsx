import Image from "next/image";
import React from "react";
import Productcard from "./Productcard";

function Item() {
  return (
    <div>
        <div className="flex items-center m-5">
        <h1 className="font-normal text-3xl">Ces produits pourraient vous interesser</h1>
         <h1 className="underline absolute right-3 cursor-pointer">VOIR TOUTE LA COLLECTION</h1>
        </div>
      <div className="flex justify-evenly w-full h-full bg-gray-200 gap-2 m-3">
        <div className="m-2">
          <Productcard className="w-full"/>
        </div>
        <div className="m-2">
        <Productcard/>
        </div>
        <div className="m-2">
        <Productcard/>
        </div>
      </div>
    </div>
  );
}

export default Item;
