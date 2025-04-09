import localFont from "next/font/local";
import Image from "next/image";
import phoneMockup from "@/assets/phone_mockup.png";

const Supremell = localFont({
  src: "../font/supremell/SupremeLL-Bold.otf",
});

export const Banner = () => {
  return (
    <section>
      <div className="container wrapper max-w-[1320px] py-24 ">
        <div className="bg-[var(--primary-10)] p-8 md:px-12 lg:px-30 sm:flex sm:row md:justify-between sm:items-center rounded-[50px] ">
          <div className="not-sm:flex not-sm:flex-col not-sm:justify-center">
            <div className={`${Supremell.className}`}>
              <h2 className="text-white text-3xl not-sm:text-center md:text-5xl tracking-tight mt-2 pb-4 sm:max-w-md md:leading-15 ">
                Change the way you use your money
              </h2>
            </div>
            <p className="flex-1 text-xl text-white not-sm:text-center mt-2 sm:max-w-lg">
              Join over milion people who choose Axelon for last and secure
              future banking
            </p>
            <button className="btn btn-primary bg-[var(--primary-50)] mt-15 not-sm:hidden">
              Get Started Now
            </button>
          </div>

          <div className="flex flex-col ">
            <Image
              src={phoneMockup}
              alt="Phone image"
              // width={200}
              className="w-full sm:w-70 md:w-80"
            />
            <button className="btn btn-primary bg-[var(--primary-50)] sm:hidden relative inline-block -mt-15">
              Get Started Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
