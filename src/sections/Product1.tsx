import localFont from "next/font/local";
import ProductImage1 from "@/assets/product_image_1.png";
import ProductImage2 from "@/assets/product_image_2.png";
import Image from "next/image";

const Supremell = localFont({
  src: "../font/supremell/SupremeLL-Bold.otf",
});

export const Product1 = () => {
  return (
    <section>
      <div className="container wrapper max-w-[1320px]  py-24 ">
        <div className="max-w-[768px] mx-auto pb-10 md:pb-20 flex flex-col items-center">
          <p className="text-center px px-3 py-0.5 rounded-xl font-normal gap-2 border  border-neutral-300">
            Available for Download
          </p>
          <div className={`${Supremell.className}`}>
            <h2 className="text-center text-gradient text-3xl md:text-5xl tracking-tight mt-2 pb-4 ">
              One app for all your money things
            </h2>
          </div>
          <p className="text-center text-xl text-[var(--primary-10)] mt-2 ">
            From your everyday spending, to planning for your future with
            savings and investments. Axelon helps you get more your money
          </p>
        </div>
        <div className="flex flex-col md:flex-row  items-center justify-center gap-4 overflow-x-clip">
          <Image
            className="not-md:w-full "
            src={ProductImage1}
            alt="Product Image 1"
          />
          <Image className="" src={ProductImage2} alt="Product Image 2" />
        </div>
      </div>
    </section>
  );
};
