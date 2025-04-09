import localFont from "next/font/local";

const bannerText = [
  { title: "$14B", text: "Funds and Syndicates" },
  { title: "23K+", text: "Raised by active startups" },
];

const Supremell = localFont({
  src: "../font/supremell/SupremeLL-Bold.otf",
});
export const Numbers = () => {
  return (
    <section className="bg-[var(--primary-10)]">
      <div className="container wrapper max-w-[1320px] py-12 pb-18 text-white">
        <div className="flex flex-col not-md:gap-10 gap-2 md:flex-row  ">
          <div className="flex-1 flex flex-row gap-12 md:gap-12">
            {bannerText.map(({ title, text }) => (
              <div key={title}>
                <h1 className="text-[4rem] md:text-[4.5rem] lg:text-[6rem] font-light">
                  {title}
                </h1>
                <h3 className="text-lg">{text}</h3>
              </div>
            ))}
          </div>

          <div className="flex-1 flex flex-col   justify-end">
            <h3 className="text-xl pb-4">Numbers</h3>
            <div className={Supremell.className}>
              <h1 className="text-5xl leading-13">
                Market and Build the Solutions
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
