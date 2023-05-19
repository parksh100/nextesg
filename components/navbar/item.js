"use client";
import React from "react";
import { useRouter, usePathname } from "next/navigation";

import Link from "next/link";

export default function MenuItem() {
  const pathname = usePathname();
  const router = useRouter();
  console.log(router);
  console.log(pathname);
  return (
    <ul className="flex text-gray-900 items-center flex-wrap md:text-base justify-center p-0 mx-1 ">
      <Link
        href="/"
        // className="pathname-mx-3 text-xl hover:bg-slate-100 p-3 rounded-full"
        // pathname === '/' ? 'bg-slate-100' : ''
        className={`mx-3 text-xl hover:bg-slate-100 p-3 rounded-full ${
          pathname === "/" ? "bg-slate-100 font-bold" : ""
        }`}
      >
        Home
      </Link>
      <Link
        href="/about"
        className={`mx-3 text-xl hover:bg-slate-100 p-3 rounded-full ${
          pathname === "/about" ? "bg-slate-100 font-bold" : ""
        }`}
      >
        About
      </Link>
      <Link
        href="/services"
        className={`mx-3 text-xl hover:bg-slate-100 p-3 rounded-full ${
          pathname === "/services" ? "bg-slate-100 font-bold" : ""
        }`}
      >
        Services
      </Link>
      <Link
        href="/contact"
        className={`mx-3 text-xl hover:bg-slate-100 p-3 rounded-full ${
          pathname === "/contact" ? "bg-slate-100 font-bold" : ""
        }`}
      >
        Contact us
      </Link>
      <Link
        href=""
        className={`mx-3 text-xl hover:bg-slate-100 p-3 rounded-full ${
          pathname === "" ? "bg-slate-100 font-bold" : ""
        }`}
      >
        Other
      </Link>
    </ul>
  );
}
