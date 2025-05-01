import userImage from "../assets/userImage.png";
import localFont from "next/font/local";
import { Testimonial } from "./testimonials/Testimonial";
import { testimonialsData } from "./testimonials/testimonialsData";

console.log(testimonialsData);

const Supremell = localFont({
  src: "../font/supremell/SupremeLL-Bold.otf",
});

export const Testimonials = () => {
  return (
    <section>
      <div className="container wrapper max-w-[1320px] py-24">
        <div className="flex flex-col items-center text-center max-w-[768px] mx-auto pb-10 md:pb-20">
          <p className="btn btn-alt">TESTIMONIALS</p>
          <div className={Supremell.className}>
            <h1 className="text-gradient text-3xl md:text-5xl tracking-tight mt-2 pb-4 lg:max-w-md leading-15">
              What Users Say
            </h1>
          </div>
          <p className="text-center text-xl text-[var(--primary-10)] mt-2 ">
            Let&apos;s do our best to answer your most frequently asked
            questions. By doing this, we aim to assist you more effectively.
          </p>
        </div>

        <div className="flex gap-4  flex-row justify-between flex-wrap justify-center">
          {testimonialsData.map(({ id, name, title, description }) => (
            <Testimonial
              key={id}
              image={userImage}
              name={name}
              title={title}
              description={description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
