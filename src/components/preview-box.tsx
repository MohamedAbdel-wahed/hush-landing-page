import React from "react";
import Image from "next/image";

interface PreviewBoxProps {
  img: string;
  title: string;
  description: string;
  btnText: string;
  btnAction: () => void;
}

export default function PreviewBox({
  img,
  title,
  description,
  btnText,
  btnAction,
}: PreviewBoxProps) {
  return (
    <div className="flex flex-col lg:flex-row items-center">
      <div className="relative w-[40rem] h-[40rem]">
        <Image
          fill
          loading="lazy"
          src={`/assets/${img}.png`}
          alt={img}
          className="object-contain"
        />
      </div>

      <div className="flex-1 flex flex-col gap-7">
        <h2 className="text-5xl font-semibold leading-tight">{title}</h2>
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
