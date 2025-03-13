import Logo from "@/assets/axelon-logo.svg";
import MenuIcon from "@/assets/menu.svg";
import Image from "next/image";
import ArrowRight from "@/assets/arrow-right.svg";

export const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="flex justify-center items-center py-2 bg-[var(--primary-10)] text-white gap-2">
        <p className="text-white/60 hidden md:block text-sm">
          Do you want to Make the most of your money?
        </p>
        <div className="flex items-center gap-1">
          <p className="text-sm">Get started for today</p>
          <Image
            src={ArrowRight}
            alt="Arrow"
            className=" h-4 w-4 inline-flex dark:invert"
          />
        </div>
      </div>
      <div className="py-6">
        <div className="container px-8 mx-auto ">
          <div className="flex justify-between items-center ">
            <Image src={Logo} alt="Axelon logo" height={40} width={135} />
            <Image
              src={MenuIcon}
              alt="menu bar"
              className=" h-5 w-5 md:hidden"
            />

            <div className="hidden md:flex items-center gap-6">
              <a href="#">Home</a>
              <a href="#">Services</a>
              <a href="#">About</a>
            </div>

            <div className="hidden md:flex gap-2">
              <button className="btn btn-secondary">Login</button>
              <button className="btn btn-primary">Signup</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
