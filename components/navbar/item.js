// "use client";

import Link from "next/link";

export default function MenuItem() {
  return (
    <ul className="flex text-slate-100 items-center text-xl flex-wrap md:text-base justify-center p-0 mx-1 tex-xs">
      <Link href="/" className="mx-3">
        Home
      </Link>
      <Link href="/about" className="mx-3">
        About
      </Link>
      <Link href="/services" className="mx-3">
        Service
      </Link>
      <Link href="contact" className="mx-3">
        Contact us
      </Link>
      <Link href="other" className="mx-3">
        Other
      </Link>
    </ul>
  );
}
