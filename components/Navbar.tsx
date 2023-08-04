import React from 'react'
import {BsSearch} from "react-icons/bs";
import { ImCart } from "react-icons/im";
import {FiMenu} from "react-icons/fi";

const Navbar = () => {
    return (
        <div className='w-full h-20 lg:h-28 border-b-[1px] border-gray-500 text-black lg:text-white bg-white lg:bg-transparent'>
        <div className='max-w-screen-2xl mx-auto h-full px-4 flex items-center justify-between'>
            <h1 className='text-2x1 uppercase font-bold'>Shoppers</h1>    
            <ul className='hidden lg:inline-flex items-center gap-6 uppercase text-5m font-semibold'>
                <li className="navbarLi"> Home</li>
                <li className='navbarLi'>Pages</li>
                <li className='navbarLi'> services </li>
                <li className='navbarLi'> Portofolio</li>
                <li className='navbarLi'>Blog </li>
                <li className='navbarLi'>Shop</li>
            </ul>
            <div className=' hidden lg:inline-flex gap-8 items-center'>
                <BsSearch className="text-x1 hover:text-blue-500" />
                <div className='relative'>
                    <ImCart className="text-x1" />
                    <span className='w-4 h-4 bg-yellow-600 text-white rounded-full absolute left-0 -bottom-2 text-xs items-center justify-center'>
                        0
                    </span>
                </div>
                <button className='w-48 h-14 bg-white text-black uppercase text-sm font-semibold rounded-md hover:bg-red-500 hover:text-white duration-300'>Get in Touch</button>
            </div>
            <div className='inline-flex lg:hidden'>
                <FiMenu  className="text-3x1"/>
            </div>
        </div>
        </div>
    );
};

export default Navbar;