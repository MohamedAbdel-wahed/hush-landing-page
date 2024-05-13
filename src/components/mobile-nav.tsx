import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import NavItem from "@/components/nav-item";

interface MobileNavProps {
  isVisible: boolean;
}

export default function MobileNav({ isVisible }: MobileNavProps) {
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      transition={{ duration: 0.4 }}
      className={`${
        isVisible ? "block" : "hidden"
      } w-[70%] h-screen py-20 fixed top-0 right-0 bg-[#16181e] z-30`}
    >
      <ul className="flex flex-col items-center gap-14">
        <li>
          <Image
            src="/assets/app-logo.png"
            alt="app-logo"
            width={100}
            height={100}
          />
        </li>
        <NavItem title="products" />
        <NavItem title="pricing" />
        <NavItem title="patch release" />

        <li>
          <button
            title="create account"
            aria-label="create-account"
            className="px-5 py-3 tracking-wide font-medium bg-white hover:bg-white/80 text-black rounded-full capitalize duration-150"
          >
            create account
          </button>
        </li>
      </ul>
    </motion.div>
  );
}
