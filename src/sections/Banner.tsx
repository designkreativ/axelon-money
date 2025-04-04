export const Banner = () => {
  return (
    <section className="bg-[var(--primary-10)]">
      <div className="container wrapper max-w-[1320px] py-12 text-white">
        <div className="flex flex-col gap-10 md:flex-row  ">
          <div className="flex-1 flex gap-8 md:gap-24">
            <div>
              <h1 className="text-[4rem] md:text-[4.2rem] pb-2">$14B</h1>
              <h3 className="text-lg">Funds and syndicates</h3>
            </div>

            <div>
              <h1 className="text-[4rem] md:text-[4.2rem] pb-2">23K+</h1>
              <h3 className="text-lg">Raised by active startups</h3>
            </div>
          </div>

          <div className="flex-1 flex flex-col   justify-end">
            <h3 className="text-xl pb-4">Numbers</h3>
            <h1 className="text-5xl leading-13">
              Market and build the Solutions
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};
