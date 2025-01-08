import React from 'react'
import logo from '../Assets/Image/tiwi.png'
import { RiMenu3Fill } from "react-icons/ri";
import { Link } from 'react-router-dom';


// social
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

// gsap
import gsap from 'gsap';

const Header = () => {
    const clickHamburgerMenu = () => {
        gsap.fromTo(
            ".home", // Menargetkan elemen dengan kelas .heading (h2)
            { y: 0, opacity: 0 }, // Posisi awal di kiri dan opacity 0
            { y: -20, opacity: 1, duration: 2, ease: "power2.out" } // Posisi akhir di tengah dan opacity 1
        )

        gsap.fromTo(
            ".katalog", // Menargetkan elemen dengan kelas .paragraph (p)
            { x: -500, opacity: 0 }, // Posisi awal di kiri dan opacity 0
            { x: 0, opacity: 1, duration: 2, delay: 1, ease: "power2.out" } // Posisi akhir di tengah dan opacity 1 dengan delay
        )
    }
    return (
        <div className='relative w-full px-5 md:px-24 py-5 '>
            <div className="flex items-center justify-between md:justify-start gap-7">
                <a href={'/'}><img src={logo} alt="" className='w-11 h-8 lg:h-12 lg:w-16 ' /></a>
                <div className='md:flex justify-start items-center gap-9 hidden text-slate-400'>
                    <Link to={'/'}><h2 className='hover:text-merah'>Home</h2> </Link>
                    <Link to={'/katalog'}><h2 className='hover:text-merah'>Katalog</h2> </Link>
                    <Link to={'/about'}><h2 className='hover:text-merah'>Tentang</h2> </Link>
                    <Link to={'/contact'}><h2 className='hover:text-merah'>Kontak</h2> </Link>
                </div>

                {/* hamburger menu */}
                <div className="drawer md:hidden z-[9999]">
                    <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        {/* Page content here */}
                        <label htmlFor="my-drawer" className=" drawer-button absolute right-0" onClick={clickHamburgerMenu}><RiMenu3Fill /></label>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                        <div className="menu bg-base-200 text-base-content min-h-full w-80 p-4 flex items-start flex-col gap-7 border border-fuchsia-700">
                            {/* Sidebar content here */}
                            <Link to={'/'}><a>Home</a></Link>
                            <Link to={'/katalog'}><a>Katalog</a></Link>
                            <Link to={'/about'}><a>Tentang Kami</a></Link>
                            <Link to={'/contact'}><a>Kontak</a></Link>
                            <div className='flex justify-start items-start gap-5 py-10  border-b-2 border-green-500 w-full'>
                                <FaFacebookF size={20} />
                                <FaTiktok size={20} />
                                <FaInstagram size={20} />
                            </div>
                            <p className='italic text-xs'>Tiwi Ponsel menyediakan berbagai keperluan ponsel Anda</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header