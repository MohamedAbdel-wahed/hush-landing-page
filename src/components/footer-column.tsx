import Link from "next/link";
import React from "react";


interface FooterColumnProps {
  title: string;
  subs: {
    title: string;
    path: string;
  }[];
}

export default function FooterColumn({ title, subs }: FooterColumnProps) {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-lg font-medium capitalize">{title}</h2>
      <ul className="flex flex-col gap-3 text-black/50">
        {subs.map((sub, index) => (
          <li key={index} className="hover:text-black/80 cursor-pointer">
            <Link href={sub.path}>{sub.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
