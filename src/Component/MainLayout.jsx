import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import wa from '../Assets/Image/wa.png'
import WhatsappModal from '../Modal/WhatsappModal';
const MainLayout = () => {
    const [isWhatsappActive, setIsWhatsappActive] = useState(false)

    const handleClickWhatsapp = () => {
        setIsWhatsappActive(prevState => !prevState)
    }
    const handleModalClick = (e) => {
        e.stopPropagation(); // Mencegah event propagate ke parent (ikon WhatsApp)
    };


    return (
        <div>
            {/* Tempat untuk halaman yang dirender */}
            <Outlet />

            {/* Ikon WhatsApp */}
            <div className='relative bg-fuchsia-600'>
                <div className="fixed bottom-4 right-4 w-16 cursor-pointer transition-all duration-300" onClick={handleClickWhatsapp}>
                    <img src={wa} alt="WhatsApp" className="w-full h-full" />

                    {isWhatsappActive && (
                        <div className='absolute -top-[40rem] right-2 z-50 box' onClick={handleModalClick}>
                            <WhatsappModal setIsWhatsappActive={setIsWhatsappActive} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MainLayout;
