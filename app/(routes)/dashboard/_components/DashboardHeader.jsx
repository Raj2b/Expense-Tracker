"use client";
import { UserButton } from '@clerk/nextjs';
import React from 'react';

function DashboardHeader({ setSidebarOpen }) {
  return (
    <div className='p-5 shadow-sm border-b flex justify-between items-center'>
      {/* LEFT SIDE: Hamburger button on mobile */}
      <div>
        <button
          className="md:hidden p-2"
          onClick={() => setSidebarOpen(prev => !prev)}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* RIGHT SIDE: User profile button */}
      <div>
        <UserButton />
      </div>
    </div>
  );
}

export default DashboardHeader;
