import localFont from "next/font/local";
import ProductImage3 from "@/assets/product_image_3.png";
import ProductImage4 from "@/assets/product_image_4.png";
import ProductImage5 from "@/assets/product_image_5.png";
import Image from "next/image";

const Supremell = localFont({
  src: "../font/supremell/SupremeLL-Bold.otf",
});

export const Product2 = () => {
  return (
    <section>
      <div className="container wrapper max-w-[1320px] py-24 ">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-10 pb-10 ">
          <div className=" flex flex-col items-start">

          <p className="btn btn-alt">
            Try it now!
          </p>

          <div className={`${Supremell.className}`}>
            <h2 className=" text-gradient text-3xl md:text-5xl tracking-tight mt-2 pb-4 lg:max-w-md leading-15">
              Make your spend, Well spent
            </h2>
          </div>
          </div>
    
          <p className="flex-1 text-xl text-[var(--primary-10)] mt-2 lg:max-w-lg">
            Manages a diversified group of specialized private credit brands
            with efficient tech enabled processes.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-2 overflow-x-clip">
          <Image className="not-md:w-full" src={ProductImage3} alt="Product Image 3" />
          <Image className="not-md:w-full" src={ProductImage4} alt="Product Image 3" />
          <Image className="not-md:w-full" src={ProductImage5} alt="Product Image 3" />
        </div>
      </div>
    </section>
  );
};
