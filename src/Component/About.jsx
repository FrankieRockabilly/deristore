import React, { useState, useEffect } from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";
import { LuDatabaseBackup } from "react-icons/lu";
import { GiMoneyStack, GiSpeedometer } from "react-icons/gi";
import { IoDiamond } from "react-icons/io5";
import Footer from './Footer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const About = () => {
    const [truncateDescription, setTruncateDescription] = useState(true)

    const handleClickSelengkapnya = (e) => {
        e.preventDefault()
        setTruncateDescription(prevState => !prevState)
    }

    // gsap tulisan paragraf kiri 
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        // efek paragraf
        gsap.fromTo('.paragraph', {
            y: 30,
            duration: 1,
            opacity: 0,
        }, {
            y: 1,
            duration: 1,
            opacity: 1,
            ease: "power2.inOut"
        })

        // efek di gambar
        gsap.fromTo('.image', {
            y: -30,
            duration: 1,
            opacity: 0,
        }, {
            y: 1,
            duration: 1,
            opacity: 1,
            ease: "power2.inOut"
        })


        // efek kotak dua hitam merah
        gsap.fromTo('.boxSatu', {
            x: -30,
            duration: 1,
            opacity: 0,
        }, {
            x: 1,
            scrollTrigger: { trigger: '.boxSatu', start: 'top 80%', once: true, marker: true },
            duration: 1,
            opacity: 1,
            ease: "power2.inOut"
        })

        gsap.fromTo('.boxDua', {
            x: 30,
            duration: 1,
            opacity: 0,
        }, {
            x: 1,
            scrollTrigger: { trigger: '.boxDua', start: 'top 80%', once: true, marker: true },
            duration: 1,
            opacity: 1,
            ease: "power2.inOut"
        })

        // efek kotak merah 
        gsap.fromTo('.virtual', {
            x: 30,
            duration: 1,
            opacity: 0,
        }, {
            x: 1,
            duration: 1,
            scrollTrigger: { trigger: '.virtual', start: 'top 80%', once: true, marker: true },
            opacity: 1,
            ease: "power2.inOut"
        })
        gsap.fromTo('.flexibel', {
            x: 30,
            duration: 1,
            opacity: 0,
        }, {
            x: 1,
            duration: 1.5,
            scrollTrigger: { trigger: '.virtual', start: 'top 80%', once: true, marker: true },
            opacity: 1,
            ease: "power2.inOut"
        })
        gsap.fromTo('.cepat', {
            x: 30,
            duration: 1,
            opacity: 0,
        }, {
            x: 1,
            duration: 2,
            scrollTrigger: { trigger: '.virtual', start: 'top 80%', once: true, marker: true },
            opacity: 1,
            ease: "power2.inOut"
        })
        gsap.fromTo('.last', {
            x: 30,
            duration: 1,
            opacity: 0,
        }, {
            x: 1,
            duration: 2.5,
            scrollTrigger: { trigger: '.virtual', start: 'top 80%', once: true, marker: true },
            opacity: 1,
            ease: "power2.inOut"
        })

    }, [])



    return (
        <div>
            <Header />
            <div className='bg-gray-300 py-8 md:py-10'>
                <div className='text-center flex justify-center items-center gap-2 text-black'>
                    <Link to={'/'}><h1 className='border-b border-gray-300 hover:border-b hover:border-merah hover:text-merah'>Home</h1></Link>
                    <IoIosArrowForward />
                    <p>Tentang</p>
                </div>
                <h1 className='text-center text-3xl text-black font-bold pt-2'>Tentang Tiwi Ponsel</h1>
            </div>

            {/* isi Konten */}

            {/* motto */}
            <div className='py-24 flex flex-col md:flex-row-reverse items-center gap-20 px-10 text-black'>
                <div className='image w-80 h-80 md:w-[100rem] md:h-[30rem] rounded-3xl bg-red-200'>
                    <img src="https://demo.phlox.pro/shop-decoration/wp-content/uploads/sites/136/2019/12/colorful-modern-living-room-P3EZBUN@2x.jpg" alt="" className='bg-cover bg-center w-full h-full object-cover rounded-3xl' />
                </div>

                <div className='paragraph'>
                    {/* paragraf kiri */}
                    <div className='flex flex-col items-center md:items-start gap-10 md:w-[50rem]'>
                        <h1 className='text-center md:text-start font-semibold text-2xl md:text-4xl border-b-4 pb-4 border-merah'>
                            Memberikan layanan pelanggan terbaik dengan cepat dan <span>Responsif</span>
                        </h1>

                        {/* Bagian dengan Transisi Halus */}
                        <div className={` text-wrap transition-all duration-500 ease-in-out ${truncateDescription ? 'max-h-[7rem] overflow-hidden' : 'max-h-[1000rem] h-auto'} transition-max-height`}>
                            <p className='text-center md:text-start text-gray-600'>
                                Selamat datang di Tiwi Ponsel! Kami adalah penyedia layanan ponsel dan aksesori terpercaya yang selalu berkomitmen untuk memberikan pengalaman terbaik kepada pelanggan kami. Dengan berbagai produk berkualitas tinggi dan pelayanan yang ramah, kami berusaha untuk memastikan setiap pelanggan puas dan mendapatkan solusi terbaik untuk kebutuhan teknologi mereka.

                                Di Tiwi Ponsel, kami percaya bahwa ponsel adalah bagian penting dari kehidupan sehari-hari. Oleh karena itu, kami menawarkan berbagai pilihan ponsel, mulai dari model terbaru hingga pilihan yang lebih terjangkau, lengkap dengan layanan purna jual yang menyeluruh.
                            </p>
                        </div>

                        <button className='bg-merah px-6 py-3 rounded-full text-white' onClick={handleClickSelengkapnya}>
                            {truncateDescription ? "Selengkapnya" : "Sempitkan"}
                        </button>
                    </div>
                </div>
            </div>

            {/* kedua */}
            <div className='py-20 bg-merah text-white px-10'>
                <div className='flex flex-col md:flex-row justify-center items-center gap-5 '>
                    <div className='flex flex-col justify-center items-center gap-3 text-center virtual'>
                        <div className='w-20 h-20 border-2 border-gray-50 rounded-full flex justify-center items-center'>
                            <LuDatabaseBackup size={30} />
                        </div>
                        <h1>Virtual Document</h1>
                        <p className='text-gray-300 w-[70%]'>Dokumen digital, Bukti Pembayaran. Semua jadi lebih mudah</p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-3 text-center flexibel'>
                        <div className='w-20 h-20 border-2 border-gray-50 rounded-full flex justify-center items-center'>
                            <GiMoneyStack size={30} />
                        </div>
                        <h1>Pembayaran Fleksibel</h1>
                        <p className='text-gray-300 w-[70%]'>Pembayaran Mudah, Aman, dan Terpercaya</p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-3 text-center cepat'>
                        <div className='w-20 h-20 border-2 border-gray-50 rounded-full flex justify-center items-center'>
                            <GiSpeedometer size={30} />
                        </div>
                        <h1>Pengantaran Cepat</h1>
                        <p className='text-gray-300 w-[70%]'>Pengantaran cepat, proses yang mudah dan aman</p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-3 text-center last'>
                        <div className='w-20 h-20 border-2 border-gray-50 rounded-full flex justify-center items-center'>
                            <IoDiamond size={30} />
                        </div>
                        <h1>Virtual Document</h1>
                        <p className='text-gray-300 w-[70%]'>Kualitas premium, Garansi Resmi, dan Pelayanan Terbaik</p>
                    </div>
                </div>
            </div>


            {/* ketiga */}
            <div className='py-10 px-10 flex flex-col md:flex-row gap-5 justify-center items-center text-white'>
                <div className='bg-dark px-2 py-10 md:w-[35rem] rounded-3xl flex flex-col justify-center items-center gap-10 boxSatu'>
                    <div className='text-center py-5'>
                        <h2 className='md:text-xl mb-3 '>Kirim Pesan Kepada Kami</h2>
                        <h2 className='text-2xl md:text-4xl font-semibold'>Kirim Pesan Kepada Kami</h2>
                    </div>
                    <input type="text" placeholder='Beri Masukan Pada Kami' className='px-5 py-4 bg-gradient-to-r from-zinc-600 to-zinc-700 rounded-full w-[60%] outline-none' />
                </div>
                <div className='bg-merah px-2 py-10 md:w-[35rem] rounded-3xl flex flex-col justify-center items-center gap-10 boxDua'>
                    <div className='text-center py-5'>
                        <h2 className='md:text-xl mb-3 '>Ceritakan Pengalaman Anda</h2>
                        <h2 className='text-2xl md:text-4xl font-semibold '>Berikan Masukan</h2> 
                    </div>
                    <input type="text" placeholder='Beri Masukan Pada Kami' className='px-5 py-4 bg-white rounded-full w-[60%] outline-none text-black' />
                </div>

            </div>


            {/* footer */}
            <Footer />
        </div>
    )
}

export default About