import { Hero } from "@/components/Hero";
import { Header } from "@/components/Header";
import { Sponcer } from "@/components/Sponcer";
import { Product1 } from "@/components/Product1";
import { Product2 } from "@/components/Product2";
import { Numbers } from "@/components/Numbers";
import { Faqs } from "@/components/Faqs";
import { Banner } from "@/components/Banner";
// import { Testimonials } from "@/components/Testimonials";
// import { Footer } from "@/components/Footer";


export default function Home() {
  return (
    <div className="bg-[var(--primary-98)]">
      <Header />
      <Hero />
      <Sponcer />
      <Product1 />
      <Product2 />
      <Numbers />
      <Faqs />
      <Banner/>
      {/* <Testimonials/> */}
      {/* <Footer/> */}

    </div>
  );
}
