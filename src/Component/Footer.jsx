import React from 'react'
import { Link } from 'react-router-dom'
import tiwi from '../Assets/Image/tiwifooter.png'
import { FaFacebook, FaWhatsapp, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='flex flex-col md:flex-row justify-center gap-5 md:gap-20 px-6 py-6 md:py-32 lg:py-44 bg-dark text-white'>

            {/*  */}
            <div className='flex flex-col items-start gap-3 md:w-72'>
                <div className='flex justify-center items-end gap-2'>
                    <img src={tiwi} alt="tiwiponsel" className='w-14' />
                    <p className='uppercase font-semibold md:text-2xl'>tiwi Ponsel</p>
                </div>
                <p className='font-light'>Tiwi Ponsel memberikan pelayanan terbaik untuk Anda</p>
                <span className='flex justify-start items-center gap-5'>
                    <FaFacebook size={30} />
                    <div className='target:blank'>
                        <a href="https://wa.me/+6282258662305" target='blank' ><FaWhatsapp size={30} /></a>
                    </div>
                    <FaInstagram size={30} />
                </span>
            </div>

            {/* 2 */}
            <div className='flex flex-col justify-start items-start gap-5  lg:w-52'>
                <h2 className=' pb-5 border-b-2 border-white w-1/2 md:w-full'>Usefull Links</h2>
                <Link to={'/'} onClick={() => window.scrollTo(0, 0)} ><p className='hover:text-merah'>Home</p></Link>
                <Link to={'/katalog'} onClick={() => window.scrollTo(0, 0)}><p className='hover:text-merah'>Katalog</p></Link>
                <Link to={'/about'} onClick={() => window.scrollTo(0, 0)}><p className='hover:text-merah'>Tentang Kami</p></Link>
                <Link to={'/contact'} onClick={() => window.scrollTo(0, 0)}><p className='hover:text-merah'>Kontak</p></Link>
            </div>

            {/* 3 */}
            <div className='flex flex-col justify-start items-start gap-5  lg:w-52'>
                <h2 className=' pb-5 border-b-2 border-white w-1/2 md:w-full'>Kontak</h2>
                <p>(+62) 822 5866 2305 </p>
                <p>Kota Tengah Gelugur, Jalaln Lintas Duri, RT.2/RW.6, Kepenuhan Tengah, Kepenuhan <span>Kabupaten Rokan Hulu</span> </p>
            </div>

            {/* 4 subs */}
            <div className='flex flex-col justify-start items-start gap-5 '>
                <div>
                    <h2 className=' pb-5 border-b-2 border-white w-1/2 md:w-full  lg:w-52 '>Saran Dan Masukan</h2>
                </div>
                <p className='text-xl md:font-bold md:text-3xl'>Untuk Update Terbaru Kami</p>
                <div className='relative'>
                    <input type="text" name="" id="" className='py-5 px-5 text-black outline-none bg-gradient-to-r from-gray-100 to-gray-300 rounded-full w-full md:w-[10rem] lg:w-[30rem]' placeholder='Masukkan Pesan Anda' />
                    <button className='bg-merah px-6 py-3 rounded-full text-white absolute right-3 top-1/2 transform -translate-y-1/2 hover:bg-black transition-all duration-200 ease-in-out'>Kirim</button>
                </div>
            </div>

        </div>
    )
}

export default Footer