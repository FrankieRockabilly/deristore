import React, { useEffect, useState } from 'react';
import Header from './Header';
import { IoIosArrowForward, IoIosRefresh } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import { Disclosure } from '@headlessui/react';
import { MdKeyboardArrowRight } from "react-icons/md";
import listProduct from '../Assets/Json/output.json';
import Footer from './Footer';
import gsap from 'gsap';

const Katalog = () => {
    const navigate = useNavigate()
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedPrice, setSelectedPrice] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [visibleProducts, setVisibleProducts] = useState([]); // Produk yang tampil saat ini
    const [totalProducts, setTotalProducts] = useState(0); // Jumlah total produk
    const [showAll, setShowAll] = useState(false); // Apakah tombol "Lihat lainnya" sudah diklik

    const refresh = () => {
        window.location.reload();
    }

    const handleCLickProduct = (id, gambar, nama, deskripsi, harga, merk, rating) => {
        navigate(`detail/${id}`, {
            state: { gambar, nama, deskripsi, harga, merk, rating }
        })
    }

    // GSAP animation
    useEffect(() => {
        gsap.fromTo(
            ".box",
            { y: 0, opacity: 0 },
            { y: -20, opacity: 1, duration: 2, ease: "power2.out" }
        );
    }, [selectedCategory, selectedPrice]);

    // Update filtered products ketika search, kategori, atau harga berubah
    useEffect(() => {
        const filterProducts = listProduct.filter((product) => {
            const matchesSearch = product.nama.toLowerCase().includes(searchQuery.toLowerCase()) || product.kategori.toLowerCase().includes(searchQuery.toLowerCase()) || product.harga.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCategory = !selectedCategory || product.tipe === selectedCategory;
            const matchesPrice = !selectedPrice || (
                (selectedPrice === '3000000-' && product.harga >= 3000000) ||
                (selectedPrice === '2000000-3000000' && product.harga >= 2000000 && product.harga <= 3000000) ||
                (selectedPrice === '1000000-2000000' && product.harga >= 1000000 && product.harga <= 2000000)
            );
            return matchesSearch && matchesCategory && matchesPrice;
        });

        setFilteredProducts(filterProducts);

        // Set total products setelah filteredProducts terupdate
        setTotalProducts(filterProducts.length);

        // Limit 20 produk pertama
        setVisibleProducts(filterProducts.slice(0, 20));
    }, [searchQuery, selectedCategory, selectedPrice]);

    // Menampilkan produk lebih banyak
    const handleShowMore = () => {
        setVisibleProducts(filteredProducts); // Menampilkan semua produk
        setShowAll(true); // Menyembunyikan tombol "Lihat lainnya"
    };

    return (
        <div className='text-black'>
            <Header />
            <div className='bg-gray-300 py-8 md:py-10'>
                <div className='text-center flex justify-center items-center gap-2'>
                    <Link to={'/'}><h1 className='border-b border-gray-300 hover:border-b hover:border-merah hover:text-merah'>Home</h1></Link>
                    <IoIosArrowForward />
                    <p>Katalog</p>
                </div>
                <h1 className='text-center text-3xl text-black font-bold pt-2'>Produk</h1>
            </div>

            <div className='flex flex-col md:flex-row justify-start items-start mt-10'>
                <div className='w-full md:w-1/4 px-5'>
                    <div className="flex items-center gap-2">
                        <input
                            type="text"
                            className='bg-gradient-to-r from-gray-100 to-gray-300 py-2 px-5 rounded-full outline-none'
                            placeholder='Cari Produk'
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <div onClick={refresh} className='hidden md:block cursor-pointer'>
                            <IoIosRefresh size={20} />
                        </div>
                    </div>

                    {/* Accordion for category and price */}
                    <div className="w-full mt-5 md:h-screen">
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="w-full text-left px-4 py-2 font-medium text-black flex justify-between">
                                        <p>Kategori</p>
                                        <MdKeyboardArrowRight />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="px-16 pt-2 pb-4 space-y-4 rounded-lg">
                                        {['elektronik', 'furniture', 'smartphone', 'smartwatch', 'tablet'].map(category => (
                                            <p
                                                key={category}
                                                className={`cursor-pointer hover:text-merah ${selectedCategory === category ? 'text-merah' : ''}`}
                                                onClick={() => setSelectedCategory(category)}
                                            >
                                                {category.charAt(0).toUpperCase() + category.slice(1)}
                                            </p>
                                        ))}
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>

                        <Disclosure className="mt-5">
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="w-full text-left px-4 py-2 font-medium text-black rounded-lg">
                                        Harga
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="pt-2 pb-4 space-y-4 rounded-lg px-16">
                                        {[
                                            { label: 'Rp 1.000.000 - Rp 2.000.000', value: '1000000-2000000' },
                                            { label: 'Rp 2.000.000 - Rp 3.000.000', value: '2000000-3000000' },
                                            { label: 'Rp 3.000.000 Ke atas', value: '3000000-' },
                                        ].map(price => (
                                            <p
                                                key={price.value}
                                                className={`cursor-pointer hover:text-merah ${selectedPrice === price.value ? 'text-merah' : ''}`}
                                                onClick={() => setSelectedPrice(price.value)}
                                            >
                                                {price.label}
                                            </p>
                                        ))}
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                    </div>
                </div>

                <div className='px-5 w-full md:w-3/4'>
                    <h1 className='font-bold text-2xl md:text-4xl hidden md:block'>Shop</h1>
                    <p className='text-center text-gray-500 text-xs py-5 md:text-left md:text-base'>{`Menampilkan ${visibleProducts.length} dari ${totalProducts} produk`}</p>
                    <div className='flex justify-center md:justify-start items-center flex-wrap gap-5'>
                        {visibleProducts.map((value, index) => (
                            <div key={index} className='flex flex-col items-start gap-3 md:gap-5 '>
                                <div className='bg-gray-200 rounded-3xl w-40 h-40 lg:w-72 lg:h-72 px-1 py-1 md:px-3 md:py-3 flex justify-center items-center overflow-hidden shadow-xl'>
                                    <img src={value.gambar} alt={value.nama} className='object-cover w-full h-full hover:scale-110 transition-all duration-300 rounded-3xl' onClick={() => { handleCLickProduct(value.id, value.gambar, value.nama, value.deskripsi, value.harga, value.merk, value.rating) }} />
                                </div>
                                <div className='w-40 md:w-72 truncate flex flex-col gap-2'>
                                    <div className='flex justify-between items-start'>
                                        <h2 className=' w-[75%] text-wrap'>{value.nama}</h2>
                                        <p className='font-bold text-xs text-zinc-400'>{value.merk} </p>
                                    </div>
                                    <p className='text-gray-400'>{value.tipe}</p>
                                    <p className='font-bold text-base md:text-lg font-sans'>
                                        {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(value.harga)}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    {!showAll && filteredProducts.length > 20 && (
                        <div className="flex justify-start mt-10">
                            <button onClick={handleShowMore} className="bg-red-500 text-white px-6 py-2 hover:bg-red-800 rounded-full">Lihat Lainnya</button>
                        </div>
                    )}
                </div>
            </div>

            <div className='mt-20'>
                <Footer />
            </div>
        </div>
    );
};

export default Katalog;
