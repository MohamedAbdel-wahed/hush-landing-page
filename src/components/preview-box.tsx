import React from "react";
import Image from "next/image";

interface PreviewBoxProps {
  img: string;
  title: string;
  description: string;
  btnText: string;
  btnAction: () => void;
  isImgFirst: boolean;
}

export default function PreviewBox({
  img,
  title,
  description,
  btnText,
  btnAction,
  isImgFirst,
}: PreviewBoxProps) {
  return (
    <div className="flex flex-col lg:flex-row items-center">
      <div className={`${isImgFirst ? "order-1" : "order-2"} relative w-screen md:w-[40rem] h-[30rem] md:h-[40rem]`}>
        <Image
          fill
          loading="lazy"
          src={`/assets/${img}.png`}
          alt={img}
          className="object-contain"
        />
      </div>

      <div className={`${isImgFirst ? "order-2" : "order-1"} max-w-2xl lg:flex-1 flex flex-col gap-5`}>
        <h2 className="text-5xl font-semibold leading-snug">{title}</h2>
        <p className="text-gray-400 leading-relaxed">{description}</p>
        <button
          onClick={btnAction}
          title="learn-more"
          aria-label="learn-more"
          className="self-start px-5 py-3 tracking-wide text-gray-400 hover:text-white border border-gray-600 hover:border-white rounded-full first-letter:capitalize duration-150"
        >
          {btnText}
        </button>
      </div>
    </div>
  );
}
