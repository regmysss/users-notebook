import { NAVIGATION } from '@/constants/navigation'
import Link from 'next/link'
import React from 'react'

export default function Navigation() {
    return (
        <nav>
            <ul className='flex gap-10'>
                {
                    NAVIGATION.map((item, index) => (
                        <li
                            key={index}
                            className="list-none text-lg font-medium"
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
