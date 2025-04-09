import localFont from "next/font/local";
import PlusIcon from "@/assets/plus-icon.svg";
import Image from "next/image";

const Supremell = localFont({
  src: "../font/supremell/SupremeLL-Bold.otf",
});


const questions = [
  {
    question: "How can  to add money to my account?",
    answer:
      "You can deposit funds via bank transfer, mobile payment, or direct deposit. Visit the 'Add Money' section in your account to see all available options.",
  },
  {
    question:
      "What are the benefits of using Axelon for savings and investments?",
    answer:
      "From your everyday spending, to planning for your future with savings and investments. Axelon helps you get more your money",
  },
  {
    question: "Can I withdraw my money anytime?",
    answer:
      "Yes! You can withdraw your funds at any time through multiple withdrawal options, including bank transfers and mobile payments.",
  },
  {
    question: "Is there a minimum amount required to add money?",
    answer:
      "No minimum required! You can start by adding any amount that fits your budget and goals.",
  },
  {
    question: "How does Axelon help me manage my spending?",
    answer:
      "Axelon tracks your expenses, categorizes your spending, and gives you insights to help you budget better and save more.",
  },
];

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
            {questions.map(({ question, answer }) => (
              <div
                key={question}
                className="py-4 pb-8 border-b border-gray-200 group"
              >
                <div className="flex flex-row justify-between items-start">
                  <h3 className="text-xl font-medium leading-8 text-[var(--primary-10)] pb-4">
                    {question}
                  </h3>
                  <Image
                    src={PlusIcon}
                    alt="Plus Icon"
                    width={20}
                    height={20}
                    className="pt-2 opacity-30 hover:opacity-100"
                  />
                </div>
                <p className="text-lg text-[var(--shades-10)]">{answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
