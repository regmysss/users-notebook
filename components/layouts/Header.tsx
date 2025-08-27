import { PAGES } from '@/constants/pages'
import Link from 'next/link'
import React from 'react'
import Navigation from './Navigation'

export default function Header() {
    return (
        <header
            className="w-full flex items-center justify-between h-16 max-sm:justify-center"
        >
            <Link href={PAGES.HOME}
                className={`font-extrabold text-2xl max-sm:hidden`}
            >
                UsersNotebook
            </Link>
            <Navigation />
        </header>
    )
}