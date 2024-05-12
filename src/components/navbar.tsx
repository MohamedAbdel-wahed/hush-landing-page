"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavItem from "@/components/nav-item";
import MobileNav from "@/components/mobile-nav";

export default function Navbar() {
  const [isMobileNavVisible, setMobileNavVisible] = useState(false);

  return (
    <nav className="py-6 bg-transparent flex items-center justify-between">
      <Link href="/">
        <Image
          src="/assets/app-logo.png"
          alt="app-logo"
          width={100}
          height={100}
        />
      </Link>

      <ul className="hidden lg:flex items-center gap-14">
        <NavItem title="products" />
        <NavItem title="pricing" />
        <NavItem title="patch release" />
      </ul>

       {isMobileNavVisible && (
        <button
          className="w-full h-full fixed inset-0 bg-black/50 z-20"
          onClick={() => setMobileNavVisible(false)}
        ></button>
      )} 

      {isMobileNavVisible && <MobileNav isVisible={isMobileNavVisible} />}

      <button
        title="create account"
        aria-label="create-account"
        className="hidden lg:inline-flex px-5 py-3 tracking-wide text-gray-400 hover:text-white border border-gray-600 hover:border-white rounded-full capitalize duration-150"
      >
        create account
      </button>

      <button
        onClick={() => setMobileNavVisible(true)}
        className="inline-flex lg:hidden p-2 border border-transparent hover:border-white rounded-lg duration-150"
      >
        <Image src="/assets/menu.svg" alt="menu-icon" width={30} height={30} />
      </button>
    </nav>
  );
}
