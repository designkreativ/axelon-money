"use client";
import PlusIcon from "@/assets/plus-icon.svg";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

import { useState } from "react";

export default function FaqsText({ key, question, answer }: any) {
  const [isShown, notShown] = useState(false);
  function toggle() {
    notShown((prev) => !prev);
  }

  
  return (
    <div className="pb-4">
      <div
        key={key}
        className={twMerge( "py-4 px-6 bg-[var(--primary-100)] rounded-2xl",  isShown && "bg-white  shadow-xl shadow-blue-900/5")}
        onClick={toggle}
      >
        <div className="flex flex-row justify-between items-start">
          <h3 className="text-xl font-normal leading-8 text-[var(--primary-10)] ">
            {question}
          </h3>
          <Image
            src={PlusIcon}
            alt="Plus Icon"
            width={20}
            height={20}
            className={twMerge("pt-2 opacity-10 hover:opacity-100", isShown && "rotate-45")}
          />
        </div>
        <p className={twMerge(isShown && "text-lg pt-4 text-[var(--shades-50)]")}>{isShown && answer}</p>
      </div>
    </div>
  );
}
