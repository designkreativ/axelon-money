import Image from "next/image";
import Logo from "@/assets/axelon_logo_light.png";
import { footerData } from "@/data/footerData";

export const Footer = () => {
  return (
    <section className="bg-[var(--primary-10)]">
      <div className="container wrapper max-w-[1320px] py-16 text-[var(--primary-90)]">
        <div className="flex flex-col gap-4 md:flex-row pb-20">
          <div className="flex-1 not-md:pb-10">
            <Image src={Logo} alt="Logo" />
            <p className="py-4 pr-10 text-sm">
              Subscribe to our newsletter for the latest updates on features and
              releases.
            </p>
            <form action="submit" className=" flex ">
              <input type="email"  placeholder="Enter Your Email" name="email" className="bg-[var(--primary-5)] p-4"/>
              <input type="button" value="Subscribe" name="submit" className="bg-[var(--primary-15)] p-4"/>
            </form>
          </div>

          <div className="flex flex-2 flex-row justify-between items-start gap-4 flex-wrap">
            {footerData.map(({ id, title, links }) => (
              <div key={id} className=" w-40">
                <h3 className="text-lg font-medium pb-4 text-white">{title}</h3>
                <div className="flex flex-col gap-4">
                  {links.map(({ name, url }) => (
                    <a key={name} href={url} className="text-sm">
                      {name}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center text-sm py-4 border-t border-t-white/20">
          <div className="flex flex-row justify-center gap-6 pb-4 ">
            <p>Privacy Policy</p>
            <p>Terms of Use</p>
            <p>Disclosure</p>
          </div>
          <p>copyright@2025.<span className="opacity-50"> dmmkreativ-axelon.v2</span></p>
        </div>
      </div>
    </section>
  );
};
