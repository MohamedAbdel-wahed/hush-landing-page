import React from "react";

interface NavItemProps {
  title: string;
}

export default function NavItem({ title }: NavItemProps) {
  return (
    <li className="tracking-wide text-lg text-gray-400/80 hover:text-white capitalize cursor-pointer duration-150">
      {title}
    </li>
  );
}
