"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Navigation() {
    const [isNavActive, setIsNavActive] = useState(false);
    const navRef = useRef(null);
    const menuRef = useRef(null); // Ref for the menu element

    // Function to toggle mobile navigation
    const toggleNav = () => {
        setIsNavActive(!isNavActive);
    };

    // Event listener to detect clicks outside nav and menu
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                navRef.current && 
                !navRef.current.contains(event.target) &&
                menuRef.current && 
                !menuRef.current.contains(event.target)
            ) {
                setIsNavActive(false);
            }
        };

        // Add event listener on component mount
        document.addEventListener('mousedown', handleClickOutside);

        // Clean up event listener on component unmount
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [navRef, menuRef]);

    return (
        <nav>
            <Link href="/">
                <h1>ZonaTenang.com</h1>
            </Link>
            <ul>
                <li>
                    <Link href="/">Beranda</Link>
                </li>
                <li>
                    <Link href="/tips-dan-trik">Tips dan Trik </Link>
                </li>
            </ul>
            <div 
                ref={menuRef} // Assign ref to the menu div
                className="menu" 
                onClick={toggleNav}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div 
                ref={navRef} 
                className={isNavActive ? 'navMobileActive' : 'navMobile'} // Use string literals for class names
            >
                <ul>
                    <Link href="/">
                        <h1>ZonaTenang.com</h1>
                    </Link>
                    <li>
                        <Link href="/">Beranda</Link>
                    </li>
                    <li>
                        <Link href="/tips-dan-trik">Tips dan Trik </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
