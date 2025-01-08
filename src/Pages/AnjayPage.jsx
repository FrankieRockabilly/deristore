import React from 'react'

const AnjayPage = () => {
    return (
        <div className='bg-white h-screen text-black px-10'>
            <ul className='flex flex-col gap-8'>
                <li>Home</li>
                <li>Katalog</li>
                <li>Tentang</li>
                <li>Kontak</li>
            </ul>

            <div>
                <p className='text-5xl'>Modern</p>
                <p>Dengan</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti autem, aspernatur voluptas minima aliquam cupiditate quis mollitia repellendus. Necessitatibus, cumque? Debitis, aperiam eveniet sit necessitatibus consequatur maiores quo molestias reiciendis soluta inventore dicta sequi tempora, quos nulla ad distinctio, consectetur odit illum facilis saepe ipsum! Dignissimos quisquam aperiam doloremque asperiores, tempora ratione pariatur! Aperiam ad pariatur modi at iusto ullam?</p>
            </div>
            <div className='h-72 w-72 bg-cover'>
                <img src="https://demo.phlox.pro/shop-digital/wp-content/uploads/sites/127/2019/10/Group_1271-1.png" alt="" />
            </div>

            <footer>
                <div className='w-screen bg-black text-white h-full py-20 flex justify-center items-center gap-8'>
                    <p>Home</p>
                    <p>Ktalog</p>
                    <p>Tentang</p>
                    <p>Kontak</p>
                </div>
            </footer>
        </div>
    )
}

export default AnjayPage