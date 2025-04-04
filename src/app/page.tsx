import { Hero } from "@/sections/Hero";
import { Header } from "@/sections/Header";
import { Sponcer } from "@/sections/Sponcer";
import { Product1 } from "@/sections/Product1";
import { Product2 } from "@/sections/Product2";
import { Banner } from "@/sections/Banner";

export default function Home() {
  return (
    <div className="bg-[var(--primary-98)]">
      <Header />
      <Hero />
      <Sponcer />
      <Product1 />
      <Product2 />
      <Banner />
    </div>
  );
}
