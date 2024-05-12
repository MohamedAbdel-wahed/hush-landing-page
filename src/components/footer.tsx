import { footerItems } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import FooterColumn from "@/components/footer-column";

export default function footer() {
  return (
    <footer className="pb-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6 text-center">
        <div className="w-full flex flex-col items-center gap-2">
          <Image
            src="/assets/app-logo-black.png"
            alt="app-logo"
            width={100}
            height={100}
          />
          <p className="max-w-xs text-black/50 leading-relaxed">
            A team messaging app for everyone to connect with their team.
          </p>
        </div>

        {footerItems.map((item, index) => (
          <FooterColumn key={index} {...item} />
        ))}
      </div>

      <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-4 text-black/50 text-sm lg:text-base">
        <p>© 2021 Hush Inc. Copyright and All rights reserved.</p>
        <p className="flex items-center gap-1">
          <Link href="#" className="hover:underline">
            Terms and Conditions
          </Link>
          .
          <Link href="#" className="hover:underline">
            Privacy Policy
          </Link>
        </p>
      </div>
    </footer>
  );
}
