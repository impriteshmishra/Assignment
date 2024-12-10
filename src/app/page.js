import Card from "@/components/Productcard";
import Cards from "@/components/Cards";
import Cart from "@/components/Cart";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Cart />
      <Cards/>
    </>
  );
}
