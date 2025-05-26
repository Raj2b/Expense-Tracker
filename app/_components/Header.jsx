"use client"; // ✅ Ensure this runs on the client side

import { Button } from '../../components/ui/button';
import { UserButton, useUser } from '@clerk/nextjs';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
function Header() {
    const { user,isSignedIn } = useUser(); // ✅ No more errors

    return (
        <div className="p-5 flex justify-between items-center border shadow-sm">
            <Image src="/logo.svg" // ✅ Use a leading slash for public images
                alt="logo"
                width={160}
                height={100}
            />
            <Link href={'/sign-in'}>
            {isSignedIn ? <UserButton /> : <Button>Get Started</Button>}
            </Link>
        </div>
    );
}

export default Header;
