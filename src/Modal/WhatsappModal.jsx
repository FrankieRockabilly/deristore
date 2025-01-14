import React, { useEffect, useState } from 'react'
import gsap from 'gsap'

const WhatsappModal = ({ setIsWhatsappActive }) => {
    const [isiPesan, setIsiPesan] = useState('')

    const handleSubmitPesan = (e) => {
        e.preventDefault()
        if (isiPesan) {
            alert(isiPesan, "telah berhasil dikirim")
            setIsWhatsappActive(false)
        } else {
            alert("Silahkan Masukkan Pesan")
        }
    }


    useEffect(() => {
        gsap.fromTo('.box', {
            y: 20,
            opacity: 0,
        }, {
            y: 1,
            opacity: 1,
            duration: 0.3,
            ease: "power2.inOut"
        })
        gsap.fromTo('.text', {
            x: -100,
            opacity: 0
        }, {
            x: 0,
            opacity: 1,
            duration: 0.5,
            ease: 'power2.inOut'
        })
    }, []);
    return (
        <div>
            <div className='w-[21rem] h-[35rem] md:h-[40rem] md:w-[25rem] bg-white shadow-2xl rounded-3xl border flex flex-col overflow-hidden text-sm md:text-base'>
                <div className='py-4 bg-blue-600 flex flex-col justify-center items-center text-white rounded-t-3xl flex-grow-0'>
                    <p>Chat Me</p>
                    <p>Person</p>
                    <p>We-re Online Right Now</p>
                </div>

                {/* agent cs */}
                <div className='flex flex-col justify-between items-center flex-grow '>
                    <div className='flex flex-col justify-start items-start px-7 my-10 text'>
                        <p>Tiwi Ponsel Cs</p>
                        <div className='bg-zinc-100 rounded-2xl px-5 py-5 text-zinc-800 '>
                            <p>Hai 😍, ada yang bisa kami bantu ?</p>
                        </div>
                    </div>

                    <form action="" onSubmit={handleSubmitPesan}>
                        <div className='py-5 px-5 border-t-2 border-blue-600 w-full flex justify-between items-center'>
                            <input type="text" className='w-full px-5 py-3 bg-white outline-none text-zinc-800 ' placeholder='Masukkan pesan'
                                value={isiPesan}
                                onChange={(e) => setIsiPesan(e.target.value)} />
                            <button className='bg-blue-600 px-10 py-3 rounded-full text-white hover:bg-blue-700 transition-all duration-200 ease-in-out' type='submit'>Kirim</button>
                        </div>
                    </form>
                </div>



            </div>
        </div>
    )
}

export default WhatsappModal

