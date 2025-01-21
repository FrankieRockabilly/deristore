import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import StarRating from './StarRating'; // Import komponen StarRating
import { IoIosCheckmarkCircle } from "react-icons/io";

import gsap from 'gsap';
const DetailProduct = () => {
    const location = useLocation();
    const { gambar, nama, deskripsi, merk, rating } = location.state || {};
    const navigate = useNavigate();


    // efel gsap
    useEffect(() => {
        gsap.fromTo('.first', {
            x: -10,
            opacity: 0
        }, {
            x: 1,
            opacity: 1,
            duration: 1,
            ease: 'power2.out'
        })
        gsap.fromTo('.second', {
            x: 10,
            opacity: 0
        }, {
            x: 1,
            opacity: 1,
            duration: 1,
            ease: 'power2.out'
        })
    }, [])


    const onclose = () => {
        navigate('/katalog');
    };

    return (
        <div className='h-full bg-zinc-500 bg-opacity-85 flex justify-center items-center fixed top-0 left-0 right-0 text-black px-5'>
            <div className='px-10 py-24 md:px-32 bg-white shadow-2xl rounded-xl opacity-100 relative flex flex-col md:flex-row justify-center items-center gap-20 borde overflow-hidden'>
                <button className='absolute top-5 right-5 bg-merah px-7 py-3 rounded-3xl text-white' onClick={() => onclose()}>close</button>
                <div className='md:w-[50rem] md:h-[38rem] bg-white rounded-2xl flex justify-center items-center border first'>
                    <img src={gambar} alt="" className='bg-cover h-full' />
                </div>
                <div className='flex flex-col justify-start items-start gap-3 md:gap-6 second'>
                    <h1 className="text-2xl md:text-4xl font-bold">{nama}</h1>
                    <StarRating rating={rating} /> {/* Menampilkan rating bintang */}
                    <p clasName="text-zinc-200">{merk}</p>
                    <p className="md:w-[20rem] text-wrap">{deskripsi}</p>
                    {/* <p className="text-lg md:text-2xl font-bold ">{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(harga)}</p> */}
                    <div className='font-semibold text-base md:text-lg font-sans flex justify-start items-center gap-3'>
                        {/* {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(value.harga)} */}
                        <p>Cash and Kredit</p>
                        <IoIosCheckmarkCircle color='#0bbf62' size={25} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailProduct;
