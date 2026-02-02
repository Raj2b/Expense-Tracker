"use client";

import { Button } from "../../components/ui/button";
import { UserButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

function Header() {
  const { isSignedIn } = useUser();

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="flex items-center justify-between px-6 py-4
        bg-white/10 backdrop-blur-md
        text-white">

        {/* Left: Logo */}
        <Link href={isSignedIn ? "/dashboard" : "/"} className="flex items-center">
          <Image
            src="/logo.svg"
            alt="Easy Expense logo"
            width={320}
            height={200}
            className="cursor-pointer"
          />
        </Link>
        {/* Center: Title */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <span
            className="font-extrabold text-4xl text-white"
            style={{ textShadow: "0 4px 14px rgba(0,0,0,0.6)" }}
          >
            Easy Expense
          </span>
        </div>

        {/* Right */}
        <Link href="/sign-in">
          {isSignedIn ? (
            <UserButton />
          ) : (
        <Button className="bg-primary px-10 py-6 text-lg font-semibold text-white shadow-lg hover:bg-blue-700">
        Get Started
        </Button>
          )}
        </Link>
      </div>
    </header>
  );
}

export default Header;
