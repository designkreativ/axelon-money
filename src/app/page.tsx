import { Hero } from "@/components/Hero";
import { Header } from "@/components/Header";
import { Sponcer } from "@/components/Sponcer";
import { Product1 } from "@/components/Product1";
import { Product2 } from "@/components/Product2";
import { Banner } from "@/components/Banner";
import { Faqs } from "@/components/Faqs";

export default function Home() {
  return (
    <div className="bg-[var(--primary-98)]">
      <Header />
      <Hero />
      <Sponcer />
      <Product1 />
      <Product2 />
      <Banner />
      <Faqs />
    </div>
  );
}
