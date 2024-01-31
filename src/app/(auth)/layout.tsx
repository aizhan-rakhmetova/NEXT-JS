// Active Links
'use client';
import React from 'react';
import Link from "next/link";
import {usePathname} from "next/navigation";
import './styles.css';

const navLinks = [
    {name: "Register", href: "/register"},
    {name: "Login", href: "/login"},
]

export default function DashboardLayout({ children,}: {
    children: React.ReactNode
}) {
    const pathname = usePathname();
    return (
        <section>
            {/* Include shared UI here e.g. a header or sidebar */}
            <div>Login page layout</div>
            <div>
                {navLinks.map( link => {
                    const isActive = pathname.startsWith(link.href)
                    return (
                            <Link href={link.href} key={link.name}
                            className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}>
                                {link.name}
                            </Link>
                    )
                })}
            </div>

            {children}
        </section>
    )
}