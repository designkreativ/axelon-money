import Image, { StaticImageData } from "next/image";

type TestimonialProps = {
  id: number;
  key: number;
  name: string;
  title: string;
  description: string;
  image: StaticImageData;
};

export const Testimonial = (props: TestimonialProps) => {
  return (
    <div key={props.id} className="">
      <div className="flex flex-col gap-6 w-sm bg-white shadow-xl shadow-blue-900/2 p-6 rounded-4xl">
        <div className="flex items-center gap-5">
          <Image
            className="object-fill rounded-[100px] w-15 h-15"
            src={props.image}
            alt="user"
          />
          <div className="">
            <h4 className="text-lg sm:text-xl font-medium text-[var(--primary-20)]">
              {props.name}
            </h4>
            <p className="text-md text-[var(--shades-50)]">{props.title}</p>
          </div>
        </div>
        <p className=" text-md sm:text-sm text-[var(--shades-30)] mt-2 ">
          {props.description}
        </p>
        <p className="tracking-widest">⭐⭐⭐⭐⭐</p>
      </div>
    </div>
  );
};
