import React from "react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="max-w-7xl mx-auto h-16 px-4 flex items-center justify-between border-b border-zinc-800">
      <Link href="/" className="flex items-center gap-2 m-0">
        <span>Logo</span>
        <span className="text-lg font-semibold">GameMate</span>
      </Link>

      <div className="flex items-center gap-3">
        <Link
          href="/login"
          className={buttonVariants({ variant: "secondary" })}
        >
          Login
        </Link>
        <Link href="/register" className={buttonVariants()}>
          Get Started
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
