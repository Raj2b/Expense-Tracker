import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background image */}
      <Image
        src="/heropage.png"
        alt="Easy Expense background"
        fill
        priority
        className="object-cover"
      />

      {/* Gradient overlay for contrast (no ugly box) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-black/45" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="mx-auto max-w-screen-xl px-4 py-28 sm:py-32 text-center">
          <h1
            className="text-4xl font-extrabold text-white sm:text-6xl"
            style={{ textShadow: "0 6px 18px rgba(0,0,0,0.65)" }}
          >
            Manage Your Expenses
            <span
              className="block text-primary"
              style={{ textShadow: "0 6px 18px rgba(0,0,0,0.55)" }}
            >
              Control Your Money
            </span>
          </h1>

          <p
            className="mt-6 text-lg text-white/95 sm:text-xl"
            style={{ textShadow: "0 4px 14px rgba(0,0,0,0.5)" }}
          >
            Start creating your budget and save tons of money
          </p>

          <div className="mt-10 flex justify-center">
            <a
              href="/sign-in"
              className="rounded-md bg-primary px-10 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-blue-700"
            >
              Get Started
            </a>
          </div>
        </div>

        {/* Dashboard preview (keep it bright + clean) */}
        <div className="relative z-20 -mt-16 sm:-mt-20 px-4">
          <Image
            src="/dashboard1.png"
            alt="Dashboard preview"
            width={1400}
            height={900}
            className="rounded-xl border bg-white shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
