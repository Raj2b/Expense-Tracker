"use client";
import Image from 'next/image'
import React, { useEffect } from 'react'
import { LayoutGrid, PiggyBank, ReceiptText, ShieldCheck } from 'lucide-react'
import { UserButton } from '@clerk/nextjs'
import { usePathname } from 'next/navigation'
import Link from 'next/link';

function SideNav() {
    const menuList=[
        {
            id:1,
            name:'Dashboard',
            icon:LayoutGrid,
            path:'/dashboard'
        },
        {
            id:2,
            name:'Budgets',
            icon:PiggyBank,
            path:'/dashboard/budgets'
        },
        {
            id:3,
            name:'Expenses',
            icon:ReceiptText,
            path:'/dashboard/expenses'

        },
        {
            id:4,
            name:'Upgrade',
            icon:ShieldCheck,
            path:'/dashboard/upgrade'
        }
    ]

const path=usePathname();

    useEffect(()=> {
        console.log(path)
    },[path])

  return ( 
    <div className='h-screen p-5 border shadow-sm'>
        <Link href="/dashboard" className="inline-block">
        <Image
            src="/logo.svg"
            alt="logo"
            width={320}
            height={200}
            className="cursor-pointer"
        />
        </Link>

        <div className='mt-5'>
            {menuList.map((menu)=>(
                <Link key={menu.id} href={menu.path} onClick={() => setSidebarOpen(false)}>
                <h2  className={`flex gap-2 items-center text-gray-500 
                mb-2
                font-medium p-5 cursor-pointer rounded-md hover:text-primary hover:bg-blue-100
                ${path==menu.path&&'text-primary bg-blue-100'}
                `}>
                    <menu.icon/>
                    {menu.name}
                </h2>
                </Link>
            ))}
        </div>
        <div className='fixed bottom-10 p-5 flex gap-2 items-center'>
            <UserButton/>
            profile
        </div>
     </div>
  )
}

export default SideNav