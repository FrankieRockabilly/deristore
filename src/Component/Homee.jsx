import React, { useEffect, useState } from 'react'
import Header from './Header'
import productList from '../Assets/Json/products.json'
import { LiaShippingFastSolid } from "react-icons/lia";
import { GiReceiveMoney } from "react-icons/gi";
import { FaHeadphonesSimple } from "react-icons/fa6";
import { IoWallet } from "react-icons/io5";
import chair from '../Assets/Image/chair.png'
import airpods from '../Assets/Image/airpods.png'
import kursiMerah from '../Assets/Image/kursiMerah.png'
import kursiKuning from '../Assets/Image/kuning.png'
import laptop from '../Assets/Image/laptop.png'

// gsap effect
import gsap from 'gsap'
import ScrollTrigger from 'gsap/src/ScrollTrigger'
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Homee = () => {
    const [size, setSize] = useState(30);
    const [bestSeller, setBestSeller] = useState([])
    const [hoveredProductId, setHoveredProductId] = useState(false)

    const handleClickDetail = () => {
        alert('maaf menu belum tersedia')
    }

    useEffect(() => {
        const best = productList.filter((product) => product.rating >= 4.5)
        setBestSeller(best)
    }, [])


    useEffect(() => {
        const handleResize = () => {
            // Deteksi apakah layar lebih besar dari breakpoint md (768px)
            if (window.innerWidth >= 768) {
                setSize(60);
            } else {
                setSize(40);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // GSAP HEADING
    useEffect(() => {
        gsap.fromTo(
            ".heading", // Menargetkan elemen dengan kelas .heading (h2)
            { y: 0, opacity: 0 }, // Posisi awal di kiri dan opacity 0
            { y: -20, opacity: 1, duration: 1, delay: 2, ease: "power2.out" } // Posisi akhir di tengah dan opacity 1
        )

        gsap.fromTo(
            ".paragraph", // Menargetkan elemen dengan kelas .paragraph (p)
            { y: 10, opacity: 0 }, // Posisi awal di kiri dan opacity 0
            { y: 0, opacity: 1, duration: 1, delay: 3, ease: "power2.out" } // Posisi akhir di tengah dan opacity 1 dengan delay
        )
        gsap.fromTo(
            ".social",
            { x: -500, opacity: 0 },
            { x: 0, opacity: 1, duration: 1, delay: 1, ease: "power2.out" }
        )
        gsap.fromTo(
            ".chair",
            { x: -100, opacity: 0 },
            { x: 0, opacity: 1, duration: 1, delay: 1, ease: "power2.out" }
        )
        gsap.fromTo(
            ".phone",
            { x: 100, opacity: 0 },
            { x: 0, opacity: 1, duration: 1, delay: 1, ease: "power2.out" }
        )
    }, [])

    // GSAP SCROLL
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo('.topPage', {
            scale: 1.1,
            opacity: 0,
            duration: 1,
        }, {
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: "power2.inOut"
        })

        gsap.fromTo('.box', {
            x: 30,
            duration: 1,
            opacity: 0,
        }, {
            x: 1,
            scrollTrigger: { trigger: '.box', start: 'top 80%', once: true, marker: true },
            duration: 1,
            opacity: 1,
            ease: "power2.inOut"
        })
    }, []);

    // GSAP PRODUK UNGGULAN

    return (
        <div>
            <Header />
            <div className='px-5 md:px-24 text-black flex flex-col gap-10'>

                {/* kotak pertama headphone*/}
                <div className='bg-[#8bc1c3] rounded-3xl px-3 py-20  md:py-64 flex justify-center items-center scale-110 mt-7 relative topPage border '>
                    <div className='absolute transform md:left-0 w-[18rem] md:w-[50rem] justify-between items-center hidden  lg:block chair'>
                        <img src={chair} alt="" className='object-cover ' />
                    </div>
                    <div className='absolute transform -right-12 md:-right-32 md:top-16 w-[18rem] md:w-[50rem] justify-between items-center  phone'>
                        <img src={airpods} alt="" className="object-cover lg:scale-150" />
                    </div>

                    <div className='flex flex-col items-start gap-3 z-20 heading '>
                        {/* <h2 className='text-lg md:text-2xl tracking-tight'>Modern</h2> */}
                        <h2 className='text-2xl md:text-5xl font-bold '>Tiwi Ponsel</h2>
                        <h1 className='font-black font-poppins uppercase md:tracking-widest text-5xl md:text-[9rem] text-slate-100 '>Collection</h1>
                        <Link to={'/katalog'}><button className='bg-red-500 rounded-full py-2 px-12 text-white paragraph'>Belanja</button></Link>
                    </div>
                </div>


                {/* kedua kategory */}
                <div className='flex justify-center items-center gap-5 md:gap-16 flex-wrap text-white '>
                    {/* 1 */}
                    <div className={`bg-merah rounded-3xl w-40 h-52 px-3 py-3 md:w-72 md:h-80 flex justify-st items-end relative overflow-hidden`} >
                        <img src={kursiMerah} alt="" className='absolute' />
                        <div className='mb-11'>
                            <h1 className='text-2xl font-bold opacity-70 md:tracking-[0.8rem]'>Elegan Model</h1>
                        </div>
                    </div>
                    {/* 2 */}
                    <div className={`bg-yellow-400 rounded-3xl w-40 h-52 px-3 py-3 md:w-72 md:h-80 flex justify-st items-end relative overflow-hidden`} >
                        <img src={kursiKuning} alt="" className='absolute' />
                        <div className='mb-11'>
                            <h1 className='text-2xl font-bold opacity-70 md:tracking-[0.8rem]'>Modern Furniture</h1>
                        </div>
                    </div>
                    {/* 3 */}
                    <div className={`bg-dark rounded-3xl w-40 h-52 px-3 py-3 md:w-72 md:h-80 flex justify-st items-end relative overflow-hidden`} >
                        <img src={laptop} alt="" className='absolute' />
                        <div className='mb-11'>
                            <h1 className='text-2xl font-bold opacity-70 md:tracking-[0.8rem]'>Laptop</h1>
                        </div>
                    </div>
                    {/* 4 */}
                    <div className={`bg-green-600 rounded-3xl w-40 h-52 px-3 py-3 md:w-72 md:h-80 flex justify-st items-end relative overflow-hidden`} >
                        <img src="https://demo.phlox.pro/shop-digital/wp-content/uploads/sites/127/2019/09/O6CCQV1.png" alt="" className='absolute' />
                        <div className='mb-11'>
                            <h1 className='text-2xl font-bold opacity-70 md:tracking-[0.8rem]'>Smartwatch</h1>
                        </div>
                    </div>

                </div>

                {/* layanan unggul */}
                <div className='flex justify-around items-start md:items-center flex-wrap gap-5'>
                    <div className='py-3 flex flex-col md:flex-row justify-center items-center gap-3  '>
                        <LiaShippingFastSolid size={size} color="#eb3434" />
                        <div className='w-40 '>
                            <p className='font-semibold tracking-tight '>Gratis Ongkir</p>
                            <span className='text-gray-400 text-xs md:text-base '>Gratis Ongkir untuk Semua Pembelian</span>
                        </div>
                    </div>
                    <div className='py-3 flex flex-col md:flex-row justify-center items-center gap-3  '>
                        <GiReceiveMoney size={size} color="#eb3434" />
                        <div className='w-40'>
                            <p className='font-semibold tracking-tight'>Free Shipping</p>
                            <span className='text-gray-400 text-xs md:text-base'>Free Shipping on all orders</span>
                        </div>
                    </div>
                    <div className='py-3 flex flex-col md:flex-row justify-center items-center gap-3  '>
                        <FaHeadphonesSimple size={size} color="#eb3434" />
                        <div className='w-40'>
                            <p className='font-semibold tracking-tight'>Support Online 24/7</p>
                            <span className='text-gray-400 text-xs md:text-base'>Melayani Anda 24 Jam</span>
                        </div>
                    </div>
                    <div className='py-3 flex flex-col md:flex-row justify-center items-center gap-3  '>
                        <IoWallet size={size} color="#eb3434" />
                        <div className='w-40'>
                            <p className='font-semibold tracking-tight'>Secure Payment</p>
                            <span className='text-gray-400 text-xs md:text-base'>Pembayaran Aman dan Terpercaya</span>
                        </div>
                    </div>

                </div>

                {/* FINE SMILE */}
                <div className=' box bg-merah flex flex-col md:flex-row  items-center md:h-[30rem]  gap-5 md:items-center md:gap-72 text-white px-5 md:px-64 pt-16 pb-14  my-20 rounded-3xl relative'>
                    <img src="https://demo.phlox.pro/shop-digital/wp-content/uploads/sites/127/2019/09/2.png" alt="" className='absolute right-1/2 transform translate-x-1/2 -top-36 md:-top-72' />
                    <div className='text-center md:text-start '>
                        <h1 className='heading text-5xl md:text-9xl font-anton font-bold'>PROMO PUNCAK</h1>
                        <p>1 Januari to 3 Maret 2025</p>
                    </div>
                    <div className='flex flex-col items-center gap-3'>
                        <p>Beats Solo Air</p>
                        <h2 className='text-3xl md:text-6xl font-anton'>Summer Sale</h2>
                        <p className='text-sm'>Segera ambil promo dalam waktu terdekat</p>
                        <button className='bg-white text-merah px-7 py-2 rounded-full'>Belanja</button>
                    </div>
                </div>

                {/* paling banyak diminati */}
                <h1 className='text-3xl font-bold text-center'>Best Seller Produk</h1>
                <div className='product flex flex-wrap justify-center items-center gap-12'>
                    {bestSeller.map((value) => (
                        <div
                            key={value.id} // Pastikan ID unik untuk setiap produk
                            className="cursor-pointer "
                            onMouseEnter={() => setHoveredProductId(value.id)}
                            onMouseLeave={() => setHoveredProductId(null)}
                        >
                            <div className='w-72 h-72 bg-gray-200 px-2 py-2 text-merah rounded-xl overflow-hidden'>
                                <img src={value.gambar} alt={value.name} className='bg-cover' />
                            </div>
                            <h1>{value.name}</h1>
                            <div className="flex justify-between py-2 relative">
                                <p className='font-bold'>{value.category}</p>
                                {hoveredProductId === value.id && <p className="text-white px-5 py-2 bg-merah rounded-full absolute right-1 bottom-1 " onClick={() => handleClickDetail()}>Detail</p>}
                            </div>
                        </div>
                    ))}
                </div>




            </div>
            {/* footer */}
            <div className='mt-10'>
                <Footer />
            </div>
        </div>
    )
}

export default Homee
