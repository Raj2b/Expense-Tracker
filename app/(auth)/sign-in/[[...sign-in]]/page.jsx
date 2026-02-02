"use client";
import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Full-screen background image */}
      <img
        src="/authenticator.png"
        alt="Easy Expense background"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark overlay (so the card pops) */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Floating SignIn card */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
        <div className="w-full max-w-md rounded-2xl border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur-md">
          {/* Optional title above the Clerk widget */}
          <h1 className="mb-2 text-center text-2xl font-extrabold text-white">
            Welcome to Easy Expense
          </h1>
          <p className="mb-6 text-center text-sm text-white/80">
            Sign in to continue
          </p>

          <SignIn redirectUrl="/dashboard" />
        </div>
      </div>
    </section>
  );
}
