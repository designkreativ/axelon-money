import localFont from "next/font/local";
import FaqsText from "@/components/FaqsText";
import { FaqsData } from "@/data/FaqsData";

const Supremell = localFont({
  src: "../font/supremell/SupremeLL-Bold.otf",
});

{
}
export const Faqs = () => {
  return (
    <section>
      <div className="container wrapper max-w-[1320px] py-24 ">
        <div className="flex flex-col md:flex-row ">
          <div className="md:flex-1">
            <p className="btn btn-alt">FAQs</p>
            <div className={Supremell.className}>
              <h1 className="text-gradient text-3xl md:text-5xl tracking-tight mt-2 pb-4 lg:max-w-md leading-15">
                Frequently asked questions
              </h1>
            </div>
          </div>
          <div className="md:flex-1">
            {FaqsData.map(({ id, question, answer }) => (
              <FaqsText key={id} question={question} answer={answer} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
