import React, { useEffect } from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";
import Maps from './Maps';
import Footer from './Footer';
import { SiOrganicmaps } from "react-icons/si";
import { MdPhoneAndroid } from "react-icons/md";
import { LuClock8 } from "react-icons/lu";

// gsap
import gsap from 'gsap';



const Contact = () => {

    useEffect(() => {
        gsap.fromTo(
            ".box1", // Menargetkan elemen dengan kelas .heading (h2)
            { x: -40, opacity: 0 }, // Posisi awal di kiri dan opacity 0
            { x: 0, opacity: 1, duration: 1, ease: "power2.out" } // Posisi akhir di tengah dan opacity 1
        )
        gsap.fromTo(
            ".box2", // Menargetkan elemen dengan kelas .heading (h2)
            { x: -40, opacity: 0 }, // Posisi awal di kiri dan opacity 0
            { x: 0, opacity: 1, duration: 1, delay: 1, ease: "power2.out" } // Posisi akhir di tengah dan opacity 1
        )
        gsap.fromTo(
            ".box3", // Menargetkan elemen dengan kelas .heading (h2)
            { x: -40, opacity: 0 }, // Posisi awal di kiri dan opacity 0
            { x: 0, opacity: 1, duration: 1, delay: 2, ease: "power2.out" } // Posisi akhir di tengah dan opacity 1
        )
    }, [])

    return (
        <div>
            <Header />
            <div className='bg-gray-300 py-8 md:py-10'>
                <div className='text-center flex justify-center items-center gap-2 text-black'>
                    <Link to={'/'}><h1 className='border-b border-gray-300 hover:border-b hover:border-merah hover:text-merah'>Home</h1></Link>
                    <IoIosArrowForward />
                    <p>Kontak</p>
                </div>
                <h1 className='text-center text-3xl text-black font-bold pt-2'>Kontak Kami</h1>
            </div>

            {/* MAPS */}
            <div className='h-full text-black'>
                <div className='bg-black'>
                    <Maps />
                </div>
            </div>

            {/* GET IN TOUCH */}
            <div className='relative'>
                <div className='flex flex-col md:flex-row justify-center items-center gap-5 px-8 py-5 md:absolute md:-top-48 md:right-1/2 md:transform md:translate-x-1/2 z-[799]'>
                    <div className='w-full h-72 md:w-[27rem] md:h-72 py-10 bg-white shadow-2xl flex flex-col md:flex-row justify-center items-center gap-5 box1'>
                        <SiOrganicmaps size={40} color='#a83232' />
                        <div className='flex flex-col gap-2 items-center md:items-start w-52'>
                            <h1 className='text-2xl'>Alamat</h1>
                            <p className='text-gray-600'>Kota Tengah Gelugur, Jalan Lintas Duri, Kepenuhan Tengah, Kepenuhan ( Tiwi Ponsel ) </p>
                        </div>
                    </div>
                    <div className='w-full h-72 md:w-[27rem] md:h-72 bg-white shadow-2xl flex flex-col md:flex-row justify-center items-center gap-5 box2'>
                        <MdPhoneAndroid size={40} color='#a83232' />
                        <div className='flex flex-col items-center md:items-start gap-2 '>
                            <h1 className='text-2xl'>Telp</h1>
                            <p className='text-gray-600'>(+62) 822 5866 2305 </p>
                            <p className='text-gray-600'>rderi7227@gmail.com</p>
                        </div>
                    </div>
                    <div className='w-full h-72 md:w-[27rem] md:h-72 bg-white shadow-2xl flex flex-col md:flex-row justify-center items-center gap-5 box3'>
                        <LuClock8 size={40} color='#a83232' />
                        <div className='flex flex-col gap-2 items-center md:items-start'>
                            <h1 className='text-2xl'>Jam Buka</h1>
                            <p className='text-gray-600'>Senin - Jumat : 09.00 - 16.00 </p>
                            <p className='text-gray-600'>Sabtu - Minggu: 09.00 - 12.00 </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row px-5 md:px-44 gap-4 text-black py-10 md:py-44 md:mt-20 ">
                    {/* kiri */}
                    <div className='text-center md:text-left md:w-[40%] flex-none px-5'>
                        <h1 className='text-5xl font-bold mb-5'>Please Get In <span className='text-merah'>Touch</span> with <span className='text-merah'>Us</span></h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa unde ipsa adipisci alias amet, expedita deleniti, quidem eius magni saepe doloremque similique ex nobis aliquid fugiat nemo est numquam. Commodi corrupti praesentium doloremque officiis? Quisquam velit voluptates quae numquam ullam.</p>
                    </div>

                    {/* Kanan */}
                    <div className='flex-grow flex flex-col justify-start gap-14 mt-10 md:mt-0'>
                        <h1 className='text-3xl font-bold'>Kirim Pesan Anda</h1>
                        <div className='flex flex-col md:flex-row justify-between gap-10 '>
                            <div className=' flex flex-col w-full'>
                                <label>Nama</label>
                                <input type="text" name="" id="" className='outline-none bg-white border-b-2 border-b-black' />
                            </div>
                            <div className=' flex flex-col  w-full'>
                                <label>Email</label>
                                <input type="email" name="" id="" className='outline-none bg-white  border-b-2 border-b-black' />
                            </div>
                            <div className=' flex flex-col  w-full'>
                                <label>Nama</label>
                                <input type="text" name="" id="" className='outline-none bg-white  border-b-2 border-b-black' />
                            </div>
                        </div>
                        {/*  */}
                        <div className=' flex flex-col '>
                            <label>Pesan</label>
                            <input type="text" name="" id="" className='outline-none bg-white  border-b-2 border-b-black' />
                        </div>
                        <button className='text-center w-44  py-3 rounded-full bg-merah text-white hover:bg-red-800 transition-all duration-200'>Kirim</button>
                    </div>
                </div>
            </div>


            {/* FOOTER */}
            <Footer />
        </div>
    )
}

export default Contact
