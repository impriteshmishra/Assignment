import Card from "@/components/Productcard";
import Cards from "@/components/Cards";
import Cart from "@/components/Cart";
import Image from "next/image";
import Description from "@/components/Description";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="">
      <Cart className="relative" />
      <Cards className="relative"/>
      <Description className="relative" />
      <Footer className="relative"/>
    </div>



  );
}
