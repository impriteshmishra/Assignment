import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import {
  Search,
  Home,
  Menu,
  ShoppingCart,
  Lightbulb,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

function Navbar() {
  return (
    <nav className="items-center justify-evenly px-1 py-1 shadow-md bg-white space-x-2 h-[168px] ">
      {/* Upp side ofv nav bar */}
      <div className="flex w-full h-4/5  ">
        <div className="flex items-center w-8/12">
          {/* Logo */}
          <div>
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={200}
              height={200}
              className="cursor-pointer"
            />
          </div>

          {/* Search */}
          <div className="flex w-full">
            <Input placeholder="Rechercher un produit" />
            <Search
              size={32}
              color="#a3a3a3"
              strokeWidth={0.9}
              className="cursor-pointer"
            />
          </div>
        </div>
        <div className="flex justify-center items-center mx-4">
          <div className="flex mx-2 gap-5 cursor-pointer">
            <span className="flex gap-1">
              <Lightbulb color="#d4d4d4" /> Inspiration
            </span>
            <span className="flex gap-1">
              <Heart color="#d4d4d4" />
              Mes facoris <Badge variant="outline">24</Badge>
            </span>
          </div>
          <Button
            className="mx-3 bg-customBlue text-white text-lg font-medium hover:bg-blue hover:text-white "
            variant="outline"
          >
            <ShoppingCart
              size={32}
              color="#ffffff"
              strokeWidth={3}
              // className="hover:text-black"
            />{" "}
            Panier
          </Button>
          <Avatar className="cursor-pointer">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
      <div className="flex items-center justify-evenly gap-2 ">
        <div className="text-customBlue cursor-pointer">ART DE LA TABLE </div>
        <div className="cursor-pointer" >MOBILIER</div>
        <div>NAPPAGE</div>
        <div className="cursor-pointer">MATERIEL DE SALLE</div>
        <div className="cursor-pointer">CUISINE</div>
        <div className="cursor-pointer">BARBECUE</div>
        <div className="cursor-pointer">TENTE</div>
        <div className="cursor-pointer">CHAUFFAGE</div>
        <div className="cursor-pointer">PODIUM - PISTE DE DANSE</div>
        <div className="cursor-pointer">SON ET LUMIERE</div>
        <div className="cursor-pointer">PACKS</div>
        <div className="cursor-pointer">CONSOMMAB</div>
      </div>
    </nav>
  );
}

export default Navbar;
