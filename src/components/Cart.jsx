import { Dot } from "lucide-react";
import Image from "next/image";
import React from "react";

function Cart() {
  return (
    <div>
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
        <div>about pic</div>
      </div>
      <div></div>
    </div>
  );
}

export default Cart;
