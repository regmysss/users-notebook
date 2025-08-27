'use client'
import { NAVIGATION } from '@/constants/navigation'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

export default function Navigation() {
    const path = usePathname();

    return (
        <nav>
            <ul className='flex gap-10'>
                {
                    NAVIGATION.map((item, index) => (
                        <li
                            key={index}
                            className={`list-none text-lg font-medium ${path !== item.href ? "text-white/60" : ""}`}
                        >
                            <Link href={item.href}>
                                {item.name}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}
