import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  console.log(isInView);

  return (
    <div ref={ref} className="flex flex-col lg:flex-row items-center">
      <motion.div
        style={{
          transform: isInView
            ? "none"
            : `${isImgFirst ? "translateX(-500px)" : "translateY(500px)"}`,
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
        className={`${
          isImgFirst ? "order-1" : "order-2"
        } relative w-full md:w-[40rem] h-[30rem] md:h-[40rem]`}
      >
        <Image
          fill
          loading="lazy"
          src={`/assets/${img}.png`}
          alt={img}
          className="object-contain"
        />
      </motion.div>

      <motion.div
        style={{
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.8s",
        }}
        className={`${
          isImgFirst ? "order-2" : "order-1"
        } max-w-2xl lg:flex-1 flex flex-col gap-5`}
      >
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
      </motion.div>
    </div>
  );
}
