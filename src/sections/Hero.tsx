import ArrowIcon from "@/assets/arrow-right.svg";
import Image from "next/image";
import Phone from "@/assets/phone.png";
import localFont from "next/font/local";

const Supremell = localFont({
  src: "../font/supremell/SupremeLL-Bold.otf",
});

export const Hero = () => {
  return (
    <section className=" pb-20  md:pb-20 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,var(--primary-60),var(--primary-98)_80%)] overflow-x-clip">
      <div className="container  wrapper max-w-[1320px] ">
        <div className="md:flex items-center">
          <div className="md:w-[475px] lg:w-[575px]">
            <p className="btn btn-secondary text-xs px-3 py-0.5 rounded-xl font-normal gap-2"><span className="text-2xl text-green-500">•</span>
              Available for Download
            </p>
            <div className={`${Supremell.className}`}>
              <h1 className=" text-5xl md:text-7xl  tracking-tight text-gradient mt-6 pb-4 ">
                Change The Way You Use Your Money
              </h1>
            </div>
            <p className="text-xl text-[var(--primary-10)] mt-6">
              From daily spending to future planning with savings and
              investments, Fintech helps you make the most of your money.
            </p>
            <div className="flex gap-2 mt-6 ">
              <button className="btn btn-primary ">Download App</button>
              <button className="btn btn-secondary gap-2">
                <span>Learn More</span>
                <Image src={ArrowIcon} alt="arrow" className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="mt-10 md:mt-0 md:h-[500px] lg:h-[750px] md:flex-1 relative flex justify-center items-center">
            <Image
              src={Phone}
              alt="phone image"
              className="md:absolute md:h-full md:w-auto md:max-w-none md:left-20 lg:left-50 "
            />
          </div>
        </div>
      </div>
    </section>
  );
};
