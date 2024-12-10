import Card from "@/components/Productcard";
import Cart from "@/components/Cart";
import Image from "next/image";
import Description from "@/components/Description";
import Footer from "@/components/Footer";
import Carousel2 from "@/components/Carousel";
import Item from "@/components/Item";

export default function Home() {
  return (
    <div className="">
      <Cart className="relative" />
      <Carousel2/>
      <Item/>
      <Description className="relative" />
      <Footer className="relative"/>
    </div>



  );
}
