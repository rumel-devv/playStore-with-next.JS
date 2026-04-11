"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const MyLink = ({href,children}) => {
    const pathName = usePathname()
    const isActive =  pathName === href
    return (
       <Link href={href} className={isActive ? 'text-purple-700 underline ' : "" } > {children} </Link>
    );
};

export default MyLink;