import Image from "next/image";
import React from "react";

interface FeatureBoxProps {
  title: string;
  description: string;
  img: string;
  extraStyles: string;
}

export default function FeatureBox({
  title,
  description,
  img,
  extraStyles,
}: FeatureBoxProps) {
  return (
    <div className={`flex flex-col gap-5 rounded-xl p-4 ${extraStyles}`}>
      <Image
        src={`/assets/${img}.png`}
        alt={`${img}-feature`}
        width={40}
        height={40}
      />
      <div className="flex flex-col gap-2">
        <h2 className="text-lg lg:text-xl font-medium">{title}</h2>
        <p className="text-gray-600 text-[0.9rem]">{description}</p>
      </div>
    </div>
  );
}
