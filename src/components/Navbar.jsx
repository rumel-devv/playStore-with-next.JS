import React from 'react';
import logo from '../assets/images/logo.png'
// import { Link, NavLink } from 'react-router';
import { RiLoginCircleFill } from 'react-icons/ri';
import Link from 'next/link';
import Image from 'next/image';



const Navbar = () => {
    return (
       <nav className='w-full md:w-10/12 mx-auto py-4  p-2'>

     <div className='flex justify-between gap-4 items-center'>
           
           <div className='flex  items-center'>
            <Image className='w-12 h-12' src={logo} alt='Logo'></Image>
            <Link href='/' className='text-purple-600 text-2xl font-bold'>CeleStore</Link>
           </div>

         <ul className='md:flex justify-between gap-3 text-md font-semibold uppercase hidden '>
            <li>
                <Link href='/' > Home </Link>
            </li>
            <li>
                <Link href='/apps' > Apps </Link>
            </li>
            <li>
                <Link href='/instalation' > Instalation </Link>
            </li>
            <li>
                <Link href='Dashboard' > Dashboard </Link>
            </li>
        </ul> 
        <button className='flex gap-1.5 items-center justify-center bg-purple-600 text-[15px] btn text-white'> <RiLoginCircleFill /> Login</button>
     </div>

       </nav>
    );
};

export default Navbar;